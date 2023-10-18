import React from 'react'
import './Search.css'
import SearchForm from './SearchForm'
import SearchResult from './SearchResult'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import introImg from '../../images/pexels-jake-brown-2531314.jpg'



const Search = () => {
    return (
            <Container fluid>
                {/* <Row>
                    <h1 className="intro-text">Explore Places</h1>
                    <img src={introImg} alt="sunset" className="intro-img"/>
                </Row> */}
                <Row className="justify-content-center">
                    <Col className="col-auto col-lg-10 mx-auto">
                        <SearchForm/>
                    </Col>
                </Row>
            </Container>
    )
}

export default Search