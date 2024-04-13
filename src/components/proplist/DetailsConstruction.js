import arrow from '../../assets/icons/arrow.png';
import singleArrow from '../../assets/icons/singleArrow.png';
import Typography from "@mui/material/Typography";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import './proplist_styles/details.css'

const DetailsConstruction = ({data}) => {
	return ( 
		<div className="details">
			<Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
        <Typography><h2>Construction</h2></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
        
			<div className="rooms">
				<div className="rooms1">
					<h5> Type & Style</h5>
					<p className='key-value'><span ><img src={singleArrow} className="point1" alt="arrow" /><img src={arrow} className="point" alt="arrow" /><span className="align">Home Type: </span> </span>{data.home_type}</p>
					<p className='key-value'><span ><img src={singleArrow} className="point1" alt="arrow" /><img src={arrow} className="point" alt="arrow" /><span className="align">Property subtype: </span></span>  {data.property_subtype}</p>
					<br />
					<h5> Condition</h5>
					<p className='key-value'><span ><img src={singleArrow} className="point1" alt="arrow" /><img src={arrow} className="point" alt="arrow" /><span className="align">Year Built: </span></span>{data.year}</p>
				</div>
				<div className="rooms2">
					<h5> Material Information</h5>
					<p className='key-value'><span ><img src={singleArrow} className="point1" alt="arrow" /><img src={arrow} className="point" alt="arrow" /><span className="align">Construction Material: </span></span> {data.material}</p>
					<p className='key-value'><span ><img src={singleArrow} className="point1" alt="arrow" /><img src={arrow} className="point" alt="arrow" /><span className="align">Foundation: </span></span>{data.foundation}</p>
				</div>
			</div>

			</Typography>
			</AccordionDetails>
      </Accordion>
		</div>
	);
}
 
export default DetailsConstruction;