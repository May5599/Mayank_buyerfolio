import React from 'react'
import "./HIWCompSixth.css"
import MobileImage from "../../../assets/images/hiw-forth.png";
export default function HIWCompSixth() {
  return (
    <div className='hiw-main6'>
    <div className='hiw-main6-cont'>
       <span className='hiw-main6-head'>Co-Shop, Co-Tour and Create Co-Offer</span>
       <span className='hiw-main6-bio'>Discover how our platform simplifies co-ownership with the ability to co-shop, schedule co-tours, make co-offers, and navigate the home buying process seamlessly.</span>
    </div>
     <img src={MobileImage} className='hiw-main6-image'/>
    </div>
  )
}
