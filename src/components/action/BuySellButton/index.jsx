import React from 'react'

const BuySellButton = ({ label, onClick }) => {
  return (
    <button className='dark:bg-[#FFFFFF14] bg-primary rounded-lg px-[62px] py-[8px]' onClick={onClick}>
      <p className={`${label === 'Buy' ? 'buy-gradient-text' : 'sell-gradient-text'} font-normal text-lg `}>{label}</p>
    </button>
  )
}

export default BuySellButton