import React, { useState, useEffect } from 'react'
import { useSearchParams } from "react-router-dom"
import { getDate, dateToString } from "../../utils/Date"
import './Search.css'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import ButtonDatePicker from "../buttondatepicker/ButtonDatePicker.js"
import introImg from "../../images/pexels-jake-brown-2531314.jpg"
import SearchResult from "./SearchResult"
import Pagination  from "./Pagination.js"
import FilterRating from "./FilterRating"

import { api } from "../../api/axios"

import {
    MdOutlineFileUpload,
    MdOutlineFileDownload,
    MdDriveFileRenameOutline
} from "react-icons/md"


import { data } from "./tempData.js"

const MAX = 5
const options = [] // stores option elements for select
for(let i = 1; i <= MAX; i++) {
    options.push(<option value={i} key={i}>{i}</option>)
}

const Search = () => {

    /* Search States */
    
    const [ city, setCity ] = useState("")
    const [ arrivalDate, setArrivalDate ] = useState(() => getDate())
    const [ departureDate, setDepartureDate ] = useState(() => getDate(1))
    const [ roomAmount, setRoomAmount ] = useState(1)
    const [ guestAmount, setGuestAmount ] = useState(1)
    const [ searchResults, setSearchResults ] = useState([])
    const [ totalPageNumber, setTotalPageNumber ] = useState(100)
    
    const [ isLoading, setIsLoading ] = useState(false)
    const [ hasSearched, setHasSearched ] = useState(false)
    const [ errorInputMsg, setErrorInputMsg ] = useState(null)
    
    console.log(searchResults)
    /* Search Sorters*/
    const [ searchSorter, setSearchSorter ] = useState(null)
    
    const [ searchParams, setSearchParams ] = useSearchParams()

    const currentPage = searchParams.get("page")
    
    // console.log("Total page numbers:", totalPageNumber)
    console.log(arrivalDate,departureDate)
    const handleSearch = async () => {
        setErrorInputMsg("")
        // convert date objects into "yyyy-mm-dd" strings
        let arrival_date, departure_date, page_number

        if(arrivalDate && departureDate) {
            if(arrivalDate.getTime() >= departureDate.getTime() || arrivalDate.toString() === departureDate.toString()) {
                setErrorInputMsg("Invalid Dates Selected")
                return
            }
            arrival_date = dateToString(arrivalDate)
            departure_date = dateToString(departureDate)
        }
        // console.log("arrival_date", arrival_date)
        // console.log("departure_date", departure_date)
        
        // if the search params page is undefined
        // set it to page = 1 when request is sent
        if (!currentPage || currentPage == 1) {
            setSearchParams({page:1})
            page_number = 0
        }
        else {
            page_number = currentPage - 1 // 0 indexed 
        }

        // form the data to send to server
        const search = {
            city,
            arrival_date,
            departure_date,
            room_qty: roomAmount,
            guest_qty: guestAmount,
            page_number
        }

        console.log("We will search with: ", search)
        
        try {
            setIsLoading(true)
            setHasSearched(true)
            const response = await api.post("/hotels_search_city_name", search) 
            setSearchResults(response.data.results)
            // setTotalPageNumber(response.data.totalPages)
            // setSearchResults(data)
            // console.log(response)
            setIsLoading(false)
        } catch (error) {
            const errorMessage = error
            console.log(errorMessage)
        }
    }


    useEffect(() => {
        // only run effect when search params have changed
        // and if we have made already made a request
        if(searchResults.length > 0 && currentPage) {
            handleSearch()
        }
    },[currentPage])

    const handleSort = (event) => {
        const { value } = event.target
        if (searchResults.length > 0)  {
            console.log(value)
            const search = {
                city,
                arrival_date: dateToString(arrivalDate),
                departure_date: dateToString(departureDate),
                guest_qty: "1",
                room_qty: "1",
                order_by: value
            }
            console.log("Sort with data:", search)
            // const response = await api.post("/hotels_search_city_name", search)
        }
    }

    const submitHandler = (event) => {
        event.preventDefault()
        handleSearch()
    }

    const hotels = searchResults.map((result) => (
        <SearchResult 
            key={result.hotel_id}
            id={result.hotel_id}
            hotelImage={result.main_photo_url} 
            hotelRating={result.review_score} 
            hotelPrice={Math.floor(result.price_breakdown.all_inclusive_price)}
            hotelName={result.hotel_name}
            dates={{arrivalDate, departureDate}}
            roomAmount={roomAmount}
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
                        <form className="search-form d-flex flex-column flex-lg-row" onSubmit={submitHandler}>
                            <div className="search-location-wrapper">
                                <label htmlFor="search-location">Location</label>
                                <div className="position-relative">
                                    <input
                                        type="text"
                                        value={city}
                                        name="city"
                                        placeholder="Where are you going?"
                                        onChange={(event) => setCity(event.target.value)}
                                        id="search-location"
                                        required
                                    />
                                </div>
                                {/* <p className="search-description d-none d-lg-block">Where are you going?</p> */}
                            </div>
                            <div className="search-date-wrapper">
                                <label htmlFor="search-date-arrival">Arrival</label>
                                <ButtonDatePicker
                                    selected={arrivalDate} 
                                    onChange={(date) => setArrivalDate(date)}
                                    className="hotelsearch-datepicker"
                                    minDate={getDate()}
                                    id="search-date-arrival"
                                />
                                {/* <p className="search-description d-none d-lg-block">Select Trip Dates</p> */}
                            </div>
                            <div className="search-date-wrapper">
                                <label htmlFor="search-date-departure">Departure</label>
                                <ButtonDatePicker
                                    selected={departureDate} 
                                    onChange={(date) => setDepartureDate(date)}
                                    className="hotelsearch-datepicker"
                                    minDate={getDate(1)}
                                    id="search-date-departure"
                                />
                                {/* <p className="search-description d-none d-lg-block">Select Trip Dates</p> */}
                            </div>
                            <div className="search-amount-wrapper">
                                <label htmlFor="search-room-amount">Rooms</label>
                                <select 
                                    className="search-room-amount"
                                    id="search-room-amount"
                                    defaultValue={roomAmount}
                                    onChange={(event) => setRoomAmount(event.target.value)}
                                >
                                    <option disabled>Rooms</option>
                                    {
                                        options
                                    }
                                </select>
                            </div>
                            <div className="search-amount-wrapper">
                                <label htmlFor="search-guest-amount">Guests</label>
                                <select 
                                    className="search-guest-amount"
                                    id="search-guest-amount"
                                    defaultValue={guestAmount}
                                    onChange={(event) => setGuestAmount(event.target.value)}
                                >
                                    <option disabled>Guests</option>
                                    {
                                        options
                                    }
                                </select>
                            </div>
                            
                            <button type="submit">Search</button>
                        </form>
                  
                    {errorInputMsg ? <p className="error text-center mt-2">{errorInputMsg}</p> : null}
                    </Col>
                </Row>

                <Row className="justify-content-center g-0 mt-5">
                    <Col className="col-12 col-lg-3 col-xl-4 col-xxl-3">
                        <div className="search-filter-container">
                            <div className="search-filter-sorting">
                                <p className="filter-header">Sorting</p>
                                <div className="search-filter-sorter">
                                    <MdOutlineFileUpload size={20}/>
                                    <label htmlFor="sort-price-ascending">Price Low to High</label>
                                    <input
                                        type="radio"
                                        id="sort-price-ascending"
                                        name="searchSort"
                                        value="price"
                                        onClick={(event) => handleSort(event)}
                                    />
                                </div>
                                <div className="search-filter-sorter">
                                    <MdOutlineFileDownload size={20}/>
                                    <label htmlFor="sort-price-descending">Price High to Low</label>
                                    <input
                                        type="radio"
                                        id="sort-price-descending"
                                        name="searchSort"
                                        value="price"
                                        onClick={(event) => handleSort(event)}
                                    />
                                </div>
                                <div className="search-filter-sorter">
                                    <MdDriveFileRenameOutline size={20}/>
                                    <label htmlFor="">Star Rating</label>
                                    <input
                                        type="radio"
                                        name="searchSort"
                                        value="rating"
                                        id="sort-ratings-descending"
                                        onClick={(event) => handleSort(event)}
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
                        {
                            isLoading ? <h2 className="text-center">Loading...</h2> 
                            : 
                            <>
                                <div className="search-results-container d-flex justify-content-center">
                                    { (hotels.length > 0 ) ? hotels : hasSearched && <p className="text-muted text-center">No hotels found.</p> }
                                </div>
                                {
                                    hotels.length !== 0 && 
                                    <div className="search-pages">
                                    <div className="search-page-numbers">
                                        <Pagination 
                                            pages={totalPageNumber}  
                                        />                                      
                                    </div>
                                </div>
                        }
                            </>
                        }
                     
                    </Col>
                </Row>
            </Container>
    )
}

export default Search