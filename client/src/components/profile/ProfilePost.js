import React from 'react'
import { Link } from "react-router-dom"

import './Profile.css'

const ProfilePost = ({image, id}) => {
    return (
        <div className="profile-post-wrapper">
            <Link to={`/singlepost/${id}`}>
                <img loading="lazy" className="profile-post-image" src={`data:${image.type};base64,${image.data}`} alt="" ></img>
            </Link>
        </div>
            
    )
}

export default ProfilePost