import { Container, Badge, Link, Text } from '@chakra-ui/react'
import { HiExternalLink } from "react-icons/hi";
import {Title, Meta, ProjectImage} from '@/components/project'
import{ List } from '@chakra-ui/react'
import Layout from '../../components/layout/article'

const Project = () =>
    (
        <Layout title="Cave">
            <Container>
                <Title>
                    Cave <Badge>2025</Badge>
                </Title>
                <Text>
                    Portfolio website with 3D work.
                </Text>
                <List.Root ml={4} my={4} listStyle='none'>
                    <List.Item >
                        <Meta>Website</Meta>
                        <Link href="/">
                            Cave <HiExternalLink mx="2px"/>
                        </Link>
                    </List.Item>
                    <List.Item >
                        <Meta>Blog</Meta>
                        <span>bla bla bla everywhere</span>
                    </List.Item>
                    <List.Item >
                        <Meta>Stack</Meta>
                        <span>Next.js React Chakra UI Three.js</span>
                    </List.Item>
                </List.Root>

                <ProjectImage src="/images/mor.png" alt="Cave" />
            </Container>
        </Layout>
    )

export default Project