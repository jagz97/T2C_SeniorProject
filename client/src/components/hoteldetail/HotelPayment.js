import React from "react"
import { useOutletContext } from "react-router-dom"


const HotelPayment = () => {

    const { hotelDetail } = useOutletContext()

    return (
        <div>
            <h1 className="text-center">"Hotel Payment"</h1>
            <p className="text-center">From Outlet Context (in payment): id = {hotelDetail}</p>
        </div>
    )
}

export default HotelPayment