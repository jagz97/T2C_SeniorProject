import React from "react"
import "./FilterRating.css"
import {
    LiaStarSolid
} from "react-icons/lia"

const FilterRating = ({value, handler}) => {

    return (
        <div className="filter-rating">
            <span>{value}</span><LiaStarSolid/>
        </div>
    )
}

export default FilterRating