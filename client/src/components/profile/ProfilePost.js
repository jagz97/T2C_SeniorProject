import React from 'react'
import nil from './temp-images/nils.jpg'

import { Link } from "react-router-dom"

import './Profile.css'

const ProfilePost = ({postImage}) => {
    return (
                <div className="profile-post-wrapper">
                    <Link to="#">
                        <img className="profile-post-image" src={nil} alt=""></img>
                    </Link>
                </div>
            
    )
}

export default ProfilePost