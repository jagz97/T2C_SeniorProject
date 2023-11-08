import React from 'react'
import './Search.css'
import SearchForm from './SearchForm'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import introImg from '../../images/pexels-jake-brown-2531314.jpg'
import SearchResult from './SearchResult'
import FilterRating from './FilterRating'
import {
    MdOutlineFileUpload,
    MdOutlineFileDownload,
    MdDriveFileRenameOutline
} from "react-icons/md"



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

                <Row className="justify-content-center g-0 mt-5">
                    <Col className="col-12 col-lg-3 col-xl-4 col-xxl-3">
                        <div className="search-filter-container">
                            <div className="search-filter-sorting">
                                <p className="filter-header">Sorting</p>
                                <div className="search-filter-sorter">
                                    <MdOutlineFileUpload size={20}/>
                                    <label htmlFor="">Price Low to High</label>
                                    <input
                                        type="checkbox"
                                        id=""
                                    />
                                </div>
                                <div className="search-filter-sorter">
                                    <MdOutlineFileDownload size={20}/>
                                    <label htmlFor="">Price High to Low</label>
                                    <input
                                        type="checkbox"
                                        id=""
                                    />
                                </div>
                                <div className="search-filter-sorter">
                                    <MdDriveFileRenameOutline size={20}/>
                                    <label htmlFor="">Name (A-Z)</label>
                                    <input
                                        type="checkbox"
                                        id=""
                                    />
                                </div>
                            </div>

                            <div className="search-filter-rating">
                                <p className="filter-header">Star Rating</p>
                                <FilterRating value={1}/>
                                <FilterRating value={2}/>
                                <FilterRating value={3}/>
                                <FilterRating value={4}/>
                                <FilterRating value={5}/>
                            </div>
                        </div>
                    </Col>
                    <Col className="col-12 col-lg-8 col-xl-8 col-xxl-9">
                        <div className="search-results-container d-flex justify-content-center">
                            <SearchResult/>
                            <SearchResult/>
                            <SearchResult/>
                            <SearchResult/>
                            <SearchResult/>
                            <SearchResult/>
                        </div>
                    </Col>
                </Row>
            </Container>
    )
}

export default Search