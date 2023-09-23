import React from 'react'
import { PiCaretUpDownFill } from 'react-icons/pi'

const ListviewSorter = ({children, hideClass, onClick}) => {
    let sorterClass = "listview-sorter"
    
    if(hideClass) sorterClass = `${sorterClass} ${hideClass}`

    return (
        <div className={sorterClass} onClick={onClick}>
            {children}<PiCaretUpDownFill size={14} style={{marginLeft: 3}}/>
        </div>
    )
}

export default ListviewSorter