import React from 'react'
import { PiCaretUpDownFill } from 'react-icons/pi'

const ListviewSorter = ({children, hideClass, onClick}) => {
    const sorterClass = hideClass ? `listview-sorter ${hideClass}` : `listview-sorter`
   
    return (
        <div className={sorterClass} onClick={onClick}>
            {children}<PiCaretUpDownFill size={14}/>
        </div>
    )
}

export default ListviewSorter