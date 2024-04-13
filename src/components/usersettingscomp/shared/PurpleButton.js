import React from "react";
import { Button } from "@mui/material";
import "./purpleButton.css"

export default function PurpleButton({ text, style, fontSize, width, height }) {
  return (
    <Button
      variant="contained"
      className="purple-button"
      sx={{
        padding: "0.6em 1em 0.6em 1em",
        textTransform: "none",
        backgroundColor: "#7731E4",
        height: height ? height : "auto",
        width: width ? width : "100%",
        fontSize: fontSize ? fontSize : "1.1rem",
        fontFamily: "sans-serif",
        fontWeight: "700",
        borderRadius: "10px",
        "&:hover": {
          backgroundColor: "#9c6ee1",
        },
        ...style,
      }}
    >
      {text}
    </Button>
  );
}
