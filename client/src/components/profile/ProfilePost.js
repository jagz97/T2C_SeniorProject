import React from 'react'
import Col from 'react-bootstrap/Col'
import nil from './temp-images/nils.jpg'

import { Link } from "react-router-dom"

const ProfilePost = ({postImage}) => {
    return (
        <Col className="col-auto">
            <Link to="#">
                <div style={{ width: "240px", height: "240px"}}>
                    <img className="rounded" src={nil} alt =" " style={{display: "block", width: "100%",height: "100%", objectFit:"cover"}}></img>
                </div>
            </Link>
        </Col>
    )
}

export default ProfilePost