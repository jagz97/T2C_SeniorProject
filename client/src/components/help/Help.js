import React from "react"
import { Link } from "react-router-dom"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"

import "./Help.css"

const Help = () => {
    return (    
        <Container fluid>
            <Row className="container-help">
                <h1>Need Help?</h1>
                <h2>CONTACT US</h2>
                <div className="help-links">
                    <Link className="help-link" to="#faq">FAQ</Link>
                    <Link className="help-link" to="#contactinfo">Contact Info</Link>
                </div>
            </Row>
        </Container>
    )
}

export default Help