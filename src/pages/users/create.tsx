import { Box, Flex, VStack, Heading, SimpleGrid, Divider, HStack, Button} from "@chakra-ui/react";
import { RiAddLine, RiPencilLine } from "react-icons/ri";
import { Input } from "../../components/Form/Input";
import { Header } from "../../components/Header";
import Pagination from "../../components/Pagination";
import { Siderbar } from "../../components/Siderbar";


export default function CreateUser() {
    return (
        <Box>
            <Header/>
            
            <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">

                <Siderbar/>

                <Box flex="1" borderRadius={8} bg="gray.800" p="8">

                <Heading size="lg" fontWeight="normal">Criar Usuário</Heading>

                <Divider my="6" borderColor="gray.700"/>


                <VStack spacing="8">
                    <SimpleGrid minChildWith="240px" spacing="8" width="100%">
                        <Input name="name" label="Nome completo"/>
                        <Input name="email" label="E-mail"/>
                    </SimpleGrid>

                    <SimpleGrid minChildWith="240px" spacing="8" width="100%">
                        <Input name="password" type="password" label="Senha"/>
                        <Input name="password_confirmation" type="password" label="Confirmação da senha"/>
                    </SimpleGrid>
                </VStack>

                <Flex mt="8" justify="flex-end">
                    <HStack spacing="4">
                        <Button colorScheme="whiteAlpha">Cancelar</Button>
                        <Button colorScheme="pink">Salvar</Button>
                    </HStack>
                </Flex>
                </Box>
            </Flex>
        </Box>
    )
}