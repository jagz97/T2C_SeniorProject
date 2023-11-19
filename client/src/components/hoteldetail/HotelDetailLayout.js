import React, { useState, useEffect } from "react"
import { Outlet, useParams, useLocation, NavLink } from "react-router-dom"
import { getDate } from "../../utils/Date"
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import introImg from '../../images/pexels-jake-brown-2531314.jpg'
import "./HotelDetail.css"

import { api } from "../../api/axios"

import { detail } from "./tempData"

import {
    IoLocationOutline,
    IoInformationCircleOutline
} from "react-icons/io5"

const SearchResultLayout = () => {
    
    const params = useParams()
    const location = useLocation()

    const arrival = location.state?.arrival || null
    const departure = location.state?.departure || null

    const [ hotelDetail, sethotelDetail ] = useState({})
    const [ arrivalDate, setArrivalDate ] = useState(() => arrival ? arrival : getDate())
    const [ departureDate, setDepartureDate ] = useState(() => departure ? departure : getDate(1))
    
    useEffect(() => {
        const fetchHotelDetail = async () => {
            // simulate fetch delay
            setTimeout(() => sethotelDetail(detail), 2000) 
            // sethotelDetail(detail)
            console.log("Layout Route Effect!")
        }
        fetchHotelDetail()
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
                            <Outlet context={{hotelDetail, arrivalDate, setArrivalDate, departureDate, setDepartureDate}}/>
                        }
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default SearchResultLayout
