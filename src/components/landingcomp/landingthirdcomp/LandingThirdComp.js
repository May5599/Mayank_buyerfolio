import React from 'react';
import './LandingThirdComp.css';
import Couple4 from "../../../assets/images/couple4.png";
export default function LandingThirdComp() {
  return (
    <div className='landing-main3'>
      <img src={Couple4} className='main3-couple3'/>
      <div className='landing-main3-text-cont'>
        <span className='landing-main3-head'>Aspiring Homeowners</span>
        <span className='landing-main3-about'>Discover the ideal co-buyer to share the purchase of your dream home or investment property. Build equity together and achieve your homeownership goals.</span>
        <div className='main3-cobuyer-btn3'>
        <span>MEET YOUR CO-BUYER NOW</span>
        </div>
      </div>
    </div>
  )
}