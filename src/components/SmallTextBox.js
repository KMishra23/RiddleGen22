import axios from "axios";
import { useState } from "react";

export default function SmallTextBox(props) {
  return (
    <div
      className="SmallTextBox"
      style={{
        display: "flex",
        width: "206px",
        height: "55px",
        background: "rgba(255, 45, 45, 0.65)",
        border: "1px solid #000000",
        boxShadow: "inset 0px 4px 4px rgba(0, 0, 0, 0.25)",
        justifyContent: "center",
        alignItems: "center"    
        
      }}
    >{props.boxText}</div>
  );
}
