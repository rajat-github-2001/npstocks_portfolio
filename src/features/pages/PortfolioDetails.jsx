import React, { useState } from 'react';
import { ValueGains } from '../components';
import { portfolioDetailsDummyData } from '../../api/dummyDatas';
import { stocksData } from '../../api/dummyDatas';
import { useNavigate } from 'react-router';
import { CustomRadioButton, CustomDropdown } from '../utils';

const PortfolioDetails = () => {
  const options = [
    { value: 'fam', label: 'fam' },
    { value: 'mero', label: 'mero' },
  ]

  const navigate = useNavigate();
  const [isPercentage, setIsPercentage] = useState(stocksData.isPercentage);
  const [selectedOption, setSelectedOption] = useState('%');
  const [selectedDropdownOption, setSelectedDropdownOption] = useState(options[0]);

  const handleSelect = (option) => {
    setSelectedDropdownOption(option);
    // Additional logic when an option is selected
  };

  const navigateBack = () => {
    navigate('/');
  }

  const navigateToStockDetails = (items) => {
    navigate(`/stockDetails/${items.symbol}`)
  }

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
    if(event.target.value === '%') {
      setIsPercentage(true);
    } else {
      setIsPercentage(false);
    }
  };

  return (
    <section className='section-spacing'>
      <div className='flex justify-between items-center pb-[25px]'>
        <button className='shared-button' onClick={navigateBack}>Back to Overview</button>
        <CustomDropdown options={options} selectedOption={selectedDropdownOption} onSelect={handleSelect} />
      </div>

      <ValueGains data={portfolioDetailsDummyData} />

      <div className='flex flex-col gap-[30px]'>
        <div className='flex flex-row justify-between'>
          <p className='sub-heading-text'>Stocks</p>
          <div className='flex items-center gap-[8px]'>
            <CustomRadioButton label="%" checked={selectedOption === '%'} onChange={handleOptionChange} value='%' />
            <CustomRadioButton label="Rs" checked={selectedOption === 'Rs'} onChange={handleOptionChange} value='Rs' />
          </div>
        </div>

        <table className='table-auto'>
          <thead className='text-sm text-color font-semibold leading-5'>
            <tr>
              <th ></th>
              <th className='pb-[17px] text-right'>Day's Gain</th>
              <th className='pb-[17px] text-right'>Unrealised Gain</th>
            </tr>
          </thead>

          <tbody className='text-center'>
            {stocksData.data.map((items, index) => (
              <tr key={index} onClick={() => navigateToStockDetails(items)}>
                <td className='text-color text-sm leading-5 py-[6px] text-left'>{items.symbol}</td>
                <td className={`${parseFloat(items.days_gain_percentage) >= 0 ? 'text-green' : 'text-red'} py-[6px] text-right`}>{isPercentage ? items.days_gain_percentage : items.days_gain}</td>
                <td className={`${parseInt(items.unrealised_gain_percentage) >= 0 ? 'text-green' : 'text-red'} py-[6px] text-right`}>{ isPercentage ? items.unrealised_gain_percentage : items.unrealised_gain}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}

export default PortfolioDetails