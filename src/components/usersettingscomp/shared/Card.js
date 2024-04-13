import React from "react";
import CardTitle from "./CardTitle";
import "./card.css"

export default function Card({ name, width, heightRatio, children, style, disableTitle }) {
  return (
    <div
      className="user-settings-comp-container"
      style={{
        position: "relative",
        width: width || "100%",
        border: "1.25px solid #dedede",
        borderRadius: "20px",
        overflow: "hidden",
        background: "#FFF",
        ...style,
      }}
    >
      {!disableTitle && <div className="card-title-in-card"><CardTitle name={name} /></div>}
      {children}
    </div>
  );
}