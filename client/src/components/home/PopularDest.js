import React from 'react'
import { IoLocationSharp } from 'react-icons/io5'
import Col from 'react-bootstrap/Col'

const PopularDest = ({img, name, location}) => {
    return (
        <Col className="col-auto col-xxl-2.4 mb-4">
            <div className="popular-destination">
                <div className="image-wrapper">
                    <img className="dest-image home-image" src={img} alt="destination"/>
                </div>
                <p className="dest-name m-0">
                    {name}
                </p>
                <div className="dest-location-wrapper">
                    <IoLocationSharp color={"#04c1d9"} style={{marginLeft: -2}}/>
                    <p className="dest-location m-0">{location}</p>
                </div>

            </div>
            
        </Col>
    )
}

export default PopularDest