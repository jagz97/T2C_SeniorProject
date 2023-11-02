import React from "react"
import { Link } from "react-router-dom"
import Rating from "../ratings/Ratings"
import large from "./tempImages/pat-whelen.jpg"
import medium from "./tempImages/kit-suman.jpg"
import small from "./tempImages/aron-visuals.jpg"
import Col from "react-bootstrap/Col"
import "./Search.css"
const SearchResult = () => {
    return (

        <Col className="col-auto mx-xxl-2 mb-4">
                <div className="container-result mx-auto">
                    <div className="container-result-img">
                        <img className="result-img" src={medium}/>   
                    </div>
                    <div className="result-footer">
                        <h2 className="result-title">Grand Canal, Venice</h2>
                        <div className="result-details">
                            <Rating value={5} starSize={22}/>
                            <h2 className="result-price">$700</h2>
                        </div>
                    </div>
                </div>
        </Col>
    )
}

export default SearchResult