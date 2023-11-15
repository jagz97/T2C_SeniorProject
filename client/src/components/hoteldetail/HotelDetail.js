import React from "react"
import { useOutletContext } from "react-router-dom"
import "./HotelDetail.css"


const SearchResult = () => {
    const hotel = useOutletContext()

    console.log(hotel)
    return (
        <h1 className="text-center">"Hotel Details"</h1>
        
    )
}

export default SearchResult
