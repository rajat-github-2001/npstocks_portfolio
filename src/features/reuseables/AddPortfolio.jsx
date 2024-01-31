import React from 'react'
import { SubmitButton } from '../../components'

const AddPortfolio = ({ close }) => {
  return (
    <>
      <div className="modal-backdrop" onClick={close} />
      <div className='centered-element w-[366px] h-[249px] dark:bg-[#1E252A] rounded-2xl'>
        <div className='relative flex flex-col gap-[49px]'>
          <img className='absolute right-2 top-2' onClick={close} src="/src/assets/icons/Cancel.svg" alt="cancel" />

          <label className='flex flex-col gap-[8px] mt-[65px] ml-[10px] mr-[26px]'>
            <p className='form-label-text'>Portfolio Name</p>
            <input type="text" placeholder='Enter Placeholder Name' className='form-input' />
          </label>

          <SubmitButton label='Save' />
        </div>
      </div>
    </>
  )
}

export default AddPortfolio