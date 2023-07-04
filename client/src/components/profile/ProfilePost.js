import React from 'react'
import Col from 'react-bootstrap/Col'
import nils from './temp-images/nils.jpg'
import mo from './temp-images/mohammed-lak.jpg'
const ProfilePost = ({postImage}) => {
    return (
        <Col className="col-auto col-md-6 col-lg-4 col-xxl-3 mt-4 d-flex justify-content-center">
            <div style={{width: "100%", width: "240px", height: "240px"}}>
                <img className="rounded" src={mo} style={{display: "block", width: "100%",height: "100%", objectFit:"cover"}}></img>
            </div>
        </Col>
    )
}

export default ProfilePost