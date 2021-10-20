import React from 'react'
import { Flex, Heading, Box, useColorModeValue, Container, useColorMode, Stack, Menu, MenuList, MenuItem, MenuButton, IconButton, Link } from "@chakra-ui/react"
import { HamburgerIcon } from '@chakra-ui/icons'
import ThemeToggleButton from './themeToggleButton'


const LinkItem = ({ href, path, children, ...props }: { href: any, path: any, children: any }) => {
    const active = path === href
    const inactiveColor = useColorModeValue('gray200', 'whiteAlpha.900')
    return (
        <a href={href}>
            <Link
                p={2}
                bg={active ? 'grassTeal' : undefined}
                color={active ? '#202023' : inactiveColor}
                _target='_blank'
                {...props}
            >
                {children}
            </Link>
        </a>
    )
}

export const Navbar = (props: any) => {
    const { path } = props;
    const { toggleColorMode } = useColorMode()
    const bg = useColorModeValue('#ffffff40', '#20202380')
    const color = useColorModeValue("white", "gray.800")
    const font = useColorModeValue('white', 'gray.200')
    return (
        <Box
            position="fixed"
            as="nav"
            py={3}
            w="100%"
            bg={bg}
            style={{ backdropFilter: 'blur(10px)' }}
            zIndex={1}
        >
            <Container
                display="flex"
                p={2}
                maxW="container.lg"
                wrap="wrap"
                align="center"
                justify="space-between"
            >
                <Flex align="center" mr={5}>
                    <Heading as="h1" size="lg" letterSpacing={'tighter'} alignContent="center" color={useColorModeValue('red.500', 'white')}>
                        Anmol Chauhan
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
                    <LinkItem href="/works" path={path}>
                        GitHub
                    </LinkItem>
                    <LinkItem href="/posts" path={path}>
                        LinkedIn
                    </LinkItem>
                    <LinkItem
                        href="https://github.com/craftzdog/craftzdog-homepage"
                        path={path}
                    // display="inline-flex"
                    // alignItems="center"
                    // style={{ gap: 4 }}
                    // pl={2}
                    >
                        {/* <IoLogoGithub /> */}
                        Contact Me
                    </LinkItem>
                </Stack>

                <Box flex={1} align="right">
                    <ThemeToggleButton />

                    <Box ml={2} display={{ base: 'inline-block', md: 'none' }}>
                        <Menu isLazy id="navbar-menu">
                            <MenuButton
                                as={IconButton}
                                icon={<HamburgerIcon />}
                                variant="outline"
                                aria-label="Options"
                            />
                            <MenuList>

                                <MenuItem >About</MenuItem>
                                <MenuItem >Works</MenuItem>
                                <MenuItem >Posts</MenuItem>
                                <MenuItem
                                    href="https://github.com/craftzdog/craftzdog-homepage"
                                >
                                    View Source
                                </MenuItem>
                            </MenuList>
                        </Menu>
                    </Box>
                </Box>
            </Container>
        </Box>
    )
}

export default Navbar;
