import React from 'react'
import "./AgentsSecondComp.css"
export default function AgentsSecondComp() {
  return (
    <div className='agents-second-main'>
      <span className='agents-second-head'>We partner with mortgage lenders and real estate agents to find the best financing, properties, from pre-approval to closing.</span>
      <div className='agents-second-banners-wrapper'>
         <div className='agents-second-banner-cont'>
              <div className='agents-second-banner'>
                 <span>5 million</span>
              </div>
              <span className='agents-second-banner-text'>Renters in the Canada yearly</span>
         </div>
         <div className='agents-second-banner-cont'>
              <div className='agents-second-banner'>
                 <span>260,000</span>
              </div>
              <span className='agents-second-banner-text'>First-time homebuyers yearly</span>
         </div>
      </div>
    </div>
  )
}