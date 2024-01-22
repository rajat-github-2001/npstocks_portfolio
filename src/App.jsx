import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { Home, PortfolioDetails, StockDetails } from './features/pages';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
  },[darkMode]);

  return (
    <>
      <div>
        <nav className="nav-bar">
          <h1 className="font-bold text-lg leading-5 text-color">Portfolio</h1>
          <button className='text-primary border-2 border-primary' onClick={() => setDarkMode(!darkMode)}>{darkMode ? 'Dark' : 'Light'}</button>
          <img src={darkMode ? '/src/assets/icons/DeleteDark.svg' : '/src/assets/icons/DeleteLight.svg'} alt="delete" />
        </nav>
        <Router>
          <Routes>
            <Route index element={<Home />} />
            <Route path='/portfolioDetails' element={<PortfolioDetails />} />
            <Route path='/stockDetails/:stockId' element={<StockDetails />} />
          </Routes>
        </Router>
      </div>
    </>
  )
}

export default App
