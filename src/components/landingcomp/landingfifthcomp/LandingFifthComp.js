import React from 'react';
import './LandingFifthComp.css';
import Couple6 from "../../../assets/images/couple6.png";
export default function LandingFifthComp() {
  return (
    <div className='landing-main5'>
      <img src={Couple6} className='main5-couple'/>
      <div className='landing-main5-text-cont'>
        <span className='landing-main5-head'>Real Estate Investors </span>
        <span className='landing-main5-about'>Discover the benefits of home share-ownership - invest in real estate while reducing risks and supporting friends, family, or even strangers looking for affordable housing.</span>
        <div className='main5-cobuyer-btn'>
        <span>MEET YOUR CO-BUYER NOW</span>
        </div>
      </div>
    </div>
  )
}