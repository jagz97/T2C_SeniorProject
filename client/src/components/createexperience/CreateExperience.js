import React, { useState, useEffect } from "react"
import Avatar from '../avatar/Avatar'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import ProfileBanner from '../../images/pexels-venelin-dimitrov-3476312.jpg'
import useAuth from "../../hooks/useAuth"
import DragAndDrop from "../dragdrop/DragAndDrop"
import ExperienceTextInput from "./ExperienceTextInput"
import ExperienceTextArea from "./ExperienceTextArea"
import { CountryDropdown, RegionDropdown } from "react-country-region-selector"
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
    const [ region, setRegion ] = useState("")

    const [ hotelName, setHotelName ] = useState("")
    const [ hotelLocation, setHotelLocation ] = useState("")

    const [ restaurantName, setRestaurantName] = useState("")
    const [ restaurantLocation, setRestaurantLocation ] = useState("")
    const [ restaurantCuisine, setRestaurantCuisine ] = useState("")

    const [ attractionName, setAttractionName ] = useState("")
    const [ attractionLocation, setAttractionLocation] = useState("")
    const [ attractionDescription, setAttractionDescription ] = useState("")

    const [ starRating, setStarRating ] = useState(0)
    const [ attractionRating, setAttractionRating ] = useState(0)
    const [ restaurantRating, setRestaurantRating ] = useState(0)
    const [ hotelRating, setHotelRating ] = useState(0)

    const [ success, setSuccess ] = useState(false)
    const [ errorExpImg, setErrorExpImg ] = useState("")
    
    const descriptionLimit = 255

    const handleReset = () => {
        console.log("Reset.")
    }
    console.log(restaurantName)
    console.log(restaurantName.length)
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
                            
                        <div className="profile-about-container">                      
                            {profile && <p className="profile-username">{profile.firstName} {profile.lastName}</p>}  
                            {/* 255 character placeholder text */}
                            <div className="profile-bio-wrapper">
                                <p className="profile-bio">
                                    {profile.bio}
                                </p>
                            </div>
                        </div>  
                </Col>
            </Row>
            <Row className="expcreate-row justify-content-center align-items-end gap-5 mt-1">
                {
                 success ? 
                 <Col className="col-12 text-center expcreate-reset-col">
                     <p className="success">Experience Successfully Created</p>
                     <p className="expcreate-reset" onClick={handleReset}>Click to make another post.</p>
                </Col>
                :
                <>
                    <Col className="col-12 col-md-auto">
                    <h2 className="expcreate-img-header text-center text-md-start">Create Experience</h2>
                        { errorExpImg ? <p className="error text-center m-0">{errorExpImg}</p>: null }
                        <DragAndDrop
                            picture={expPic}
                            setPicture={setExpPic}
                        />
                    </Col>
                    <Col className="col-12 col-md-auto">
                        <div className="expcreate-inputs">
                            <form className="expcreate-form">
                                <ExperienceTextArea
                                    name="Experience Description"
                                    value={restaurantName}
                                    onChange={(event) => setDescription(event.target.value)}
                                    id="expcreate-description"
                                    max={100}
                                /> 
                                 <div className="expcreate-country-wrapper">
                                    <label htmlFor="expcreate-country">Country</label>
                                    <CountryDropdown
                                        value={country}
                                        onChange={(value) => setCountry(value)}
                                        defaultOptionLabel="Select Country"
                                        priorityOptions={["CA", "US",]}
                                        id="expcreate-country"
                                        className="expcreate-country"
                                    />
                                </div>
                                <div className="expcreate-region-wrapper">
                                    <label htmlFor="expcreate-region">Region</label>
                                    <RegionDropdown
                                        country={country}
                                        value={region}
                                        onChange={(value) => setRegion(value)}
                                        id="expcreate-region"
                                        showDefaultOption
                                        defaultOptionLabel="Select Region"
                                        blankOptionLabel="No Country selected yet"
                                        className="expcreate-region"
                                    />
                                </div>
                                <ExperienceTextInput
                                    name="Hotel Name"
                                    value={hotelName}
                                    onChange={(event) => setHotelName(event.target.value)}
                                    id="expcreate-hotelname"
                                    max={100}
                                />
                                <ExperienceTextInput
                                    name="Hotel Location"
                                    value={hotelLocation}
                                    onChange={(event) => setHotelLocation(event.target.value)}
                                    id="expcreate-hotellocation"
                                    max={100}
                                />
                                <ExperienceTextInput
                                    name="Restaurant Name"
                                    value={restaurantName}
                                    onChange={(event) => setRestaurantName(event.target.value)}
                                    id="expcreate-restaurantname"
                                    max={100}
                                />
                                <ExperienceTextInput
                                    name="Restaurant Location"
                                    value={restaurantLocation}
                                    onChange={(event) => setRestaurantLocation(event.target.value)}
                                    id="expcreate-restaurantlocation"
                                    max={100}
                                />
                                <ExperienceTextInput
                                    name="Restaurant Cuisine"
                                    value={restaurantCuisine}
                                    onChange={(event) => setRestaurantCuisine(event.target.value)}
                                    id="expcreate-restaurantcuisine"
                                    max={100}
                                />
                                <ExperienceTextInput
                                    name="Attraction Name"
                                    value={attractionName}
                                    onChange={(event) => setAttractionName(event.target.value)}
                                    id="expcreate-attractioncuisine"
                                    max={100}
                                />
                                <ExperienceTextInput
                                    name="Attraction Location"
                                    value={attractionLocation}
                                    onChange={(event) => setAttractionLocation(event.target.value)}
                                    id="expcreate-attractionlocation"
                                    max={100}
                                />
                                <ExperienceTextArea
                                    name="Attraction Description"
                                    value={attractionName}
                                    onChange={(event) => setAttractionDescription(event.target.value)}
                                    id="expcreate-attractiondesc"
                                    max={100}
                                /> 
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