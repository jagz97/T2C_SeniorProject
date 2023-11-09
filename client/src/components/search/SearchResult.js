import React from "react"
import { Link } from "react-router-dom"
import Rating from "../ratings/Ratings"
import large from "./tempImages/pat-whelen.jpg"
import medium from "./tempImages/kit-suman.jpg"
import small from "./tempImages/aron-visuals.jpg"
import Col from "react-bootstrap/Col"
import "./Search.css"
const SearchResult = ({hotelImage, hotelPrice, hotelRating, hotelName}) => {
    console.log(hotelRating)
    return (

        <Col className="col-auto mx-xxl-2 mb-4">
                <Link className="container-result mx-auto" to="#test">
                    <div className="container-result-img">
                        <img className="result-img" src={hotelImage}/>   
                    </div>
                    <div className="result-footer">
                        <h2 className="result-title">{hotelName}</h2>
                        <div className="result-details">
                            <Rating value={hotelRating} starSize={18}/>
                            <h2 className="result-price">${hotelPrice}</h2>
                        </div>
                    </div>
                </Link>
        </Col>
    )
}

export default SearchResult