import React from 'react'
import { Navbar, Nav, NavItem } from 'react-bootstrap'

const Navigation = () => (
  <Navbar>
    <Navbar.Header>
      <Navbar.Brand>
        <a href="/">React-Bootstrap</a>
      </Navbar.Brand>
    </Navbar.Header>
    <Nav>
      <NavItem href="/">
        Home
      </NavItem>
      <NavItem href="/search">
        Search
      </NavItem>
    </Nav>
  </Navbar>
)

export default Navigation
