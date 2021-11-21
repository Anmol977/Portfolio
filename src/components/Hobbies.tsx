import { BsFillSuitHeartFill } from 'react-icons/bs'
import { Box, Flex } from '@chakra-ui/layout'
import { Heading, List, ListItem } from '@chakra-ui/react'
import { Fragment } from 'react'

export const Hobbies = () => {
    return (
        <Fragment>
            <Heading my={5} textAlign="left" variant="section-title">
                <Flex direction="row" alignItems="center">
                    I <BsFillSuitHeartFill size={40} color="red" style={{ paddingLeft: 5 }} />
                </Flex>
            </Heading>
            <Box borderWidth={2} maxW="xl" borderRadius="lg" overflow="wrap" my={5} >
                <List align="left" pt={10} px={5} py={10}>
                    <ListItem pb={2}>Reading, Sketching, Music, Developing Websites,</ListItem>
                    <ListItem>Embedded-Systems, Machine-level Programming. </ListItem>
                </List>
            </Box>
        </Fragment >
    )
}
