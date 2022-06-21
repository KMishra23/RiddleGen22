import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

export default function CaptchaBox({captcha, showAns}, ref) {

  useEffect(() => {
    // console.log(captcha)
    // console.log(showAns)
  })

  // const UnselectedCaptcha = {
  //   display: "flex",
  //   width: "195.18px",
  //   height: "195.18px",
  //   background: "#D6F1FF",
  //   border: "0.920659px solid #000000",
  //   boxShadow: "inset 0px 3.68263px 3.68263px rgba(0, 0, 0, 0.25)",
  //   borderRadius: "2.17834px",
  //   justifyContent: "center",
  //   alignItems: "center",
  //   margin: "10px"
  // }

  // const CorrectSelectedCaptcha = {
  //   display: "flex",
  //   width: "195.18px",
  //   height: "195.18px",
  //   background: "#D6F1FF",
  //   border: "0.920659px solid #000000",
  //   boxShadow: "inset 0px 3.68263px 3.68263px rgba(0, 0, 0, 0.25)",
  //   borderRadius: "2.17834px",
  //   justifyContent: "center",
  //   alignItems: "center",
  //   margin: "10px"
  // }

  // const InCorrectSelectedCaptcha = {
  //   display: "flex",
  //   width: "195.18px",
  //   height: "195.18px",
  //   background: "#D6F1FF",
  //   border: "0.920659px solid #000000",
  //   boxShadow: "inset 0px 3.68263px 3.68263px rgba(0, 0, 0, 0.25)",
  //   borderRadius: "2.17834px",
  //   justifyContent: "center",
  //   alignItems: "center",
  //   margin: "10px"
  // }

  const [captchaStyle, setStyle] = useState("UnselectedCaptcha");

  const onClickEvent = (e) => {
    console.log("Clicked Captcha")

    e.preventDefault();
    if(showAns) {
      if(captcha.Truth_Value) setStyle("CorrectSelectedCaptcha")
      else setStyle("InCorrectSelectedCaptcha")
    }

  };

  return (
    <div
      className={captchaStyle}
      onClick={onClickEvent}
    >
      <p style={{margin: "20px"}}>{captcha.Captcha_Text}</p>
    </div>
  );
}
