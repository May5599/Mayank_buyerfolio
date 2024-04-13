import arrow from '../../assets/icons/arrow.png';
import singleArrow from '../../assets/icons/singleArrow.png';
import Typography from "@mui/material/Typography";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import './proplist_styles/details.css'

const DetailsInterior = ({data}) => {
	return ( 
		<div className="details-interior-container">
			<Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography><h2>Interior</h2></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
        
			<div className="rooms">
				<div className="rooms1">
					<h5> Bedrooms & Bathrooms</h5>
					<p className='key-value'><span><img src={singleArrow} className="point1" alt="arrow" /><img src={arrow} className="point" alt="arrow" /><span className="align">Bedrooms: </span></span><b> {data.bed}</b></p>
					<p className='key-value'><span><img src={singleArrow} className="point1" alt="arrow" /><img src={arrow} className="point" alt="arrow" /><span className="align">Bathrooms: </span></span><b>  {data.bath}</b></p>
					<p className='key-value'><span><img src={singleArrow} className="point1" alt="arrow" /><img src={arrow} className="point" alt="arrow" /><span className="align">Partial Bathrooms: </span></span><b>{data.partial_bath}</b></p>
				</div>
				<div className="rooms2">
					<h5> Living Room</h5>
					<p className='key-value'><span><img src={singleArrow} className="point1" alt="arrow" /><img src={arrow} className="point" alt="arrow" /><span className="align">Level: </span></span><b>{data.l_level}</b></p>
					<p className='key-value'><span><img src={singleArrow} className="point1" alt="arrow" /><img src={arrow} className="point" alt="arrow" /><span className="align">Area: </span></span><b> {data.l_area}</b></p>
					<p className='key-value'><span><img src={singleArrow} className="point1" alt="arrow" /><img src={arrow} className="point" alt="arrow" /><span className="align">Dimensions: </span></span><b>{data.l_dim}</b></p>
				</div>
			</div>

			<div className="rooms">
				<div className="rooms1">
					<h5> Recreation room</h5>
					<p className='key-value'><span><img src={singleArrow} className="point1" alt="arrow" /><img src={arrow} className="point" alt="arrow" /><span className="align">Level: </span></span><b>{data.r_level}</b></p>
					<p className='key-value'><span><img src={singleArrow} className="point1" alt="arrow" /><img src={arrow} className="point" alt="arrow" /><span className="align">Area: </span></span><b> {data.r_area}</b></p>
					<p className='key-value'><span><img src={singleArrow} className="point1" alt="arrow" /><img src={arrow} className="point" alt="arrow" /><span className="align">Dimensions: </span></span><b>{data.r_dim}</b></p>
				</div>
				<div className="rooms2">
					<h5> Dining Room</h5>
					<p className='key-value'><span><img src={singleArrow} className="point1" alt="arrow" /><img src={arrow} className="point" alt="arrow" /><span className="align">Level: </span></span><b>{data.d_level}</b></p>
					<p className='key-value'><span><img src={singleArrow} className="point1" alt="arrow" /><img src={arrow} className="point" alt="arrow" /><span className="align">Area: </span></span><b> {data.d_area}</b></p>
					<p className='key-value'><span><img src={singleArrow} className="point1" alt="arrow" /><img src={arrow} className="point" alt="arrow" /><span className="align">Dimensions: </span></span><b>{data.d_dim}</b></p>
				</div>
			</div>
		
			<div className="rooms">
				<div className="rooms1">
					<h5> Kitchen</h5>
					<p className='key-value'><span><img src={singleArrow} className="point1" alt="arrow" /><img src={arrow} className="point" alt="arrow" /><span className="align">Level: </span></span><b>{data.k_level}</b></p>
					<p className='key-value'><span><img src={singleArrow} className="point1" alt="arrow" /><img src={arrow} className="point" alt="arrow" /><span className="align">Area: </span></span><b> {data.k_area}</b></p>
					<p className='key-value'><span><img src={singleArrow} className="point1" alt="arrow" /><img src={arrow} className="point" alt="arrow" /><span className="align">Dimensions: </span></span><b>{data.k_dim}</b></p>
				</div>
				<div className="rooms2">
					<h5> Primary Bedroom</h5>
					<p className='key-value'><span><img src={singleArrow} className="point1" alt="arrow" /><img src={arrow} className="point" alt="arrow" /><span className="align">Level: </span></span><b>{data.pb_level}</b></p>
					<p className='key-value'><span><img src={singleArrow} className="point1" alt="arrow" /><img src={arrow} className="point" alt="arrow" /><span className="align">Area: </span></span><b> {data.pb_area}</b></p>
					<p className='key-value'><span><img src={singleArrow} className="point1" alt="arrow" /><img src={arrow} className="point" alt="arrow" /><span className="align">Dimensions: </span></span><b>{data.pb_dim}</b></p>
				</div>
			</div>

			<div className="rooms">
				<div className="rooms1">
					<h5> Bedroom</h5>
					<p className='key-value'><span><img src={singleArrow} className="point1" alt="arrow" /><img src={arrow} className="point" alt="arrow" /><span className="align">Level: </span></span><b>{data.b1_level}</b></p>
					<p className='key-value'><span><img src={singleArrow} className="point1" alt="arrow" /><img src={arrow} className="point" alt="arrow" /><span className="align">Area: </span></span><b> {data.b1_area}</b></p>
					<p className='key-value'><span><img src={singleArrow} className="point1" alt="arrow" /><img src={arrow} className="point" alt="arrow" /><span className="align">Dimensions: </span></span><b>{data.b1_dim}</b></p>
				</div>
				<div className="rooms2">
					<h5> Bedroom</h5>
					<p className='key-value'><span><img src={singleArrow} className="point1" alt="arrow" /><img src={arrow} className="point" alt="arrow" /><span className="align">Level: </span></span><b>{data.b2_level}</b></p>
					<p className='key-value'><span><img src={singleArrow} className="point1" alt="arrow" /><img src={arrow} className="point" alt="arrow" /><span className="align">Area: </span></span><b> {data.b2_area}</b></p>
					<p className='key-value'><span><img src={singleArrow} className="point1" alt="arrow" /><img src={arrow} className="point" alt="arrow" /><span className="align">Dimensions: </span></span><b>{data.b2_dim}</b></p>
				</div>
			</div>

			<div className="rooms">
				<div className="rooms1">
					<h5> Basement</h5>
					<p className='key-value'><span><img src={singleArrow} className="point1" alt="arrow" /><img src={arrow} className="point" alt="arrow" /><span className="align">Basement: </span></span><b>{data.basement}</b></p>
				</div>
				<div className="rooms2">
					<h5> Flooring</h5>
					<p className='key-value'><span><img src={singleArrow} className="point1" alt="arrow" /><img src={arrow} className="point" alt="arrow" /><span className="align">Flooring: </span></span><b>{data.flooring}</b></p>
				</div>
			</div>

			<div className="rooms">
				<div className="rooms1">
					<h5> Heating</h5>
					<p className='key-value'><span><img src={singleArrow} className="point1" alt="arrow" /><img src={arrow} className="point" alt="arrow" /><span className="align">Features: </span></span><b>{data.heating}</b></p>
				</div>
				<div className="rooms2">
					<h5> Cooling</h5>
					<p className='key-value'><span><img src={singleArrow} className="point1" alt="arrow" /><img src={arrow} className="point" alt="arrow" /><span className="align">Features: </span></span><b>{data.cooling}</b></p>
				</div>
			</div>

			<div className="rooms">
				<div className="rooms1">
					<h5> Appliances</h5>
					<p className='key-value'><span><img src={singleArrow} className="point1" alt="arrow" /><img src={arrow} className="point" alt="arrow" /><span className="align">Including:  </span></span><b className="bdiv1">{data.appliances}</b></p>
				</div>
				<div className="rooms2">
					<h5> Interior Features</h5>
					<p  className='key-value'><span><img src={singleArrow} className="point1" alt="arrow" /><img src={arrow} className="point" alt="arrow" /><span className="align">Windows: </span></span><b>{data.windows}</b></p>
				</div>
			</div>
			</Typography>
			</AccordionDetails>
      </Accordion>
		</div>
	);
}
 
export default DetailsInterior;