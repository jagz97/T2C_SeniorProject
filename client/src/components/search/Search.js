import React from 'react'
import './Search.css'
import SearchForm from './SearchForm'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import introImg from '../../images/pexels-jake-brown-2531314.jpg'



const Search = () => {
    return (
            <Container fluid>
                <Row className="container-search-image">
                    <Col className="col-12 px-0">
                        <h1 className="intro-text">explore places</h1>
                        <img src={introImg} alt="sunset" className="intro-img"/>
                    </Col>
                </Row>
              
                <Row className="search-form-row justify-content-center">
                    <Col className="col-auto col-lg-10">
                        <SearchForm/>
                    </Col>
                </Row>
            </Container>
    )
}

export default Search