import React from 'react'
import { IoLocationSharp } from 'react-icons/io5'


const PopularDest = ({img, name, location}) => {
    return (
        <div className="popular-dest">
             <div className="dest-image-wrapper">
                <img className="dest-image" src={img} alt="destination"/>
            </div>
            <IoLocationSharp color={"#04c1d9"}/>
        </div>
    )
}

export default PopularDest