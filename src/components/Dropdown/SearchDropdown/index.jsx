import React, { useState, useEffect } from 'react';

const SearchDropdown = ({ options, onSelect, selected }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState(selected || '');
  const [filteredOption, setFilteredOption] = useState(options);

  const handleToggleDropdown = () => {
    setIsOpen(!isOpen);
  }

  useEffect(() => {
    setSearchTerm(selected || '')
  }, [selected])

  const handleSearchChange = (e) => {
    const newSearchTerm = e.target.value;
    setSearchTerm(newSearchTerm);

    const filtered = options.filter(option =>
      option.toLowerCase().includes(newSearchTerm.toLowerCase())
    );
    setFilteredOption(filtered);
  }

  const handleOptionClick = (option, e) => {
    e.preventDefault()
    setIsOpen(false);
    onSelect(option);
    setSearchTerm(option);
  }

  return (
    <div className='relative w-[330px]'>
      <input
        type="text"
        placeholder='Search Ticker'
        value={searchTerm}
        onChange={handleSearchChange}
        onClick={handleToggleDropdown}
        className='form-input w-[330px]'
      />
      <img className='absolute right-1 bottom-2' src="/src/assets/icons/DownBlack.svg" alt="down" />

      {isOpen && (
        <div className="absolute z-10 top-8 w-[330px] left-0 bg-primary rounded-md shadow-md">
          {filteredOption.map((option) => (
            <div
              key={option}
              className='p-2 cursor-pointer hover:bg-secondary text-sm'
              onClick={(e) => handleOptionClick(option, e)}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default SearchDropdown