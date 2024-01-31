import React, { useState } from 'react';
import { Button, RadioButton, NormalDropdown } from '../../components';
import { ValueGains } from '../reuseables';
import { portfolioDetailsDummyData } from '../../api/dummyDatas';
import { stocksData } from '../../api/dummyDatas';
import { useTheme } from '../../contexts/ThemeContext';
import { useNavigate } from 'react-router';

const PortfolioDetails = () => {
  const options = [
    { value: 'fam', label: 'fam' },
    { value: 'mero', label: 'mero' },
  ]

  const navigate = useNavigate();
  const [isPercentage, setIsPercentage] = useState(stocksData.isPercentage);
  const [selectedOption, setSelectedOption] = useState('%');
  const [selectedDropdownOption, setSelectedDropdownOption] = useState(options[0]);
  const { darkMode } = useTheme();

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
        <Button label='Back to Overview' onClick={navigateBack} />
        <NormalDropdown iconName={darkMode ?  'DownBlack.svg': 'DownWhite.svg'} options={options} selectedOption={selectedDropdownOption} onSelect={handleSelect} alignment='origin-top-right right-0'/>
      </div>

      <ValueGains data={portfolioDetailsDummyData} />

      <div className='flex flex-col gap-[30px]'>
        <div className='flex flex-row justify-between'>
          <p className='sub-heading-text'>Stocks</p>
          <div className='flex items-center gap-[8px]'>
            <RadioButton label="%" checked={selectedOption === '%'} onChange={handleOptionChange} value='%' />
            <RadioButton label="Rs" checked={selectedOption === 'Rs'} onChange={handleOptionChange} value='Rs' />
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