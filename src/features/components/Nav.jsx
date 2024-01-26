import React from 'react'
import ThemeSwitcher from './ThemeSwitcher';
import { useTheme } from '../../contexts/ThemeContext';

const Nav = () => {
  const { darkMode } = useTheme();
  return (
    <nav className="nav-bar">
      <h1 className="font-bold text-lg leading-5 text-color">Portfolio</h1>
      <ThemeSwitcher />
      <img src={`/src/assets/icons/${darkMode ? 'DeleteDark.svg' : 'DeleteLight.svg'}`} alt="delete" />
    </nav>
  )
}

export default Nav