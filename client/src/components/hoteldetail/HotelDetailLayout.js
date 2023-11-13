import React, { useState, useEffect } from "react"
import { Outlet, useParams, NavLink } from "react-router-dom"
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import introImg from '../../images/pexels-jake-brown-2531314.jpg'
import "./HotelDetail.css"

import { api } from "../../api/axios"

import {
    IoLocationOutline,
    IoCalendarClearOutline,
    IoInformationCircleOutline
} from "react-icons/io5"

const SearchResultLayout = () => {
    
    const params= useParams()
    
    useEffect(() => {
        const fetchHotelDetail = async () => {
            // const request = api.post("")
            
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
                                    <NavLink to="tourplan" style={({isActive}) => isActive ? activeStyle : null }>
                                        <IoCalendarClearOutline/><span>Tour Plan</span>
                                    </NavLink>
                                </li>
                                <li className="hotel-detail-link">
                                    <NavLink to="payment" style={({isActive}) => isActive ? activeStyle : null }>
                                        <IoInformationCircleOutline/><span>Payment</span>
                                    </NavLink>
                                </li>
                            </ul>
                        </nav>
                        <Outlet context={{hotelId: params.id}}/>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default SearchResultLayout
