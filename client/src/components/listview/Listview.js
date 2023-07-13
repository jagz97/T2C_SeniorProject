import React from 'react'
import { useState, useRef } from 'react'
import './listview.css'
import Navbar from '../navbar/Navbar'
import ListviewSearch from './ListviewSearch'
import ListviewSorter from './ListviewSorter'
import ListviewPost from './ListviewPost'
import ListviewUpdateModal from './ListviewUpdateModal'
import ListviewRemoveModal from './ListviewRemoveModal'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'


/*Temporary*/
import data from './tempdata'

const Listview = () => {

    const [userPosts, setUserPosts] = useState(data)

    const [renderedPosts, setRenderedPosts] = useState([])
    const [prevSorter, setPrevSorter] = useState("")

    const [showRemove, setShowRemove] = useState(false)
    const [showUpdate, setShowUpdate] = useState(false)

    // Reference to the post that we 
    // may remove or modify
    const IdRef = useRef(null)

    const searchHandler = (searchText) => {
        console.log(`Check if ${searchText} exists in posts`)
      
    }

    const sorterHandler = (sorter) => {
        setRenderedPosts((prevPosts) => {
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

    const handleUpdate = (postId, updateData) => {
        console.log(`update should happen for ${postId}`)
        const {  
            caption,
            location,
            year,
            month,
            day
        } =  updateData
        
        
        let newDate
        // if all entries have been filled in the date picker
        // set the new date otherwise the date will stay same
        if(year && month && day) {
            // Convert Month String to Number
            const monthNum = new Date(`${month}, ${day} ${year} `).getMonth() + 1
            newDate = `${year}/${monthNum}/${day}`
        }
        
        setRenderedPosts((prevPosts) => {
            return prevPosts.map((post) => {
                if(postId === post.id) {
                    return  {
                        id: post.id,
                        location: location || post.location,
                        caption: caption || post.caption,
                        date: newDate || post.date
                    }
                }
                else {
                    return post
                }
            })
        })
        setShowUpdate(false)
        IdRef.current = null
    }
    
    const handleRemove = (postId) => { 
        console.log(`post to remove ${IdRef.current}`)
        setRenderedPosts((prevPosts) => {
            let updatedPosts = [...prevPosts]
            return updatedPosts.filter((post) => {
                if(post.id !== postId) 
                    return post  
            })
        })
        
        // reset ref for the next post to be removed/updated
        IdRef.current = null
        // Maybe do a POST request here
        setShowRemove(false)
        
    }

    const postElements = renderedPosts.map((post) => (
        <ListviewPost
            key = {post.id}
            postData = {post}
            showUpdateModal = {() => {
                setShowUpdate(true)
                IdRef.current = post.id
            }}
            showRemoveModal = {() => {
                setShowRemove(true)
                IdRef.current = post.id
            }}/>
    ))

    return (
        <div>
            <Navbar/>
            <Container className="container-listview" >
                <Row className="rounded-4 mx-auto" style={{backgroundColor: "rgba(139, 44, 255, .3)"}}>
                    <Col className="rounded-4 py-2" style={{ minHeight: 500}}>
                       <ListviewSearch
                        searchHandler={searchHandler}
                       />
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

            <ListviewRemoveModal
                title="Confirm Post Deletion"
                stateShow={showRemove}
                closeModalHandler={() => {
                    IdRef.current = null
                    setShowRemove(false)
                }}
                confirmHandler={() => handleRemove(IdRef.current)}
            >
            </ListviewRemoveModal>

            <ListviewUpdateModal
                title="Edit Post"
                stateShow={showUpdate}
                closeModalHandler={() => {
                    IdRef.current = null
                    setShowUpdate(false)
                }}
                confirmHandler={handleUpdate}
                postId = {IdRef.current}
            >
            </ListviewUpdateModal>
        </div>
    )
}

export default Listview

