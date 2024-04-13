import React from 'react';
import './AgentsThirdComp.css';
import TwoMen from "../../../assets/images/FamilyTwoMen.png";
import EuroMoney from "../../../assets/images/EuroMoney.png";
import Speaker from "../../../assets/images/Speaker.png";
import CustomerInsight from "../../../assets/images/CustomerInsight.png";
export default function AgentsThirdComp() {
  return (
    <div className='agents-third-main'>
      <span className='agents-third-header'>Why partner with Buyer Folio?</span>
      <div className='agents-third-collection'>
        <div className='agents-third-post'>
          <img src={TwoMen} className='agents-third-post-img'/>
          <span className='agents-third-post-header'>Relationships</span>
          <span className='agents-third-post-info'>Build meaningful relationships with renters who want to become homeowners.</span>
        </div>
        <div className='agents-third-post'>
          <img src={Speaker} className='agents-third-post-img'/>
          <span className='agents-third-post-header'>Brand awareness</span>
          <span className='agents-third-post-info'>Increase your brand awareness and loyalty among potential homebuyers.</span>
        </div>
        <div className='agents-third-post'>
          <img src={CustomerInsight} className='agents-third-post-img'/>
          <span className='agents-third-post-header'>Consumer-focused</span>
          <span className='agents-third-post-info'>Stand out from the competition with our consumer-focused platform and services.</span>
        </div>
        <div className='agents-third-post'>
          <img src={EuroMoney} className='agents-third-post-img'/>
          <span className='agents-third-post-header'>Increase sales</span>
          <span className='agents-third-post-info'>Make more money, keep more of your commission, and shorten your sales cycle.</span>
        </div>
      </div>
    </div>
  )
}