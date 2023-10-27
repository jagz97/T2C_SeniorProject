import React from 'react'
import Col from 'react-bootstrap/Col'
import Ratings from '../ratings/Ratings'
import mohammedLak from './temp-images/mohammed-lak.jpg'

import './Profile.css'

const PlaceVisited = ({location, rating}) => {
    return (
        <div className="profile-visited-wrapper">
            <img className="profile-visited" src={mohammedLak} alt="" ></img>
            <p className="profile-visited-name">Croatia</p>
            <div className="profile-visited-rating" ><Ratings value={rating}/></div>
        </div>
    )
}
export default PlaceVisited