import * as React from "react";
import Typography from "@mui/material/Typography";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import arrow from '../../assets/icons/arrow.png';
import singleArrow from '../../assets/icons/singleArrow.png';
import lock from '../../assets/icons/lock.png';
import './proplist_styles/details.css'

function MaterialAccordion({data1,data2}) {
  return (
    <div className="details">
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography><h2>Utilities & Green  Energy</h2></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <div className="rooms3">
                <h5> Utility</h5>
                <p className='key-value'><span><img src={singleArrow} className="point1" alt="arrow" /><img src={arrow} className="point" alt="arrow" /><span className="align">Sewer information:  </span></span>{data1.sewer_info}</p>
                <p className='key-value'><span><img src={singleArrow} className="point1" alt="arrow" /><img src={arrow} className="point" alt="arrow" /><span className="align">Water information: </span></span>{data1.water_info}</p>
              </div>
         
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography><h2>Community & Neighborhood</h2></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <div className="rooms">
              <div className="rooms1">
                <h5> Community</h5>
                <p className='key-value'><span><img src={singleArrow} className="point1" alt="arrow" /><img src={arrow} className="point" alt="arrow" /><span className="align">Features:</span></span><b className="bdiv2">{data2.features}</b></p>
              </div>
             <div className="rooms2">
                <h5> Location</h5>
                <p className='key-value'><span ><img src={singleArrow} className="point1" alt="arrow" /><img src={arrow} className="point" alt="arrow" /><span className="align">Region: </span></span>{data2.region}</p>
              </div>
           </div>
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography><h2>Days on Market  <img src={lock} className="lock" alt="lock" /></h2></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <p className="download">To view the details, download the mobile application.</p>
            <p><a href="">Download now</a></p>
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography><h2>Property Information  <img src={lock} className="lock" alt="lock" /></h2></Typography>
        </AccordionSummary>
        {/* <AccordionDetails>
          <Typography></Typography>
        </AccordionDetails> */}
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography><h2>Price & Status  <img src={lock} className="lock" alt="lock" /></h2></Typography>
        </AccordionSummary>
        {/* <AccordionDetails>
          <Typography>Text goes here ...</Typography>
        </AccordionDetails> */}
      </Accordion>
    </div>
  );
}
export default MaterialAccordion;