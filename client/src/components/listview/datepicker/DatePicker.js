import React from 'react'
import { useState } from 'react'

const DatePicker = ({className,children}) => {
 
  return (
    <div style={{display: "inline-flex" ,width: "45%"}}>
        {children}    
    </div>
  )
}

export default DatePicker