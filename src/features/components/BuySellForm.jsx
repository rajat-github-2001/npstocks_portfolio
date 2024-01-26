import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { CustomDropdown, CustomDatePicker, SearchDropdown } from '../utils';

const BuySellForm = ({ close, buyForm, data, isEditing, darkMode }) => {
  const options = [
    { value: 'SECONDARY', label: 'SECONDARY' },
    { value: 'IPO', label: 'IPO' },
    { value: 'FPO', label: 'FPO' },
    { value: 'RIGHT', label: 'RIGHT SHARES' },
    { value: 'BONUS', label: 'BONUS SHARES' },
    { value: 'CASH', label: 'CASH DIVIDEND' },
  ];

  const tickerOptions = ['NABIL', 'SBL', 'KBL'];

  const parseDate = (dateString) => {
    const [day, month, year] = dateString.split('/');
    return new Date(`${month}/${day}/${year}`);
  }

  const [selectedFormType, setSelectedFormType] = useState(data ? data.type : options[0]);
  const [selectedDate, setSelectedDate] = useState(data ? parseDate(data.date) : null);
  const [selectedTicker, setSelectedTicker] = useState(data ? data.company : '');
  // REACT-HOOK-FORM IS USED HERE
  const { register, handleSubmit, reset, formState: { errors } } = useForm({
    defaultValues: {
      company: '',
      date: null,
      transactionId: data ? data.transactionId : '',
      qty: data ? data.qty : 0,
      price: data ? data.price : 0,
      sebonCommission: data ? data.sebonCommission : 0,
      dpAmount: data ? data.dpAmount : 0,
      brokerCommission: data ? data.brokerCommission : 0,
      cash: data ? data.cash : 0
    }
  });

  const handleFormTypeSelect = (option) => {
    setSelectedFormType(option);
    setSelectedTicker('');
    setSelectedDate(null);
    reset();
  };

  const handleTickerSelect = (option) => {
    setSelectedTicker(option);
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const onSubmit = (data) => {
    const formData = { ...data, company: selectedTicker, date: selectedDate, selectedFormType: selectedFormType.value };
    reset();
    setSelectedTicker('');
    setSelectedDate(null);
    console.log(formData);
  };

  return (
    <div className='fixed pt-[23px] px-[19px] dark:bg-[#1E252A] bg-primary h-full top-[50px] left-0 right-0 bottom-0 rounded-t-[32px]'>
      <div className='flex justify-between mb-[18px]'>
        <p className='px-[10px] py-[6px] text-black font-semibold text-[16px] bg-[#BBD9FB] rounded-2xl'>
          {buyForm ? 'BUY' : 'SELL'}
        </p>
        <div className='flex flex-row gap-[18px]'>
          {isEditing &&
            <>
              <img src="/src/assets/icons/Pencil.svg" alt="cancel" />
              <img src="/src/assets/icons/Bin.svg" alt="cancel" className='mr-[13px]' />
            </>
          }
          <img src="/src/assets/icons/Cancel.svg" alt="cancel" onClick={close} />
        </div>
      </div>

      {buyForm && (
        <CustomDropdown iconName={darkMode ?  'DownBlack.svg': 'DownWhite.svg'} options={options} selectedOption={selectedFormType} onSelect={handleFormTypeSelect} alignment={'origin-top-left left-0'} />
      )}

      <form className='flex flex-col gap-[24px] mt-[18px]' onSubmit={handleSubmit(onSubmit)}>
        <label className='relative flex flex-col gap-[8px]'>
          <p className='form-label-text'>Company</p>
          <SearchDropdown options={tickerOptions} selected={selectedTicker} onSelect={handleTickerSelect} />
        </label>

        <label className="relative flex flex-col gap-[8px]">
          <p className="form-label-text">Date</p>
          <CustomDatePicker selected={selectedDate} onChange={handleDateChange} />
        </label>

        {buyForm && (
          <>
            {/* secondary */}
            {(selectedFormType.value === 'SECONDARY') && (
              <label className='flex flex-col gap-[8px]'>
                <p className='form-label-text'>Transaction ID</p>
                <input type="text" autoComplete='off' {...register('transactionId')} className='form-input' />
              </label>
            )}
            {(selectedFormType.value === 'CASH') && (
              <label className='flex flex-col gap-[8px]'>
                <p className='form-label-text'>Cash (Rs.)</p>
                <input
                  type="number"
                  step="0.01"
                  {...register('cash', { valueAsNumber: true, validate: { nonNegativeDecimal: value => value >= 0 } })}
                  className='form-input w-[97px]'
                />
                {errors.cash &&
                  <p className="text-red">Please enter a positive integer for Cash</p>
                }
              </label>
            )}
            {!(selectedFormType.value === 'CASH') &&
              (<div className='flex gap-[30px]'>
                {/* secondary, IPO, FPO, rights, bonus shares */}
                {(selectedFormType.value === 'SECONDARY' ||
                  selectedFormType.value === 'IPO' ||
                  selectedFormType.value === 'FPO' ||
                  selectedFormType.value === 'RIGHT' ||
                  selectedFormType.value === 'BONUS'
                ) && (
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
                  )}
                {/* secondary, IPO, FPO, rights */}
                {(selectedFormType.value === 'SECONDARY' ||
                  selectedFormType.value === 'IPO' ||
                  selectedFormType.value === 'FPO' ||
                  selectedFormType.value === 'RIGHT') &&
                  (<label className='flex flex-col gap-[8px]'>
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
                  )}
              </div>)}
          </>
        )}

        {/* if sell form */}
        {!buyForm && (
          <div className="flex flex-col">
            <div className='flex flex-row gap-[69px] mb-[31px]'>
              <label className='flex flex-col gap-[8px]'>
                <p className='form-label-text'>Transaction ID</p>
                <input type="text" {...register('transactionId')} className='form-input w-[165px]' />
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
        {(!buyForm && isEditing) && (
          <div className='flex flex-col rounded-lg dark:bg-[#FFFFFF14] bg-[#F0F0F0] gap-[8px] px-[8px] py-[10px]'>
            <div className='flex flex-row justify-start gap-[90px]'>
              <p className='text-secondary text-sm font-normal leading-5'>2023/09/25</p>
              <p className='text-secondary text-sm font-normal leading-5'>Secondary @ Rs. 200.01</p>
            </div>

            <div className="flex flex-row justify-start gap-[60px]">
              <div className="flex flex-col">
                <p className='text-primary text-sm font-normal leading-5'>Available Shares</p>
                <p className='text-primary text-[16px] font-semibold'>100</p>
              </div>
              <div className="flex flex-col w-[150px] gap-[5px]">
                <p className='text-primary text-sm font-normal leading-5'>Allocated Shares</p>
                <p className='text-[16px] font-semibold pl-[14px] py-[5px] bg-primary rounded-lg'>10</p>
              </div>
            </div>
          </div>
        )}


        {(selectedFormType.value === 'SECONDARY' || !buyForm) &&
          (<div className='flex gap-[30px]'>
            {/* secondary */}
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

            {/* secondary */}
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

            {/* secondary */}
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
          </div>)}

        <div className='flex flex-col gap-[11px] mt-[10px] dark:bg-[#FFFFFF14] bg-[#F0F0F0] rounded-2xl px-[24px] py-[16px]'>
          <div className='flex flex-row justify-between'>
            <p className='normal-text'>Total Amount</p>
            <p className='normal-text font-bold '>{data ? data.totalAmount : 0.00}</p>
          </div>

          <div className='flex flex-row justify-between'>
            <p className='normal-text'>Cost Per Share</p>
            <p className='normal-text font-bold'>{data ? data.costPerShare : 0.00}</p>
          </div>
        </div>

        {isEditing ?
          <button type='submit' className='bg-[#21CD9D] rounded-lg text-black text-[20px] font-semibold leading-5 py-[8px]'>Update</button> :
          <button type='submit' className='bg-[#21CD9D] rounded-lg text-black text-[20px] font-semibold leading-5 py-[8px]'>Save</button>
        }
      </form>
    </div>
  );
};

export default BuySellForm;
