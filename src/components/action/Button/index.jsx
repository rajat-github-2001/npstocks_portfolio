import React from 'react'

const Button = ({ disabled, label, onClick, labelStyle}) => {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className='portfolio-button'
      >
      <p>{label}</p>
    </button>
  )
}

export default Button