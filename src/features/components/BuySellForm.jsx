import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { CustomDropdown } from '../utils';

const BuySellForm = ({ close, buyForm }) => {
  const options = [
    { value: 'SECONDARY', label: 'SECONDARY' },
    { value: 'PRIMARY', label: 'PRIMARY' },
  ]

  const [selectedDropdownOption, setSelectedDropdownOption] = useState(options[0]);
  const { register, handleSubmit, watch, formState: { errors } } = useForm();

  const handleSelect = (option) => {
    setSelectedDropdownOption(option);
    // Additional logic when an option is selected
  };

  return (
    <div className='absolute pt-[23px] px-[19px] dark:bg-[#1E252A] bg-primary h-full top-[100px] left-0 right-0 bottom-0 rounded-t-[32px]'>
      <div className='flex justify-between mb-[18px]'>
        <p className='px-[10px] py-[6px] text-black font-semibold text-[16px] bg-[#BBD9FB] rounded-2xl'>{buyForm ? 'BUY' : 'SELL'}</p>
        <img src="/src/assets/icons/Cancel.svg" alt="cancel" onClick={close} />
      </div>

      {buyForm &&
        <CustomDropdown options={options} selectedOption={selectedDropdownOption} onSelect={handleSelect} alignment={'origin-top-left left-0'} />
      }

      <form className='flex flex-col gap-[24px] mt-[18px]'>
        <label className='flex flex-col gap-[8px]'>
          <p className='form-label-text'>Company</p>
          <select className='form-input'>
            <option value="">Search Ticker</option>
            <option value="nabil">NABIL</option>
            <option value="sbl">SBL</option>
            <option value="scb">SCB</option>
          </select>
        </label>

        <label className='flex flex-col gap-[8px]'>
          <p className='form-label-text'>Date</p>
          <input type="date" className='form-input' />
        </label>

        {buyForm &&
          <>
            <label className='flex flex-col gap-[8px]'>
              <p className='form-label-text'>Transaction ID</p>
              <input type="input" className='form-input' />
            </label>
            <div className='flex gap-[30px]'>
              <label className='flex flex-col gap-[8px]'>
                <p className='form-label-text'>Qty</p>
                <input type="input" className='form-input  w-[97px]' />
              </label>

              <label className='flex flex-col gap-[8px]'>
                <p className='form-label-text'>Price</p>
                <input type="input" className='form-input  w-[97px]' />
              </label>
            </div>
          </>
        }

        {!buyForm &&
          <div className="flex flex-col mb-[34px]">
            <div className='flex flex-row gap-[69px] mb-[31px]'>
              <label className='flex flex-col gap-[8px]'>
                <p className='form-label-text'>Transaction ID</p>
                <input type="input" className='form-input w-[165px]' />
              </label>

              <label className='flex flex-col gap-[8px]'>
                <p className='form-label-text'>Price</p>
                <input type="input" className='form-input w-[96px]' />
              </label>
            </div>

            <div className='flex flex-row justify-between'>
              <p className='text-color text-[16px] font-semibold leading-5'>Sold Shares Allocation</p>
              <p className='text-[#FFD461] font-semibold text-lg leading-5'>0</p>
            </div>
          </div>
        }


        <div className='flex gap-[30px]'>
          <label className='flex flex-col gap-[8px]'>
            <p className='form-label-text'>Sebon Commission</p>
            <div className='relative'>
              <input type="input" className='form-input w-[96px]' />
              <img src="/src/assets/icons/Edit.svg" alt="edit" className='absolute right-[8px] top-[5px] bottom-[6px]' />
            </div>
          </label>

          <label className='flex flex-col gap-[8px]'>
            <p className='form-label-text mb-5'>DP Amount</p>
            <div className='relative'>
              <input type="input" className='form-input w-[96px]' />
              <img src="/src/assets/icons/Edit.svg" alt="edit" className='absolute right-[8px] top-[5px] bottom-[6px]' />
            </div>
          </label>

          <label className='flex flex-col gap-[8px]'>
            <p className='form-label-text'>Broker Commision</p>
            <div className='relative'>
              <input type="input" className='form-input w-[96px]' />
              <img src="/src/assets/icons/Edit.svg" alt="edit" className='absolute right-[8px] top-[5px] bottom-[6px]' />
            </div>
          </label>
        </div>

        <div className='flex flex-col gap-[11px] mt-[10px] dark:bg-[#FFFFFF14] bg-[#F0F0F0] rounded-2xl px-[24px] py-[16px]'>
          <div className='flex flex-row justify-between'>
            <p className='normal-text'>Total Amount</p>
            <p className='normal-text font-bold '>0.00</p>
          </div>

          <div className='flex flex-row justify-between'>
            <p className='normal-text'>Cost Per Share</p>
            <p className='normal-text font-bold'>0.00</p>
          </div>
        </div>

        <button className='bg-[#21CD9D] rounded-lg text-black text-[20px] font-semibold leading-5 py-[8px]'>Save</button>
      </form>
    </div>
  )
}

export default BuySellForm