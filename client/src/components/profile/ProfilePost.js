import React from 'react'
import Col from 'react-bootstrap/Col'

const ProfilePost = (props) => {
    const {postImage} = props 
    // Not sure if Bootstrap Column should go in Component
    // For now I'll leave the Columns here
    return (
        <Col className="col-auto col-md-4 col-lg-3 mt-4">
            <div style={{width: "100%", maxWidth:"240px"}}>
            <img className="rounded" src="https://picsum.photos/700/700" style={{border:"none", width: "100%"}}></img>
            </div>
        </Col>
    )
}

export default ProfilePost