import './App.css';
import Home from './pages/home';
import Navbar from './components/navbar';
import { Fragment } from 'react';
import { Box, Stack } from '@chakra-ui/layout';
import { useColorModeValue } from '@chakra-ui/color-mode';
import { Logo } from './components/footer/logo';
import { SocialMediaLinks } from './components/footer/links';
import { Copyright } from './components/footer/copyright';

function App() {
  const bg = useColorModeValue('#EDF2F7', '#20202380')
  return (
    <Fragment >
      <Navbar />
      <Home />
      <Box as="footer" role="contentinfo" mx="auto" maxW="7xl" py="12" px={{ base: '4', md: '8' }} bg={bg} borderRadius="lg">
        <Stack>
          <Stack direction="row" spacing="4" align="center" justify="space-between">
            <Logo />
            <SocialMediaLinks />
          </Stack>
          <Copyright alignSelf={{ base: 'center', sm: 'start' }} />
        </Stack>
      </Box>
    </Fragment>
  );
}

export default App;
