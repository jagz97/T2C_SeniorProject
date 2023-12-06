import React, { useState, useRef } from "react"
import "./DragAndDrop.css"
import {
    HiOutlinePhoto
} from "react-icons/hi2"

/** Drag and Drop Props
* picture - state that stores uploaded picture
* setPicture - state setter that changes picture
**/

const DragAndDrop = ({picture, setPicture}) => {
    
    const inputRef = useRef(0)
    const [ error, setError ] = useState("")
    
    const handleUpload = (event) => {
        event.preventDefault()
        let files
        if(event.type === "change") {
            files = event.target.files
        }
        else if(event.type === "drop") {
            files = event.dataTransfer.files
        }
        
        setError("")
        if(files.length > 0) {
            if(!files[0].type.startsWith("image")) {
                setError("File must be an image")
            }
            else {
                inputRef.current.style.border = "2px solid #b5b5b5"
                console.log(files[0])
                setPicture(files[0])
            } 
        }
    }

    return (
        <>
            <div className="dnd-img-wrapper"
                onDragOver={(event) => event.preventDefault()}
                onDrop={handleUpload}
                ref={inputRef}
            >
                {picture ?  <p className="dnd-img-msg">You uploaded <span className="dnd-emphasize">{picture.name}</span></p> : <HiOutlinePhoto size={65} color={"#b5b5b5"}/>}
                <label htmlFor="dnd-img">
                    {
                        picture ? <>Drag another image or <span className="dnd-emphasize"> browse</span> to change</>
                        :
                        <>
                            Drop your image here or 
                            <span className="dnd-emphasize"> browse</span>
                        </>
                    }
                </label>
                <input 
                    type="file" 
                    name="dnd-img"
                    onChange={handleUpload}
                    accept="image/*"
                    id="dnd-img"
                />
            </div>
            { error ? <p className="error dnd-img-error">{error}</p> : null }
        </>
    )
}

export default DragAndDrop