import React from "react"
import { Link } from "react-router-dom"
import Container from "react-bootstrap/Container"
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"
import "./NotFound.css"

const NotFound = () => {

    return (
        <Container className="notfound-container">
            <p className="notfound-error">404</p>
            <Row className="vh-100 align-items-center">        
                <Col className="col-auto ">
                    <h1 className="notfound-header">Page Not Found</h1>
                    <p className="notfound-message">
                        Sorry, the page you're looking for doesn't exist or has been moved.
                    </p>
                    <Link className="notfound-anchor" to="/">Go to Homepage</Link>
                </Col>
            </Row>
        </Container>
    )
}

export default NotFound