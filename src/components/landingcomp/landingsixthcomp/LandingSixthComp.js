import React from 'react'
import './LandingSixthComp.css';
import Chart1 from "../../../assets/images/chart1.png";
import Chart2 from "../../../assets/images/chart2.png";
import Chart3 from "../../../assets/images/chart3.png";
import Chart4 from "../../../assets/images/chart4.png";
export default function LandingSixthComp() {
  return (
    <div className='landing-main6'>
      <span className='landing-main6-header'>Canadians buying homes with family, friends to combat housing affordability woes: Royal LePage survey</span>
      <div className='landing-main6-charts-wrapper'>
      <div className='landing-main6-charts-wrapper-cont1'>
          <div className='landing-main6-chart-cont'>
            <img className='landing-main6-chart' src={Chart1}/>
            <span>Canadian co-owners cite a lack of housing affordability as a major motivator for choosing to co-purchase a property</span>
          </div>
          <div className='landing-main6-chart-cont'>
            <img className='landing-main6-chart' src={Chart2}/>
            <span>Canadian co-owners say they own a single-family detached property</span>
          </div>
        </div> 

        <div className='landing-main6-charts-wrapper-cont2'>
          <div className='landing-main6-chart-cont'>
            <img className='landing-main6-chart' src={Chart3}/>
            <span>Co-owners co-own a home with their parents</span>
          </div>
          <div className='landing-main6-chart-cont'>
            <img className='landing-main6-chart' src={Chart4}/>
            <span>Homeowners co-own a property with someone other than their spouse</span>
          </div>
          </div> 
      </div>
    </div>
  )
}