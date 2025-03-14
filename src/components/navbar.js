import Logo from './logo.js'
import NextLink from 'next/link'
import {
    Container,
    Box,
    Link,
    Stack,
    Heading,
    Flex,
} from '@chakra-ui/react'
import { Button } from "@chakra-ui/react"
import {
    MenuContent,
    MenuItem,
    MenuRoot,
    MenuTrigger,
} from "./ui/menu"
import { RxHamburgerMenu } from "react-icons/rx";
import { useColorMode } from "./ui/color-mode.jsx";
import ThemeToggleButton from "./theme-toggle-button";
import {forwardRef} from "react";

const LinkItem = ({ href, path, target, children, ...props }) => {
    const active = path === href
    const { colorMode } = useColorMode()
    const inactiveColor = colorMode === 'dark' ? 'whiteAlpha.900' : 'gray200'

    return (
        <Link
            as={NextLink}
            href={href}
            scroll={false}
            px={2}
            py={1}
            bg={active ? 'grassTeal' : undefined}
            color={active ? '#202023' : inactiveColor}
            target={target}
            {...props}
        >
            {children}
        </Link>
    )
}


// eslint-disable-next-line react/display-name
const MenuLink = forwardRef((props, ref) => (
    <Link ref={ref} as={NextLink} {...props} />
))

const Navbar = props => {
    const { path } = props
    const { colorMode } = useColorMode()

    return (
        <Box
            justifyItems="space-between"
            position='fixed'
            as='nav'
            w='100%'

            style={{ backdropFilter: 'blur(10px)' }}
            zIndex={1}
            {...props}
        >

                <Container
                    display="flex"
                    p={2}
                    maxW="2xl"
                    wrap="wrap"
                    align="center"
                    justify="space-between"
                >
                    <Flex align="center" mr={5}>
                        <Heading as="h1" size="lg" letterSpacing={'tighter'}>
                            <Logo />
                        </Heading>
                    </Flex>

                    <Stack
                        direction={{ base: 'column', md: 'row' }}
                        display={{ base: 'none', md: 'flex' }}
                        width={{ base: 'full', md: 'auto' }}
                        alignItems="center"
                        flexGrow={1}
                        mt={{ base: 4, md: 0 }}
                    >
                        <LinkItem href="/projects" path={path}>
                            Projects
                        </LinkItem>
                        <LinkItem href="/" path={path}>
                            About
                        </LinkItem>
                        <LinkItem href="/contact" path={path}>
                            Contact
                        </LinkItem>
                    </Stack>

                    <Flex flex={1} justifyContent="flex-end" align="center" >
                        <ThemeToggleButton  />
                        <Box  ml={2} display={{ base: 'inline-block', md: 'none' }}>
                            <MenuRoot>
                                <MenuTrigger asChild>
                                    <Button variant="outline"
                                            size="sm"
                                            aria-label="Options"
                                            colorPalette="teal"

                                    >
                                        <RxHamburgerMenu/>
                                    </Button>
                                </MenuTrigger>
                                <MenuContent colorPalette="teal">
                                    <MenuItem asChild>
                                       <Link as={MenuLink} href="/">
                                           About
                                       </Link>
                                    </MenuItem>
                                    <MenuItem asChild>
                                        <Link as={MenuLink} href="/projects">
                                            Projects
                                        </Link>
                                    </MenuItem>
                                    <MenuItem asChild>
                                        <Link as={MenuLink} href="/contact">
                                            Contact
                                        </Link>
                                    </MenuItem>


                                </MenuContent>
                            </MenuRoot>
                        </Box>
                    </Flex>
                </Container>
        </Box>
    )
}

export default Navbar