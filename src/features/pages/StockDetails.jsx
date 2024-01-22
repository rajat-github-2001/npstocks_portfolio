import React, { useState } from 'react'
import { ValueGains, ShareInfo, BuySellButton } from '../components';
import { useNavigate } from 'react-router';
import { CustomDropdown } from '../utils';
import { stockDetailsDummyData, shareInfoDummyData } from '../../api/dummyDatas';

const StockDetails = () => {
  const options = [
    { value: 'ADBL', label: 'ADBL' },
    { value: 'NABIL', label: 'NABIL' },
    { value: 'SBL', label: 'SBL' },
  ]

  const navigate = useNavigate();
  const [selectedDropdownOption, setSelectedDropdownOption] = useState(options[0]);

  const handleSelect = (option) => {
    setSelectedDropdownOption(option);
    // Additional logic when an option is selected
  };

  const navigateToPortfolioDetails = () => {
    navigate('/portfolioDetails');
  }

  return (
    <section className='section-spacing'>
      <div className='flex flex-row justify-between items-center pb-[25px]'>
        <div onClick={navigateToPortfolioDetails} className='flex flex-row justify-center items-center gap-[12px]'>
          <img src="/src/assets/icons/LeftArrow.svg" alt="arrow" />
          <p className='text-black dark:text-primary text-lg font-bold leading-5'>Fam</p>
        </div>
        <CustomDropdown options={options} selectedOption={selectedDropdownOption} onSelect={handleSelect} />
      </div>

      <ValueGains data={stockDetailsDummyData} margin='mb-[8px]' />
      <ShareInfo data={shareInfoDummyData} />

      <div className="flex px-[16px] gap-[10px] mb-[40px]">
        <BuySellButton label="Buy" />
        <BuySellButton label="Sell" />
      </div>

      <div className='flex flex-col gap-[10px]'>
        <p className='sub-heading-text'>Transaction</p>

        <table className='table-auto'>
          <thead className='text-sm text-color font-semibold leading-5'>
            <tr>
              <th className='pb-[17px] text-left'>Date</th>
              <th className='pb-[17px] text-right'>Type</th>
              <th className='pb-[17px] text-right'>Qty</th>
              <th className='pb-[17px] text-right'>Price</th>
            </tr>
          </thead>

          <tbody className='text-center text-color'>
            <tr>
              <td className='text-left'>2022-11-08</td>
              <td className='text-right'>Secondary</td>
              <td className='text-right'>4,123</td>
              <td className='text-right'>689.12</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  )
}

export default StockDetails