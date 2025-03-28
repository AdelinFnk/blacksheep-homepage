import NextLink from "next/link";
import {
    Box,
    Container,
    Heading,
    Flex,
    Link,
    Image,
    Center,
    Text } from '@chakra-ui/react'

import { TbChevronsRight } from "react-icons/tb";
import { IoLogoGithub } from "react-icons/io";
import {Button} from "@chakra-ui/react";
import { BioSection, BioYear } from "@/components/bio";
import Section from "../components/section";
import Layout from "../components/layout/article";

const Page = () => {
    return (
        <Layout>
        <Container>
            <Center>
                <Box
                    borderRadius="lg"
                    color="fg.element"
                    bg="bg.element"
                    p={3}
                    mb={6}
                    textAlign="center"
                    css={{ backdropFilter: 'blur(10px)'}}
                >
                    Hi, I&apos;m a full-stack developer based in Romania!
                </Box>
            </Center>

            <Box display={{md: 'flex'}}>
                <Box flexGrow={1} >
                    <Heading as="h2">
                        Adelin
                    </Heading>
                    <Text> Craftzman ( Developer / 3D Creator / Learner)</Text>
                </Box>
                <Flex  flexShrink={0} mt={{base: 6, md: 0}} ml={{md: 6}} justifyContent="center" align="center">
                    <Image borderColor="blackAlpha.800" borderWidth={3} borderStyle="ridge" maxWidth="100px" display="inline-block" borderRadius="full" src="../images/shadow.webp" alt="Profil Image"/>

                </Flex>
            </Box>

            <Section delay={0.1}>
                <Heading as="h3" textStyle="body">
                    About
                </Heading>

                <Text>
                    Warning: creative chaos ahead! I&apos;m a 3D enthusiast and full-stack dev, and I&apos;m brewing up a new project called BlackSheep&apos;s Cave. Here, I&apos;ll be experimenting, learning, and sharing all the things that make me go. I can let my geek flag fly and create whatever the heck I want. No perfectionism allowed, no impostor syndrome tolerated. Just pure, unadulterated creativity and fun. It&apos;s time to get weird and wonderful!

                </Text>

                <Flex align="center" justify="center" my={8} >
                    <Button
                        as={NextLink}
                        href="/projects"
                        scroll={false}
                        bg="bg.element"
                        color="fg.element"
                        _hover={{ bg: "#a98467" }}
                    >
                        My Portfolio<TbChevronsRight />
                    </Button>
                </Flex>
            </Section>

            <Section delay={0.2}>
                <Heading as="h3" textStyle="body">
                    Bio
                </Heading>
                <BioSection>
                    <BioYear>1999</BioYear>
                    Born in Romania
                </BioSection>


                <BioSection>
                    <BioYear>2025</BioYear>
                    I am working on personal projects and developing my skills in various areas of software engineering and 3D modeling.                </BioSection>

            </Section>

            <Section delay={0.3}>
                <Heading as="h3" textStyle="body">
                    I🖤
                </Heading>
                <Text>Handstands, Running, Training, Solving problems, Slow living, Learning. </Text>

            </Section>
            <Section delay={0.3}>
                <Heading as="h3" textStyle="body">
                    On the www
                </Heading>
                <Link href="https://github.com/AdelinFnk" target="_blank" textDecoration="none">
                    <Button
                        size="md"
                        variant="ghost"
                        fontWeight="bold"
                        color="bg.link"
                        colorPalette="brand"
                    >
                        <IoLogoGithub /> @AdelinFnk
                    </Button>
                </Link>
            </Section>

        </Container>
        </Layout>
    )
}

export default Page