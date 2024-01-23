import React, { useState } from 'react'
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const CustomDatePicker = ({ selected, onChange }) => {
  const [isDatePickerOpen, setIsDatePickerOpen] = useState(false);

  const handleClearDate = () => {
    onChange(null);
  }

  const handleCurrentDate = () => {
    onChange(new Date());
  }

  return (
    <>
      <div className="custom-datepicker-wrapper">
        <DatePicker
          showYearDropdown
          scrollableYearDropdown
          selected={selected}
          onChange={onChange}
          onClickOutside={() => setIsDatePickerOpen(false)}
          placeholderText='dd/ mm/ yyyy'
          maxDate={new Date()}
          dateFormat="dd/MM/yyyy"
          className='form-input w-[330px]'
          popperClassName='custom-datepicker-popper'
          yearDropdownItemNumber={120}
        />
      </div>
      <div className='absolute right-3 bottom-2 flex flex-row gap-[18px]'>
        <img
          src="/src/assets/icons/Cross.svg"
          alt="cross"
          onClick={handleClearDate}
        />
        <img
          src="/src/assets/icons/Clock.svg"
          alt="clock"
          onClick={handleCurrentDate}
        />
        <img
          src="/src/assets/icons/Calendar.svg"
          alt="calender"
          onClick={() => setIsDatePickerOpen(!isDatePickerOpen)}
        />
      </div>
    </>
  )
}

export default CustomDatePicker