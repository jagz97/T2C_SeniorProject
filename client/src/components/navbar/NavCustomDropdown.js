import React from "react"
import Dropdown from 'react-bootstrap/Dropdown';
import CustomDropdown from "./CustomDropdown"
import './Navbar.css'

const NavCustomDropdown = ({children, toggle, className, desktop}) => {
    
    return (
        <>
            {/* Mobile View Dropdown */}
            <Dropdown align="end"className={className}>
                <Dropdown.Toggle as={CustomDropdown} id="dropdown-custom-components">
                    { toggle }
                </Dropdown.Toggle>
                <Dropdown.Menu className={`nav-dropdown ${desktop ? "dropdown-desktop": null}`}>
                    { children } 
                </Dropdown.Menu>
            </Dropdown>
        </>
        
    )
}
export default NavCustomDropdown


