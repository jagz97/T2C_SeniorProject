import React from 'react'
import Ratings from '../ratings/Ratings'
import mohammedLak from './temp-images/mohammed-lak.jpg'

import './Profile.css'

const PlaceVisited = ({rating}) => {
    return (
        <div className="profile-visited-wrapper">
            <img className="profile-visited" src={mohammedLak} alt="" ></img>
            <p className="profile-visited-name">Croatia</p>
            <div className="profile-visited-rating" ><Ratings value={rating} starSize={20} /></div>
        </div>
    )
}
export default PlaceVisited