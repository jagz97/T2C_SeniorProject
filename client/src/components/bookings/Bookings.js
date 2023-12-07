import React, { useState, useEffect, useRef } from 'react'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Modal from 'react-bootstrap/Modal'
import Booking from "./Booking"
import introImg from "../../images/pexels-asad-photo-maldives-1591373.jpg"

import { api } from "../../api/axios"
import useAuth from '../../hooks/useAuth'
import "./Bookings.css"

const Bookings = () => {
    const [ bookings, setBookings ] = useState([])
    const [ modal, setModal ] = useState(false)
    const [ bookingError, setBookingError ] = useState("")
    const { user } = useAuth()
    const idRef = useRef(null)
    
    const fetchBookings = async () => {
        try {
            const headerOptions = {
                headers: {
                    Authorization: `${user.accesstoken}`,
                }
            }
            const usrBookings = await api.get("/reservations",headerOptions)
            setBookings(usrBookings.data)
        }
        catch(error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchBookings()
    }, [])

    const handleModalDelete =  async (id) => {
        console.log("WE WILL DELETE BOOKING WITH ID", id)
        setBookingError("")
        if(id === null) {
            setBookingError("An error Occured.")
            return
        }

        const headerOptions = {
            headers: {
                Authorization: `${user.accesstoken}`,
            }
        }
        const data = {
            id : id
        }

        console.log(`We will be trying to delete reservation w/ `, data)
        try {
            const response = await api.post("/reservations/deleteReservationById", data , headerOptions)
            console.log(response)
    
        } catch (error) {
            const errorMessage = error.response?.data?.message
            // if we get a an error response from server display it
            // otherwise we display error directly from axios library
            if(errorMessage) {
                setBookingError(errorMessage)
            }
            else {
                setBookingError(error.message)
            }
        }
        idRef.current = null
        setModal(false)
    }
    
    const handleCancel = (id) => {
        setModal(true)
        setBookingError("")
        idRef.current = id
    }

    console.log(bookings)

    const usrBookings = bookings.map((booking) => (
        <Booking
            key={booking.reservationId} 
            title = {booking.hotelName} 
            checkin = {booking.checkInDate} 
            duration = {booking.duration} 
            guests = {booking.guests} 
            price = {Math.floor(booking.price)} 
            handleCancel={() => handleCancel(booking.reservationId)}
        />
    ))
    
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
                        { bookingError && <p className="error text-center">{bookingError}</p>}
                        <div className="container-bookings">
                            {
                                bookings.length === 0 ? 
                                    <p className="text-muted text-center mt-5">No Upcoming Bookings.</p>
                                    :
                                    <>
                                        {
                                            usrBookings
                                        }
                                    </>
                            }
                        </div>
                    </div>
                    <Modal 
                        show={modal} 
                        onHide={() => setModal(false)}
                        animation={false} 
                        dialogClassName="cancel-booking-modal"
                        centered
                    >
                    <Modal.Header className="pb-0">
                        <Modal.Title className="settings-editbio-header">Delete Upcoming Booking</Modal.Title>
                    </Modal.Header>
                    <Modal.Body className="pb-0">
                        <p>Are you sure you want to delete this booking?</p>
                    </Modal.Body>
                    <Modal.Footer className="border-0 pb-3 pt-2">
                    <button className="cancel-booking-close" onClick={() =>setModal(false)}>
                        Cancel
                    </button>
                    <button className="cancel-booking-save" onClick={() => handleModalDelete(idRef.current)}>
                        Delete
                    </button>
                    </Modal.Footer>
                </Modal>
                </Col>
            </Row>
        </Container>
    )
}

export default Bookings

