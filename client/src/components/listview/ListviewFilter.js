import React from 'react'
import { PiCaretUpDownFill } from 'react-icons/pi'

const ListviewFilter = ({children}) => {
    return (
        <div>{children} <PiCaretUpDownFill/></div>
    )
}

export default ListviewFilter