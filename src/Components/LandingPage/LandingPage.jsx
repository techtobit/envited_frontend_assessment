import React from 'react';
import { Link } from 'react-router-dom';
import heroBlob from '../../assets/image 1.svg'
import './LandingPage.css'

const LandingPage = () => {
  return (
    <div className='landingPage flex-col lg:flex-row-reverse justify-between items-center justify-items-center lg:px-20 py-10'>

      <div className="hero-title lg:text-right text-center">
        <div className="">
          <h2 className='title text-primary font-bold '>Imagine if
            <br />
            <span className='title-color'>Snapchat</span>
            <br />
            had events.</h2>
        </div>
        <div className="sub_title text-secondary py-2">
          <p className='text-secondary font-normal'>Easily host and share events with your friends across any social media.</p>
        </div>
        <div className="hero-btn hidden md:hidden lg:inline-flex text-center">
          <Link to='/bookEvent' className=' event-btn rounded-lg lg:w-[320px] lg:h-[55px] p-4 text-white font-medium' >
            🎉 Create my event
          </Link>
        </div>
      </div>

      <div className="hero-blob text-center">
        <div className="blob">
          <img className='hero-img' src={heroBlob} alt="" />
        </div>
        <div className="hero-btn gird lg:hidden inline-flex text-center">
          <Link to='/bookEvent' className='text-center event-btn rounded-lg lg:w-[320px] lg:h-[55px] p-4 text-white font-medium' >
            🎉 Create my event
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;