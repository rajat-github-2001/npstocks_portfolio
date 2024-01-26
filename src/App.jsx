import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Nav } from './features/components';
import { ThemeProvider } from './contexts/ThemeContext';
import { Home, PortfolioDetails, StockDetails } from './features/pages';

function App() {
  return (
    <>
      <ThemeProvider>
        <div className='relative'>
          <Nav />
          <Router>
            <Routes>
              <Route index element={<Home />} />
              <Route path='/portfolioDetails' element={<PortfolioDetails />} />
              <Route path='/stockDetails/:stockId' element={<StockDetails />} />
            </Routes>
          </Router>
        </div >
      </ThemeProvider>
    </>
  )
}

export default App
