import React from "react"
import {
    LiaStarSolid,
    LiaStarHalfSolid
} from 'react-icons/lia'


// Not sure how Ratings will be stored in db so this is def up for changes

const Ratings = ({value, starSize}) => {
    
    // Empty array to render JSX
    let render = []
    let numStars = value
    const size = starSize ? starSize : "25px"
    
    if(value) {    
    
        // handle case if value of props.value out of range
        if(numStars > 5) {
            numStars = 5
        }
        else if(numStars < 0) {
            numStars = 0.5
        }

        /*
           Render stars based off int part of value prop.
           Keys will be indexes since all arr values are identical
        */
        for(let i = 0; i < Math.floor(numStars); i++) {
            render.push(<LiaStarSolid key={i} color="#FFE071" size={size} />)
        }
    }
    
    /*
      If no value prop given or a decimal part >= 0.5 add a half star 
    */
    if(!numStars || numStars % 1 >= 0.5) 
        render.push(<LiaStarHalfSolid key={render.length} color="#FFE071" size={size} />)
    
    return (
        <div className="container-ratings" style={{display: "flex", gap: 4}}>
           {render}
        </div>
    )
}

export default Ratings