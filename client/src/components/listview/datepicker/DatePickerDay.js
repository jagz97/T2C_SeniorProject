import React, { useEffect } from 'react'
const DatePickerDay = ({value, setDay, month, year, currDay}) => {

  let numDays
  let dayOptions = []
  
  if (month === "January" || month === "March" || month === "May" || month === "July" 
  || month === "August" || month === "October" || month === "December") numDays = 31
  
  else if (month === "April" || month === "June" || month ===  "September" || month === "November") {
    numDays = 30
  }

  else if (month === "Febuary") {    
    // check if selected year is leap year 
    if(((year % 4 === 0) && (year % 100 !== 0)) || (year % 400 === 0)) {
      numDays = 29
    }
    else {
      numDays = 28
    }

  }

  for(let day = 1; day <= numDays; day++ ) {
    dayOptions.push(<option key={day} value={day}>{day}</option>)
  }
    
  // If the current day selected DNE in the
  // newly selected month (such as feb 30, feb 31)
  // set the day to the largest day available in the new month
  // Need to run this after component gets rendered
  useEffect(() => {
    if(currDay > numDays) {
      setDay(numDays)
  }})

  return (
    <>
       <select
        name="day"
        value={value}
        onChange={(event) => {
          setDay(event.target.value)
        }}>
        {dayOptions}
      </select>
    </>
  )
}

export default DatePickerDay