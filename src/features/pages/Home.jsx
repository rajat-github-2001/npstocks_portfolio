import React, { useState } from 'react'
import { YourPortfolio, ValueGains, AddPortfolio } from '../components';
import { gainsDummyData } from '../../api/dummyDatas';
import { useNavigate } from 'react-router';

const Home = () => {
  const navigate = useNavigate();
  const [showAddPortfolio, setshowAddPortfolio] = useState(false);

  const navigateToPortfolioDetails = () => {
    navigate('/portfolioDetails');
  }

  const addPortfolio = () => {
    setshowAddPortfolio(true);
  }

  const onClose = () => {
    setshowAddPortfolio(false);
  }

  return (
    <section className='section-spacing'>
      <div className='flex justify-between pb-[25px]'>
        <p className='font-[500] text-sm text-primary dark:text-black bg-color px-[10px] py-[6px] rounded-2xl'>Overview</p>
        <button className='portfolio-button' onClick={addPortfolio}>+ Portfolio</button>
      </div>

      <ValueGains data={gainsDummyData} />

      <YourPortfolio navigateToPortfolioDetails={navigateToPortfolioDetails} />

      {showAddPortfolio && (
        <AddPortfolio close={onClose}/>
      )}
    </section>
  )
}

export default Home