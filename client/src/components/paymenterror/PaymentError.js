import React from "react"
import { Link } from "react-router-dom"
import Container from "react-bootstrap/Container"
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"


import "./PaymentError.css"
const PaymentError = () => {

    return (
        <Container className="payment-cancel-container">
            <Row className="vh-100 align-items-center justify-content-start">        
                <Col className="col-auto">
                    <h1 className="payment-cancel-header">Your Payment was not processed.</h1>
                    <p className="payment-cancel-message">
                        If you would like to search for hotels again <Link className="payment-cancel-anchor" to="/search">click here</Link>
                    </p>
                    <Link className="payment-cancel-anchor" to="/">Go to Homepage</Link>
                </Col>
            </Row>
        </Container>
    )
}

export default PaymentError