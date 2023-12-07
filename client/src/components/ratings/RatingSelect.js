import React, { useState } from "react"
import "./RatingSelect.css"
import {
    LiaStarSolid
} from 'react-icons/lia'



const RatingSelect  = ({starSize, gap, rating, onClick}) => {
    
    const render = []
    const [ hoverValue, setHoverValue ] = useState(null)

    for(let i = 0; i < 5; i++) {
        const starValue = i + 1
        render.push(
            <label className="rating-select-label">
                <input
                    type="radio"
                    name="star rating"
                    value={starValue}
                    onClick={() => onClick(starValue)}
                    className="rating-select-input"
                />
                <LiaStarSolid
                    className="rating-select-star"
                    color={starValue <= ( hoverValue || rating ) ? "#FFE071" : "#cfcfcf"}
                    onMouseEnter={() => setHoverValue(starValue)}
                    onMouseLeave={() => setHoverValue(null)}
                    size={starSize ? starSize : 20}
                />
            </label>
        )
    }
    
    return (
        <div className="container-rating-select" style={{gap: gap}}>
            { render }
        </div>
    )
}

export default RatingSelect