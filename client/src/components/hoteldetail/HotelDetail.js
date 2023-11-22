import React, { useState, useEffect } from "react"
import { useOutletContext } from "react-router-dom"
import ButtonDatePicker from "../buttondatepicker/ButtonDatePicker"
import { getDate, getDayDifference } from "../../utils/Date"
import HotelOffer from "./HotelOffer"
import HotelReview from "./HotelReview"
import "./HotelDetail.css"

import "react-datepicker/dist/react-datepicker.css"


const MAX = 10
const roomAmounts = [] // stores option elements for select
for(let i = 1; i <= MAX; i++) {
    roomAmounts.push(<option value={i} key={i}>{i}</option>)
}

const SearchResult = () => {
    const {
            hotelDetail : { hotelData, extractedReviews },
            arrivalDate,
            setArrivalDate,
            departureDate,
            setDepartureDate,
            roomAmount,
            setRoomAmount
        } = useOutletContext()
       
    const [ tripDays, setTripDays ] = useState(1)
 
    const [ dateErrorMsg, setDateErrorMsg ] = useState("")
    
    /* Grabbing Data from api data*/
    const roomId = Object.keys(hotelData.rooms)[0]
    const room = hotelData.rooms[roomId]
    
    const { value, currency } = hotelData.amount_per_night
    const cost = Math.floor(value)

    const reviews = extractedReviews?.reviews || []// An array of review objects

    const offers = hotelData?.propertyOffersIcons || []
    
    
    const totalCost = tripDays * roomAmount * cost
    
    const userReviews = reviews.slice(0,4).map((review,idx) => (
        <HotelReview
            key={idx}
            title={review.title}
            averageScore={review.averageScore}
            pros={review.pros}
        />
    ))
    
    const hotelOffers = offers.slice(0,10).map((offer) => (
        <HotelOffer name={offer.name}/>
    ))  
        
    useEffect(() => {
        // for whatever reason .getTime() does not work for equality test.
        if(arrivalDate.getTime() >= departureDate.getTime() || arrivalDate.toString() === departureDate.toString()) {
            setDateErrorMsg("Invalid Dates Selected")
        }
        else {
            setDateErrorMsg("")
            const difference = getDayDifference(arrivalDate,departureDate)
            setTripDays(difference)
           
        }
    },[arrivalDate,departureDate])

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
                    <div className="hotel-facilities">
                        {
                            hotelOffers.length !== 0 
                                ?
                                <> { hotelOffers }</> 
                                : 
                                <p className="text-muted text-center">No Offers Found.</p>
                        }
                    </div>
                </div>
                <div className="hotel-reserve-card">
                    <div className="hotel-reserve-start">
                        {
                            dateErrorMsg.length !== 0 ?
                            <h2 className="error hotel-reserve-error">{dateErrorMsg}</h2>
                            :
                            <h2 className="hotel-reserve-price">
                                ${totalCost} {currency} 
                                <span className="hotel-reserve-days">
                                    {`(${tripDays} ${tripDays > 1 ? "days" : "day"})`}
                                </span>
                            </h2>
                        }
                    </div>
                    <div className="hotel-reserve-control">
                        <label className="hotel-reserve-label">Check-In:</label>
                        <ButtonDatePicker
                            selected={arrivalDate}
                            onChange={(date) => setArrivalDate(date)}
                            minDate={getDate()}
                            className="hoteldetail-datepicker"
                        />
                    </div>
                    <div className="hotel-reserve-control">
                        <label className="hotel-reserve-label">Check-Out:</label>
                        <ButtonDatePicker
                            selected={departureDate}
                            onChange={(date) =>  setDepartureDate(date)}
                            minDate={getDate(1)}
                            className="hoteldetail-datepicker"
                        />
                    </div>
                
                    <div className="hotel-reserve-control">
                        <label className="hotel-reserve-label" htmlFor="hotel-reserve-amount">Rooms:</label>
                        <select 
                            className="hotel-reserve-amount"
                            onChange={(event) => setRoomAmount(event.target.value)}
                            defaultValue={roomAmount}
                            name="roomAmount"

                            id="hotel-reserve-amount"
                        >
                            <option disabled>---Select Room Amount---</option>
                            {
                                roomAmounts
                            }
                        </select>
                    </div>
                  
                    <button className="hotel-reserve-btn">Reserve Now</button>
                </div>
            </section>
            <section className="hotel-reviews">
                <div className="container-hotel-reviews">
                    <h3 className="hotel-review-header">Hotel Reviews</h3>
                        {
                            userReviews.length !== 0 
                            ?
                            <> { userReviews }</> 
                            : 
                            <p className="text-muted text-center">No Reviews Found.</p>
                        }
                </div>
            </section>
        </div>
    )
}

export default SearchResult
