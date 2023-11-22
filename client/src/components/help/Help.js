import React from "react"
import { Link } from "react-router-dom"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from 'react-bootstrap/Col'
import "./Help.css"

const Help = () => {
    return (    
            <Container fluid>
                <Row className="container-help vh-100 align-items-center">
                    <Col className="col-12">
                        <div className="help-intro">
                            <h1>Need Help?</h1>
                            <h2>CONTACT US</h2>
                        </div>
                        <div className="help-links">
                            <Link className="help-link" to="#faq">FAQ</Link>
                            <Link className="help-link" to="#contactinfo">Contact Info</Link>
                        </div>
                    </Col>
                </Row>
            </Container>
    )
}

export default Help