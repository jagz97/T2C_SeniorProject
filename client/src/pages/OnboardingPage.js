import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import OnboardAbout from "../components/onboarding/OnboardAbout"
import OnboardImage from "../components/onboarding/OnboardImage"

const OnboardingPage = () => {
    const [ currentPage, setCurrentPage ] = useState("about")
    
    const Navigate = useNavigate()

    if(currentPage === "about")
        return <OnboardAbout navigateNextPage={() => setCurrentPage("profilePic")}/>
    else if(currentPage === "profilePic") 
        return (
            <OnboardImage 
                header="Choose a profile picture" 
                endpoint="ProfilePic"
                navigateNextPage={() => setCurrentPage("bioPic")}
            />
        )
    else if(currentPage === "bioPic") 
        return (
            <OnboardImage 
                header="Choose a bio picture" 
                endpoint="BioPic"
                navigateNextPage={() => Navigate("/")}
            />
    )
}

export default OnboardingPage