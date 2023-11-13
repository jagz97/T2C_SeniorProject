import React from "react"
import { useOutletContext } from "react-router-dom"


const HotelTourPlan = () => {
    const hotelDetails = useOutletContext()
    console.log("From Outlet Context",hotelDetails)
    return (
        <div>
            <h1 className="text-center">"Hotel Tour Plan"</h1>
            <p className="text-center">From Outlet Context (in Tour Plan): id = {hotelDetails.hotelId}</p>
        </div>
    )
}

export default HotelTourPlan