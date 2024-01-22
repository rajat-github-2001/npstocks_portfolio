import React from 'react'

const BuySellButton = ({ label, onClick }) => {
  return (
    <div className='dark:bg-[#FFFFFF14] bg-primary rounded-lg'>
      <button className={`${label === 'Buy' ? 'buy-gradient-text' : 'sell-gradient-text'} font-normal text-lg  px-[62px] py-[8px]`} onClick={onClick}>
        {label}
      </button>
    </div>
  )
}

export default BuySellButton