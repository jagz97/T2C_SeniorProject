import React, { useState, useEffect, useRef } from "react"
import Avatar from '../avatar/Avatar'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import ProfileBanner from '../../images/pexels-venelin-dimitrov-3476312.jpg'
import useAuth from "../../hooks/useAuth"
import DragAndDrop from "../dragdrop/DragAndDrop"
import { api } from '../../api/axios'

import "./CreatePost.css"





const CreatePost = () => {
    const [ profile, setProfile ] = useState({})
    const [ profilePicture, setProfilePicture ] = useState("")

    const { user } = useAuth()
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
                console.log(response.data)
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

    /*
        TODO:
            Handle the post request. When successful show an option to post again.
    */
   
   
    const [ caption, setCaption ] = useState("")
    const [ postPic, setPostPic ] = useState(null)
    const [ country, setCountry ] = useState("")
    const [ city, setCity ] = useState("")

    const [ success, setSuccess ] = useState(false)
    const [ errorImgMsg, setErrorImgMsg ] = useState("")
    const [ errorPostMsg, setErrorPostMsg ] = useState("")

    const captionLimit = 255

    const inputRef = useRef(0)
    const [ errorMessage, setErrorMessage ] = useState("")
    

    // const handleUpload = (event) => {
    //     event.preventDefault()
    //     let files
    //     if(event.type === "change") {
    //         files = event.target.files
    //     }
    //     else if(event.type === "drop") {
    //         files = event.dataTransfer.files
    //     }

    //     setErrorMessage("")
    //     if(files.length > 0) {
    //         if(!files[0].type.startsWith("image")) {
    //             setErrorImgMsg("File must be an image")
    //         }
    //         else {
    //             inputRef.current.style.border = "2px solid #b5b5b5"
    //             console.log(files[0])
    //             setPostPic(files[0])
    //         } 
    //     }
    // }

    const handleSubmit = () => {
        // do post request here.
        setErrorPostMsg("something went wrong.")
    }

    console.log("inside createpost:",postPic)

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
            <Row className="justify-content-center align-items-center gap-5 mb-5 mt-3">
                <Col className="col-12 col-md-auto ">
                    <h2 className="postcreate-img-header text-center text-md-start">Create Post</h2>
                    {/* <div className="postcreate-img-wrapper"
                        onDragOver={(event) => event.preventDefault()}
                        onDrop={handleUpload}
                        ref={inputRef}
                    >
                        {postPic ?  <p className="postcreate-img-msg">You uploaded <span className="postcreate-emphasize">{postPic.name}</span></p> : <HiOutlinePhoto size={65} color={"#b5b5b5"}/>}
                        <label htmlFor="postcreate-img">
                            {
                                postPic ? <>Drag another image or <span className="postcreate-emphasize"> browse</span> to change</>
                                :
                                <>
                                    Drop your image here or 
                                    <span className="postcreate-emphasize"> browse</span>
                                </>
                            }
                        </label>
                        <input 
                            type="file" 
                            name="postcreate-img"
                            onChange={handleUpload}
                            accept="image/*"
                            id="postcreate-img"
                        />
                    </div> */}
                    <DragAndDrop
                        picture={postPic}
                        setPicture={setPostPic}
                    />

                </Col>
                <Col className="col-12 col-md-auto ">
                    <div className="createpost-inputs">
                        <div className="createpost-caption-wrapper">
                            <label htmlFor="createpost-caption">Caption</label>
                            <textarea
                                name="caption"
                                value={caption}
                                onChange={(event) => setCaption(event.target.value) }
                                id="createpost-caption"
                                maxLength={captionLimit}
                            />
                            <p className="createpost-text-count">{caption.length} / {captionLimit}</p>
                        </div>
                        <div className="createpost-select-inputs">
                            <div className="createpost-country-wrapper">
                                <label htmlFor="createpost-country">Country</label>
                                <select 
                                    id="createpost-country"
                                    defaultValue={country}
                                    onChange={(event) => setCountry(event.target.value)}
                                >
                                    <option disabled >---Select Country---</option>
                                    <option value="United States" >United States</option>
                                </select>
                            </div>
                            <div className="createpost-city-wrapper">
                                <label htmlFor="createpost-city">City</label>
                                <select 
                                    id="createpost-city"
                                    defaultValue={city}
                                    onChange={(event) => setCity(event.target.value)}
                                >
                                    <option disabled >---Select City---</option>
                                    <option value="San Francisco" >San Francisco</option>
                                </select>
                            </div>
                        </div>
                        <button className="createpost-btn" onClick={handleSubmit}>Post</button>
                    { errorPostMsg ? <p className="error text-center">{errorPostMsg}</p>: null }
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default CreatePost