import { Box, Flex, Heading, Button, Icon, Table, Thead, Tr, Th, Td, Checkbox, Tbody, Text } from "@chakra-ui/react";
import { RiAddLine, RiPencilLine } from "react-icons/ri";
import  Header  from "../../components/Header/index"
import Pagination from '../../components/Pagination/index'
import  Siderbar  from "../../components/Sidebar/index";


export default function UserList() {
    return (
        <Box>
            <Header/>
            
            <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">

                <Siderbar/>

                <Box flex="1" borderRadius={8} bg="gray.800" p="8">

                    <Flex mb="8" justify="space-between" align="center">
                        
                        <Heading size="lg" fontWeight="normal">Usuários</Heading>

                        <Button as="a" size="sm" fontSize="sm" colorScheme="pink" leftIcon={<Icon as={RiAddLine} fontSize="20"></Icon>}>Criar novo</Button>
                    </Flex>
                
                <Table
                colorScheme="whiteAlpha"
                >
                    <Thead>
                        <Tr>
                            <Th px="6" color="gray.300" width="8">
                                <Checkbox colorScheme="pink"/>
                            </Th>

                            <Th>
                                Usuário
                            </Th>

                            <Th>
                                Data de Cadastro
                            </Th>

                            <Th width="8">
                                
                            </Th>
                        </Tr>
                    </Thead>

                <Tbody>
                    <Tr>
                        <Td px="6">
                            <Checkbox colorScheme="pink"/>
                        </Td>

                        <Td>
                            <Box>
                                <Text fontWeight="bold">Rodrigo Bergamin</Text>
                                <Text fontWeight="bold" fontSize="sm" color="gray.300">rb.bergamin@gmail.com</Text>
                            </Box>
                        </Td>

                        <Td>
                            12 de setembro de 2021
                        </Td>

                        <Td>
                        <Button as="a" size="sm" fontSize="sm" colorScheme="purple" leftIcon={<Icon as={RiPencilLine} fontSize="20"></Icon>}>Editar</Button>
                        </Td>
                    </Tr>
                </Tbody>
                </Table>

                <Pagination/>
                
                </Box>

            </Flex>
        </Box>
    )
}