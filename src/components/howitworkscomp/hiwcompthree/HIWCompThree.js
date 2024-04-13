import React from 'react'
import "./HIWCompThree.css"
import MobileImage from "../../../assets/images/hiw-first.png"
export default function HIWCompThree() {
  return (
    <div className='hiw-main3'>
        <div className='hiw-main3-cont'>
           <span className='hiw-main3-head'>Create your profile and unlock a world of Co-homeownership possibilities</span>
           <span className='hiw-main3-bio'>The initial step is to sign up and create a free profile. Provide detailed information about your lifestyle,  preferences, financial situation, and real estate goals. The more descriptive you are in your profile, the more precise the matchmaking process will be.</span>
        </div>
      <img src={MobileImage} className='hiw-main3-image'/>
    </div>
  )
}