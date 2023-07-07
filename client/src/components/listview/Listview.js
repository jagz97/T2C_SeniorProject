import React from 'react'
import './listview.css'
import Navbar from '../navbar/Navbar'
import ListviewFilter from './ListviewFilter'
import ListviewPost from './ListviewPost'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

import {
    Search,
} from 'akar-icons'

const Listview = () => {

    return (
        <div>
            <Navbar/>
            <Container className="container-listview" >
                <Row className="rounded-4 mx-auto" style={{backgroundColor: "rgba(139, 44, 255, .3)"}}>
                    <Col className="rounded-4 py-2" style={{ minHeight: 600}}>
                        {/* List Component */}
                        <div className="container-search p-2 rounded-2">
                            <span><Search size={20}/></span>
                            <input 
                                className="input-search shadow-none" 
                                type="text"
                                name=""
                                value=""
                                placeholder="Search"
                            />
                        </div>
                        <div className="listview mt-3">
                            <div className="container-listview-filter">
                                <div className="listview-filters">
                                    <ListviewFilter hideClass = "d-none d-md-block">Photo</ListviewFilter>
                                    <ListviewFilter>Location</ListviewFilter>
                                    <ListviewFilter>Caption</ListviewFilter>
                                    <ListviewFilter>Date</ListviewFilter>
                                </div>
                            </div>
                            <div className="container-listview-posts">
                                <ListviewPost/>
                                <ListviewPost/>
                                <ListviewPost/>
                                <ListviewPost/>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Listview