import React from "react"
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

import "./PasswordReset.css"

const PasswordReset = ({children}) => {
    return (
        <Container fluid>
            <Row className="vh-100 justify-content-center align-items-center">
                <Col className="col-auto">
                    { children }
                </Col>
            </Row>
        </Container>
    )
}

export default PasswordReset