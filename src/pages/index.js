import {Box, Container, Heading} from '@chakra-ui/react'

const Page = () => {
    return (
        <Container>

            <Box borderRadius="lg" bg="red" p={3} mb={6} align="center">
                Hi, I&apos;m a full-stack developer based in Romania!
            </Box>

            <Box display={{md: 'flex'}}>
                <Box flexGrow={1}>
                    <Heading as="h2" variant="page-title">
                        Adelin
                    </Heading>
                    <p> The BlackSheep of the family, learning by day, chess enthusiast (but still blundering), and always geeking out over too many hobbies.</p>
                </Box>
            </Box>
        </Container>
    )
}

export default Page