import React from 'react'

const SubmitButton = ({ label, disabled }) => {
  return (
    <button type='submit' disabled={disabled} className='bg-[#21CD9D] rounded-lg w-[337px] py-[8px]'>
      <p className='text-black text-[20px] font-semibold leading-5'>{label}</p>
    </button>
  )
}

export default SubmitButton