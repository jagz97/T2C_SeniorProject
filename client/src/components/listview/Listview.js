import React from 'react'
import { useState, useEffect } from 'react'
import './listview.css'
import Navbar from '../navbar/Navbar'
import ListviewSorter from './ListviewSorter'
import ListviewPost from './ListviewPost'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

import {
    Search,
} from 'akar-icons'

/*Temporary*/
import data from './tempdata'

const Listview = () => {

    const [userPosts, setUserPosts] = useState(data)
    const [searchText, setSearchText] = useState("")
    const [prevSorter,setPrevSorter] = useState("")

    const searchHandler = (event) => {
        setSearchText(event.target.value)
    }

    const sorterHandler = (sorter) => {
        setUserPosts((prevPosts) => {
            if(sorter === prevSorter) {
                return [...prevPosts].reverse()
            }
            else {
                let sorted = [...prevPosts]
                sorted.sort((a,b) => {
                    if(a[sorter] < b[sorter]) return -1
                    if(a[sorter] > b[sorter]) return 1
                    return 0
                })
        
                return sorted
            }
        })

        if(sorter !== prevSorter) setPrevSorter(sorter)  

    }

    console.log("prevsorter:", prevSorter)

    const updateHandler = () => console.log("update")
    const removeHandler = () => console.log("remove")

    const postElements = userPosts.map((post) => (
        <ListviewPost
            key = {post.id}
            postData = {post}
            update = {updateHandler}
            remove = {removeHandler}
        />
    ))

    return (
        <div>
            <Navbar/>
            <Container className="container-listview" >
                <Row className="rounded-4 mx-auto" style={{backgroundColor: "rgba(139, 44, 255, .3)"}}>
                    <Col className="rounded-4 py-2" style={{ minHeight: 600}}>
                        <div className="container-search p-2 rounded-2">
                            <span><Search size={20}/></span>
                            <input 
                                className="input-search shadow-none" 
                                type="text"
                                name="search"
                                value={searchText}
                                placeholder="Search"
                                onChange={searchHandler}
                            />
                        </div>
                        <div className="listview mt-3">
                            <div className="container-listview-sorter">
                                <div className="listview-sorters">
                                    <ListviewSorter hideClass = "d-none d-md-block" onClick={() => sorterHandler("id")}>
                                        Photo
                                    </ListviewSorter>
                                    <ListviewSorter onClick={() => sorterHandler("location")}>Location</ListviewSorter>
                                    <ListviewSorter onClick={() => sorterHandler("caption")}>Caption</ListviewSorter>
                                    <ListviewSorter onClick={() => sorterHandler("date")}>Date</ListviewSorter>
                                </div>
                            </div>
                            <div className="container-listview-posts">
                               { postElements }
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Listview