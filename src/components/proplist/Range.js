import './proplist_styles/range.css';

const Range = ({ title,min, max,step,value1,value2,value3,value4,value5,handleChange }) => {
  
  return (
    <div className="slider-container">
			<div className="range-heading">
				<span className="title"> {title}</span>
				{value2? <div><span className="value">${value1}</span><span className="value">{value2}%</span></div>
				:
				value3?
				<span className="value">${value3} </span>
				:
        value4?
				<span className="value">{value4}%</span>
        :
        value5?
        <span className="value">{value5} years</span>
        :
        <span className="value">${value1}</span>
				}
				</div>
      <input
        type="range"
        className='rangebar'
        min={min}
        max={max}
        step={step}
        onChange = {handleChange}
      />
    </div>
  );
};

export default Range