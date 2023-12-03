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
import ExperienceRating from "./ExperienceRating"
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

    const [ starRating, setStarRating ] = useState(1)

    const [ attractionRatings, setAttractionRatings ] = useState(1)
    const [ restaurantRatings, setRestaurantRatings ] = useState(1)
    const [ hotelRatings, setHotelRatings ] = useState(1)

    const [ success, setSuccess ] = useState(false)
  
    const [ errorMsg, setErrorMsg ] = useState("")
    
    const descriptionLimit = 255
    const textLimit = 100

    const handleReset = () => {
        setSuccess(false)
        setDescription("")
        setStarRating(1)
        setHotelName("")
        setRestaurantName("")
        setRestaurantCuisine("")
        setHotelLocation("")
        setHotelRatings(1)
        setRestaurantLocation("")
        setRestaurantRatings(1)
        setAttractionName("")
        setAttractionLocation("")
        setAttractionDescription("")
        setAttractionRatings(1)
        setCountry("")
        setRegion("")
        setExpPic(null)
    }
   
    const handleSubmit = async (event) => {
        event.preventDefault()
      
        setErrorMsg("")

        if(!expPic) {
            setErrorMsg("An image is required.")
            return
        }

        const data = {
            description,
            city_country: `${region}, ${country}`,
            starRating,
            hotelName,
            restaurantName,
            restaurantCuisine,
            hotelLocation,
            hotelRatings,
            restaurantLocation,
            restaurantRatings,
            attractionName,
            attractionLocation,
            attractionDescription,
            attractionRatings
        }
        
        const formData = new FormData()
        formData.append("experiencePic", expPic)
        for(const key in data) {
            if(!data[key]) {
                setErrorMsg("All input fields are required.")
                return
            } 
            formData.append(key, data[key])
        }

        const headerOptions = {
            headers: {
                Authorization: `${user.accesstoken}`,
            }
        }

        try {
            const response = await api.post("/profile/createExperience", formData, headerOptions)
            if(response.status === 200) {
                setSuccess(true)
            }
        } catch (error) {
            const errorMessage = error.response?.data?.message
            // if we get a an error response from server display it
            // otherwise we display error directly from axios library
            if(errorMessage) {
                setErrorMsg(errorMessage)
            }
            else {
                setErrorMsg(error.message)
            }
        }
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
            <Row className="expcreate-row justify-content-center gap-5 mt-5">
                {
                 success ? 
                 <Col className="col-12 text-center expcreate-reset-col mb-5">
                     <p className="success">Experience Successfully Created</p>
                     <p className="expcreate-reset" onClick={handleReset}>Click to make another Experience.</p>
                </Col>
                :
                <>
                    <Col className="col-12 col-md-auto">
                    <h2 className="expcreate-img-header text-center text-md-start">Create Experience</h2>
                        <DragAndDrop
                            picture={expPic}
                            setPicture={setExpPic}
                        />
                    </Col>
                    <Col className="col-12 col-md-auto">
                        { errorMsg ? <p className="error text-center m-0">{errorMsg}</p> : null}
                        <div className="expcreate-inputs">
                            <form className="expcreate-form">
                                <ExperienceTextArea
                                    name="Experience Description"
                                    value={description}
                                    onChange={(event) => setDescription(event.target.value)}
                                    id="expcreate-description"
                                    max={descriptionLimit}
                                /> 
                                <div className="expcreate-destination-inputs">
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
                                </div>
                                <div className="expcreate-hotel-inputs">
                                    <ExperienceTextInput
                                        name="Hotel Name"
                                        value={hotelName}
                                        onChange={(event) => setHotelName(event.target.value)}
                                        id="expcreate-hotelname"
                                        max={textLimit}
                                    />
                                    <ExperienceTextInput
                                        name="Hotel Location"
                                        value={hotelLocation}
                                        onChange={(event) => setHotelLocation(event.target.value)}
                                        id="expcreate-hotellocation"
                                        max={textLimit}
                                    />
                                </div>
                                <div className="expcreate-restaurant-inputs">
                                    <ExperienceTextInput
                                        name="Restaurant Name"
                                        value={restaurantName}
                                        onChange={(event) => setRestaurantName(event.target.value)}
                                        id="expcreate-restaurantname"
                                        max={textLimit}
                                    />
                                    <ExperienceTextInput
                                        name="Restaurant Location"
                                        value={restaurantLocation}
                                        onChange={(event) => setRestaurantLocation(event.target.value)}
                                        id="expcreate-restaurantlocation"
                                        max={textLimit}
                                    />
                                    <ExperienceTextInput
                                        name="Restaurant Cuisine"
                                        value={restaurantCuisine}
                                        onChange={(event) => setRestaurantCuisine(event.target.value)}
                                        id="expcreate-restaurantcuisine"
                                        max={textLimit}
                                    />
                                </div>
                                <div className="expcreate-attraction-textinputs">
                                    <ExperienceTextInput
                                        name="Attraction Name"
                                        value={attractionName}
                                        onChange={(event) => setAttractionName(event.target.value)}
                                        id="expcreate-attractioncuisine"
                                        max={textLimit}
                                    />
                                    <ExperienceTextInput
                                        name="Attraction Location"
                                        value={attractionLocation}
                                        onChange={(event) => setAttractionLocation(event.target.value)}
                                        id="expcreate-attractionlocation"
                                        max={textLimit}
                                    />
                                </div>
                                <div className="expcreate-attraction-textarea">
                                    <ExperienceTextArea
                                        name="Attraction Description"
                                        value={attractionDescription}
                                        onChange={(event) => setAttractionDescription(event.target.value)}
                                        id="expcreate-attractiondesc"
                                        max={descriptionLimit}
                                    />
                                </div>
                                <div className="experience-footer">
                                    <ExperienceRating
                                        name="Overall Experience"
                                        onClick={(value) => setStarRating(value)}
                                        rating={starRating}
                                    />
                                    <ExperienceRating
                                        name="Hotel Rating"
                                        onClick={(value) => setHotelRatings(value)}
                                        rating={hotelRatings}
                                    />
                                    <ExperienceRating
                                        name="Restaurant Rating"
                                        onClick={(value) => setRestaurantRatings(value)}
                                        rating={restaurantRatings}
                                    />
                                    <ExperienceRating
                                        name="Attraction Rating"
                                        onClick={(value) => setAttractionRatings(value)}
                                        rating={attractionRatings}
                                    />
                                <button className="expcreate-btn" onClick={handleSubmit}>Create</button>
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