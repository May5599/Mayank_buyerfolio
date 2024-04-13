import React from "react";
import "./AgentsFirstComp.css";
// import AgentsMain from "../../../assets/images/AgentsMain.png";
export default function AgentsFirstComp() {
  return (
    <div className="agent-first-main">
      <div className="agent-first-main-text">
        Hello <span class="agent-first-future-partners">future partners</span>, lets help renters become homeowners
      </div>
     <div className='agent-first-main'>
      {/* <img src={AgentsMain} className='agents-first-image' /> */}
      <div className='agent-first-btn'>
        <span>Let's Talk</span>
      </div>
    </div>
    </div>
  );
}
