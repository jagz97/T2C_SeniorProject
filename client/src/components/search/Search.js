import React from 'react'
import './Search.css'
import SearchForm from './SearchForm'
import SearchResult from './SearchResult'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Navbar from '../navbar/Navbar'
import introImg from '../../images/pexels-jake-brown-2531314.jpg'



const Search = () => {

    return (
        <div>
            <Navbar/>
            <Container fluid >
                <Row className="container-intro-img position-relative">
                    <img src={introImg} alt="sunset" className="intro-img"/>
                    <h1 className="intro-text">Explore Places</h1>
                </Row>
                <Row style={{marginTop: "-65px"}}>
                    <Col className="col-12 col-lg-9 mx-auto ">
                        <SearchForm/>
                    </Col>
                </Row>
                <Row className="justify-content-center mb-1 px-0" style={{marginTop: "35px"}}>
                  
                    <SearchResult/>
                    <SearchResult/>
                    <SearchResult/>
                    {/* <SearchResult/>
                    <SearchResult/>
                    <SearchResult/> */}
                    
                    
                </Row>
            </Container>
        </div>
    )
}


export default Search