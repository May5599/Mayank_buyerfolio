import walking from '../../assets/icons/walking.png';
import bicycle from '../../assets/icons/bicycle.png';
import bus from '../../assets/icons/bus.png';

import './proplist_styles/overview.css'

const Overview = ({data}) => {
	return (
		<div className="overview-container">
			<div className="overview-heading">
				<h3>Overview</h3>
				
				<div className="mls">
					<div className = "mls1">MLS#:<b className='mls-value'>A1165993</b></div> 
					<div className = "mls2">Brokerage: <b className='mls-value'>BHHS EWM Realty</b></div> 
				</div>
			</div>
  
			<p className="overview-content">
				{data.description}
			</p>
			<br/>
			<hr/>
			<br/>
			<h3 className='subheading'>Getting Around</h3>
			<div className="score-container">
				<div className="score">
					<div className="score-icon">
          	<img src={walking} alt="Walk" className='walking'/>
					</div>
					<div className="score-data">
						<div>Walk Score</div>
						<div className='data'>{data.walk_score}</div>
					</div>	
				</div>
			
				<div className="score">
					<div className="score-icon">
          	<img src={bicycle} alt="bike" className='bike'/>
					</div>
					<div className="score-data">
						<div>Bike Score</div>
						<div className='data'>{data.bike_score}</div>
					</div>	
				</div>
			
				<div className="score">
					<div className="score-icon">
          	<img src={bus} alt="bus" className='bus'/>
					</div>
					<div className="score-data">
						<div>Bus Score</div>
						<div className='data'>{data.bus_score}</div>
					</div>
				</div>
			</div>	
		
		</div>
	);
}
 
export default Overview;