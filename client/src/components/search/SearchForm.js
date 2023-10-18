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
                <form className="search-form d-flex flex-column flex-lg-row">
                        <div className="search-wrapper search-location-wrapper">
                            <label htmlFor="search-location">Location</label>
                            <div className="position-relative">
                                <span className="search-location-icon d-none d-lg-inline">
                                    <FaLocationDot size={13}/>
                                </span>
                                <input 
                                    type="text"
                                    value={location}
                                    name="location"
                                    placeholder="Search Trip Destination"
                                    onChange={(event) => setLocation(event.target.value)}
                                    id="search-location"
                                />
                            </div>
                            <p className="search-description d-none d-lg-block">Where are you going?</p>
                        </div>
                        <div className="search-wrapper search-date-wrapper">
                            <label htmlFor="search-date-arrival">Date Arrival</label>
                            <input 
                                type="date"
                                value={arrival}
                                name="arrival"
                                onChange={(event) => setArrival(event.target.value)}
                                id="search-date-arrival"
                            />
                            <p className="search-description d-none d-lg-block">Select Trip Dates</p>
                        </div>
                        <div className="search-wrapper search-date-wrapper">
                            <label htmlFor="search-date-departure">Date Departure</label>
                            <input 
                                type="date"
                                value={departure}
                                name="departure"
                                onChange={(event) => setDeparture(event.target.value)}
                                id="search-date-departure"
                            />
                            <p className="search-description d-none d-lg-block">Select Trip Dates</p>
                        </div>
                        <button type="submit">Search</button>
                </form>
        </div>
    )
}

export default SearchForm