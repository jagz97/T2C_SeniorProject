import React from 'react'
import Ratings from '../ratings/Ratings'

import { Link } from "react-router-dom"

import './Profile.css'

const PlaceVisited = ({rating, id, location, image}) => {
    return (
        <div className="profile-visited-wrapper">
            <Link className="profile-content-image" to={`/experience/${id}`}>
                <img loading="lazy" className="profile-visited" src={`data:${image.type};base64,${image.data}`} alt="" ></img>
            </Link>
            <p className="profile-visited-name">{location}</p>
            <div className="profile-visited-rating" ><Ratings value={rating} starSize={20} /></div>
        </div>
    )
}
export default PlaceVisited