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

                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Website</Meta>
                        <Link href="/">
                            Cave <HiExternalLink mx="2px"/>
                        </Link>
                    </ListItem>

                </List>
            </Container>
        </Layout>
    )


export default Project
