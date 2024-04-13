import React from 'react';
import './LandingForuthComp.css';
import Couple5 from "../../../assets/images/couple5.png";
export default function LandingFourthComp() {
  return (
    <div className='landing-main4'>
      <img src={Couple5} className='main4-couple'/>
      <div className='landing-main4-text-cont'>
        <span className='landing-main4-head'>Property Owners</span>
        <span className='landing-main4-about'>Discover how home co-ownership can help you age in place, access equity, and build community while reducing living costs. Explore our options today.</span>
        <div className='main4-cobuyer-btn'>
        <span>MEET YOUR CO-BUYER NOW</span>
        </div>
      </div>
    </div>
  )
}