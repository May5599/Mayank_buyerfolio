import React from 'react'
import "./HIWCompFourth.css"
import MobileImage from "../../../assets/images/hiw-second.png";
export default function HIWCompFourth() {
  return (
    <div className='hiw-main4'>
    <div className='hiw-main4-cont'>
       <span className='hiw-main4-head'>Unlock Your True Home Buying Power</span>
       <span className='hiw-main4-bio'>We see you, and now others will also take notice too! Buyer Foil use your data to generate a profile that accurately reflects your true home buying power, enabling real estate investors and co-buyers to see your ability to pay. It's time to secure the mortgage you need for the home you want.</span>
    </div>
     <img src={MobileImage} className='hiw-main4-image'/>
    </div>
  )
}
