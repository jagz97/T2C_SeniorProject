import React from "react"
import "./HotelDetail.css"
import Ratings from "../ratings/Ratings"
const HotelReview = ({title, averageScore, pros}) => {

    return (
        <div className="hotel-review">
            <div className="hotel-review-title-wrapper">
                <h3 className="hotel-review-title">
                    {title}
                </h3>
                <Ratings value={averageScore} starSize={18}/>
            </div>
            <div className="hotel-review-content">
                {pros}
            </div>
        </div>
    )
}

export default HotelReview