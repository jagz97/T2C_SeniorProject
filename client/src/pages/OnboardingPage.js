import React, { useState } from "react"
import OnboardAbout from "../components/onboarding/OnboardAbout"

const OnboardingPage = () => {
    const [ currentPage, setCurrentPage ] = useState("about")

    if(currentPage === "about")
        return <OnboardAbout setCurrentPage={setCurrentPage}/>
    else if(currentPage === "profilePic") 
        return <h1>Upload Profile Pic!</h1>
    else if(currentPage === "bioPic") 
        return <h1>Upload Bio Pic!</h1>
}

export default OnboardingPage