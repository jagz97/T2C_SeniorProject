import React from "react"
import Ratings from "../ratings/Ratings"
import { MdLocationPin } from "react-icons/md";
import { MdOutlineAttractions } from "react-icons/md";
import { IoRestaurant } from "react-icons/io5";
import { FaHotel } from "react-icons/fa";

import "./ExperienceDetail"

const Experience = ({name, type, location, rating, desc, height}) => {

    let icon = <FaHotel/>

    if(type === "attraction") icon = <MdOutlineAttractions/>
    else if(type === "restaurant")  icon = <IoRestaurant/>
   
    return (
        <div className="container-expdetail-card" style={{minHeight: height}}>
            <div className="expdetail-icon">{icon}</div>
            <h3 className="expdetail-card-name">{name}</h3>
            <div className="expdetail-card-location"><MdLocationPin/>{location}</div>
            {
                desc && <p className="expdetail-card-desc">{desc}</p>
            }
           
            <Ratings starSize={22} value={rating}/>
          
        </div>
    )
}

export default Experience