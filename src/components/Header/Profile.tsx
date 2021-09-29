import {Flex, Text, Box, Avatar} from '@chakra-ui/react'

interface ProfileProps {
    showProfileData?: boolean;
}


export default function Profile ({showProfileData = true} : ProfileProps) {
    return (
        <Flex align="center">
               {showProfileData && (
                    <Box mr="4" textAlign="right">
                        <Text>Rodrigo Bergamin</Text>
                        <Text color="gray.300" fontSize="small">rb.bergamin@gmail.com</Text>
                    </Box>
               )}

            <Avatar
                size="md"
                name="Rodrigo Bergamin"
                src="https://github.com/rodrigobergamindev.png"
            >

            </Avatar>
            </Flex>
    )
}