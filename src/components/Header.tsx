// Libraries
import React from 'react';

// Components
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function Header() {

  const handleLogout = async () => {
    localStorage.removeItem('token');
    window.location.reload();
  }

  return (
    <div>
      <Navbar expand="lg" className="navbar">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Nav.Link>
            <Link className="me-4" to="/">Products</Link>
          </Nav.Link>
          <Navbar.Collapse
            id="basic-navbar-nav"
            className="justify-content-end"
          >
            <Nav className="ml-auto">
              <Nav.Link onClick={() => handleLogout()}>Logout</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

    </div>
  )
}
