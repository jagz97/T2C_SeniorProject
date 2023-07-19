import React from 'react'
import './datepicker.css'
import { useState } from 'react'

const DatePicker = ({children, size, id}) => {
  
  const sizeStyle = {
    width: size || "50%"
  }

  return (
    <div className="container-datepicker" style={sizeStyle} id={id}>
        {children}    
    </div>
  )
}

export default DatePicker