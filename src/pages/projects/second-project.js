import { Container, Badge, Link, List, ListItem} from '@chakra-ui/react'
import { ExternalLinkIcon } from 'react-icons'
import { Title, Meta } from '../../components/project'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Project = () => {
    return (
        <Layout title="Second Project">
            <Container>
                <Title>
                    Second Project <Badge>2022</Badge>
                </Title>
                <P>
                    A description of the project
                </P>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Website</Meta>
                        <Link href="https://secondproject.com">
                            Second Project <ExternalLinkIcon mx="2px" />
                        </Link>
                    </ListItem>

                </List>
            </Container>
        </Layout>
    )
}