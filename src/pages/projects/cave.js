import { Container, Badge, Link, List, ListItem} from '@chakra-ui/react'
import { HiExternalLink } from "react-icons/hi";
import { Title, Meta } from '@/components/project'

import Layout from '../../components/layout/article'

const Project = () =>
     (
        <Layout title="Cave">
            <Container>
                <Title>
                    Cave <Badge>2025</Badge>
                </Title>

                <List.Root ml={4} my={4}>
                    <List.Item>
                        <Meta>Website</Meta>
                        <Link href="/">
                            Cave <HiExternalLink mx="2px"/>
                        </Link>
                    </List.Item>

                </List.Root>
            </Container>
        </Layout>
    )


export default Project