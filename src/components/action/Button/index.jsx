import React from 'react'

const Button = ({ disabled, label, onClick }) => {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className='dark:bg-gray bg-black px-[10px] py-[6px] rounded-2xl'
      >
      <p className='dark:text-secondary text-primary text-sm leading-5 font-[500]'>{label}</p>
    </button>
  )
}

export default Button