import React from 'react'
import "./HIWCompFifth.css"
import MobileImage from "../../../assets/images/hiw-third.png"
export default function HIWCompFifth() {
  return (
    <div className='hiw-main5'>
        <div className='hiw-main5-cont'>
           <span className='hiw-main5-head'>Swipe Right to Connect with Prospective Co-buyers</span>
           <span className='hiw-main5-bio'>Swipe right to match with prospective co-buyers in your area. Browse profiles of like-minded individuals who could be compatible as co-owners. When you come across a profile that interests you, simply click the "match" button. If the interest is mutual, you and your new match will be connected through chat!</span>
        </div>
      <img src={MobileImage} className='hiw-main5-image'/>
    </div>
  )
}