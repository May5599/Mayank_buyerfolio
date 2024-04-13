import React from 'react';
import './AgentsFourthComp.css';
import Couple4 from "../../../assets/images/AgentsHumanPair.png";
export default function AgentsFourthComp() {
  return (
    <div className='agents-main3'>
      <img src={Couple4} className='main3-couple'/>
      <div className='agents-main3-text-cont'>
        <span className='agents-main3-head'>Let’s do this</span>
        <span className='agents-main3-about'>Are you a mortgage broker or real estate agent? Get started with us for free or book a demo to discover how we can assist renters in becoming homeowners.</span>
        <div className='main3-cobuyer-btn'>
        <span>Let’s Talk</span>
        </div>
      </div>
    </div>
  )
}