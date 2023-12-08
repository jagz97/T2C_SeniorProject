import React from "react"
import { Link } from "react-router-dom"
import Rating from "../ratings/Ratings"
import Col from "react-bootstrap/Col"
import "./Search.css"
const SearchResult = ({hotelImage, hotelPrice, hotelRating, hotelName, id, dates, roomAmount}) => {

    return (

        <Col className="col-auto mx-xxl-2 mb-4">
                <Link className="container-result mx-auto" state={{...dates, roomAmount}} to={`/hotel/${id}`}>
                    <div className="container-result-img">
                        <img loading="lazy" className="result-img" alt="" src={hotelImage}/>   
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