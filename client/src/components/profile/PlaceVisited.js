import React from 'react'
import Col from 'react-bootstrap/Col'
import Ratings from '../ratings/Ratings'
import mohammedLak from './temp-images/mohammed-lak.jpg'

const PlaceVisited = ({location, rating}) => {
    return (
        <Col className="col-auto col-md-6 col-lg-4">
            <div style={{width: "100%"}}>
                <div style={{height: "400px", width: "100%"}}>
                    <img src={mohammedLak} style={{display: "block", width: "100%", height:"100%", maxWidth: "400px", borderRadius: "1.2em"}}></img>
                </div>
                <h2 className="mt-2" style={{width:"100%", maxWidth:"320px"}}>Croatia</h2>
                <div style={{width:"100%", maxWidth:"320px", marginBottom: "1em"}}><Ratings value={rating}/></div>
            </div>
        </Col>
          
        
    )
}

export default PlaceVisited
