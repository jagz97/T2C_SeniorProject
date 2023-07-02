import React from 'react'
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

const Navbar = () => {
  return (
    <NavbarBootstrap expand="sm" className="navbar-dark" style={{ backgroundColor: "#000", height: "65px" }}>
      <Container fluid className="p-0 p-sm-3 p-lg-5" >
        <NavbarBootstrap.Brand className="ms-3 ms-sm-0" href="#home">LOGO</NavbarBootstrap.Brand>
        <NavbarBootstrap.Toggle aria-controls="nav" className="me-3" />
        <NavbarBootstrap.Collapse id="nav">
          <Nav className="ms-auto position-relative px-3 px-sm-0 align-items-center" style={{ zIndex: 100, background: "#000" }}>
            <Nav.Link href="#home" className="d-block d-sm-none">Home</Nav.Link>
            <Nav.Link href="#link" className="d-block d-sm-none" >Settings</Nav.Link>
            <Nav.Link href="#" className="d-none d-sm-block me-5" ><Search color="#fff" size={30} /></Nav.Link>
            <Nav.Link href="#" className="d-none d-sm-block"><Gear color="#fff" size={30} /></Nav.Link>

            <Dropdown align="end" autoClose="outside" className="d-none d-sm-block">
              <Dropdown.Toggle as={CustomDropdown} id="dropdown-custom-components">
                <MoreVerticalFill color="#fff" size={30} />
              </Dropdown.Toggle>

              <Dropdown.Menu className="mt-2 rounded-0">
                <Dropdown.Item>Option</Dropdown.Item>
                <Dropdown.Item>Another Option</Dropdown.Item>
                <Dropdown.Item>Yet Another Option</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Nav.Link href="#" className="d-none d-sm-block"><Avatar src="https://picsum.photos/700/700" alt="avatar photo" size={45}/></Nav.Link>
          </Nav>
        </NavbarBootstrap.Collapse>
      </Container>
    </NavbarBootstrap>
  )
}

export default Navbar
