import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import NavbarBootstrap from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


const Navbar = () => {
    return (
    <NavbarBootstrap expand="sm" className="navbar-dark" style={{backgroundColor: "#000", height: "65px" }}>
      <Container fluid className="p-0 p-sm-3 p-lg-5" >
        <NavbarBootstrap.Brand className="ms-2" href="#home">LOGO</NavbarBootstrap.Brand>
        <NavbarBootstrap.Toggle aria-controls="nav" className="me-2"/>
        <NavbarBootstrap.Collapse id="nav">
          <Nav className="ms-auto position-relative px-3 px-sm-0" style={{zIndex: 100, background:"#000"}}>
            <Nav.Link href="#home" className="d-block d-sm-none" >Home</Nav.Link>
            <Nav.Link href="#link" className="d-block d-sm-none" >Settings</Nav.Link>
            <Nav.Link href="#" className="d-none d-sm-block me-5" >SearchIcon</Nav.Link>
            <Nav.Link href="#" className="d-none d-sm-block">Icon</Nav.Link>
            <Nav.Link href="#" className="d-none d-sm-block">Icon</Nav.Link>
            <Nav.Link href="#" className="d-none d-sm-block">Icon</Nav.Link>
          </Nav>
        </NavbarBootstrap.Collapse>
      </Container>
    </NavbarBootstrap>
    )
}

export default Navbar