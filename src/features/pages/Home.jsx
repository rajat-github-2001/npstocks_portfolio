import React from 'react'
import { YourPortfolio, ValueGains } from '../components';
import { gainsDummyData } from '../../api/dummyDatas';
import { useNavigate } from 'react-router';

const Home = () => {
  const navigate = useNavigate();

  const navigateToPortfolioDetails = () => {
    navigate('/portfolioDetails');
  }

  return (
    <section className='section-spacing'>
      <div className='flex justify-between pb-[25px]'>
        <p className='font-[500] text-md text-primary dark:text-black bg-color px-[10px] py-[6px] rounded-2xl'>Overview</p>
        <button className='shared-button'>+ Portfolio</button>
      </div>

      <ValueGains data={gainsDummyData}/>

      <YourPortfolio navigateToPortfolioDetails={navigateToPortfolioDetails} />
    </section>
  )
}

export default Home