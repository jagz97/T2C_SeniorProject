import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import './Navbar.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import NavbarBootstrap from 'react-bootstrap/Navbar';
import Dropdown from 'react-bootstrap/Dropdown';
import NavCustomDropdown from './NavCustomDropdown';
import useAuth from "../../hooks/useAuth"



import {
  Search,
  MoreVerticalFill
} from 'akar-icons'

import { GoTriangleDown } from "react-icons/go"

const Navbar = () => {
  const { user, logout } = useAuth()
  const { pathname } = useLocation()
  
  const toggle = <><span>Services</span><GoTriangleDown color="#fff" size={12} strokeWidth={2}/></>
  const mobileToggle = <MoreVerticalFill color="#fff" size={25}/>

  return (
    <header>
      <NavbarBootstrap className="global-nav" style={{height: "75px"}}>
        <Container className="p-0 p-sm-3 p-lg-5" >
        <NavbarBootstrap.Brand as={Link} className="global-nav-logo p-0 ps-3 ps-sm-0" to="/">
            <img src={"/img/navbarlogo.png"} alt="Travel2Connect Logo" style={{ height: '120px', marginRight: '0px' }} />
            
          </NavbarBootstrap.Brand>
          <NavbarBootstrap.Brand as={Link} className="global-nav-logo p-0 ps-3 ps-sm-0" to="/">Travel2Connect</NavbarBootstrap.Brand>
          
          {
            user ?
            <>
                <Nav className="ms-auto px-3 px-md-0 align-items-center align-items-md-baseline gap-md-3" activeKey={pathname}>
                  <Nav.Link href="/search" className="me-3" ><Search color="#fff" size={25}/></Nav.Link>
                  <Nav.Link href="/" className="d-none d-md-block nav-item">Home</Nav.Link>
                  <Nav.Link href="/profile" className="d-none d-md-block nav-item">Profile</Nav.Link>

                  {/* Custom Dropdown Desktop */}
                  <NavCustomDropdown toggle={toggle} desktop className="nav-item d-none d-md-block">
                      <Dropdown.Item as={Link} to="/help">Help</Dropdown.Item>
                      <Dropdown.Item as={Link} to="/settings">Settings</Dropdown.Item>
                      <Dropdown.Item as={Link} to="/createpost">Create Post</Dropdown.Item>
                      <Dropdown.Item as={Link} to="/createexperience">Create Experience</Dropdown.Item>
                      <Dropdown.Item onClick={logout}>Sign Out</Dropdown.Item> 
                  </NavCustomDropdown>

                  {/* Custom Dropdown Mobile */}
                  <NavCustomDropdown toggle={mobileToggle} className="nav-item d-block d-md-none">
                      <Dropdown.Item as={Link} to="/profile">Profile</Dropdown.Item>
                      <Dropdown.Item as={Link} to="/help">Help</Dropdown.Item>
                      <Dropdown.Item as={Link} to="/settings">Settings</Dropdown.Item>
                      <Dropdown.Item as={Link} to="/createpost">Create Post</Dropdown.Item>
                      <Dropdown.Item as={Link} to="/createexperience">Create Experience</Dropdown.Item>
                      <Dropdown.Item onClick={logout}>Sign Out</Dropdown.Item>
                  </NavCustomDropdown>
                </Nav>
            </>
            :
            <Nav className="nav-btns pe-3 pe-sm-0">
              <Nav.Link className="nav-btn register-btn" as={Link} to="register">Sign Up</Nav.Link>
              <Nav.Link className="nav-btn login-btn" as={Link} to="login">Login</Nav.Link>
            </Nav>
          }
        </Container>
      </NavbarBootstrap>
    </header>
  )
}

export default Navbar
