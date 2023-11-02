import React, { useState, useEffect } from 'react'
import './Profile.css'
import Avatar from '../avatar/Avatar'
import PlaceVisited from './PlaceVisited'
import ProfilePost from './ProfilePost'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import ProfileBanner from '../../images/pexels-venelin-dimitrov-3476312.jpg'
import { BsGrid3X3 } from 'react-icons/bs'

import useAuth from "../../hooks/useAuth"
import { api } from '../../api/axios'

const Profile = () => {
    const [ profile, setProfile ] = useState({})
    const [profilePicture, setProfilePicture] = useState("")
    const { user } = useAuth()
    console.log(profile)
    useEffect(() => {
        const getProfile = async () => {
            const headerOptions = {
                headers: {
                    Authorization: `${user.accesstoken}`,
                }
            }
            try {
                const response = await api.get("/profile/getProfile", headerOptions)
                const { profilePicture }  = response.data
                
                // convert buffer array into typed array
                const buffer = new Uint8Array(profilePicture.data.data) 
                
                // convert the new typed array into base64 string
                const base64str = btoa(String.fromCharCode.apply(null, buffer)) 
                
                // form the requried value for the img element's src attribute and set it to state
                setProfilePicture(`data:${profilePicture.type};base64,${base64str}`) 
                setProfile(response.data)
        
            } catch (error) {
                const errorMessage = error.response?.data?.message
                // if we get a an error response from server display it
                // otherwise we display error directly from axios library
                if(errorMessage) {
                    console.log(errorMessage)
                }
                else {
                    console.log(error.message)
                }
            }
        }

        getProfile()
    }, [])

    return (
        <div>
            <Container fluid>
                <Row>
                    <Col className="px-0" style={{position:"relative"}}>
                        <img src={ProfileBanner} alt="user profile banner" className="profile-banner"/>
                            <div className="profile-picture-wrapper">
                                <Avatar 
                                    src={profilePicture} 
                                    alt={`User Profile Picture`} 
                                    size={235} 
                                    border="15px solid rgba(139,44,255,0.4)"
                                />
                            </div>
                               
                            <div className="profile-about">                      
                                {profile && <p className="profile-username">{profile.firstName} {profile.lastName}</p>}  
                                {/* 255 character placeholder text */}
                                <p className="profile-bio">
                                    Lorem ipsum dolor sit amet, 
                                    consectetuer adipiscing elit. 
                                    Aenean commodo ligula eget dolor. Aenean massa. 
                                    Cum sociis natoque penatibus et magnis dis parturient montes, 
                                    nascetur ridiculus mus. Donec quam felis, 
                                    ultricies nec, pellentesque eu, pretium quis,
                                </p>
                            </div>
                            
                    </Col>
                </Row>

                <Row className="profile-visited-row mx-auto">
                    <Col className="places-visited-headings text-center text-xl-start">
                        <h2 className="places-visited-heading">Places Visited</h2>
                        <p className="places-visited-subheading">Ratings of the Experiences</p>
                    </Col>
                    <Col className="col-12 d-flex flex-wrap justify-content-center justify-content-center" style={{gap:15}}> 
                        <PlaceVisited rating={2}/>
                        <PlaceVisited rating={5}/>
                        <PlaceVisited rating={3}/>     
                    </Col>
                </Row>
                
                <Row className="profile-posts-row mx-auto justify-content-center align-items-center g-4 my-5">
                    {/* Posts Section Header */}
                    <Col className="col-12">
                        <div className="d-flex flex-column align-items-center" style={{height:"100%"}}>
                            <div className="profile-post-line"></div>
                            <div className="profile-post-header mt-2 mx-auto d-flex align-items-center gap-2">
                                <BsGrid3X3 size={22}/>posts
                            </div>
                        </div>
                    </Col>
                    
                    {/*Profile Post Content */}
                    {/* Hard Code few Components for testing */}
                    <Col className="col-12 d-flex flex-wrap justify-content-center justify-content-center" style={{gap:20}}>
                        <ProfilePost/>
                        <ProfilePost/>
                        <ProfilePost/>
                        <ProfilePost/>
                    </Col>
                </Row>
            </Container>
        </div>

    )
}

export default Profile