import React, { useState, useEffect } from 'react'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Booking from "./Booking"
import introImg from "../../images/pexels-asad-photo-maldives-1591373.jpg"

import "./Bookings.css"

const Bookings = () => {
    const [ bookings, setBookings ] = useState([])


    useEffect(() => {
        console.log("Fetch user bookings set to state")
    }, [])
    const handleCancel = () => {
        console.log("handle cancel.")
    }
    const tempData = <Booking
        imgSrc={introImg}
        title= "Double Flat with 3 Rooms"
        checkin= "12 Mar 2021"
        duration= "3 days"
        guests= "4 Adults"
        price= "1000"
        handleCancel={handleCancel}
    />
    
    return (
        <Container fluid>
            <Row className="container-search-image">
                    <Col className="col-12 px-0">
                        <h1 className="intro-text">my bookings</h1>
                        <img src={introImg} alt="sunset" className="intro-img"/>
                    </Col>
            </Row>
           
            <Row className="justify-content-center">
                <Col className="col-12">
                    <div className="bookings-outer">
                        <div className="bookings-header-wrapper">
                            <h2 className="bookings-header">Upcoming</h2>
                        </div>
            
                        <div className="container-bookings">
                            {/* {
                                bookings.length === 0 ? 
                                    <p className="text-muted text-center mt-5">No Upcoming Bookings.</p>
                                    :
                                    {
                                        bookings
                                    }
                            } */}
                            {tempData}
                            {tempData}
                            {tempData}
                            {tempData}
                            {tempData}
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default Bookings

