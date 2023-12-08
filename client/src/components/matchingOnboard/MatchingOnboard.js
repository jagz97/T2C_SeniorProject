import React, { useState } from "react"
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import "./matchingOnboard.css"
import useAuth from "../../hooks/useAuth"
import { api } from "../../api/axios"
import { CountryDropdown} from "react-country-region-selector"
import { useNavigate } from "react-router-dom"

const MatchingOnboard = () => {
   
    const [ country, setCountry ] = useState("")
    const [ gender, setGender ] = useState("")
    const [ interest, setInterest ] = useState("")
    const [ errorMessage, setErrorMessage ] = useState("")
    const [ bio, setBio ] = useState("")
    const { user } = useAuth()
    const navigate = useNavigate()
    
   

    const handleSubmit = async (event) => {
        event.preventDefault()
        const profileData = { gender, interest, country,bio }

        const headerOptions = {
            headers: {
                Authorization: `${user.accesstoken}`,
            }
        }

        try {
            const response = await api.post("/createPreferences", profileData, headerOptions)
            // const bioResponse = await api.post("/profile/updateBio", { bio }, headerOptions ) 
            // change this
            // console.log(bioResponse.data)
            console.log(response.data)
            navigate(`/matching`)
            
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

    const handleInterest = (event) => {
        if(interest === "") {
            event.target.style.color = "#000"
        }
        setInterest(event.target.value)
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
                <h1 className="create-profile-header">Tell us your Travel Preferences</h1>
                    

                    
                    
                    
                <label htmlFor="expcreate-country">Gender Preference</label>
                

                <select 
                        name="interest" 
                        defaultValue={gender} 
                        onChange={handleGender} 
                        required
                    >
                        <option value="" disabled >Select Your Gender Preferences</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Other">Other</option>
                    </select>
                    <br/>
                <br/>
                    <label htmlFor="expcreate-country">Interest Preference</label>
                    <select 
                        name="interest" 
                        defaultValue={interest} 
                        onChange={handleInterest} 
                        required
                    >
                        <option value="" disabled >Pick your Travel Interest</option>
                        <option value="Adventure and Outdoor Activities">Adventure and Outdoor Activities</option>
                        <option value="Culinary Tourism">Culinary Tourism</option>
                        <option value="Adventure and Outdoor Activities">Adventure and Outdoor Activities</option>
                        <option value="Family-Friendly Activities">Family-Friendly Activities</option>

                    </select>

                    <br/>
                <br/>

                    <label htmlFor="expcreate-country">Country</label>
                                        <CountryDropdown
                                            value={country}
                                            onChange={(value) => setCountry(value)}
                                            defaultOptionLabel="Select Country for travel"
                                            priorityOptions={["CA", "US",]}
                                            id="expcreate-country"
                                            className="expcreate-country"
                                        />


                                       
                <br/>
                    <textarea 
                        style={{ height: '120px' }} 
                        name="Profile Bio"
                        placeholder="Enter Bio"
                      
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

export default MatchingOnboard