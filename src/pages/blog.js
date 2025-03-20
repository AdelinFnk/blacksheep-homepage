import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layout/article'
import Section from '../components/section'
import { GridItem } from '@/components/grid-item'

import project1 from '../../public/images/mor.png'

const Blog = () => (
    <Layout title="Blog">
        <Container>
            <Heading as="h3" fontSize={20} mb={4}>
                Popular
            </Heading>

            <Section delay={0.1}>
                <SimpleGrid columns={[1, 2, 2]} gap={6}>
                    <GridItem
                        title="yey"
                        thumbnail={project1}
                        href="/blog"
                    />
                    <GridItem
                        title="yey"
                        thumbnail={project1}
                        href="/blog"
                    />
                </SimpleGrid>
            </Section>

            <Section delay={0.3}>
                <SimpleGrid columns={[1, 2, 2]} gap={6}>
                    <GridItem
                        title="yey"
                        thumbnail={project1}
                        href="/blog"
                    />
                    <GridItem
                        title="yey"
                        thumbnail={project1}
                        href="/blog"                    />
                </SimpleGrid>
            </Section>

            <Section delay={0.5}>
                <SimpleGrid columns={[1, 2, 2]} gap={6}>
                    <GridItem
                        title="yey"
                        thumbnail={project1}
                        href="/blog"
                    />
                    <GridItem
                        title="yey"
                        thumbnail={project1}
                        href="/blog"
                    />
                </SimpleGrid>
            </Section>
        </Container>
    </Layout>
)

export default Blog