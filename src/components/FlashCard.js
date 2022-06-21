import ZoologyFC from "../images/ZoologyFlashCard.png";
import LawFC from "../images/LawFC.png";
import EconomicsFC from "../images/EconomicsFC.png";
import ScienceFC from "../images/ScienceFC.png";
import DSAFC from "../images/DSAFC.png";
import QuestionMark from "../images/QuestionMark.png"

import { useState } from "react";

export default function FlashCard({img_name, FCSize}) {
  function checker() {
    console.log("Mouse Click Detected");
  }

  const[size, setSize] = useState();


  if (img_name === "ZoologyFC") {
    return <img className="fleximg" src={ZoologyFC} onClick={checker} />;
  } else if (img_name === "LawFC") {
    return <img className="fleximg" src={LawFC} onClick={checker} />;
  } else if (img_name === "EconomicsFC") {
    return <img className="fleximg" src={EconomicsFC} onClick={checker} />;
  } else if (img_name === "ScienceFC") {
    return <img className="fleximg" src={ScienceFC} onClick={checker} />;
  } else if (img_name === "DSAFC") {
    return <img className="fleximg" src={DSAFC} onClick={checker} />;
  }
}
