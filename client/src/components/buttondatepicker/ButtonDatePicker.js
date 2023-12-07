import React, { forwardRef } from "react"
import "react-datepicker/dist/react-datepicker.css"
import DatePicker from "react-datepicker"
import "./ButtonDatePicker.css"

import { MdOutlineCalendarMonth } from "react-icons/md";

/** ButtonDatePicker Component Props
 * className - specify class for certain styles
 * initial - inital state for datepicker
 * maxDate - max selectable date for picker
 **/

const ButtonDatePicker = ({className, minDate, maxDate, selected, onChange}) => {  
  const ButtonInput= forwardRef(({ value, onClick }, ref) => (
    <button className={className} onClick={onClick} ref={ref} type="button">
      <MdOutlineCalendarMonth />{value}
    </button>
  ));

  return (  
    <DatePicker
      selected={selected}
      onChange={onChange}
      customInput={<ButtonInput value={selected}/>}
      minDate={minDate}
      maxDate={maxDate}
    />
  );

}

export default ButtonDatePicker 