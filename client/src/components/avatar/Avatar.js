import React from 'react';
import './Avatar.css'
import {
    Person
} from 'akar-icons'

/** Avatar Component Props
 * src - Path of Image File
 * alt - alt text
 * color - background color of avatar
 * size - size of avatar
 * border - avatar border like the CSS border property shorthand
 */


const Avatar = ({src,alt,size,color,border}) => {
    let render = "";

    // if no size prop given default dimension 50x50
    let sizeStyle = size ? {width: size, height: size} : {width: "50px", height: "50px"}

    // avatar border
    let borderStyle = {
        border
    }
    
    // avatar background
    let colorStyle = color ? {backgroundColor: color} : {backgroundColor: "#1e1e1e"}

    // render either user img or anonymous icon
    if(src) {
        render = <img src={src} alt={alt}/>
    }
    else {
        render = <Person />
    }

    return (
        <div className={`avatar-wrapper`} style={borderStyle}>
            <div style={{...sizeStyle, ...colorStyle}}>
                <div className="avatar"> 
                    {render}
                </div>
            </div>
        </div>
    )
}

export default Avatar