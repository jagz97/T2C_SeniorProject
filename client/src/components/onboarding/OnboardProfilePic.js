import React from "react"
import Container from "react-bootstrap/esm/Container"
import Row from 'react-bootstrap/Row'
import Avatar from "../avatar/Avatar"
import api from "../../api/axios"

const OnboardProfilePic = () => {
    return (
        <Container>
            <Row className="justify-content-center align-items-center vh-100">
                <Avatar size={250} color={"#2a2a2a"}/>
            </Row>
        </Container>
    )
}

export default OnboardProfilePic