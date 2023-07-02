import React from 'react';
import './Avatar.css'
import {
    Person
} from 'akar-icons'

const Avatar = ({src,alt,size,border}) => {
    let render = "";

    let sizeStyle = size ? {width: size, height: size} : {width: "50px", height: "50px"}

    let avatarBorder = border && "avatar-border"

    if(src) {
        render = <img src={src} alt={alt}/>
    }
    else {
        render = <Person/>
    }

    return (
        <div className={avatarBorder} style={sizeStyle}>
            <div className="avatar"> 
                {render}
            </div>
        </div>
    )
}

export default Avatar