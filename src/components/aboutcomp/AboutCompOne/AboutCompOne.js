import React from 'react'
import './AboutCompOne.css';
import image1 from "../../../assets/images/aboutus-1.png"
export default function AboutCompOne() {
  return (
    <div className='about-main1'>
      <div className='about-main1-text'>
        <span>We're changing the way people acquire houseownership</span>
      </div>
      <div className='about-main1-img'>
        <img src={image1}></img>
      </div>
    </div>
  )
}
