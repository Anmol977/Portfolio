import { Image } from '@chakra-ui/image';
import myImg from '../resources/myImg.jpg'
import "@fontsource/noto-mono"
import { Box, Container, Text, Flex } from '@chakra-ui/layout';

export const Home = () => {
    return (
        <Box
            position="fixed"
            as="body"
            w="100%"
        >
            <Container
                p={2}
                mt="100px"
                maxW="container.sm"
                wrap="wrap"
                align="center"
            >
                <Box maxW="lg" borderWidth="2px" borderRadius="lg" overflow="hidden" py={5} px={10}  >
                    <Flex flexDirection="row" alignItems="center" justifyContent="center">
                        <Image src={myImg} borderRadius="full" w="auto" h="100px"></Image>
                        <Flex flexDirection="column">
                            <Text fontSize={20} px={5}>Hello, I am Anmol !</Text>
                            <Text fontSize={14} px={5}>I am a full-stack web developer from India.</Text>
                            <Text fontSize={14} px={5}> I am experienced in Angular and React JavaScript frameworks. </Text>
                        </Flex>
                    </Flex>
                </Box>
            </Container>
        </Box >
    )
}

export default Home;
