import React from "react"
import { useOutletContext } from "react-router-dom"
import HotelReview from "./HotelReview"
import Ratings from "../ratings/Ratings"
import "./HotelDetail.css"


const SearchResult = () => {
    const {hotelData, hotelReviews} = useOutletContext()
    
    const roomId = Object.keys(hotelData.rooms)[0]
    const room = hotelData.rooms[roomId]
    
    const { value, currency } = hotelData.amount_per_night
    const cost = Math.floor(value)

    const { reviews } = hotelReviews // An array of review objects

    const userReviews = reviews.slice(0,4).map((review) => (
        <HotelReview
            title={review.title}
            averageScore={review.averageScore}
            pros={review.pros}
        />
    ))


    return (
        <div className="hotel-detail">
            <section className="hotel-detail-top">
                <div className="hotel-information-wrapper">
                    <h3 className="hotel-title">{hotelData.hotelName}</h3>
                    <p className="hotel-location">
                        {`${hotelData.hotelAddress}, ${hotelData.country}, ${hotelData.city}, ${hotelData.zip}`}
                    </p>
                    <p className="hotel-room-description">
                        { room.description }
                    </p>
                </div>
                <div className="hotel-images">
                    <div className="hotel-image-sml">
                        <img className="hotel-image" src={room.photos[0]["url_original"]} alt="hotel preview sm"/>
                    </div>
                    <div className="hotel-image-smr">
                        <img className="hotel-image" src={room.photos[2]["url_original"]} alt="hotel preview sm"/>
                    </div>
                    <div className="hotel-image-lgb">
                        <img className="hotel-image" src={room.photos[1]["url_original"]} alt="hotel preview lg"/>
                    </div>
                </div>
            </section>
            <section className="hotel-detail-middle">
                <div className="hotel-offers">
                    <h3 className="hotel-offers-header">What this place offers</h3>

                </div>
                <div className="hotel-reserve-card">
                    <div className="hotel-reserve-start">
                        <h2 className="hotel-reserve-price">${cost} {currency}</h2>
                    </div>
                    <div className="hotel-reserve-controls">

                    </div>
                    <button className="hotel-reserve-btn">Reserve Now</button>
                </div>
            </section>
            <section className="hotel-reviews">
                <div className="container-hotel-reviews">
                    <h3 className="hotel-review-header">Hotel Reviews</h3>
                        {
                            userReviews
                        }
                </div>
            </section>
        </div>
        
    )
}

export default SearchResult
