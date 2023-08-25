import React, {useRef} from 'react'
import './Home.css'
import PopularDest from './PopularDest'
import PopularPackage from './PopularPackage'
import PopularUser from './PopularUser'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

import { BsChevronRight, BsChevronLeft } from "react-icons/bs";



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

    const scrollRef = useRef(null)

    const handleRightScroll = () => {
        if(scrollRef) {
            scrollRef.current.scrollBy({
                top: 0,
                left: 750,
                behavior: "smooth",
            })
           
        }
        console.log("click")
        console.log(scrollRef.current)
    }

    const handleLeftScroll = () => {
        if(scrollRef) {
            scrollRef.current.scrollBy({
                top: 0,
                left: -750,
                behavior: "smooth",
            })
        }
        console.log("click")
        console.log(scrollRef.current)
    }

    return (
        <Container fluid>

            <Row className="justify-content-center my-4">
                <h2 className="home-section-header text-center text-xxl-start">Popular Destinations</h2>
            </Row>

            <Row className="gx-3 justify-content-center mx-auto mb-5" style={{maxWidth: 1490}}>
                    <PopularDest img={axp} name={"Magical Kingdom Park"} location= {"Orlando, USA"}/>
                    <PopularDest img={amy} name={"Magical Kingdom Park"} location= {"Orlando, USA"}/>
                    <PopularDest img={rich} name={"Statue of Liberty"} location= {"New York, USA"}/>
                    <PopularDest img={sidra} name={"CN Tower"} location= {"Toronto, Canada"}/>
                    <PopularDest img={sidra} name={"CN Tower"} location= {"Toronto, Canada"}/>
            </Row>

            <Row className="justify-content-center my-4">
                <h2 className="home-section-header text-center text-xxl-start">Popular Travel Packages</h2>
            </Row>
            <Row className="gx-2 justify-content-center mx-auto mb-5" style={{maxWidth: 1490}}>

                <PopularPackage img={axp} location={"Athens, Greece"} rating={5} price={500}/>
                <PopularPackage img={sidra} location={"Rome, Italy"} rating={4} price={700}/>
                <PopularPackage img={rich} location={"Bali, Indonesia"} rating={3} price={1000}/>
                
            </Row>

            <Row className="justify-content-center mb-4">
                <h2 className="home-section-header text-center text-xxl-start">Popular Users</h2>
            </Row>
            <Row className="gx-2 justify-content-center align-items-center mx-auto mb-5" style={{maxWidth: 1490}}>
                <Col className="col-auto d-none d-lg-block">
                    <BsChevronLeft className="home-scroll-btn" size={125} onClick={handleLeftScroll}/>
                </Col>
                <Col className="popular-users d-flex justify-content-between" ref={scrollRef} style={{maxWidth: 750}}> 
                   
                    <PopularUser pfp={pfp3} />
                    <PopularUser pfp={pfp3} />
                    <PopularUser pfp={pfp3} />
                    <PopularUser pfp={pfp3} />
                    <PopularUser pfp={pfp1} />
                    <PopularUser pfp={pfp2} />
                    <PopularUser pfp={pfp3} />
                    <PopularUser pfp={pfp4} />
                    <PopularUser pfp={pfp1} />
                    <PopularUser pfp={pfp2} />
                    <PopularUser pfp={pfp3} />
                    <PopularUser pfp={pfp4} />
    
                </Col>
                
                <Col className="col-auto d-none d-lg-block">
                    <BsChevronRight className="home-scroll-btn" onClick={handleRightScroll} size={125}/>
                </Col>
               
            </Row>
        </Container>
    )
}

export default Home
