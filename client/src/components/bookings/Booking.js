import React from "react"
import "./Bookings.css"

const Booking = ({imgSrc,title,checkin,duration,guests,price,handleCancel}) => {

    return (
        <div className="booking">
            <div className="booking-inner">
                <div className="booking-image-wrapper d-none d-sm-block">
                    <img className="booking-image" src={imgSrc} alt="preview of booking"/>
                </div>
                <div className="booking-detail-wrapper">
                    <h2 className="booking-title">{title}</h2>
                    <div className="booking-details">
                        <div className="booking-detail">
                            <strong>Check in: </strong><span className="booking-checkin">{checkin}</span>
                        </div>
                        <div className="booking-detail">
                            <strong>Duration: </strong><span className="booking-duration">{duration}</span>
                        </div>
                        <div className="booking-detail">
                            <strong>Guests: </strong><span className="booking-guests">{guests}</span>
                        </div>
                    </div>
                    <p className="booking-price">${price}</p>
                </div>
            </div>
            <button className="booking-cancel-btn" onClick={handleCancel}>Cancel Reservation</button>
        </div>
    )
}

export default Booking