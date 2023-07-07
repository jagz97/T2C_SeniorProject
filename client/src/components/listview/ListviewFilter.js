import React from 'react'
import { PiCaretUpDownFill } from 'react-icons/pi'

const ListviewFilter = ({children, hideClass}) => {
    const filterClass = hideClass ? `listview-filter ${hideClass}` : `listview-filter`
   
    return (
        <div className={filterClass}>{children}<PiCaretUpDownFill size={14}/></div>
    )
}

export default ListviewFilter