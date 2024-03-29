import React, { useState } from 'react'

const NormalDropdown = ({ options, selectedOption, onSelect, alignment, iconName }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  }

  const handleOptionClick = (option) => {
    onSelect(option);
    setIsOpen(false);
  };

  return (
    <div className='relative text-left'>
      <div>
        <button
          type="button"
          onClick={handleToggle}
          className='flex items-center gap-[10px] px-[10px] py-[6px] text-sm font-semibold leading-normal text-primary bg-black dark:text-black dark:bg-primary rounded-2xl'
        >
          {selectedOption.label}
          <img src={`/src/assets/icons/${iconName}`} alt="down" />
        </button>
      </div>

      {isOpen && (
        <div className={`${alignment} absolute z-20  mt-2 w-[140px] rounded-md shadow-lg`}>
          <div className="rounded-md bg-primary shadow-xs">
            <div
              className="py-1"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="options-menu"
            >
              {options.map((option) => (
                <div
                  key={option.value}
                  onClick={() => handleOptionClick(option)}
                  className={`cursor-pointer block px-4 py-2 text-sm leading-5 hover:bg-secondary focus:outline-none focus:bg-secondary ${option.value === selectedOption.value
                    ? 'font-bold'
                    : ''
                    }`}
                  role="menuitem"
                >
                  {option.label}
                </div>
              ))}
            </div>
          </div>
        </div>)
      }
    </div>
  )
}

export default NormalDropdown