import React, { useState } from 'react'
import { getDate } from "../../utils/Date"
import './Search.css'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import introImg from '../../images/pexels-jake-brown-2531314.jpg'
import SearchResult from './SearchResult'
import FilterRating from './FilterRating'

import { api } from "../../api/axios"

import {
    MdOutlineFileUpload,
    MdOutlineFileDownload,
    MdDriveFileRenameOutline
} from "react-icons/md"

import { data } from "./tempData.js"

const Search = () => {

    /* Search States */
    const [ search, setSearch ] = useState({ 
        city : "",
        arrival_date: "",
        departure_date: "",
        // set guest + room to 1 for now
        guest_qty: "1",
        room_qty:"1"
    }) 

    const [ searchResults, setSearchResults ] = useState([])
    console.log(searchResults)
    const currentDate = getDate()
    const tomorrowDate = getDate(1) // pass day offset of 1

    const searchChangeHandler = (event) => {
        const { name, value } = event.target

        setSearch((prevSearch) => ({
            ...prevSearch,
            [ name ] : value
        }))
    }
    
    const submitHandler = async (event) => {
        event.preventDefault()
        try {
            const response = await api.post("/hotels_search_city_name", search) 
            console.log("A search will happen with this state:", search)
            console.log(response.data)
            setSearchResults(response.data.results)
        } catch (error) {
            const errorMessage = error
            console.log(errorMessage)
        }
    }

    const hotels = searchResults.map((result) => (
        <SearchResult 
            key={result.id}
            hotelImage={result.main_photo_url} 
            hotelRating={result.review_score} 
            hotelPrice={result.price_breakdown.gross_price}
            hotelName={result.hotel_name}
        />
    ))

    return (
            <Container fluid>
                <Row className="container-search-image">
                    <Col className="col-12 px-0">
                        <h1 className="intro-text">explore places</h1>
                        <img src={introImg} alt="sunset" className="intro-img"/>
                    </Col>
                </Row>
                <Row className="search-form-row justify-content-center">
                    <Col className="col-auto col-lg-10">
                    <div className="container-search-form">
                        <form className="search-form d-flex flex-column flex-lg-row" onSubmit={submitHandler}>
                            <div className="search-location-wrapper">
                                <label htmlFor="search-location">Location</label>
                                <div className="position-relative">
                                    <input
                                        type="text"
                                        value={search.city}
                                        name="city"
                                        placeholder="Where are you going?"
                                        onChange={searchChangeHandler}
                                        id="search-location"
                                    />
                                </div>
                                {/* <p className="search-description d-none d-lg-block">Where are you going?</p> */}
                            </div>
                            <div className="search-date-wrapper">
                                <label htmlFor="search-date-arrival">Date Arrival</label>
                                <input 
                                    type="date"
                                    value={search.arrival_date}
                                    name="arrival_date"
                                    onChange={searchChangeHandler}
                                    onKeyDown={(event) => event.preventDefault()}
                                    onClick={(event) => event.target.showPicker()}
                                    id="search-date-arrival"
                                    min={currentDate}
                                    style = {{color : search.arrival_date ? "#000" : "grey" }}
                                />
                                {/* <p className="search-description d-none d-lg-block">Select Trip Dates</p> */}
                            </div>
                            <div className="search-date-wrapper">
                                <label htmlFor="search-date-departure">Date Departure</label>
                                <input 
                                    type="date"
                                    value={search.departure_date}
                                    name="departure_date"
                                    onChange={searchChangeHandler}
                                    onKeyDown={(event) => event.preventDefault()}
                                    onClick={(event) => event.target.showPicker()}
                                    id="search-date-departure"
                                    min={tomorrowDate}
                                    style = {{color : search.departure_date ? "#000" : "grey" }}
                                />
                                {/* <p className="search-description d-none d-lg-block">Select Trip Dates</p> */}
                            </div>
                            <button type="submit">Search</button>
                        </form>
                    </div>
                    </Col>
                </Row>

                <Row className="justify-content-center g-0 mt-5">
                    <Col className="col-12 col-lg-3 col-xl-4 col-xxl-3">
                        <div className="search-filter-container">
                            <div className="search-filter-sorting">
                                <p className="filter-header">Sorting</p>
                                <div className="search-filter-sorter">
                                    <MdOutlineFileUpload size={20}/>
                                    <label htmlFor="">Price Low to High</label>
                                    <input
                                        type="checkbox"
                                        id=""
                                    />
                                </div>
                                <div className="search-filter-sorter">
                                    <MdOutlineFileDownload size={20}/>
                                    <label htmlFor="">Price High to Low</label>
                                    <input
                                        type="checkbox"
                                        id=""
                                    />
                                </div>
                                <div className="search-filter-sorter">
                                    <MdDriveFileRenameOutline size={20}/>
                                    <label htmlFor="">Name (A-Z)</label>
                                    <input
                                        type="checkbox"
                                        id=""
                                    />
                                </div>
                            </div>

                            <div className="search-filter-rating">
                                <p className="filter-header">Star Rating</p>
                                <FilterRating value={1}/>
                                <FilterRating value={2}/>
                                <FilterRating value={3}/>
                                <FilterRating value={4}/>
                                <FilterRating value={5}/>
                            </div>
                        </div>
                    </Col>
                    <Col className="col-12 col-lg-8 col-xl-8 col-xxl-9">
                        <div className="search-results-container d-flex justify-content-center">
                            {
                                hotels
                            }
                        </div>
                    </Col>
                </Row>
            </Container>
    )
}

export default Search