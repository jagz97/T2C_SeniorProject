import React from "react"
import RatingSelect from "../ratings/RatingSelect"
import "./CreateExperience.css"

const ExperienceRating = ({rating, onClick, name}) => {
    return (
        <div className="experience-rating">
            <label>{name}</label>
            <RatingSelect
                rating={rating}
                onClick={onClick}
                starSize={22}
                gap={2}
            />
        </div>
    )
}

export default ExperienceRating