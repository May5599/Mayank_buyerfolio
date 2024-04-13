import { useState } from 'react';
import Range from './Range'
import './proplist_styles/range.css';

function RangeBars() {
  const [marketValue,setMarketValue] = useState(10900)
	const [percentValue, setPercentValue] = useState(45)
	const [depositValue, setDepositValue] = useState(10900)
	const [mortgageValue, setMortgageValue] = useState(6.45)
	const [amortValue, setAmortValue] = useState(30)

  const handleMarketChange = e => {
    e.preventDefault();
    const mvalue = parseFloat(e.target.value);
		setMarketValue(mvalue);
  };
	const handlePercentChange = e => {
    e.preventDefault();
    const pvalue = parseFloat(e.target.value);
		setPercentValue(pvalue);
  };
	const handleDepositChange = e => {
    e.preventDefault();
    const dvalue = parseFloat(e.target.value);
		setDepositValue(dvalue);
  };
	const handleMortgageChange = e => {
    e.preventDefault();
    const mgvalue = parseFloat(e.target.value);
		setMortgageValue(mgvalue);
  };
	const handleAmortChange = e => {
    e.preventDefault();
    const avalue = parseFloat(e.target.value);
		setAmortValue(avalue);
  };

  return (
		<div className="range">
    
     <Range
		 		min={1000} 
		 	 	max={500000} 
				step={1000}
       	handleChange={handleMarketChange}
       	value1={marketValue} 
				title= {"Full Market Value" }
			/>
			<Range
		 		min={1} 
		 	 	max={100} 
				step={1}
       	handleChange={handlePercentChange}
       	value1={marketValue} 
				value2={percentValue}
				title= {"Share Percentages" }
			/>
			<Range
		 		min={1000} 
		 	 	max={500000} 
				step={1000}
       	handleChange={handleDepositChange}
       	value3={depositValue}
				title= {"Deposit Amount" }
			/>
			<Range
		 		min={1} 
		 	 	max={10} 
				step={.1}
       	handleChange={handleMortgageChange}
      	value4={mortgageValue}
				title= {"Mortgage Rate" }
			/>
			<Range
		 		min={1} 
		 	 	max={32} 
				step={0.5}
       	handleChange={handleAmortChange}
        value5={amortValue} 
				title= {"Amortization" }
			/>
			<div className="frequency">
				<span className="title"> Frequency</span>
				<span className='period'><button>Monthly</button><button>Bi weekly</button></span> 
			</div>
			</div>
  );
}

export default RangeBars;