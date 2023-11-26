import React, { useState, useEffect } from "react"
import Avatar from '../avatar/Avatar'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import ProfileBanner from '../../images/pexels-venelin-dimitrov-3476312.jpg'
import useAuth from "../../hooks/useAuth"
import DragAndDrop from "../dragdrop/DragAndDrop"
import { api } from '../../api/axios'

import "./CreateExperience.css"


const CreateExperience = () => {
    const [ profile, setProfile ] = useState({})
    const [ profilePicture, setProfilePicture ] = useState("")

    const { user } = useAuth()
    // fetch pfp and bio
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
                const profilePicData = (profilePicture.data) 
                // form the requried value for the img element's src attribute and set it to state
                setProfilePicture(`data:${profilePicture.type};base64,${profilePicData}`) 
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
    }, [user.accesstoken])

    
    const [ expPic, setExpPic ] = useState(null)
    const [ description, setDescription ] = useState("")
    const [ country, setCountry ] = useState("")
    const [ city, setCity ] = useState("")

    const [ hotelName, setHotelName ] = useState("")
    const [ hotelLocation, setHotelLocation ] = useState("")

    const [ restaurantName, setRestaurantName] = useState("")
    const [ restaurantCuisine, setRestaurantCuisine ] = useState("")
    const [ restaurantLocation, setRestaurantLocation ] = useState("")

    const [ attractionName, setAttractionName ] = useState("")
    const [ attractionLocation, setAttractionLocation] = useState("")

    const [ overallRating, setOverallRating ] = useState(0)
    const [ attractionRating, setAttractionRating ] = useState(0)
    const [ restaurantRating, setRestaurantRating ] = useState(0)

    const [ success, setSuccess ] = useState(false)
    const [ errorExpMsg, setErrorExpMsg ] = useState("")
    
    const descriptionLimit = 255

    const handleReset = () => {
        console.log("Reset.")
    }

    return (
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
                                {profile.bio}
                            </p>
                        </div>  
                </Col>
            </Row>
            <Row className="createexp-row justify-content-center align-items-end gap-5 mt-1">
                {
                 success ? 
                 <Col className="col-12 text-center createexp-reset-col">
                     <p className="success">Experience Successfully Created</p>
                     <p className="createexp-reset" onClick={handleReset}>Click to make another post.</p>
                </Col>
                :
                <>
                    <Col className="col-12 col-md-auto">
                    <h2 className="expcreate-img-header text-center text-md-start">Create Experience</h2>
                        { errorExpMsg ? <p className="error text-center m-0">{errorExpMsg}</p>: null }
                        <DragAndDrop
                            picture={expPic}
                            setPicture={setExpPic}
                        />
                    </Col>
                    <Col className="col-12 col-md-auto">
                        <div className="expcreate-inputs">
                            <form className="expcreate-form">
                                <div className="expcreate-caption-wrapper">
                                    <label htmlFor="createxp-caption">Caption</label>
                                    <textarea
                                        name="description"
                                        value={description}
                                        onChange={(event) => setDescription(event.target.value) }
                                        id="expcreate-description"
                                        maxLength={descriptionLimit}
                                        required
                                    />
                                <p className="expcreate-text-count">{description.length} / {descriptionLimit}</p>
                                </div>
                                <div className="expcreate-input-row">
                                    <div className="expcreate-textinput-wrapper">
                                        <label htmlFor="exp-hotel">Hotel</label>
                                        <input
                                            type="text"
                                            name=""
                                            // value={}
                                            // onChange={}
                                            id=""
                                        />
                                    </div>
                                    <div className="expcreate-textinput-wrapper">
                                        <label htmlFor="exp-hotel">Hotel</label>
                                        <input
                                            type="text"
                                            name=""
                                            // value={}
                                            // onChange={}
                                            id=""
                                        />
                                    </div>
                                </div>
                            </form>
                        </div>
                    </Col>
                </>
                }
            </Row>
        </Container>
    )
}

export default CreateExperience