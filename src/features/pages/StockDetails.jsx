import React, { useState } from 'react'
import { ValueGains, ShareInfo, BuySellButton, BuySellForm } from '../components';
import { useNavigate } from 'react-router';
import { CustomDropdown } from '../utils';
import { stockDetailsDummyData, shareInfoDummyData } from '../../api/dummyDatas';

const StockDetails = () => {
  // dummy option data
  const options = [
    { value: 'ADBL', label: 'ADBL' },
    { value: 'NABIL', label: 'NABIL' },
    { value: 'SBL', label: 'SBL' },
  ]

  const navigate = useNavigate();
  const [selectedDropdownOption, setSelectedDropdownOption] = useState(options[0]);
  const [showFormModal, setShowFormModal] = useState(false);

  const darkMode = JSON.parse(localStorage.getItem('dark') || 'false');

  const navigateToPortfolioDetails = () => {
    navigate('/portfolioDetails');
  }

  const handleSelect = (option) => {
    setSelectedDropdownOption(option);
    // Additional logic when an option is selected
  };

  const buyOrSellButtonClicked = () => {
    setShowFormModal((prev) => !prev);
  }

  return (
    <section className='section-spacing'>
      <div className='flex flex-row justify-between items-center pb-[25px]'>
        <div onClick={navigateToPortfolioDetails} className='flex flex-row justify-center items-center gap-[12px]'>
        <img src="/src/assets/icons/LeftArrow.svg" alt="arrow" />
          <p className='text-black dark:text-primary text-lg font-bold leading-5'>Fam</p>
        </div>
        <CustomDropdown options={options} selectedOption={selectedDropdownOption} onSelect={handleSelect} alignment='origin-top-right right-0'/>
      </div>

      <ValueGains data={stockDetailsDummyData} margin='mb-[8px]' />
      <ShareInfo data={shareInfoDummyData} />

      <div className="flex px-[16px] gap-[10px] mb-[40px]">
        <BuySellButton label="Buy" onClick={buyOrSellButtonClicked}/>
        <BuySellButton label="Sell" onClick={buyOrSellButtonClicked}/>
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

          <tbody className='text-center text-color text-sm font-normal leading-5'>
            <tr>
              <td className='text-left'>2022-11-08</td>
              <td className='text-right'>Secondary</td>
              <td className='text-right'>4,123</td>
              <td className='text-right'>689.12</td>
            </tr>
          </tbody>
        </table>
      </div>

      {showFormModal &&
        <BuySellForm close={buyOrSellButtonClicked} buyForm={true}/>
      }

      {showFormModal && 
        <BuySellForm close={buyOrSellButtonClicked} buyForm={false}/>
      }
    </section>
  )
}

export default StockDetails