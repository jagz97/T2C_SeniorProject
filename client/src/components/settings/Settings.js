import React, {useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import Avatar from "../avatar/Avatar"
import ToggleButton from "./ToggleButton"
import Container from "react-bootstrap/Container"
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"
import Modal from 'react-bootstrap/Modal'
import ProfileBanner from "../../images/pexels-venelin-dimitrov-3476312.jpg"
import "./Settings.css"

import useAuth from "../../hooks/useAuth"
import { api } from "../../api/axios"

import  {
    MdOutlineNotifications,
    MdOutlineContactSupport,
    MdOutlinePersonSearch,
    MdLogout,
    MdLockOutline,
    MdLockReset,
    MdOutlineEditNote,
    MdOutlinePhotoCamera,
} from "react-icons/md"

const MAX_AGE = 110
const MIN_AGE = 18
const ages = [] //stores option elements for select
for(let i = MIN_AGE; i <= MAX_AGE; i++) {
    ages.push(<option value={i} key={i}>{i}</option>)
}

const Settings = () => {
    
    const [ profilePicture, setProfilePicture ] = useState(null)

    const [ firstName, setFirstName ] = useState()
    const [ lastName, setLastName ] = useState("")
    const [ age, setAge ] = useState("")
    const [ gender, setGender ] = useState("")
    const [ bio, setBio ] = useState("")
    const [ bioText, setBioText ] = useState("")
    const [ bioModal, setBioModal ] = useState(false)
    const [ settingsPfp, setSettingsPfp ] = useState(null)

    const [ reminders, setReminders ] = useState(false)
    const [ matching, setMatching ] = useState(false)
    const [ privacy, setPrivacy ] = useState(false)

    const [ successMessage, setSuccessMessage] = useState("")
    const [ errorMessage , setErrorMessage] = useState("")

    const navigate = useNavigate()
    const { user, logout } = useAuth()

    const maxCount = 255

    const handleBioSave = async () => {
        setSuccessMessage("")
      
        const headerOptions = {
            headers: {
                Authorization: `${user.accesstoken}`,
            }
        }
        try {
            const response = await api.post("/profile/updateBio", { bio }, headerOptions)
            console.log(response)
            if(response.status === 200) {
                setSuccessMessage("Bio Updated Successfully.")
                setBioText(bio)
                setErrorMessage("")
            } 
            
                
        } catch (error) {
            console.log(error)
        }
        setBioModal(false)
    }

    const handleUpload = (event) => {
        const { files } = event.target
        setErrorMessage("")
        if(files.length > 0) {
            if(!files[0].type.startsWith("image")) {
                setErrorMessage("File must be an image")
            }
            else {
                console.log(files[0])
                setSettingsPfp(files[0])
            }
        }
    }
   
    useEffect(() => {
        const fetchProfile = async () => {
            const headerOptions = {
                headers: {
                    Authorization: `${user.accesstoken}`,
                }
            }

            try {
                const response = await api.get("/profile/getProfile", headerOptions)
                const { data } = response
                const { profilePicture }  = response.data
                
                // convert buffer array into typed array
                const profilePicData = (profilePicture.data) 
                
                // form the requried value for the img element's src attribute and set it to state
                setProfilePicture(`data:${profilePicture.type};base64,${profilePicData}`) 
                setFirstName(data?.firstName || "")
                setLastName(data?.lastName || "")
                setAge(data?.age || "")
                setGender(data?.gender || "")
                setBio(data?.bio || "")
                setBioText(data?.bio || "")
    
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
        fetchProfile()
    }, [user.accesstoken]) 

    const handleSave = async () => {
        
        const newData = {
            firstName,
            lastName,
            age ,
            gender,
            bio,
        }
      
        console.log("Data we will post:",newData)


        setErrorMessage("")
        setSuccessMessage("")

        if(!firstName || !lastName || !age || !gender) {
            setErrorMessage("Input fields cannot be empty.")
            return
        }

        try {
            const headerOptions = {
                headers: {
                    Authorization: `${user.accesstoken}`,
                }
            }

            if(settingsPfp) {
                const data = new FormData()
                data.append("profilePic", settingsPfp)
                const pfpResponse = await api.post("/profile/updateProfilePic", data, headerOptions)
                console.log(pfpResponse)
            }

            const response = await api.post("profile/createProfile", newData, headerOptions)
            console.log(response)
            if(response.status === 200) {
                setSuccessMessage("Profile Updated Successfully.")
            }
        } catch (error) {
            const errorMessage = error.response?.data?.message || "Error Occured."
            setErrorMessage(errorMessage)
        }
    }

    const handleBioClose = () => {
       setBioModal(false)
    }
    return (
        <Container fluid>
            <Row>
                <Col className="px-0" style={{position:"relative"}}>
                    <img src={ProfileBanner} alt="user profile banner" className="settings-banner"/>
                    <div className="profile-picture-wrapper">
                        <Avatar 
                            src={ settingsPfp ? URL.createObjectURL(settingsPfp) : null || profilePicture } 
                            alt={`User Profile Picture`} 
                            size={235} 
                            border="15px solid rgba(139,44,255,0.4)"
                        />
                    </div>
                    <div className="profile-about">    
                        <div className="settings-bio-control" onClick={() => setBioModal(true)}>
                            <MdOutlineEditNote siz={20}/>Edit Bio
                        </div>
                        {/* 255 character placeholder text */}
                        <p className={`profile-bio ${!bioText && "text-muted"}`}>
                          {
                            bioText ? bioText : "You do not have a bio yet."
                          }
                        </p>
                    </div>
                    {
                        successMessage && <p className="text-center success">{successMessage}</p> 
                    }
                    
                </Col>
            </Row>
            <Row className="justify-content-center mb-5">
                <Col className="col-12 col-md-auto mb-3 mb-md-0" >
                    <div className="container-settings">
                        <div className="settingsfname-wrapper">    
                            <label htmlFor="settingsfname">First Name</label>
                            <input
                                type="text"
                                name="first name"
                                value={firstName}
                                placeholder="First Name"
                                onChange={(event) => setFirstName(event.target.value)}
                                id="settingsfname"
                            />
                        </div>
                        <div className="settings-dropdown">
                            <select 
                                    name="gender" 
                                    defaultValue={gender} 
                                    value={gender}
                                    onChange={(event) => setGender(event.target.value)} 
                                    required
                                >
                                    <option value="" disabled >{gender}</option>
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                    <option value="Other">Other</option>
                            </select>
                            <select name="age" defaultValue={age} value={age} onChange={(event) => setAge(event.target.value)} required>
                                <option value="" disabled>{age}</option>
                                {
                                    ages
                                }
                            </select>
                        </div>
                        <label className="settings-control" htmlFor="settings-file-input">
                                <MdOutlinePhotoCamera size={20}/>
                                Edit Profile Picture
                                <input 
                                    type="file" 
                                    name="pfp"
                                    onChange={handleUpload}
                                    accept="image/*"
                                    id="settings-file-input"
                                />
                        </label> 
                        <div onClick={() => navigate("/passwordreset")} className="settings-control settings-recover-pw">
                            <MdLockReset size={20}/>
                            Recover Password
                        </div>
                        
                        <div onClick={logout} className="settings-control settings-logout"><MdLogout size={20}/><span>Logout</span></div>
                    </div>
                </Col>
                
                <Col className="col-12 col-md-auto">
                        <div className="container-settings settings-right mt-2 mt-md-0">
                        <div className="settingslname-wrapper">
                            <label htmlFor="settingslname">Last Name</label>
                            <input
                                type="text"
                                name="Last Name"
                                value={lastName}
                                placeholder="Last Name"
                                onChange={(event) => setLastName(event.target.value)}
                                id="settingslname"
                            />
                        </div>
                            <div className="settings-control toggle-btn-wrapper">
                                <MdOutlineNotifications size={20}/>
                                <span>Reminders</span>
                                <ToggleButton toggleState={reminders} setToggleState={setReminders}/>
                            </div> 
                            <div className="settings-control toggle-btn-wrapper">
                                <MdOutlinePersonSearch size={20}/>
                                <span>Matching</span>
                                <ToggleButton toggleState={matching} setToggleState={setMatching}/></div>
                            <div className="settings-control toggle-btn-wrapper">
                                <MdLockOutline size={20}/>
                                <span>Privacy</span>
                                <ToggleButton toggleState={privacy} setToggleState={setPrivacy}/>
                            </div>
                            <div onClick={() => navigate("/help")} className="settings-control settings-help">
                                <MdOutlineContactSupport size={20}/>
                                <span>Contact Us</span>
                            </div>
                        </div>
                </Col>
                                
            </Row>
            <Row className="justify-content-center mb-5">
                <Col className="col-auto">
                    <p className="error text-center">{errorMessage.length !== 0 ? errorMessage : null}</p>
                    <button className="settings-btn settings-deactivate">Deactivate Account</button>
                    <button className="settings-btn settings-submit" onClick={handleSave}>Save Changes</button>
                </Col>
            </Row>
            <Modal 
                show={bioModal} 
                onHide={() => setBioModal(false)}
                animation={false} 
                dialogClassName="edit-bio-modal"
                centered
            >
                <Modal.Header className="pb-0">
                    <Modal.Title className="settings-editbio-header">Edit Bio</Modal.Title>
                </Modal.Header>
                <Modal.Body className="pb-0">
                    <textarea
                        className="settings-editbio"
                        value={bio}
                        onChange={(event) => setBio(event.target.value)}
                        maxLength={maxCount}
                    ></textarea>
                    <p className="settings-editbio-count">{bio.length} / {maxCount}</p>
                </Modal.Body>
                <Modal.Footer className="border-0 pb-3 pt-2">
                <button className="edit-bio-close" onClick={handleBioClose}>
                    Close
                </button>
                <button className="edit-bio-save" onClick={handleBioSave}>
                    Save Changes
                </button>
                </Modal.Footer>
            </Modal>
        </Container>
    )
}

export default Settings