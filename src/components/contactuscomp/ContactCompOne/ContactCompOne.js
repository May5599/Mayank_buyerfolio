import React from 'react'
import './ContactCompOne.css'
import { Button } from '@mui/material'

export default function ContactCompOne() {
  return (
    <div className='contact-first-main'>
      <div className='contact-first-head'>
        <span className='contact-first-header'>Let's get in touch!</span>
        <span className='contact-first-subheader'>Thinking about buying a new home, selling, or both? We're available <span>seven days a week, 8am-8pm EST</span> to help get you started.</span>
        <div className='contact-first-buttons-container'>
          <div className='contact-first-button-container'>
            <Button className='contact-first-button'>Book a call today</Button>
          </div>
          <div className='contact-first-button-container'>
            <Button className='contact-first-button'>Connect on LinkedIn</Button>
          </div>
        </div>
      </div>

    </div>
  )
}
