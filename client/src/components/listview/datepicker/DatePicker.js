import React from 'react'
import './datepicker.css'
import { useState } from 'react'

const DatePicker = ({children, size}) => {
  
  const sizeStyle = {
    width: size || "50%"
  }

  return (
    <div className="container-datepicker" style={sizeStyle}>
        {children}    
    </div>
  )
}

export default DatePicker