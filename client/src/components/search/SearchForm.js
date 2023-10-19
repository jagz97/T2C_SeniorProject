import React, { useState, useEffect } from 'react'
import './Search.css'
import { api } from "../../api/axios"

const SearchForm = () => {

    const [ location, setLocation ] = useState("")
    const [ arrival, setArrival ] = useState("")
    const [ departure, setDeparture ] = useState("")

    console.log("loc", location)
    console.log("arr,", arrival)
    console.log("dep", departure)

    useEffect(() => {
        const getResults = async () => {
            try {
                const formData = {
                     city: "boston",
                     arrival_date: "2023-10-20",  
                     departure_date: "2023-10-23" ,
                }
                
                const headers = {
                    "Content-Type" : "application/json",  
                }

                const response = await api.get("/hotels_search_city_name", JSON.stringify(formData), headers)
                console.log(response)
                
            } catch (error) {
                console.log(error)    
            }
        }
        getResults()
    }, [])

    return (
        <div className="container-search-form">
                <form className="search-form d-flex flex-column flex-lg-row">
                        <div className="search-location-wrapper">
                            <label htmlFor="search-location">Location</label>
                            <div className="position-relative">
                                <input 
                                    type="text"
                                    value={location}
                                    name="location"
                                    placeholder="Where are you going?"
                                    onChange={(event) => setLocation(event.target.value)}
                                    id="search-location"
                                />
                            </div>
                            {/* <p className="search-description d-none d-lg-block">Where are you going?</p> */}
                        </div>
                        <div className="search-date-wrapper">
                            <label htmlFor="search-date-arrival">Date Arrival</label>
                            <input 
                                type="date"
                                value={arrival}
                                name="arrival"
                                onChange={(event) => setArrival(event.target.value)}
                                id="search-date-arrival"
                                style = {{color : arrival ? "#000" : "grey" }}
                            />
                            {/* <p className="search-description d-none d-lg-block">Select Trip Dates</p> */}
                        </div>
                        <div className="search-date-wrapper">
                            <label htmlFor="search-date-departure">Date Departure</label>
                            <input 
                                type="date"
                                value={departure}
                                name="departure"
                                onChange={(event) => setDeparture(event.target.value)}
                                id="search-date-departure"
                                style = {{color : departure ? "#000" : "grey" }}
                            />
                            {/* <p className="search-description d-none d-lg-block">Select Trip Dates</p> */}
                        </div>
                        <button type="submit">Search</button>
                </form>
        </div>
    )
}

export default SearchForm