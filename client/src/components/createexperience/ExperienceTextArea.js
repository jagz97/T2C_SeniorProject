import React from "react"
import "./CreateExperience.css"

const ExperienceTextArea = ({name, value, onChange, id, max}) => {

    return (
        <div className="experience-text-area">
            <label htmlFor={id}>{name}</label>
            <textarea
                name={name}
                value={value}
                onChange={onChange}
                id={id}
                maxLength={max}
                required
            />
            <p className="experience-text-area-length">{value.length} / {max}</p>
        </div>
    )
}

export default ExperienceTextArea