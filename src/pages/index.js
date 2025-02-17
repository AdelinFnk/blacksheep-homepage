import {Box, Container, Heading, Flex, Image, Center, AbsoluteCenter, Text} from '@chakra-ui/react'


const Page = () => {
    return (
        <Container>
            <Center>
                <Box borderRadius="lg" bg="red" py={3} px={4} mb={6} >
                    Hi, I&apos;m a full-stack developer based in Romania!
                </Box>
            </Center>

            <Box display={{md: 'flex'}}>
                <Box flexGrow={1} >
                    <Heading as="h2" size="2xl" variant="page-title">
                        Adelin
                    </Heading>
                    <Text> Craftzman ( Developer / 3D Artist / Learner)</Text>
                </Box>
                <Flex  flexShrink={0} mt={{base: 6, md: 0}} ml={{md: 6}} justifyContent="center" align="center">
                    <Image borderColor="blackAlpha.800" borderWidth={3} borderStyle="ridge" maxWidth="100px" display="inline-block" borderRadius="full" src="../images/shadow.webp" alt="Profil Image"/>

                </Flex>
            </Box>
        </Container>
    )
}

export default Page