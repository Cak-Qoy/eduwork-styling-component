import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const NavigationBar = () => {

    return(
      <Navbar bg="dark" variant="dark" fixed="top">
        <Container>
          {/* <Navbar.Brand href="#jumbo">Abdul Qoyyum</Navbar.Brand> */}
          <Nav className="me-auto">
            <Nav.Link href="#jumbo">Abdul Qoyyum</Nav.Link>
            <Nav.Link href="#bio">Biografi</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    )

}

export default NavigationBar;