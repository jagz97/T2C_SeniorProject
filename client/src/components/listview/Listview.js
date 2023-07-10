import React from 'react'
import { useState, useEffect, useRef } from 'react'
import './listview.css'
import Navbar from '../navbar/Navbar'
import ListviewSorter from './ListviewSorter'
import ListviewPost from './ListviewPost'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'


import {
    Search,
} from 'akar-icons'

/*Temporary*/
import data from './tempdata'

const Listview = () => {

    const [userPosts, setUserPosts] = useState(data)
    const [searchText, setSearchText] = useState("")
    const [prevSorter, setPrevSorter] = useState("")

    const [showRemove, setShowRemove] = useState(false)
    const [showUpdate, setShowupdate] = useState(false)

    const [editData, setEditData] = useState({caption: "", location: "", date: ""})
    
    // Reference to the post that we 
    // may remove or modify
    const IdRef = useRef(null)

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


    const updateHandler = (postId) => {
        if(!showUpdate) {
            IdRef.current = postId
            setShowupdate(true)
        }
        else {
            setUserPosts((prevPost) => {
                return prevPost.map((post) => {
                    if(post.id === postId) {
                        let k = {
                            id: post.id,
                            caption: editData.caption || post.caption,
                            location: editData.location || post.location,
                            date: editData.date || post.date
                        }
                        console.log(k)
                        return k
                    }
                    else {
                        return post
                    }
                }
                )})
            setEditData({caption:"", location:"", date:""})
            IdRef.current = null
            setShowupdate(false)
        }
    }

    const handleUpdateInputs = (event) => {
        const {value, name} = event.target
        setEditData((prevData) => ({
            ...prevData,
            [name] : value
        }))
    }
    const closeUpdate = () => setShowupdate(false)

    const removeHandler = (postId) => { 
        if(!showRemove) {
            IdRef.current = postId
            setShowRemove(true)
        }
        
        else {
            // console.log(IdRef)
            setUserPosts((prevPosts) => {
                let updatedPosts = [...prevPosts]
                return updatedPosts.filter((post) => {
                    if(post.id !== postId) 
                        return post  
                })
            })
            IdRef.current = null
            // Maybe do a POST request here
            setShowRemove(false)
        }
    }

    const closeRemove = () => {
        IdRef.current = null
        setShowRemove(false)
    }


    const postElements = userPosts.map((post) => (
        <ListviewPost
            key = {post.id}
            postData = {post}
            update = {() => updateHandler(post.id)}
            remove = {() => removeHandler(post.id)}
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

        
            <Modal show={showRemove} centered dialogClassName="listview-modal">
                <Modal.Header>
                    <Modal.Title>Confirm Post Deletion</Modal.Title>
                </Modal.Header>
                <Modal.Body ><h5>Are you sure you want to remove this Post?</h5></Modal.Body>
                <Modal.Footer>
                    <button className="listview-btn" onClick={closeRemove}>
                        Cancel
                    </button>
                    <button className="listview-btn" onClick={() => removeHandler(IdRef.current)}>
                        Delete Post
                    </button>
                </Modal.Footer>
            </Modal>
            

            <Modal show={showUpdate} centered dialogClassName="listview-modal">
                <Modal.Header>
                    <Modal.Title>Edit Post</Modal.Title>
                </Modal.Header>
                <Modal.Body >
                    <h5>Enter New Post Information</h5>
                    <textarea 
                        className="listview-update-input"
                        name="caption"
                        value= {editData.caption}
                        onChange={handleUpdateInputs}
                        placeholder="Caption" 
                    />   
                    <div className="listview-update-container">
                        <input 
                            className="listview-update-input"
                            type="text" 
                            name="location"
                            value={editData.location}
                            onChange={handleUpdateInputs}
                            placeholder="Location" 
                        />
                        <input 
                            className="listview-update-input"
                            name="date"
                            value={editData.date}
                            onChange={handleUpdateInputs}
                            type="date" 
                        />
                    </div>

                </Modal.Body>
                <Modal.Footer>
                    <button className="listview-btn" onClick={closeUpdate}>
                        Cancel
                    </button>
                    <button className="listview-btn" onClick={() => updateHandler(IdRef.current)}>
                        Confirm Edit
                    </button>
                </Modal.Footer>
            </Modal>

        </div>
    )
}

export default Listview