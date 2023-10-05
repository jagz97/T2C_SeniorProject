import React, { useState } from "react"
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

import "./CreateProfile.css"
import useAuth from "../../hooks/useAuth"
import { api } from "../../api/axios"

const CreateProfile = () => {
    const [ firstName, setFirstName ] = useState("")
    const [ lastName, setLastName ] = useState("") 
    const [ age, setAge ] = useState("")
    const [ gender, setGender ] = useState("")

    const { user } = useAuth()
     
    const handleSubmit = async (event) => {
        event.preventDefault()
        const profileData = { firstName, lastName, age, gender }
        console.log(profileData)


        const optionsObj = {
            // If we include "bearer" we get 401
            // If we just send token, we get 404
            // Username
            headers: {
                Authorization: `${user.accesstoken}`,

            }
        }


        console.log("token in header: ", optionsObj.headers.Authorization )  

        try {
            const request = await api.post("/profile/createProfile", profileData,optionsObj)
            console.log(request)    
        } catch (error) {
            if(error) {
                console.log(error.response)
            }
        }
    }
    return (
        <Container>
            <form className="create-profile-form" onSubmit={handleSubmit}>
                <label htmlFor="pcfname">First Name</label>
                
                <input 
                    type="text"
                    name="firstName"
                    value={firstName}
                    onChange={(event) => setFirstName(event.target.value)}
                    id="pcfname"
                />
                
                <label htmlFor="pclname">Last Name</label>
                <input 
                    type="text"
                    name="lastName"
                    value={lastName}
                    onChange={(event) => setLastName(event.target.value)}
                    id="pclname"
                />
                
                <label htmlFor="pcage">Age</label>
                <input 
                    type="number"
                    name="age"
                    value={age}
                    onChange={(event) => setAge(event.target.value)}
                    id="pcage"
                />
                
                <label htmlFor="pcgender">Gender</label>
                <select name="gender" id="pcgender" defaultValue={gender} onChange={(event) => setGender(event.target.value)}>
                    <option value="" disabled>--Choose Gender--</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                </select>
               
                <button type="submit">Submit</button>
            </form>
        </Container>
    )
}

export default CreateProfile