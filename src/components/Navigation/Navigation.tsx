import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Navigation: React.FC = (): JSX.Element => (
  <Navbar bg="dark" variant="dark" expand="lg">
    <Navbar.Brand href="#home">Countries</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Link as={Link} to="/">
          Home
        </Nav.Link>
        <Nav.Link as={Link} to="/about">
          About
        </Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
)

export default Navigation
