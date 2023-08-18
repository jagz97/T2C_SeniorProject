import React from 'react';
import './Avatar.css'
import {
    Person
} from 'akar-icons'

const Avatar = ({src,alt,size,border,cursor}) => {
    let render = "";

    // if no size prop given default dimension 50x50
    let sizeStyle = size ? {width: size, height: size} : {width: "50px", height: "50px"}

    let avatarBorder = border && "avatar-border"
    
    // render either user img or anonymous icon
    if(src) {
        render = <img src={src} alt={alt} style = {cursor && {cursor:"pointer"} }/>
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