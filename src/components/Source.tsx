import { Fragment } from 'react';
import { Text, Box, Button, Flex, useColorModeValue } from '@chakra-ui/react';
import { FaGithub } from 'react-icons/fa';
import { themeColors } from '../theme/theme';

export const Source = () => {
    const bg = useColorModeValue(themeColors.light, themeColors.dark)
    return (
        <Fragment>
            <Box borderWidth={2} maxW="xl" borderRadius="lg" overflow="wrap" my={10} p={5} bg={bg} borderColor={bg}>
                <Text p={5} as="b">Source code of my site: </Text>
                <Button colorScheme="teal">
                    <a href="https://github.com/anmol977/Portfolio" target="_blank">
                        <Flex flexDirection="row">
                            <FaGithub />
                            <Text pl={3}>Check it out !</Text>
                        </Flex>
                    </a>
                </Button>
            </Box>
        </Fragment>
    )
}
