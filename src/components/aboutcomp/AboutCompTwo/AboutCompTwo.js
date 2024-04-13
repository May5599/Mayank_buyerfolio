import React from 'react';
import "./AboutCompTwo.css";
import image1 from "../../../assets/images/aboutus-2-1.png"
import image2 from "../../../assets/images/aboutus-2-2.png"
export default function AboutCompTwo() {
  return (
    <div className='about-main2'>
      <div className='about-main2-cont'>
        <div className='about-main2-top'>
          <div className='about-main2-grid-left'>
            <img src={image1} alt='house' />
          </div>
          <div className='about-main2-grid-right'>
            <span>Making homeownership achievable</span>
            <ul>
              <li>By co-owning a home with like-minded individual, you can reduce your mortgage payments, increase your buying power, and enjoy the perks of living in a community.</li>
              <li>Home co-ownership allows you to own a share of a property with other co-owners, who can be your friends, family, or partners. You can choose the type of home, the location, the co-ownership agreement that suits your needs and preferences.</li>
            </ul>
          </div>
        </div>
        <div className='about-main2-bottom'>
          <div className='about-main2-grid-right'>
            <span>Our Vision</span>
            <span>Our Vision is to help One Million<br />Canadians become Homeowners</span>
          </div>
          <div className='about-main2-grid-bottom-right'>
            <img src={image2} alt='house' />
          </div>
        </div>
      </div>
    </div>
  )
}
