import React from 'react'
import './Navbar.css'
import Avatar from '../avatar/Avatar'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import NavbarBootstrap from 'react-bootstrap/Navbar';
import Dropdown from 'react-bootstrap/Dropdown';
import CustomDropdown from "./CustomDropdown"
import {
  Search,
  Gear,
  MoreVerticalFill
} from 'akar-icons'

/* may need to import react router bootstrap at some point for the nav items */
const Navbar = () => {
  return (
    <NavbarBootstrap expand="sm" className="navbar-dark" style={{ backgroundColor: "#000", height: "75px" }}>
      <Container fluid className="p-0 p-sm-3 p-lg-5" >
        <NavbarBootstrap.Brand className="ms-3 ms-sm-0" href="#home">LOGO</NavbarBootstrap.Brand>
        <NavbarBootstrap.Toggle aria-controls="nav" className="me-3" />
        <NavbarBootstrap.Collapse id="nav">
          <Nav className="ms-auto position-relative px-3 px-sm-0 align-items-center gap-2" style={{ zIndex: 100, background: "#000" }}>
            {/* Mobile Dropdown Items */}
            <Nav.Link href="/test" className="d-block d-sm-none">Home</Nav.Link>
            <Nav.Link href="#" className="d-block d-sm-none" >Search</Nav.Link>
            <Nav.Link href="#settings" className="d-block d-sm-none" >Settings</Nav.Link>
            <Nav.Link href="#help" className="d-block d-sm-none" >Help</Nav.Link>
            
            {/* Expanded Dropdown Items*/}
            <Nav.Link href="#" className="d-none d-sm-block me-5 nav-item"><Search color="#fff" size={30} /></Nav.Link>
            <Nav.Link href="/test" className="d-none d-sm-block ms-5 nav-item"><Gear color="#fff" size={30} /></Nav.Link>

            <Dropdown align="end" autoClose="outside" className="d-none d-sm-block nav-item">
              <Dropdown.Toggle as={CustomDropdown} id="dropdown-custom-components">
                <MoreVerticalFill color="#fff" size={30}/>
              </Dropdown.Toggle>

              <Dropdown.Menu className="rounded-0 nav-dropdown">
                <Dropdown.Item href="/test">Home</Dropdown.Item>
                <Dropdown.Item href="#help">Help</Dropdown.Item>
                <Dropdown.Item href="#">Option </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            
            <Nav.Link href="/test" className="d-none d-sm-block"><Avatar src="https://picsum.photos/700/700" alt="avatar photo" size={45}/></Nav.Link>
          </Nav>
        </NavbarBootstrap.Collapse>
      </Container>
    </NavbarBootstrap>
  )
}

export default Navbar
