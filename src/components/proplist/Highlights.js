import listed from '../../assets/icons/listed.png';
import parking from '../../assets/icons/parking.png';
import basement from '../../assets/icons/basement.png';
import cooling from '../../assets/icons/cooling.png';
import HOA from '../../assets/icons/HOA.png';
import price from '../../assets/icons/price.png';
import './proplist_styles/highlights.css'

const Highlights = ({data}) => {

	return (
		<div className="highlights-container">
			<h3> Home Highlights</h3>
			<div className="highlights-content">
				<div className="col1-col2">
				<div className="column1">
					<div className="key">
          <img src={parking} alt="parking" className='high-icon'/><span className="key-icon">Parking</span>
					</div>
					<div className="key">
          <img src={basement} alt="basement" className='high-icon' /><span className="key-icon">Basement</span>
					</div>
					<div className="key">
          <img src={cooling} alt="cooling" className='high-icon' /><span className="key-icon">Cooling</span>
					</div>
				</div>
				
				<div className="column2">
					<div className="key">
						<span className="key-icon">{data.parking}</span>
					</div>
					<div className="key">
					<span className="key-icon">{data.basement}</span>
					</div>
					<div className="key">
						<span className="key-icon">{data.cooling}</span>
					</div>
				</div>
				</div>
				<div className="col3-col4">
				<div className="column3">
					<div className="key">
          <img src={HOA} alt="HOA" className='high-icon'/><span className="key-icon">HOA</span>
					</div>
					<div className="key">
          <img src={price} alt="price per sq ft" className='high-icon'/><span className="key-icon">Price/Sqft</span>
					</div>
					<div className="key">
          <img src={listed} alt="listed" className='high-icon'/><span className="key-icon">Listed</span>
					</div>
				</div>

				<div className="column4">
					<div className="key">
						<span className="key-icon">{data.HOA}</span>
					</div>
					<div className="key">
					<span className="key-icon">{data.price}</span>
					</div>
					<div className="key">
						<span className="key-icon">{data.listed}</span>
					</div>
				</div>
				</div>	
			</div>	
		</div>
	);
}
 
export default Highlights;