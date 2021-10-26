import { ChevronRightIcon } from '@chakra-ui/icons'
import { Box, Container, Heading, List, ListIcon, ListItem, Text } from '@chakra-ui/layout'
import { Table, Tr, Td, Tbody } from '@chakra-ui/table'
import { Fragment } from 'react'

export const Skills = () => {
    return (
        <Fragment>
            <Heading my={5} textAlign="left">Bio</Heading>
            <Box borderWidth={2} maxW="xl" borderRadius="lg" overflow="wrap"  >
                <Table variant="simple" size="lg" overflowX="auto">
                    <Tbody>
                        <Tr>
                            <Td><ChevronRightIcon /><Text as="b">Languages </Text></Td>
                            <Td>JavaScript, NodeJs, c++, Typescript</Td>
                        </Tr>
                        <Tr>
                            <Td><ChevronRightIcon /><Text as="b">Frameworks </Text></Td>
                            <Td>ReactJs,AngularJs, Redux, HapiJs, Joi</Td>
                        </Tr>
                        <Tr>
                            <Td><ChevronRightIcon /><Text as="b">Libraries </Text></Td>
                            <Td>Boost(c++), 3Js</Td>
                        </Tr>
                    </Tbody>
                </Table>
            </Box>
        </Fragment >
    )
}

export default Skills