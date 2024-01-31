import React from 'react'

const RadioButton = ({ label, checked, onChange, value }) => {
  return (
    <label className={`flex items-center justify-center px-[10px] py-[7px] rounded-full ${checked ? 'button-active' : 'dark:text-secondary dark:bg-gray text-black bg-primary'}`}>
      <input
        type="radio"
        className="hidden"
        checked={checked}
        onChange={onChange}
        value={value}
      />
      <p className='text-sm leading-5 font-[500]'>{label}</p>
    </label>
  )
}

export default RadioButton