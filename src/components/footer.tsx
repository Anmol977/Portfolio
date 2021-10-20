import { Box, Container } from '@chakra-ui/layout';
import React from 'react'

export const Footer = () => {
    return (
        <Container p={2}
            mt="100px"
            maxW="container.sm"
            wrap="wrap"
            align="center" >
            &copy; {new Date().getFullYear()} Anmol Chauhan. All Rights Reserved.
        </Container>
    )
}

export default Footer;
