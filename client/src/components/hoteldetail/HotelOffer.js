import React from "react"
import { FaCheck } from "react-icons/fa";
import "./HotelReview"


const HotelOffer = ({name}) => {
    return (
        <div className="hotel-offer">
            <FaCheck size={15} color={"green"}/><p className="hotel-offer-name">{name}</p>
        </div>
    )
}

export default HotelOffer