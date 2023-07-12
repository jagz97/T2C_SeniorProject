import React from 'react'

const DatePickerYear = ({value,setYear,max,min}) => {
  const fillYearOptions = () => {
    const yearOptions = []
    for(let year = max; year >= min; year--) {
      yearOptions.push(<option key={year} value={year}>{year}</option>)
    }
    return yearOptions
  }

  return (
    <>
       <select
        value={value}
        onChange={(event) => setYear(event.target.value)}
      >
        {fillYearOptions()}
      </select>
    </>
  )
}

export default DatePickerYear