import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";
import { forwardRef, useState } from "react";
import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import SmallTextBox from "./SmallTextBox";
import CaptchaFC from "./CaptchaGuessBox";
import CaptchaBox from "../CaptchaBox";
import Button from "react-bootstrap/Button"
import { useRef } from "react";
import { useImperativeHandle } from "react";

import Header from "./LearnerHeader";
import Infobar from "./Infobar";
import FlashCard from "./FlashCard";
import './trial.css'


const ChildCaptcha = forwardRef((props, ref) => {
  useImperativeHandle(ref, () => ({
    getAlert() {
      // alert("Alert")
      console.log("Answer Submitted")
      console.log(props.showAns)
      if(props.showAns && isClicked) {
        if(props.captcha.Truth_Value) setStyle("CorrectSelectedCaptcha")
        else setStyle("InCorrectSelectedCaptcha")
      }
    }
  }));

  const [isClicked, setClicked] = useState(false)
  const [captchaStyle, setStyle] = useState("UnselectedCaptcha");

  const onClickEvent = (e) => {
    setClicked(true)

    console.log("Clicked Captcha")
    e.preventDefault();
    if(props.showAns) {
      if(props.captcha.Truth_Value) setStyle("CorrectSelectedCaptcha")
      else setStyle("InCorrectSelectedCaptcha")
    }

  };

  return (
    <div
      className={captchaStyle}
      onClick={onClickEvent}
    >
      <p style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        margin: "20px",
      }}>{props.captcha.Captcha_Text}</p>
    </div>
  );
})

export default function Learner3(props) {

  const meterElement = document.querySelector(".aBox");

  function setMeter(meter, value) {
    if(value < 0 || value > 1) return;

    meter.querySelector(".theMeter").style.height = value*100+"%"
  }

  function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle.
    while (currentIndex != 0) {
  
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }

  const [positiveExamples, setPosEx] = useState([])
  const [negativeExamples, setNegEx] = useState([])
  const [Examples, setExample] = useState([0, 1, 2, 3, 4, 5, 6, 7, 8])
  
  const location = useLocation()
  const { riddleID } = location.state
  const { answer } = location.state
  const { hintsData } = location.state 
  const [showAns, setShowAns] = useState(false)

  const child0  = useRef()
  const child1  = useRef()
  const child2  = useRef()
  const child3  = useRef()
  const child4  = useRef()
  const child5  = useRef()
  const child6  = useRef()
  const child7  = useRef()
  const child8  = useRef()

  // const generateCaptchas = (e) => {

  // }

  const testStuff = (e) => {
    console.log(Examples[0].Captcha_Text)
  }

  const clicky = (e) => {
    setShowAns(true)
    child1.current.getAlert()
  }

  const submitAnswers = (e) => {
    setShowAns(true)
    child0.current.getAlert()
    child1.current.getAlert()
    child2.current.getAlert()
    child3.current.getAlert()
    child4.current.getAlert()
    child5.current.getAlert()
    child6.current.getAlert()
    child7.current.getAlert()
    child8.current.getAlert()
    setMeter(meterElement, 0.2);
  } 

  useEffect(() => {
    // console.log(riddleID)
    axios.get('http://localhost:5000/riddlesCaptcha')
      .then((res) => {
        let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8]
        shuffle(arr)
        for(let i = 0; i < 9; i++) {
          if(arr[i]%3 == 0){
            positiveExamples.push(res.data[i])
          } else {
            negativeExamples.push(res.data[i])
          }
          // Examples.push(res.data[i])
        }
        setExample(res.data)
      })
      console.log(hintsData)
    }, [])

  return (
    <div className="Learner3">
      <Header />
      {/* <Infobar img={props.selection} /> */}
      {/* <Button  variant="primary" onClick={testStuff}>Test</Button> */}
      <div
        className="MainPageArea"
        style={{
          display: "flex",
          // flex: "1",
          justifyContent: "center",
          marginLeft: "20px",
          marginTop: "30px",
        }}
      >
        <div
          className="LeftSideUserGuessArea"
          style={{
            display: "flex",
            // flex: "1",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            // marginLeft: "20px",
            // marginTop: "30px",
            width: "300px"
          }}
        >
          <h2 className="text-center text-poppins-regular">Your Guess: {answer}</h2>
          <CaptchaFC FCSize={1} img_name="QuestionMark" />
          <Button variant="success" onClick={submitAnswers} style={{
            display: "flex",
            // flex: "1",
            justifyContent: "center",
            alignItems: "center",
            height: "1%",
            width: "60%",
            padding: "30px",
          }}>Submit Answers</Button>
        </div>
        <div
          className="CenterCaptchaBoxes"
          style={{
            display: "flex",
            flex: "1",
            flexDirection: "column",
            justifyContent: "center",
            marginLeft: "20px",
            marginTop: "30px",
          }}
        >
          <div
            className="CenterCaptchaBoxes"
            style={{
              display: "flex",
              flex: "1",
              justifyContent: "center",
              marginLeft: "20px",
              marginTop: "30px",
            }}
          >
            <ChildCaptcha captcha = {hintsData[3]} showAns = {showAns} ref={child0} />
            <ChildCaptcha captcha = {hintsData[4]} showAns = {showAns} ref={child1} />
            <ChildCaptcha captcha = {hintsData[5]} showAns = {showAns} ref={child2} />
            {/* <button onClick={clicky}>Clicky</button> */}
            {/* <CaptchaBox captcha = {Examples[2]} showAns = {showAns}/> */}
          </div>
          <div
            className="CenterCaptchaBoxes"
            style={{
              display: "flex",
              flex: "1",
              justifyContent: "center",
              marginLeft: "20px",
              marginTop: "10px",
            }}
          >
            <ChildCaptcha captcha = {hintsData[6]} showAns = {showAns} ref={child3} />
            <ChildCaptcha captcha = {hintsData[7]} showAns = {showAns} ref={child4} />
            <ChildCaptcha captcha = {hintsData[8]} showAns = {showAns} ref={child5} />
          </div>
          <div
            className="CenterCaptchaBoxes"
            style={{
              display: "flex",
              flex: "1",
              justifyContent: "center",
              marginLeft: "20px",
              marginTop: "10px",
            }}
          >
            <ChildCaptcha captcha = {hintsData[9]} showAns = {showAns} ref={child6} />
            <ChildCaptcha captcha = {hintsData[10]} showAns = {showAns} ref={child7} />
            <ChildCaptcha captcha = {hintsData[11]} showAns = {showAns} ref={child8} />
          </div>
          
        </div>
        <div
          className="LeftSideUserGuessArea"
          style={{
            display: "flex",
            // flex: "1",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            marginLeft: "20px",
            marginTop: "30px",
            width: "300px"
          }}
        >  
        {/* <div className="RightMeterArea" style={{
          display: "flex",
          flex: "1",
          // justifyContent: "center",
          // alignItems: "center",
        }}> */}
          <h5 className="text-poppins-regular">Concept Attainment Meter</h5>
          <div className="aBox">
              <div className="anotherBox">
                <div className="theMeter"></div>
              </div>
          </div>
        {/* </div> */}
        </div>
      </div>
    </div>
  );
}
