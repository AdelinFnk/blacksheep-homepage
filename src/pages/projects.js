import { Container, Box, Heading, SimpleGrid, Divider}  from '@chakra-ui/react'
import Section from '@/components/section'
import { ProjectGridItem } from '@/components/grid-item'

import thumbCave from '/public/images/thumbnailcave.png'
const Projects = () => {
    return (
        <Container>
            <Heading as="h3" fontSize={20} mb={4} ml={3}>
                Projects
            </Heading>

            <SimpleGrid columns={[1, 1, 2]} gap={6}>
                <Section>
                    <ProjectGridItem id="cave" title="BlackSheep's Cave" thumbnail={thumbCave}>
                        Portfolio website with 3D work.
                    </ProjectGridItem>
                </Section>
            </SimpleGrid>
        </Container>
    )
}

export default Projects