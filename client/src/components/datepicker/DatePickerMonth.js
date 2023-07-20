import React from 'react'

const DatePickerMonth = ({value, setMonth}) => {

  const months = ["January", "Febuary", "March", "April", 
  "May", "June","July", "August", "September", 
  "October", "November", "December"]
  

  const monthOptions = months.map((month) => (
    <option key={month} value={month}>{month}</option>
  ))
  return (
    <>
      <select 
        value={value}
        onChange={(event) => setMonth(event.target.value)}
        className="datepicker-month"
        >
        <option value="" className="default-option" disabled>Month</option>
        { monthOptions }
      </select>
    </>
  )
}

export default DatePickerMonth