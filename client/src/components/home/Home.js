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



const Home = () => {

    return (
        <Container fluid>
            <Row>
                <Col className="col-12 mb-3">
                    <div className="text-center text-md-start">
                        <h2 className="display-5 places-visited-heading">Popular Destinations</h2>
                    </div>
                    <div className="container-popular-dest">
                        
                       
                        <PopularDest img={axp} name={"CN Tower"} location= {"Santorini, France"}/>
                        <PopularDest img={amy}/>
                        <PopularDest img={rich}/>
                        <PopularDest img={sidra}/>
                        
                    </div>
                </Col>
            </Row>
            
        </Container>
    )
}

export default Home
