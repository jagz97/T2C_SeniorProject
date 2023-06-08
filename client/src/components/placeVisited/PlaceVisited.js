import React from 'react'
import Col from 'react-bootstrap/Col'


const PlaceVisited = (props) => {
    const {location, rating} = props
    // Not sure if Bootstrap Column should go in Component
    // For now I'll leave the Columns here
    return (
        <Col className="col-auto col-md-6 col-lg-4">
            <div className="d-flex flex-column " style={{backgroundColor:"none", width: "100%"}}>
                <img className=""src="https://picsum.photos/700/700" style={{border:"none", width: "100%", maxWidth: "440px", margin:"0", display: "block", borderRadius: "1.2em"}}></img>
                <h2 className="mt-2" style={{width:"100%", maxWidth:"320px"}}>Croatia</h2>
                <p style={{width:"100%", maxWidth:"320px"}}>ratings here</p>
            </div>
        </Col>
    )
}


export default PlaceVisited