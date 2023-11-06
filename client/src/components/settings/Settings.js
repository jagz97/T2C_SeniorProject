import React, {useState, useEffect} from "react"
import { useNavigate } from "react-router-dom"
import Avatar from "../avatar/Avatar"
import ToggleButton from "./ToggleButton"
import Container from "react-bootstrap/Container"
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"
import ProfileBanner from "../../images/pexels-venelin-dimitrov-3476312.jpg"
import "./Settings.css"

import useAuth from "../../hooks/useAuth"
import { api } from "../../api/axios"

import  {
    MdOutlineNotifications,
    MdOutlineContactSupport,
    MdOutlinePersonSearch,
    MdLogout,
    MdLockOutline
} from "react-icons/md"

const MAX_AGE = 110
const MIN_AGE = 18
const ages = [] // stores option elements for select
for(let i = MIN_AGE; i <= MAX_AGE; i++) {
    ages.push(<option value={i} key={i}>{i}</option>)
}

const Settings = () => {

    const [ firstName, setFirstName ] = useState("")
    const [ lastName, setLastName ] = useState("")
    const [ age, setAge ] = useState("")
    const [ gender, setGender ] = useState("")
    const [ phoneNumber, setPhoneNumber ] =  useState("")

    const [ reminders, setReminders ] = useState(false)
    const [ matching, setMatching ] = useState(false)
    const [ privacy, setPrivacy ] = useState(false)
   
    const navigate = useNavigate()
    const { logout } = useAuth()

    return (
        <Container fluid>
            <Row>
                <Col className="px-0" style={{position:"relative"}}>
                    <img src={ProfileBanner} alt="user profile banner" className="settings-banner"/>
                    <div className="profile-picture-wrapper">
                        <Avatar 
                            // src={profilePicture} 
                            alt={`User Profile Picture`} 
                            size={235} 
                            border="15px solid rgba(139,44,255,0.4)"
                        />
                    </div>
                    <div className="profile-about">                      
                                <a>Upload Image</a> <a>Edit Bio</a>
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
            <Row className="justify-content-center mb-5">
                <Col className="col-12 col-md-auto" >
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
                                    onChange={(event) => setGender(event.target.value)} 
                                    required
                                >
                                    <option value="" disabled >Gender</option>
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                    <option value="other">Other</option>
                            </select>
                            <select name="age" defaultValue={age} onChange={(event) => setAge(event.target.value)} required>
                                <option value="" disabled>Age</option>
                                {
                                    ages
                                }
                            </select>
                        </div>
                        <div onClick={() => navigate("/")} className="settings-control settings-recover-pw">Recover Password</div>
                        <input
                            type="tel"
                            name="Phone Number"
                            value={phoneNumber}
                            placeholder="Phone Number"
                            onChange={(event) => setPhoneNumber(event.target.value)}
                            id="settingsphone"
                            />
                        <div onClick={logout} className="settings-control settings-logout"><MdLogout size={20}/><span>Logout</span></div>
                    </div>
                </Col>
                
                <Col className="col-12 col-md-auto">
                        <div className="container-settings settings-right mt-2 mt-md-0">
                        <div className="settingsfname-wrapper">
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
                            <div onClick={() => navigate("/")} className="settings-control settings-help">
                                <MdOutlineContactSupport size={20}/>
                                <span>Contact Us</span>
                            </div>
                        </div>
                </Col>
                                
            </Row>
            <Row className="justify-content-center mb-5">
                <Col className="col-auto">
                    <button className="settings-btn settings-deactivate">Deactivate Account</button>
                    <button className="settings-btn settings-submit">Save Changes</button>
                </Col>
            </Row>
        </Container>
    )
}

export default Settings