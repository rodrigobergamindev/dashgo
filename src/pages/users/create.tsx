import { Box, Flex, VStack, Heading, SimpleGrid, Divider, HStack, Button} from "@chakra-ui/react";
import { RiAddLine, RiPencilLine } from "react-icons/ri";

import { Input } from "../../components/Form/Input";
import  Header  from "../../components/Header";
import  Siderbar  from "../../components/Sidebar/index"
import Link from 'next/link'

import {useForm, SubmitHandler} from 'react-hook-form'
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup'
import {useMutation} from 'react-query'
import {api} from '../../services/mirage/api'
import {queryClient} from '../../services/queryClient'
import {useRouter} from 'next/router'

type CreateUserFormData = {
    name: string;
    email: string;
    password: string;
    password_confirmation: string;
  }


  const createUserFormSchema = yup.object({
    name: yup.string().required('Nome obrigatório'),
    email: yup.string().required('E-mail obrigatório').email(),
    password: yup.string().required('Senha obrigatória').min(6, 'A senha precisa no mínimo de 6 caracteres'),
    password_confirmation: yup.string().oneOf([
        null, yup.ref('password')
    ], 'As senhas precisam ser iguais')
  })

export default function CreateUser() {

    const router = useRouter()

    const createUser = useMutation(async (user: CreateUserFormData) => {
        const response = await api.post('users', {
            user: {
                ...user,
                create_at: new Date(),
            }
        })
        return response.data.user
    },
    {
        onSuccess: () => {
            queryClient.invalidateQueries('users')
        }
    })

    const {register, handleSubmit, formState} = useForm({
        resolver: yupResolver(createUserFormSchema)
    })

    const {errors} = formState


    const handleCreateUser: SubmitHandler<CreateUserFormData> = async (values) => {
        await createUser.mutateAsync(values)
        router.push('/users')
    }


  

    return (
        <Box>
            <Header/>
            
            <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">

                <Siderbar/>

                <Box 
                as="form"
                flex="1" 
                borderRadius={8} 
                bg="gray.800" p={["6","8"]}
                onSubmit={handleSubmit(handleCreateUser)}
                >

                <Heading size="lg" fontWeight="normal">Criar Usuário</Heading>

                <Divider my="6" borderColor="gray.700"/>


                <VStack spacing="8">
                    <SimpleGrid minChildWith={240} spacing={["6","8"]} width="100%">
                        <Input name="name" label="Nome completo"  error={errors.name} {...register('name')}/>
                        <Input name="email" label="E-mail" error={errors.email} {...register('email')}/>
                    </SimpleGrid>

                    <SimpleGrid minChildWith={240} spacing={["6","8"]} width="100%">
                        <Input name="password" type="password" label="Senha" error={errors.password} {...register('password')}/>
                        <Input name="password_confirmation" type="password" label="Confirmação da senha" error={errors.password_confirmation} {...register('password_confirmation')}/>
                    </SimpleGrid>
                </VStack>

                <Flex mt="8" justify="flex-end">
                    <HStack spacing="4">
                    <Link href="/users" passHref><Button colorScheme="whiteAlpha">Cancelar</Button></Link>
                        <Button type="submit" colorScheme="pink" isLoading={formState.isSubmitting}>Salvar</Button>
                    </HStack>
                </Flex>
                </Box>
            </Flex>
        </Box>
    )
}