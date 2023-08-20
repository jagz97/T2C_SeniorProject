import React from 'react'
import './Home.css'
import PopularDest from './PopularDest'
import PopularPackage from './PopularPackage'
import PopularUser from './PopularUser'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

import { FaChevronRight, FaChevronLeft } from "react-icons/fa";

/* Remove Later*/
import amy from "./temp-images/amy-humphries.jpg"
import axp from "./temp-images/axp-photography.jpg"
import rich from "./temp-images/richard-iwaki.jpg"
import sidra from "./temp-images/sidra-s.jpg"

import pfp1 from "./temp-pfp/pfp1.jpg"
import pfp2 from "./temp-pfp/pfp2.jpg"
import pfp3 from "./temp-pfp/pfp3.jpg"
import pfp4 from "./temp-pfp/pfp4.jpg"




const Home = () => {

    return (
        <Container fluid>

            <Row className="gx-3 justify-content-center mx-auto my-5" style={{maxWidth: 1490}}>
                <Col className="col-12 mb-3 text-xxl-start text-center">
                    <h2 className="home-section-header ps-xxl-3 ps-xl-5">Popular Destinations</h2>
                </Col>
                    <PopularDest img={axp} name={"CN Tower"} location= {"Santorini, France"}/>
                    <PopularDest img={amy} name={"CN Tower"} location= {"Santorini, France"}/>
                    <PopularDest img={rich} name={"CN Tower"} location= {"Toronto, Canada"}/>
                    <PopularDest img={sidra} name={"CN Tower"} location= {"Santorini, France"}/>
                    <PopularDest img={sidra} name={"CN Tower"} location= {"Santorini, France"}/>
            </Row>
            <Row className="gx-4 justify-content-center mx-auto mb-5" style={{maxWidth: 1490}}>
                <Col className="col-12 mb-3 text-xxl-start text-center">
                    <h2 className="home-section-header ps-xxl-3 ps-xl-5">Popular Traveling Packages</h2>
                </Col>
                <PopularPackage img={axp} location={"Athens, Greece"} rating={5} price={500}/>
                <PopularPackage img={axp} location={"Athens, Greece"} rating={5} price={500}/>
                <PopularPackage img={axp} location={"Athens, Greece"} rating={5} price={500}/>
                
            </Row>
            <Row className="g-5 justify-content-center align-content-center mx-auto mb-5" style={{maxWidth: 1490}}>
             
                <Col className="col-12 mb-3 text-xxl-start text-center">
                    <h2 className="home-section-header ps-xxl-3 ps-xl-5">Popular Users</h2>
                </Col>
        
                <PopularUser pfp={pfp1} />
                <PopularUser pfp={pfp2} />
                <PopularUser pfp={pfp3} />
                <PopularUser pfp={pfp4} />
               
            </Row>
        </Container>
    )
}

export default Home
