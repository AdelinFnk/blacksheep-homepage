import Head from 'next/head'
import {Box, Container} from "@chakra-ui/react";
import Navbar from "../navbar.js";
import BlenderSheep from "../blender-sheep";
import NoSsr from "../no-ssr";
import Footer from "@/components/footer";

const Main = ({ children, router}) => {
    return (
        <Box as="main" pb={8}>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <title>BlackSheep-Cave</title>
            </Head>

            <Navbar path={router.asPath} />

            <Container maxWidth="2xl" pt={14}>
                <NoSsr>
                    <BlenderSheep />
                </NoSsr>
                {children}
                <Footer />
            </Container>
        </Box>
    )
}

export default Main