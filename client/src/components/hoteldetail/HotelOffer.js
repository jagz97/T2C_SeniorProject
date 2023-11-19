import React from "react"
import { FaLeaf } from "react-icons/fa";
import "./HotelReview"


const HotelOffer = ({name, iconName}) => {
    return (
        <div className="hotel-offer">
            <FaLeaf size={18}/><p className="hotel-offer-name">{name}</p>
        </div>
    )
}

export default HotelOffer