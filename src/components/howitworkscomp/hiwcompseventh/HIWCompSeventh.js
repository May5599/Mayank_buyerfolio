import React from 'react'
import "./HIWCompSeventh.css"
import MobileImage from "../../../assets/images/hiw-fifth.png"
export default function HIWCompSeventh() {
  return (
    <div className='hiw-main7'>
        <div className='hiw-main7-cont'>
           <span className='hiw-main7-head'>Connect with Real Estate Experts</span>
           <span className='hiw-main7-bio'>Our platform pairs you with experienced real estate experts who specialize in co-ownership, making it easier to close the deal, save time and money.</span>
        </div>
      <img src={MobileImage} className='hiw-main7-image'/>
    </div>
  )
}