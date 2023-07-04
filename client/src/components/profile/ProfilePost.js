import React from 'react'
import Col from 'react-bootstrap/Col'
import nil from './temp-images/nils.jpg'

const ProfilePost = ({postImage}) => {
    return (
        <Col className="col-auto col-md-6 col-lg-4 col-xxl-3 mt-4 d-flex justify-content-center">
            <div style={{ width: "240px", height: "240px"}}>
                <img className="rounded" src={nil} alt =" " style={{display: "block", width: "100%",height: "100%", objectFit:"cover"}}></img>
            </div>
        </Col>
    )
}

export default ProfilePost