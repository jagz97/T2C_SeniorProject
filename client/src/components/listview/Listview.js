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
import backgroundImage from '../../images/pexels-venelin-dimitrov-3476312.jpg'
import { BsGrid3X3 } from 'react-icons/bs'

/*Temporary*/
import data from './tempdata'

const Listview = () => {

    const [userPosts, setUserPosts] = useState(data)
    const [searchText, setSearchText] = useState("")
    const [prevSorter, setPrevSorter] = useState("")
    const [showRemove, setShowRemove] = useState(false)
    const [showUpdate, setShowUpdate] = useState(false)

    // Reference to the post that we 
    // may remove or modify
    const IdRef = useRef(null)

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
        
        setUserPosts((prevPosts) => {
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
        setUserPosts((prevPosts) => {
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


    const populatePostArray = (postArray) => {
        return postArray.map((post) => (
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
    }

  
    let postElements // arr of JSX either with all posts or filtered posts

    // if text is in search bar filter through state array
    // wrap the filtered posts in ListviewPost JSX
    if(searchText) {
        const searchQuery = searchText.toLowerCase()
        const filteredPosts = userPosts.filter((post) => {
            return (
                post.location.toLowerCase().search(searchQuery) !== -1 ||
                post.caption.toLowerCase().search(searchQuery) !== -1 ||
                post.date.toLowerCase().search(searchQuery) !== -1 
            )
        })

        postElements = populatePostArray(filteredPosts)
    }
    else {
        // just wrap the state array in ListviewPost JSX
        postElements = populatePostArray(userPosts)
    }
    console.log(postElements)
    return (
        <div>
            <Navbar/>
            <Container className="my-5" fluid>
                <Row className="container-intro-img">
                    <img className="intro-img" src={backgroundImage} alt="purple field"/>
                </Row>
                <Row className="container-listview">
                    <Col className="col-12 col-sm-10 col-xxl-8 mx-auto">
                        <div className="d-flex align-items-center gap-3 ms-4 my-5">
                            <BsGrid3X3 size={100}/> <span className="intro-text">posts</span>
                        </div>
                    </Col>
                    <Col className="rounded-4 col-12 col-sm-10 col-xxl-8 mx-auto" style={{backgroundColor: "rgba(139, 44, 255, .3)"}}>
                       <div className="rounded-4 py-2" style={{ minHeight: 500}}>
                            <ListviewSearch
                                 setSearchText={setSearchText}
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
                                { (postElements.length && postElements) || <div className="no-posts-message">no posts were found</div>} 
                                </div>
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

