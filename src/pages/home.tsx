import { Image } from '@chakra-ui/image';
import myImg from '../resources/myImg.jpg'
import "@fontsource/noto-mono"
import Bio from '../components/bio';
import Skills from '../components/skills';
import Scene from '../components/three/three';
import { Box, Container, Text, Flex } from '@chakra-ui/layout';
import { Accordion, AccordionItem, AccordionButton, AccordionIcon, AccordionPanel } from '@chakra-ui/react';

export const Home = () => {
    return (
        <Box
            maxW="7xl"
            mb={10}
            mx="auto"
        >
            <Container
                p={2}
                mt="100px"
                align="center"
                overflow="auto"
            >

                <Scene />
                <Accordion allowToggle>
                    <AccordionItem>
                        <h2>
                            <AccordionButton>
                                <Box flex="1" textAlign="left">
                                    CC
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                            <Text fontSize={10} opcaity={1}>This work is based on "Oldbuild - Voxel art (Free)" (https://sketchfab.com/3d-models/oldbuild-voxel-art-free-92d728957d544fd68ed53f55d2119842) by Raghavprasanna (https://sketchfab.com/Raghavprasanna) licensed under CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)</Text>
                        </AccordionPanel>
                    </AccordionItem>
                </Accordion>

                <Box maxW="xl" borderWidth="2px" borderRadius="lg" py={5} px={10} mt={10}  >
                    <Flex flexDirection="row" alignItems="center" justifyContent="center">
                        <Image src={myImg} borderRadius="full" w="auto" h="100px"></Image>
                        <Flex flexDirection="column">
                            <Text fontSize={20} px={5} as="b">Hello! I am Anmol</Text>
                            <Text fontSize={14} px={5}>I am a full-stack web developer from India.</Text>
                            <Text fontSize={14} px={5}> I am experienced in Angular and React JavaScript frameworks. </Text>
                        </Flex>
                    </Flex>
                </Box>
                <Bio />
                <Skills />
            </Container>
        </Box >
    )
}

export default Home;
