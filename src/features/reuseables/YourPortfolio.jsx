import React, { useState } from 'react'
import { RadioButton } from '../../components';

const YourPortfolio = ({ navigateToPortfolioDetails }) => {
  const gains = ["Days Gains", "Unrealised", "Realised", "Overall"];
  const [selectedOption, setSelectedOption] = useState('Days gains');

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  }

  return (
    <div>
      <h2 className='sub-heading-text'>Your Portfolio</h2>
      <div className='flex gap-[4px] mb-[24px]'>
        {gains.map((gain) => (
          <RadioButton key={gain} label={gain} checked={selectedOption === gain} onChange={handleOptionChange} value={gain} />
        ))}
      </div>

      <div className='flex flex-col gap-2'>
        <div className='flex flex-row justify-between dark:bg-gray bg-[#FAFAFA] p-[16px] rounded-2xl' onClick={navigateToPortfolioDetails}>
          <div className='flex flex-col gap-[5px]'>
            <p className='text-color text-lg leading-5 font-semibold'>Fam</p>
            <p className='text-color text-lg leading-5 font-medium'>68,121.00</p>
          </div>

          <div className='flex flex-col items-end gap-[5px]'>
            <p className='text-red text-lg leading-5 font-semibold'>-234.00</p>
            <p className='text-red text-[16px] leading-5 font-medium'>-0.36%</p>
          </div>
        </div>

        <div className='flex flex-row justify-between dark:bg-gray bg-[#FAFAFA] p-[16px] rounded-2xl' onClick={navigateToPortfolioDetails}>
          <div className='flex flex-col gap-[5px]'>
            <p className='text-color text-lg leading-5 font-semibold'>Mero</p>
            <p className='text-color text-lg leading-5 font-medium'>68,121.00</p>
          </div>

          <div className='flex flex-col items-end gap-[5px]'>
            <p className='text-red text-lg leading-5 font-semibold'>-234.00</p>
            <p className='text-red text-[16px] leading-5 font-medium'>-0.36%</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default YourPortfolio