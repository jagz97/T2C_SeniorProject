import React, { useState } from "react"
import Container from 'react-bootstrap/Container'
import Row from "react-bootstrap/Row"
import Avatar from "../avatar/Avatar"
import "./OnboardImage.css"
import useAuth from "../../hooks/useAuth"

import {
    Plus
} from "akar-icons"

import { api } from "../../api/axios"

const OnboardImage = ({navigateNextPage, header, endpoint}) => {

    const [ usrImg, setUsrImg ] = useState("")
    const [ errorMessage, setErrorMessage ] = useState("")

    const { user } = useAuth()

    const Navigate = () => {
        setErrorMessage("")
        setUsrImg("")
        navigateNextPage()
    }
    console.log(usrImg)
    const submitHandler = async (event) => {
        event.preventDefault()
        if(!usrImg) {
            setErrorMessage("Select an Image")
            return 
        }

        const headerOptions = {
            headers: {
                Authorization: `${user.accesstoken}`,
            }
        }

        try {
            const data = new FormData()
            endpoint === "ProfilePic" ? data.append("profilePic", usrImg) : data.append("bioPic", usrImg)

            const request = await api.post(`/profile/update${endpoint}`, data, headerOptions)
            console.log(request)
            Navigate()
            
        } catch (error) {
            const errorMessage = error.response?.data?.message
            // if we get a an error response from server display it
            // otherwise we display error directly from axios library
            if(errorMessage) {
                setErrorMessage(errorMessage)
            }
            else {
                console.log(error)
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
            else {
                console.log(files[0])
                setUsrImg(files[0])
            }
            // reset input value so that image is rendered when same file is chosen for pfp and biopic
            event.target.value = "" 
        }
    }
    
    return (
        <Container>
            <Row className="justify-content-center align-items-center vh-100">
                <form className="onboard-pfp-form" onSubmit={submitHandler}>
                    <h1 className="onboard-pfp-header">{header}</h1>
                    <label htmlFor="onboard-file-input">
                        <Avatar 
                            src={usrImg ? URL.createObjectURL(usrImg): null} 
                            size={275} 
                            color={"#fff"}
                            border={"3px solid #5D17B0"}
                            alt="user profile picture"
                        />
                        <div className="onboard-pfp-icon"><Plus size={15} strokeWidth={5} color={"#fff"}/></div>
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
                    <p className="onboard-skip-btn" onClick={Navigate}>skip for now</p>
                </form>
            </Row>
        </Container>
    )
}

export default OnboardImage