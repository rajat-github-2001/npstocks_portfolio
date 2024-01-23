import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { CustomDropdown, CustomDatePicker, SearchDropdown } from '../utils';

const BuySellForm = ({ close, buyForm }) => {
  const options = [
    { value: 'SECONDARY', label: 'SECONDARY' },
    { value: 'IPO', label: 'IPO' },
    { value: 'FPO', label: 'FPO' },
    { value: 'RIGHT SHARES', label: 'RIGHT SHARES' },
    { value: 'BONUS SHARES', label: 'BONUS SHARES' },
    { value: 'CASH DIVIDEND', label: 'CASH DIVIDEND' },
  ];

  const tickerOptions = ['NABIL', 'SBL', 'KBL'];

  const [selectedDropdownOption, setSelectedDropdownOption] = useState(options[0]);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTicker, setSelectedTicker] = useState(null);
  const { register, handleSubmit, formState: { errors } } = useForm();

  const handleSelect = (option) => {
    setSelectedDropdownOption(option);
  };

  const handleTickerSelect = (option) => {
    setSelectedTicker(option);
  };

  const handleDateChange = (date) => {
    setSelectedDate(formatedDate);
  };

  const onSubmit = (data) => {
    const formData = { ...data, company: selectedTicker, date: selectedDate };
    console.log(formData);
  };

  return (
    <div className='absolute pt-[23px] px-[19px] dark:bg-[#1E252A] bg-primary h-full top-[100px] left-0 right-0 bottom-0 rounded-t-[32px]'>
      <div className='flex justify-between mb-[18px]'>
        <p className='px-[10px] py-[6px] text-black font-semibold text-[16px] bg-[#BBD9FB] rounded-2xl'>
          {buyForm ? 'BUY' : 'SELL'}
        </p>
        <img src="/src/assets/icons/Cancel.svg" alt="cancel" onClick={close} />
      </div>

      {buyForm && (
        <CustomDropdown options={options} selectedOption={selectedDropdownOption} onSelect={handleSelect} alignment={'origin-top-left left-0'} />
      )}

      <form className='flex flex-col gap-[24px] mt-[18px]' onSubmit={handleSubmit(onSubmit)}>
        <label className='relative flex flex-col gap-[8px]'>
          <p className='form-label-text'>Company</p>
          <SearchDropdown options={tickerOptions} onSelect={handleTickerSelect} />
        </label>

        <label className="relative flex flex-col gap-[8px]">
          <p className="form-label-text">Date</p>
          <CustomDatePicker selected={selectedDate} onChange={handleDateChange} />
        </label>

        {buyForm && (
          <>
            <label className='flex flex-col gap-[8px]'>
              <p className='form-label-text'>Transaction ID</p>
              <input type="text" {...register('transactionId')} className='form-input' />
            </label>
            <div className='flex gap-[30px]'>
              <label className='flex flex-col gap-[8px]'>
                <p className='form-label-text'>Qty</p>
                <input
                  type="number"
                  step="1"
                  {...register('qty', { valueAsNumber: true, validate: { positiveInteger: value => value > 0 && Number.isInteger(value) } })}
                  className='form-input w-[97px]'
                />
                {errors.qty &&
                  <p className="text-red">Please enter a positive integer for Qty</p>
                }
              </label>

              <label className='flex flex-col gap-[8px]'>
                <p className='form-label-text'>Price</p>
                <input
                  type="number"
                  step="0.01"
                  {...register('price', { valueAsNumber: true, validate: { nonNegativeDecimal: value => value >= 0 } })}
                  className='form-input w-[97px]'
                />
                {errors.price &&
                  <p className="text-red">Please enter a non-negative decimal for Price</p>
                }
              </label>
            </div>
          </>
        )}

        {!buyForm && (
          <div className="flex flex-col mb-[34px]">
            <div className='flex flex-row gap-[69px] mb-[31px]'>
              <label className='flex flex-col gap-[8px]'>
                <p className='form-label-text'>Transaction ID</p>
                <input type="text" {...register('transactionId')} className='form-input' />
              </label>

              <label className='flex flex-col gap-[8px]'>
                <p className='form-label-text'>Price</p>
                <input
                  type="number"
                  step="0.01"
                  {...register('price', { valueAsNumber: true, validate: { nonNegativeDecimal: value => value >= 0 } })}
                  className='form-input w-[96px]'
                />
                {errors.price &&
                  <p className="text-red">Please enter a non-negative decimal for Price</p>
                }
              </label>
            </div>

            <div className='flex flex-row justify-between'>
              <p className='text-color text-[16px] font-semibold leading-5'>Sold Shares Allocation</p>
              <p className='text-[#FFD461] font-semibold text-lg leading-5'>0</p>
            </div>
          </div>
        )}

        <div className='flex gap-[30px]'>
          <label className='flex flex-col gap-[8px]'>
            <p className='form-label-text'>Sebon Commission</p>
            <div className='relative'>
              <input
                type="number"
                step='0.01'
                {...register('sebonCommission', { valueAsNumber: true, validate: { nonNegativeDecimal: value => value >= 0 } })}
                className='form-input w-[96px]'
              />
              {errors.sebonCommission && <p className="text-red">Please enter a non-negative decimal for Sebon Commission</p>}
              <img src="/src/assets/icons/Edit.svg" alt="edit" className='absolute right-[8px] top-[5px] bottom-[6px]' />
            </div>
          </label>

          <label className='flex flex-col gap-[8px]'>
            <p className='form-label-text mb-5'>DP Amount</p>
            <div className='relative'>
              <input
                type="number"
                step='0.01'
                {...register('dpAmount', { valueAsNumber: true, validate: { nonNegativeDecimal: value => value >= 0 } })}
                className='form-input w-[96px]'
              />
              {errors.dpAmount && <p className="text-red">Please enter a non-negative decimal for DP Amount</p>}
              <img src="/src/assets/icons/Edit.svg" alt="edit" className='absolute right-[8px] top-[5px] bottom-[6px]' />
            </div>
          </label>

          <label className='flex flex-col gap-[8px]'>
            <p className='form-label-text'>Broker Commission</p>
            <div className='relative'>
              <input
                type="number"
                step='0.01'
                {...register('brokerCommission', { valueAsNumber: true, validate: { nonNegativeDecimal: value => value >= 0 } })}
                className='form-input w-[96px]'
              />
              {errors.brokerCommission && <p className="text-red">Please enter a non-negative decimal for Broker Commission</p>}
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

        <button type='submit' className='bg-[#21CD9D] rounded-lg text-black text-[20px] font-semibold leading-5 py-[8px]'>Save</button>
      </form>
    </div>
  );
};

export default BuySellForm;
