import React, { useState } from "react"
import Container from 'react-bootstrap/Container'
import Row from "react-bootstrap/Row"
import Avatar from "../avatar/Avatar"
import "./OnboardProfilePic.css"
import useAuth from "../../hooks/useAuth"

import {
    Plus
} from "akar-icons"

import { api } from "../../api/axios"

const OnboardProfilePic = ({setCurrentPage}) => {

    const [ usrImg, setUsrImg ] = useState("")
    const [ errorMessage, setErrorMessage ] = useState("")

    const { user } = useAuth()
    
    const submitHandler = async (event) => {
        event.preventDefault()
        const headerOptions = {
            headers: {
                Authorization: `${user.accesstoken}`,
            }
        }

        try {
            const request = api.post("/profile/updateProfilePic", usrImg, headerOptions)
            console.log(request)
        } catch (error) {
            const errorMessage = error.response?.data?.message
            // if we get a an error response from server display it
            // otherwise we display error directly from axios library
            if(errorMessage) {
                setErrorMessage(errorMessage)
            }
            else {
                setErrorMessage(error.message)
            }
        }
    }

    const handleUpload = (event) => {
        const { files } = event.target
        setErrorMessage("")
        if(files.length > 0) {
            if(!files[0].type.startsWith("image")) {
                setErrorMessage("File must be an image")
            }
            console.log(files[0])
            setUsrImg(URL.createObjectURL(files[0]))
        }
    }
    
    console.log(usrImg)

    return (
        <Container>
            <Row className="justify-content-center align-items-center vh-100">
                <form className="onboard-pfp-form" onSubmit={submitHandler}>
                    <h1 className="onboard-pfp-header">Choose a profile picture</h1>
                    <label htmlFor="onboard-file-input">
                        <Avatar 
                            src={usrImg} 
                            size={275} 
                            color={"#2a2a2a"}
                            alt="user profile picture"
                        />
                        <div className="onboard-pfp-icon"><Plus size={15}/></div>
                        </label>
                    <input 
                        type="file" 
                        name="usrImg"
                        onChange={handleUpload}
                        accept="image/*"
                        id="onboard-file-input"
                    />
                    <div className="onboard-pfp-form-footer">
                        { errorMessage ? <p className="error error-onboard-img">{errorMessage}</p>: null}
                        <button type="submit">Continue</button>
                    </div>
                    <p className="onboard-skip-btn" onClick={() => setCurrentPage("about")}>skip for now</p>
                </form>
            </Row>
        </Container>
    )
}

export default OnboardProfilePic