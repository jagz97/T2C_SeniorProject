import React from 'react'
import './Home.css'
import Ratings from '../ratings/Ratings'
import Col from 'react-bootstrap/Col'
const PopularPackage = ({img, location,rating, description, price, details}) => {

    return (
        <Col className="col-auto">
            <div className="popular-package mb-5">
                <img className="package-image home-image" src={img} alt="travel package"/>
                <div className="package-info">
                    <h2 className="package-location">{location}</h2>
                    <Ratings value={rating} size={18}/>
                    <p className="package-desc">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. 
                    </p>
                    <div className="package-footer">
                        <div className="price-wrapper">
                            From <span className="price">${price}</span>
                        </div>
                        <button className="package-details-btn">Details</button>
                    </div>
                </div>
            </div>
        </Col>
    )
}

export default PopularPackage