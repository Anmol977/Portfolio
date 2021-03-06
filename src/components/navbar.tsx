import { Flex, Heading, Box, useColorModeValue, Container, Stack, Menu, MenuList, MenuItem, MenuButton, IconButton, Link, Button } from "@chakra-ui/react"
import { HamburgerIcon } from '@chakra-ui/icons'
import ThemeToggleButton from './themeToggleButton'
import { themeColors } from "../theme/theme"
import { FaGithub, FaLinkedin } from 'react-icons/fa'


const LinkItem = ({ href, path, children, ...props }: { href: any, path: any, children: any }) => {
    const active = path === href
    const inactiveColor = useColorModeValue('gray200', 'whiteAlpha.900')
    return (
        // <a href={href}>
        <Link
            p={2}
            bg={active ? 'grassTeal' : undefined}
            color={active ? '#202023' : inactiveColor}
            href={href}
            _target='_blank'
            {...props}
        >
            {children}
        </Link>
        // </a>
    )
}

export const Navbar = (props: any) => {
    const { path } = props;
    const bg = useColorModeValue(themeColors.light, themeColors.dark)
    const heading = useColorModeValue('red.500', 'white')

    return (
        <Box
            role="contentinfo" mx="auto" maxW="7xl" py="5" px="5" bg={bg} borderRadius="lg"
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
                    <Heading as="h1" size="lg" letterSpacing={'tighter'} alignContent="center" color={heading}>
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
                    <LinkItem href="https://github.com/anmol977" path={path}>
                        GitHub
                    </LinkItem>
                    <LinkItem href="https://www.linkedin.com/in/anmol-chauhan-13a899157/" path={path}>
                        LinkedIn
                    </LinkItem>
                    <LinkItem href="https://github.com/anmol977/Portfolio" path={path}>
                        <Button as="a" leftIcon={<FaGithub fontSize="20px" />} variant="solid">
                            Source
                        </Button>
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
                                <MenuItem ><LinkItem href="https://github.com/anmol977" path={path}>
                                    GitHub
                                </LinkItem></MenuItem>
                                <MenuItem ><LinkItem href="https://www.linkedin.com/in/anmol-chauhan-13a899157/" path={path}>
                                    LinkedIn
                                </LinkItem></MenuItem>
                                <MenuItem ><LinkItem href="https://github.com/anmol977/Portfolio" path={path}>
                                    <IconButton aria-label="GitHub" icon={<FaGithub fontSize="20px" />} />
                                    Source
                                </LinkItem></MenuItem>
                            </MenuList>
                        </Menu>
                    </Box>
                </Box>
            </Container>
        </Box>
    )
}

export default Navbar;
