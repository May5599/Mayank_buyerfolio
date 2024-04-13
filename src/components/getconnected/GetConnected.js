import React from "react";
import icon1 from "../../assets/images/get-connected-icon-1.png"
import icon2 from "../../assets/images/get-connected-icon-2.png"
import icon3 from "../../assets/images/get-connected-icon-3.png"
import icon4 from "../../assets/images/get-connected-icon-4.png"
import icon5 from "../../assets/images/get-connected-icon-5.png"
import icon6 from "../../assets/images/get-connected-icon-6.png"
import icon7 from "../../assets/images/get-connected-icon-7.png"
import "./style.css"


const OneConnectedGroup = ({ groupName, icos }) => {
    return (
        <div className="get-connected-group">
            <div className="get-connected-group-title">{groupName}</div>
            <div className="get-connected-group-icos-container">
                {icos.map((ico) => {
                    return <div className="get-connected-ico">
                        <img className="get-connected-ico-image" src={ico} alt="ico" />
                    </div>
                })}
            </div>
        </div>
    )
}

function GetConnected() {
    const data = [
        {
            groupName: "Connect On Social",
            icos: [icon1, icon2, icon3]
        },
        {
            groupName: "Download the app",
            icos: [icon4, icon5]
        },
        {
            groupName: "Email & Chat with us",
            icos: [icon6, icon7]
        },
    ]
    return (
        <div className='get-connected-comp'>
            <span className='get-connected-head'>Get Connected</span>
            <div className="get-connected-groups-container">
                {data.map((item) => { return <OneConnectedGroup groupName={item.groupName} icos={item.icos} /> })}
            </div>
        </div>
    )
}

export default GetConnected;