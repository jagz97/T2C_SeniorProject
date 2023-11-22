import React, { useState } from "react"
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import "./OnboardAbout.css"
import useAuth from "../../hooks/useAuth"
import { api } from "../../api/axios"

const MAX_AGE = 110
const MIN_AGE = 18
const ages = [] // stores option elements for select
for(let i = MIN_AGE; i <= MAX_AGE; i++) {
    ages.push(<option value={i} key={i}>{i}</option>)
}

const OnboardAbout = ({navigateNextPage}) => {
    const [ firstName, setFirstName ] = useState("")
    const [ lastName, setLastName ] = useState("") 
    const [ age, setAge ] = useState("")
    const [ gender, setGender ] = useState("")
    const [ bio, setBio ] = useState("")
    const [ errorMessage, setErrorMessage ] = useState("")
    const { user } = useAuth()
    
    console.log("BIO:",bio)

    const handleSubmit = async (event) => {
        event.preventDefault()
        const profileData = { firstName, lastName, age, gender, bio }

        const headerOptions = {
            headers: {
                Authorization: `${user.accesstoken}`,
            }
        }

        try {
            const response = await api.post("/profile/createProfile", profileData, headerOptions)
            // const bioResponse = await api.post("/profile/updateBio", { bio }, headerOptions ) 
            // change this
            // console.log(bioResponse.data)
            console.log(response.data)
            navigateNextPage() 
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

    const handleAge = (event) => {
        if(age === "") {
            event.target.style.color = "#000"
        }
        setAge(event.target.value)
    }

    const handleGender = (event) => {
        if(gender === "") {
            event.target.style.color = "#000"
        }
        setGender(event.target.value)
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
                    
                    <select name="age" defaultValue={age} onChange={handleAge} required>
                        <option value="" disabled>Age</option>
                        {
                            ages
                        }
                    </select>

                    <select 
                        name="gender" 
                        defaultValue={gender} 
                        onChange={handleGender} 
                        required
                    >
                        <option value="" disabled >Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                    </select>
                    <textarea 
                        name="Profile Bio"
                        placeholder="Enter Bio (optional)"
                        value={bio}
                        onChange={(event) => setBio(event.target.value)}
                    >
                    </textarea>    
                    <button type="submit">Continue</button>
                    {errorMessage && <p className="error text-center mt-1">{errorMessage}</p>}
                </form>
            </Row>
        </Container>
    )
}

export default OnboardAbout