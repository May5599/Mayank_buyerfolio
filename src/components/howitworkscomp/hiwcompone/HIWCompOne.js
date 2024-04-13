import React from 'react'
import './HIWCompOne.css'
import BgVideo from "../../../assets/backgrounds/backgroundvideo.mp4"
export default function HIWCompOne() {
  return (
    <div className='hiw-main'>
     <video className='videoTag' autoPlay loop muted> 
     <source src={BgVideo} type='video/mp4' />
     </video>
     <span>Share a Home, Save Money, Build Equity</span>
    </div>
  )
}