import React from 'react'

const AddPortfolio = ({ close }) => {
  return (
    <>
     <div className="modal-backdrop" onClick={close} />
    <div className='centered-element w-[366px] h-[249px] dark:bg-[#1E252A] bg-primary rounded-2xl'>
      <div className='relative flex flex-col gap-[49px]'>
        <img className='absolute right-2 top-2' onClick={close} src="/src/assets/icons/Cancel.svg" alt="cancel" />

        <label className='flex flex-col gap-[8px] mt-[65px] ml-[10px] mr-[26px]'>
          <p className='form-label-text'>Portfolio Name</p>
          <input type="text" placeholder='Enter Placeholder Name' className='form-input' />
        </label>

        <button type='submit' className='bg-[#21CD9D] rounded-lg text-black text-[20px] font-semibold leading-5 py-[8px] mx-[10px]'>Save</button>
      </div>
    </div>
    </>
  )
}

export default AddPortfolio