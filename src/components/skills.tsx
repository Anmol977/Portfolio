import { ChevronRightIcon } from '@chakra-ui/icons'
import { Box, Heading, List, ListItem, Text } from '@chakra-ui/layout'
import { Fragment } from 'react'

export const Skills = () => {
    return (
        <Fragment>
            <Heading my={5} textAlign="left" variant="section-title">Skills</Heading>
            <Box borderWidth={2} maxW="xl" borderRadius="lg" overflow="wrap"  >
                <List align="left" pt={10} px={10}>
                    <ListItem><ChevronRightIcon /><Text as="b">Languages </Text></ListItem>
                    <ListItem>JavaScript, NodeJs, c++, Typescript</ListItem>
                </List>
                <List align="left" pt={10} px={10}>
                    <ListItem><ChevronRightIcon /><Text as="b">Frameworks </Text></ListItem>
                    <ListItem>ReactJs,AngularJs, Redux, HapiJs</ListItem>
                </List>
                <List align="left" pt={10} px={10} pb={10}>
                    <ListItem><ChevronRightIcon /><Text as="b">Libraries </Text></ListItem>
                    <ListItem>Boost(C++), 3Js</ListItem>
                </List>
            </Box>
        </Fragment >
    )
}

export default Skills