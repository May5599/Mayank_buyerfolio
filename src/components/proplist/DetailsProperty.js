import arrow from '../../assets/icons/arrow.png';
import singleArrow from '../../assets/icons/singleArrow.png';
import Typography from "@mui/material/Typography";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import './proplist_styles/details.css'

const DetailsProperty = ({data}) => {
	return ( 
		<div className="details-interior-container">
			<Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
        <Typography><h2>Property</h2></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
        
			<div className="rooms">
				<div className="rooms1">
					<h5> Parking</h5>
					<p className='key-value'><span ><img src={singleArrow} className="point1" alt="arrow" /><img src={arrow} className="point" alt="arrow" /><span className="align">Total Spaces: </span></span> {data.t_spaces}</p>
					<p className='key-value'><span ><img src={singleArrow} className="point1" alt="arrow" /><img src={arrow} className="point" alt="arrow" /><span className="align">Features: </span></span><b className="bdiv2">{data.features}</b></p>
					<p className='key-value'><span ><img src={singleArrow} className="point1" alt="arrow" /><img src={arrow} className="point" alt="arrow" /><span className="align">Garage Spaces: </span> </span> {data.g_spaces}</p>
					<p className='key-value'><span ><img src={singleArrow} className="point1" alt="arrow" /><img src={arrow} className="point" alt="arrow" /><span className="align">Covered Spaces: </span></span>{data.c_spaces}</p>
					<p className='key-value'><span ><img src={singleArrow} className="point1" alt="arrow" /><img src={arrow} className="point" alt="arrow" /><span className="align">Covered Spaces: </span></span>{data.c_spaces}</p>
					<br />
					<h5> Property</h5>
					<p className='key-value'><span ><img src={singleArrow} className="point1" alt="arrow" /><img src={arrow} className="point" alt="arrow" /><span className="align">Levels: </span></span>{data.levels}</p>
					<p className='key-value'><span ><img src={singleArrow} className="point1" alt="arrow" /><img src={arrow} className="point" alt="arrow" /><span className="align">Frontage Length: </span></span> {data.frontage}</p>
					<p className='key-value'><span ><img src={singleArrow} className="point1" alt="arrow" /><img src={arrow} className="point" alt="arrow" /><span className="align">Frontage Length: </span> </span>{data.frontage}</p>
				</div>
				<div className="rooms2">
					<h5> Lot</h5>
					<p className='key-value'><span ><img src={singleArrow} className="point1" alt="arrow" /><img src={arrow} className="point" alt="arrow" /><span className="align">Lot Size: </span> </span>{data.lot_size}</p>
					<p className='key-value'><span ><img src={singleArrow} className="point1" alt="arrow" /><img src={arrow} className="point" alt="arrow" /><span className="align">Dimensions: </span></span>{data.lot_dim}</p>
					<p className='key-value'><span ><img src={singleArrow} className="point1" alt="arrow" /><img src={arrow} className="point" alt="arrow" /><span className="align">Dimensions: </span></span>{data.lot_dim}</p>
					<br></br>
					<h5> Other Information</h5>
					<p className='key-value'><span ><img src={singleArrow} className="point1" alt="arrow" /><img src={arrow} className="point" alt="arrow" /><span className="align">Additional Structures Included: </span></span><b className='bdiv3'>{data.additional}</b></p>
					<p className='key-value'><span ><img src={singleArrow} className="point1" alt="arrow" /><img src={arrow} className="point" alt="arrow" /><span className="align">Parcel number: </span> </span>{data.parcel_no}</p>
					<p className='key-value'><span ><img src={singleArrow} className="point1" alt="arrow" /><img src={arrow} className="point" alt="arrow" /><span className="align">Zoning Descripton: </span></span>{data.zoning}</p>
				</div>
			</div>

			</Typography>
			</AccordionDetails>
      </Accordion>
		</div>
	);
}
 
export default DetailsProperty;