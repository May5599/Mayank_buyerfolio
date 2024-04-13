import React from 'react'
import './AboutCompFour.css';
import image1 from "../../../assets/images/aboutus-4.png"
export default function AboutCompFour() {
  return (
    <div className='about-main4'>
      <img src={image1} className='about-main4-couple' />
      <div className='about-main4-text-cont'>
        <span className='about-main4-head'>Join us and make a difference</span>
        <span className='about-main4-about'>Join our team and be part of the moment to break down racial barriers in the real estate industry. We are expanding rapidly and welcome individuals who are passionate about making a difference.</span>
        <div className='about-main4-cobuyer-btn'>
          <span>Join Us Now</span>
        </div>
      </div>
    </div>
  )
}
