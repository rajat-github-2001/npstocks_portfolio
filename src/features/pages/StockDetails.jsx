import React, { useEffect, useState, useRef } from 'react'
import { ValueGains, ShareInfo, BuySellButton, BuySellForm } from '../components';
import { useNavigate } from 'react-router';
import { CustomDropdown } from '../utils';
import { useTheme } from '../../contexts/ThemeContext';
import { stockDetailsDummyData, shareInfoDummyData, transactionDummyData } from '../../api/dummyDatas';

const StockDetails = () => {
  // dummy option data
  const options = [
    { value: 'ADBL', label: 'ADBL' },
    { value: 'NABIL', label: 'NABIL' },
    { value: 'SBL', label: 'SBL' },
  ]

  const navigate = useNavigate();
  const [selectedDropdownOption, setSelectedDropdownOption] = useState(options[0]);
  const [showBuyFormModal, setShowBuyFormModal] = useState(false);
  const [showSellFormModal, setShowSellFormModal] = useState(false);
  const [formData, setFormData] = useState(null);
  const [isFormEditing, setIsFormEditing] = useState(false);
  const { darkMode } = useTheme();

  const navigateToPortfolioDetails = () => {
    navigate('/portfolioDetails');
  }

  const handleSelect = (option) => {
    setSelectedDropdownOption(option);
  };

  const buyButtonClicked = () => {
    setShowBuyFormModal((prev) => !prev);
    setFormData(null);
    setIsFormEditing(false);
  }

  const sellButtonClicked = () => {
    setShowSellFormModal((prev) => !prev);
    setFormData(null);
    setIsFormEditing(false);
  }

  const transactionRowClicked = (item) => {
    setIsFormEditing(true);
    setFormData(item);
    if (item.type.label !== 'SELL') {
      setShowBuyFormModal(true)
    } else {
      setShowSellFormModal(true);
    }
  }

  return (
    <section className='section-spacing'>
      <div className='flex flex-row justify-between items-center pb-[25px]'>
        <div onClick={navigateToPortfolioDetails} className='flex flex-row justify-center items-center gap-[12px]'>
          <img src={`/src/assets/icons/${darkMode ? 'LeftArrowWhite.svg' : 'LeftArrowBlack.svg'}`} className='text-red' alt="arrow" />
          <p className='text-black dark:text-primary text-lg font-bold leading-5'>Fam</p>
        </div>
        <CustomDropdown iconName={darkMode ? 'DownBlack.svg': 'DownWhite.svg'} options={options} selectedOption={selectedDropdownOption} onSelect={handleSelect} alignment='origin-top-right right-0' />
      </div>

      <ValueGains data={stockDetailsDummyData} margin='mb-[8px]' />
      <ShareInfo data={shareInfoDummyData} />

      <div className="flex px-[16px] gap-[10px] mb-[40px]">
        <BuySellButton label="Buy" onClick={buyButtonClicked} />
        <BuySellButton label="Sell" onClick={sellButtonClicked} />
      </div>

      <div className='flex flex-col gap-[10px]'>
        <p className='sub-heading-text'>Transaction</p>

        <table className='table-auto'>
          <thead className='text-sm text-color font-semibold leading-5'>
            <tr>
              <th className='pb-[17px] text-left'>Date</th>
              <th className='pb-[17px] text-center'>Type</th>
              <th className='pb-[17px] text-center'>Qty</th>
              <th className='pb-[17px] text-right'>Price</th>
            </tr>
          </thead>

          <tbody className='text-center text-color text-sm font-normal leading-5'>
            {transactionDummyData.map((item, index) => (
              <tr key={index} onClick={() => transactionRowClicked(item)}>
                <td className='pb-[16px] text-left'>{item.date}</td>
                <td className='pb-[16px] text-left'>{item.type.label}</td>
                <td className='pb-[16px] text-center'>{item.qty}</td>
                <td className='pb-[16px] text-right'>{item.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {showBuyFormModal &&
        <BuySellForm darkMode={darkMode} close={buyButtonClicked} buyForm={true} data={formData} isEditing={isFormEditing} />
      }

      {showSellFormModal &&
        <BuySellForm darkMode={darkMode} close={sellButtonClicked} buyForm={false} data={formData} isEditing={isFormEditing} />
      }
    </section>
  )
}

export default StockDetails