import React, { Component } from 'react';
import {Navbar, Nav, Container} from 'react-bootstrap';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Features from './Features';
import Home from './Home';
import Pricing from './Pricing';


export default class NavbarTop extends Component {
    render() {
        return (
    <Router>
    <div class="fixed-top">
    <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand as={Link} to="/">Crypto-Loans</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link as={Link} to="/">Home</Nav.Link>
      <Nav.Link as={Link} to="/features">Features</Nav.Link>
      <Nav.Link as={Link} to="/pricing">Pricing</Nav.Link>
    </Nav>
    </Container>
   </Navbar>
  </div>
  <div>
     <Switch>
         <Route path="/">
             <Home />
         </Route>
         <Route path="/features">
            <Features />
         </Route>
         <Route path="/pricing">
             <Pricing />
         </Route>
     </Switch> 
  </div>
  </Router>
        )
    }
}