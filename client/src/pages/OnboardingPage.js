import React, { useState } from "react"
import OnboardAbout from "../components/onboarding/OnboardAbout"
import OnboardProfilePic from "../components/onboarding/OnboardProfilePic"
const OnboardingPage = () => {
    const [ currentPage, setCurrentPage ] = useState("about")
    return <OnboardProfilePic setCurrentPage={setCurrentPage}/>
    // if(currentPage === "about")
    //     return <OnboardAbout setCurrentPage={setCurrentPage}/>
    // else if(currentPage === "profilePic") 
    //     return <OnboardProfilePic setCurrentPage={setCurrentPage}/>
    // else if(currentPage === "bioPic") 
    //     return <h1>Upload Bio Pic!</h1>
}

export default OnboardingPage