import React, { useState, useEffect } from "react"
import { Outlet, useParams, useLocation, NavLink } from "react-router-dom"
import { getDate, dateToString} from "../../utils/Date"
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import introImg from '../../images/pexels-jake-brown-2531314.jpg'
import "./HotelDetail.css"

import { api } from "../../api/axios"

// import { detail } from "./tempData"

import {
    IoLocationOutline,
    IoInformationCircleOutline
} from "react-icons/io5"

const SearchResultLayout = () => {
    
    const params = useParams()
    const location = useLocation()

    const arrival = location.state?.arrivalDate || null
    const departure = location.state?.departureDate || null
    const rooms = location.state?.roomAmount || null

    const [ hotelDetail, sethotelDetail ] = useState({})
    const [ arrivalDate, setArrivalDate ] = useState(() => arrival ? arrival : getDate())
    const [ departureDate, setDepartureDate ] = useState(() => departure ? departure : getDate(1))
    const [ roomAmount, setRoomAmount ] = useState(() => rooms ? rooms : 1 )

    useEffect(() => {
        const fetchHotelDetail = async () => {
            // simulate fetch delay
            // setTimeout(() => sethotelDetail(detail), 2000) 
            // sethotelDetail(detail)
            console.log(arrivalDate, departureDate, params.id)
            const detailData = {
                hotel_id : params.id,
                checkin_date: dateToString(arrivalDate),
                checkout_date: dateToString(departureDate)
            }
            console.log("We will post with:",detailData)
            try {
                const response = await api.post("/hotelDetails", detailData)
                sethotelDetail(response.data)
                
                // set to placholder data:
                // sethotelDetail(detail)

                console.log(response)
            } catch (error) {
                console.log(error)
            }
            console.log("Layout Route Effect!")
        }
        fetchHotelDetail()
        // eslint gives a warning about not including arrivalDate and departureDate
        // in the dependency array if we inlcude them in the array, then we make 
        // an unecessary call to hotel api when user changes booking dates. since 
        // we're not doing real payment this should be okay to exclude 
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [params.id])
    
    const activeStyle = {
        backgroundColor: "#fff",
    }
    
    return (
        <Container fluid>
            <Row className="container-result-image">
                <Col className="col-12 px-0">
                    <h1 className="intro-text">explore places</h1>
                    <img src={introImg} alt="sunset" className="intro-img"/>
                </Col>
            </Row>
            <Row className="justify-content-center">
                <Col className="col-12">
                    <div className="container-hotel-detail">
                        <nav className="hotel-detail-nav">
                            <ul className="hotel-detail-links">
                                <li className="hotel-detail-link">
                                    <NavLink to="." end style={({isActive}) => isActive ? activeStyle : null }>
                                        <IoLocationOutline/><span>Information</span>
                                    </NavLink>
                                </li>
                                <li className="hotel-detail-link">
                                    <NavLink to="payment" style={({isActive}) => isActive ? activeStyle : null }>
                                        <IoInformationCircleOutline/><span>Payment</span>
                                    </NavLink>
                                </li>
                            </ul>
                        </nav>
                        {
                            Object.keys(hotelDetail).length === 0 ? <h1 className="text-center text-muted">Loading...</h1>
                            :
                            <Outlet context={{hotelDetail, arrivalDate, setArrivalDate, departureDate, setDepartureDate, roomAmount, setRoomAmount}}/>
                        }
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default SearchResultLayout
