import Logo from './logo.js'
import NextLink from 'next/link'
import {
    Container,
    Box,
    Link,
    Stack,
    Heading,
    Flex,
    Menu,
    MenuItem,
    MenuList,
    MenuButton,
    IconButton,
} from '@chakra-ui/react'
import { HamburgerIcon } from 'react-icons'
import { useColorMode } from "@/components/ui/color-mode.jsx";

const LinkItem = ({ href, path, children, }) => {
    const active = path === href
    const { colorMode } = useColorMode()
    const inactiveColor = colorMode === 'dark' ? 'whiteAlpha.900' : 'gray200'

    return (
        <NextLink href={href}>
            <Link
                p={2}
                bg={active ? 'grassTeal' : undefined}
                color={active ? '#202023' : inactiveColor}
            >
                {children}
            </Link>
        </NextLink>
    )
}

const Navbar = props => {
    const { path } = props
    const { colorMode } = useColorMode()

    return (
        <Box
            position='fixed'
            as='nav'
            w='100%'
            bg={colorMode === 'dark' ? '#20202380' : '#ffffff40'}
            style={{ backdropFilter: 'blur(10px)' }}
            zIndex={1}
            {...props}
        >
            <Container>
                <Container
                    display="flex"
                    p={2}
                    maxW="container.md"
                    wrap="wrap"
                    align="center"
                    justify="space-between"
                >
                    <Flex align="center" mr={5}>
                        <Heading as="h1" size="lg" letterSpacing={'tighter'}>
                            <Logo />
                        </Heading>
                    </Flex>
                </Container>


            </Container>
        </Box>
    )
}

export default Navbar