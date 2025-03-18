import NextLink from "next/link";
import { Flex, Heading, Container, Button, Text } from "@chakra-ui/react";


const NotFound = () => {
    return(
        <Container suppressHydrationWarning={true}>
            <Heading as="h1">Not Found</Heading>
            <Text>The page you&apos;re looking for was not found.</Text>
            <div style={{ borderBottom: '1px solid #ccc', margin: '24px 0' }} />

            <Flex align="center" justify="center" my={6}>
                <Button
                    as={NextLink}
                    href="/"
                    bg="bg.element"
                    color="fg.element"
                >
                    Go to the homepage
                </Button>
            </Flex>
        </Container>
    )
}

export default NotFound