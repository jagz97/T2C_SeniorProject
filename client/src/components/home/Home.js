import React from 'react'
import './Home.css'
import PopularDest from './PopularDest'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

/* Remove Later*/
import amy from "./temp-images/amy-humphries.jpg"
import axp from "./temp-images/axp-photography.jpg"
import rich from "./temp-images/richard-iwaki.jpg"
import sidra from "./temp-images/sidra-s.jpg"


import './breakpoint.css'


const Home = () => {

    return (
        <Container fluid>

            <Row className="gx-3 justify-content-center mx-auto" style={{maxWidth: 1490}}>
                <Col className="col-12 mb-3 text-xxl-start text-center">
                    <h2 className="display-5 ps-xxl-3 ps-xl-5">Popular Destinations</h2>
                </Col>
                    <PopularDest img={axp} name={"CN Tower"} location= {"Santorini, France"}/>
                    <PopularDest img={amy} name={"CN Tower"} location= {"Santorini, France"}/>
                    <PopularDest img={rich} name={"CN Tower"} location= {"Toronto, Canada"}/>
                    <PopularDest img={sidra} name={"CN Tower"} location= {"Santorini, France"}/>
                    <PopularDest img={sidra} name={"CN Tower"} location= {"Santorini, France"}/>
            </Row>
            
        </Container>
    )
}

export default Home
