import React, { useState } from "react"
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

import "./OnboardAbout.css"
import useAuth from "../../hooks/useAuth"
import { api } from "../../api/axios"
import { useNavigate } from "react-router-dom"

const MAX_AGE = 110
const MIN_AGE = 18
const ages = [] // stores option elements for select
for(let i = MIN_AGE; i <= MAX_AGE; i++) {
    ages.push(<option value={i} key={i}>{i}</option>)
}

const OnboardAbout = ({setCurrentPage}) => {
    const [ firstName, setFirstName ] = useState("")
    const [ lastName, setLastName ] = useState("") 
    const [ age, setAge ] = useState("")
    const [ gender, setGender ] = useState("")
    const [ errorMessage, setErrorMessage ] = useState("")
    const { user } = useAuth()
    
    const Navigate = useNavigate()

    const handleSubmit = async (event) => {
        event.preventDefault()
        const profileData = { firstName, lastName, age, gender }

        const headerOptions = {
            headers: {
                Authorization: `${user.accesstoken}`,
            }
        }

        try {
            const request = await api.post("/profile/createProfile", profileData, headerOptions)
            console.log(request.data)
            setCurrentPage("profilePic") // changes state in Onboarding Page
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
    
    return (
        <Container>
            <Row className="justify-content-center align-items-center vh-100">
                <form className="create-profile-form" onSubmit={handleSubmit}>        
                <h1 className="create-profile-header">Tell us about you</h1>
                    <input 
                        type="text"
                        name="firstName"
                        placeholder="First Name"
                        value={firstName}
                        onChange={(event) => setFirstName(event.target.value)}
                        required
                    />

                    <input 
                        type="text"
                        name="lastName"
                        placeholder="Last Name"
                        value={lastName}
                        onChange={(event) => setLastName(event.target.value)}
                        required
                    />
                    
                        <select name="age" defaultValue={age} onChange={(event) => setAge(event.target.value)} required>
                            <option value="" disabled>Age</option>
                            {
                                ages
                            }
                        </select>

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
                
                    <button type="submit">Continue</button>
                </form>
            </Row>
        </Container>
    )
}

export default OnboardAbout