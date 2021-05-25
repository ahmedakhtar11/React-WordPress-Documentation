import React from 'react';
import { Nav, Navbar} from 'react-bootstrap';
import styled from 'styled-components';

const Styles = styled.div`
  .navbar { background-color: #D76C78; }
  a, .navbar-nav, .navbar-light .nav-link {
    color: white;
    font-weight: bold;
    &:hover { color: darkred; }
  }
  .navbar-brand {
    font-size: 1.4em;
    color: white;
    &:hover { color: darkred; }
  }
  .form-center {
    position: absolute !important;
    left: 25%;
    right: 25%;
  }
`;

export const NavigationLandingBar = () => (
  <Styles>
    <Navbar expand="lg">
      <Navbar.Brand href="/">meShare Docs</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav"/>
      {/* <Form className="form-center">
        <FormControl type="text" placeholder="Search" className="" />
      </Form> */}
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Item><Nav.Link href="/">Home</Nav.Link></Nav.Item> 
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </Styles>
)