import { ChevronRightIcon } from '@chakra-ui/icons'
import { Box, Heading, Text } from '@chakra-ui/layout'
import { Table, Tr, Td, Tbody } from '@chakra-ui/table'
import { Fragment } from 'react'

export const Bio = () => {
    return (
        <Fragment>
            <Heading my={5} textAlign="left" variant="section-title">Bio</Heading>
            <Box borderWidth={2} maxW="xl" borderRadius="lg" overflow="wrap"  >
                <Table variant="simple" size="lg">
                    <Tbody>
                        <Tr>
                            <Td><ChevronRightIcon /><Text as="b">2000 </Text></Td>
                            <Td>Born in New Delhi, India</Td>
                        </Tr>
                        <Tr>
                            <Td><ChevronRightIcon /><Text as="b">2016 </Text></Td>
                            <Td>10th CBSE Board</Td>
                        </Tr>
                        <Tr>
                            <Td><ChevronRightIcon /><Text as="b">2018 </Text></Td>
                            <Td>12th CBSE Board (Non Medical)</Td>
                        </Tr>
                        <Tr>
                            <Td><ChevronRightIcon /><Text as="b">2019 - 2023 </Text></Td>
                            <Td>Bachelors in Computer Science and Engineering, BVCOE, New Delhi</Td>
                        </Tr>
                    </Tbody>
                </Table>
            </Box>
        </Fragment >
    )
}

export default Bio
