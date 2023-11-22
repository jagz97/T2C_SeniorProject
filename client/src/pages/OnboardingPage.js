import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import OnboardAbout from "../components/onboarding/OnboardAbout"
import OnboardImage from "../components/onboarding/OnboardImage"
import onboardTop from "../images/onboard-top.svg"
import onboardBottom from "../images/onboard-bottom.svg"
const OnboardingPage = () => {
    const [ currentPage, setCurrentPage ] = useState("about")
    
    const Navigate = useNavigate()

    let render
    if(currentPage === "about")
        render = <OnboardAbout navigateNextPage={() => setCurrentPage("profilePic")}/>
    else if(currentPage === "profilePic") 
        render = (
            <OnboardImage 
                header="Choose a profile picture" 
                endpoint="ProfilePic"
                navigateNextPage={() => setCurrentPage("bioPic")}
            />
        )
    else if(currentPage === "bioPic") 
        render = (
            <OnboardImage 
                header="Choose a bio picture" 
                endpoint="BioPic"
                navigateNextPage={() => Navigate("/")}
            />
    )

    return (
        <>
            <img src={onboardTop} className="d-none d-lg-block" alt="waves crashing" style={{position:"absolute", width:"100%"}}/>
            {render}
            <img src={onboardBottom} className="d-none d-lg-block" alt="colorful shapes" style={{position:"absolute", bottom: "0"}}/>
        </>
    )
}

export default OnboardingPage