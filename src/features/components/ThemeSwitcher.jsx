import React, { useEffect } from 'react'
import { useTheme } from '../../contexts/ThemeContext';

const ThemeSwitcher = () => {
  const { darkMode, toggleDarkMode } = useTheme();

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
    localStorage.setItem('darkMode', darkMode);
  }, [darkMode]);

  return (
    <button
      onClick={toggleDarkMode}
      className='px-4 py-2 rounded-md bg-secondary text-primary'
    >
      {darkMode ? 'Light Mode' : 'Dark Mode'}
    </button>
  )
}

export default ThemeSwitcher