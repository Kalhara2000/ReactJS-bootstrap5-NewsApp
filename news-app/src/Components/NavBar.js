import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import React from 'react';

const NavBar = ({ setCategory }) => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
      <Container>
        <Navbar.Brand onClick={() => setCategory('top')} style={{ cursor: 'pointer' }}>
          <h5>NEWS <span className='badge bg-danger'>SL</span></h5>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link onClick={() => setCategory('technology')}>Technology</Nav.Link>
            <Nav.Link onClick={() => setCategory('business')}>Business</Nav.Link>
            <Nav.Link onClick={() => setCategory('food')}>Food</Nav.Link>
            <Nav.Link onClick={() => setCategory('health')}>Health</Nav.Link>
            <Nav.Link onClick={() => setCategory('sports')}>Sports</Nav.Link>
            <Nav.Link onClick={() => setCategory('politics')}>Politics</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
