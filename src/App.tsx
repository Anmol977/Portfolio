import React from 'react';
import './App.css';
import Home from './pages/home';
import Footer from './components/footer';
import Navbar from './components/navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Box } from '@chakra-ui/layout';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar></Navbar>
        <Switch>
          <Route exact path='/' component={Home} />
        </Switch>
      </Router>
      <Box
        position="fixed"
        as="footer"
        w="100%"
        bottom="0"
        opacity="0.5"
      >
        <Footer />
      </Box>
    </div>
  );
}

export default App;
