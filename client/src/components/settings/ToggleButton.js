import React from "react"
import "./ToggleButton.css"

/** Avatar Component Props
 * toggleState - uses the setState of the parent to toggle
 * 
**/
const ToggleButton = ({toggleState, setToggleState}) => {
    
    const btnStyle = {
        backgroundColor : toggleState ? "#C73968" : "grey",
        justifyContent: toggleState ? "flex-end" : "flex-start"
    }

    const handleToggle = () => setToggleState((prevState) => !prevState )
    
    return (
        <div className="toggle-button-outer" style={btnStyle} onClick={handleToggle}>
            <div className="toggle-button-inner"></div>
        </div>
    )
}

export default ToggleButton