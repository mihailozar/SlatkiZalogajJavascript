import React from 'react';
import { Container, Row, Navbar,Col, Nav } from 'react-bootstrap';
import logo from "../assets/logo.png"
import "../App.css"
import { Link } from 'react-router-dom';


function NavigationBar() {
  return (
    <Navbar bg="" expand="lg">
      <Container>
        <Row className="w-100">
          <Col md={2}> 
            <Navbar.Brand >
              <img
              src={logo}
              width="100"
              height="100"
              className="d-inline-block align-top mr-2"
              alt="Logo"
              />
            </Navbar.Brand>
          </Col>
         <Col md={5}  >
         <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link style={{ color: 'white' }} className='navLinkSpacing ' to="/Pocetna">
              <Link to="/Pocetna"  style={{ textDecoration: 'none', color: 'inherit' }} >Pocetna</Link>
              </Nav.Link>
              <Nav.Link    style={{ color: 'white' }}className='navLinkSpacing' href="#Korpa">
              <Link to="/Korpa"  style={{ textDecoration: 'none', color: 'inherit' }}>Korpa</Link>
              </Nav.Link>
              <Nav.Link  style={{ color: 'white' }} className='navLinkSpacing' href="#Specijali">
              <Link to="/Specijali"  style={{ textDecoration: 'none', color: 'inherit' }}>Specijali</Link>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
         </Col>
          
        </Row>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;