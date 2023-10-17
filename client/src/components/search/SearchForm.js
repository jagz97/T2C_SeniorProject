import React, { useState } from 'react'
import './Search.css'

import {
    FaLocationDot
} from 'react-icons/fa6'


const SearchForm = () => {

    const [ location, setLocation ] = useState("")
    const [ arrival, setArrival ] = useState("")
    const [ departure, setDeparture ] = useState("")

    console.log("loc", location)
    console.log("arr,", arrival)
    console.log("dep", departure)

    return (
        <div className="container-search-form">
            <div className="search-form-wrapper">
                <form className="search-form d-sm-flex justify-content-between">
                    <div className="search-location-wrapper">
                        <label htmlFor="search-location">Location</label>
                        <div className="position-relative">
                            <span className="search-location-icon">
                                <FaLocationDot size={12}/>
                            </span>
                            <input 
                                type="text"
                                value={location}
                                name="location"
                                placeholder="Where are you going?"
                                onChange={(event) => setLocation(event.target.value)}
                                id="search-location"
                            />
                        </div>
                    </div>
                    <div className="search-date-wrapper">
                        <label htmlFor="search-date-arrival">Date Arrival</label>
                        <input 
                            type="date"
                            value={arrival}
                            name="arrival"
                            onChange={(event) => setArrival(event.target.value)}
                            id="search-date-arrival"
                        />
                        <p className="search-date-description">Select Trip Dates</p>
                    </div>
                    <div className="search-date-wrapper">
                        <label htmlFor="search-date-departure">Date Departure</label>
                        <input 
                            type="date"
                            value={departure}
                            name="departure"
                            onChange={(event) => setDeparture(event.target.value)}
                            id="search-date-departure"
                        />
                        <p className="search-date-description">Select Trip Dates</p>
                    </div>
                    <button type="submit">Search</button>
                </form>
            </div>
        </div>
    )
}

export default SearchForm