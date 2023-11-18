import { FaPlane } from "react-icons/fa"

const icons ={
    "airport": <FaPlane/>
}

export const getIcon = (name) => icons[name]
