import React from 'react'
import './LandingSecondComp.css';
import Couple1 from "../../../assets/images/couple1.png"
import Couple2 from "../../../assets/images/couple2.png"
import Couple3 from "../../../assets/images/couple3.png"
export default function LandingSecondComp() {
  return (
    <div className='landing-main2'>
      <span className='landing-main2-header'>The Love Story of Home Co-Ownership:<br/>Navigating Commitment and Building a Future.</span>
      <div className='landing-main2-post-cont'>
         <div className='landing-main2-post'>
             <img src={Couple1} className='main2-couple'/>
             <span className='main2-post-head'>The Dating Stage</span>
             <span className='main2-post-about'>Check your buying power, find a compatible partner and realtor, and aligning your financial situations, needs, and preferences.</span>
         </div>
         <div className='landing-main2-post'>
             <img src={Couple2} className='main2-couple'/>
             <span className='main2-post-head'>The Engagement Stage</span>
             <span className='main2-post-about'>Co-owning property requires open and honest conversations about expectations, responsibilities, and financial contributions.</span>
         </div>
         <div className='landing-main2-post'>
             <img src={Couple3} className='main2-couple'/>
             <span className='main2-post-head'>The Marriage Stage</span>
             <span className='main2-post-about'>The marriage stage is when you become property owners and make a lasting commitment to each other and the property.</span>
         </div>
      </div>
      <div className='landing-main2-htw-btn'>
         <button>How it works</button>
      </div>
    </div>
  )
}