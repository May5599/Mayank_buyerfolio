import React from 'react';
import "./LandingEigthComp.css";
import CanvasJSReact from '@canvasjs/react-charts';
import {CanvasJSChart} from 'canvasjs-react-charts'
import 'toolcool-range-slider';
export default function LandingEigthComp() {
    var CanvasJS = CanvasJSReact.CanvasJS;
    var CanvasJSChart = CanvasJSReact.CanvasJSChart;
    const chartData = [
		{ name: 'Mortgage', amount: 630, color:'#F5C34E' },
		{ name: 'Co-owner', amount: 303, color:'#7731E4' },
		{ name: 'Municipal Taxes', amount: 200, color:'#497C92' },
		{ name: 'School Taxes', amount: 303,color:'#111' }
	];
    const options = {
        // width:500,
        // height:300,
        width:450,
        height:300,
        animationEnabled: true,
        // responsive: true,
        // maintainAspectRatio: true,
        subtitles: [{
            text: "$ 1568/month",
            verticalAlign: "center",
            fontSize: 30,
            dockInsidePlotArea: true,
        }],
        data: [{
            type: "doughnut",
            showInLegend: false,
            yValueFormatString: "#,###'%'",
            dataPoints: [
                {  y: 32, color:"#F5C34E"},
                {  y: 31, color:"#7731E4"},
                {  y: 10, color:"#497C92" },
                {  y: 17, color:"#111"},
            ]
        }]
        
    }
  return (
    <div className='landing-main8'>
      <span className='landing-main8-header'>Shared Ownership Affordability Calculator</span>
      <span className='landing-main8-about'>Find out how you can achieve your dream of owning a home. Enter your details below to see if you qualify for Shared Ownership. You don’t have to worry about calculating the costs, we’ll do it for you automatically.</span>
      <div className='main8-cobuyer-btn'>
         <span >Get Prequalified</span>
      </div>
      <div className='chart-wrapper'>
        <div className='chart-value-changer'>
           <div className='chart-value-wrapper'>
               <div className='chart-value-cont'>
                   <span className='chart-value-head'>Full Market Value</span>
                   <span className='chart-value'>$ 190000</span>
                </div>
                <toolcool-range-slider
                slider-width="100%"
                className="slider"
                 pointer-bg="#7731E4"
                 slider-bg-fill="#7731E4"
                 pointer-bg-focus="#7731E4"
                 pointer-width="10px"
                 pointer-height="10px"
                 min="0" 
                 max="200000"></toolcool-range-slider>
           </div>
           <div className='chart-value-wrapper'>
               <div className='chart-value-cont'>
                   <span className='chart-value-head'>Share Percentages</span>
                   <span className='chart-value'>$ 190000</span>
                </div>
                <toolcool-range-slider
                 slider-width="100%"
                 pointer-bg="#7731E4"
                 slider-bg-fill="#7731E4"
                 pointer-bg-focus="#7731E4"
                 pointer-width="10px"
                 pointer-height="10px"
                 min="0" 
                 max="200000"></toolcool-range-slider>
           </div>
           <div className='chart-value-wrapper'>
               <div className='chart-value-cont'>
                   <span className='chart-value-head'>Deposit Amount</span>
                   <span className='chart-value'>$ 190000</span>
                </div>
                <toolcool-range-slider
                 slider-width="100%"
                 pointer-bg="#7731E4"
                 slider-bg-fill="#7731E4"
                 pointer-bg-focus="#7731E4"
                 pointer-width="10px"
                 pointer-height="10px"
                 min="0" 
                 max="200000"></toolcool-range-slider>
           </div>
           <div className='chart-value-wrapper'>
               <div className='chart-value-cont'>
                   <span className='chart-value-head'>Mortgage Rate</span>
                   <span className='chart-value'>6.45%</span>
                </div>
                <toolcool-range-slider
                 slider-width="100%"
                 pointer-bg="#7731E4"
                 slider-bg-fill="#7731E4"
                 pointer-bg-focus="#7731E4"
                 pointer-width="10px"
                 pointer-height="10px"
                 min="0" 
                 max="7"></toolcool-range-slider>
           </div>
           <div className='chart-value-wrapper'>
               <div className='chart-value-cont'>
                   <span className='chart-value-head'>Amortization</span>
                   <span className='chart-value'>30 years</span>
                </div>
                <toolcool-range-slider
                 slider-width="100%"
                 pointer-bg="#7731E4"
                 slider-bg-fill="#7731E4"
                 pointer-bg-focus="#7731E4"
                 pointer-width="10px"
                 pointer-height="10px"
                 min="0" 
                 max="50"></toolcool-range-slider>
           </div>
           <div className='chart-value-wrapper'>
               <div className='chart-value-cont'>
                   <span className='chart-value-head'>Frequency</span>
                   <span className='chart-value'><button>Monthly</button><button>Bi weekly</button></span>
                </div>
             </div>   

        </div>
        <div className="canvas-chart">
      <CanvasJSChart 
      options = {options}/>
      <table className="legend">
				{chartData.map((item, index) =>
				<tr>
						<td className='colmn1'> <span style={{ 'background-color': item.color  }} className='filled-circle' ></span></td>
						<td className='colmn2'>{item.name}  </td> <td className='colmn3'>    ${item.amount} </td>
				
				</tr>
				)}
  		 </table>
      </div>
      </div>
    </div>
  )
}