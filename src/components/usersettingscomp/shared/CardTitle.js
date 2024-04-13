import React from "react";
import "./cardTitle.css"

function CardTitle ({name, style}) {
    return (
        <div className="card-title" style={{ ...style}} >
            {name}
        </div>
    )
}

export default CardTitle;