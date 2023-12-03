import React, { useState, useEffect } from "react"
import Avatar from '../avatar/Avatar'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import ProfileBanner from '../../images/pexels-venelin-dimitrov-3476312.jpg'
import useAuth from "../../hooks/useAuth"
import DragAndDrop from "../dragdrop/DragAndDrop"
import { CountryDropdown, RegionDropdown } from "react-country-region-selector"
import { api } from '../../api/axios'

import "./CreatePost.css"

const CreatePost = () => {
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

    /*Below will stay*/

    const [ caption, setCaption ] = useState("")
    const [ postPic, setPostPic ] = useState(null)
    const [ country, setCountry ] = useState("")
    const [ region, setRegion ] = useState("")

    const [ success, setSuccess ] = useState(false)
    const [ errorPostMsg, setErrorPostMsg ] = useState("")

    // console.log(country,city,caption,postPic)

    const captionLimit = 255
    // console.log(caption,postPic,country,city)
    const handleSubmit = async () => {
        
        setErrorPostMsg("")
    
        if(!caption || !postPic || !country || !region) {
            setErrorPostMsg("All input fields are required.")
            return
        }

        // if all fields are populated then create
        // formdata object then send to server.
        const data = new FormData()
        data.append("caption",caption)
        data.append("country",country)
        data.append("city",region)
        data.append("postPic", postPic)

        const headerOptions = {
            headers: {
                Authorization: `${user.accesstoken}`,
            }
        }

        try {
            const response = await api.post("posts/createPost", data, headerOptions)
            if(response.status === 200) {
                setSuccess(true)
            }
           
        } catch (error) {
            const errorMessage = error.response?.data?.message
                // if we get a an error response from server display it
                // otherwise we display error directly from axios library
                if(errorMessage) {
                    setErrorPostMsg(errorMessage)
                }
                else {
                    console.log(error.message)
                }
        }

    }


    const handleReset = () => {
        setCaption("")
        setCaption("")
        setPostPic(null)
        setCountry("")
        setRegion("")
        setSuccess(false)
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
            <Row className="createpost-row justify-content-center align-items-center gap-5 mt-5">
                {
                 success ? 
                 <Col className="col-12 text-center createpost-reset-col">
                     <p className="success">Post Successfully Created</p>
                     <p className="createpost-reset" onClick={handleReset}>Click to make another post.</p>
                </Col>
                 : 
                <>
                    <Col className="col-12 col-md-auto align-self-start">
                        <h2 className="postcreate-img-header text-center text-md-start">Create Post</h2>
                        <DragAndDrop
                            picture={postPic}
                            setPicture={setPostPic}
                        />
                    </Col>
                    <Col className="col-12 col-md-auto">
                    { errorPostMsg ? <p className="error text-center m-0">{errorPostMsg}</p>: null }
                        <div className="createpost-inputs">
                            <div className="createpost-caption-wrapper">
                                <label htmlFor="createpost-caption">Caption</label>
                                <textarea
                                    name="caption"
                                    value={caption}
                                    onChange={(event) => setCaption(event.target.value) }
                                    id="createpost-caption"
                                    maxLength={captionLimit}
                                    required
                                />
                                <p className="createpost-text-count">{caption.length} / {captionLimit}</p>
                            </div>
                            <div className="createpost-select-inputs">
                                <div className="createpost-country-wrapper">
                                    <label htmlFor="createpost-country">Country</label>
                                    <CountryDropdown
                                        value={country}
                                        onChange={(value) => setCountry(value)}
                                        defaultOptionLabel="Select Country"
                                        priorityOptions={["CA", "US",]}
                                        id="createpost-country"
                                    />
                                </div>
                                <div className="createpost-region-wrapper">
                                    <label htmlFor="createpost-region">Region</label>
                                    <RegionDropdown
                                        country={country}
                                        value={region}
                                        onChange={(value) => setRegion(value)}
                                        id="createpost-region"
                                        showDefaultOption
                                        defaultOptionLabel="Select Region"
                                        blankOptionLabel="No Country selected yet"
                                    />
                                </div>
                            </div>
                            <button className="createpost-btn" onClick={handleSubmit}>Post</button>
                        </div>
                    </Col>
                </>
                }
            </Row>
        </Container>
    )
}

export default CreatePost