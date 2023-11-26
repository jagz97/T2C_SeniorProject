import React from "react"
import "./CreateExperience.css"

const ExperienceTextInput = ({name, onChange, value, id, max}) => {

    return (
        <div className="experience-text-input">
            <label htmlFor={id}>{name}</label>
            <input
                type="text"
                value={value}
                name={name}
                onChange={onChange}
                id={id}
                maxLength={max}
                required
            />      
        </div>
    )
}

export default ExperienceTextInput