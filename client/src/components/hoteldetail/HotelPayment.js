import React from "react"
import { useOutletContext } from "react-router-dom"


const HotelPayment = () => {

    const { hotelDetail } = useOutletContext()

    return (
        <div>
            <h1 className="text-center">"Hotel Payment"</h1>
            
        </div>
    )
}

export default HotelPayment