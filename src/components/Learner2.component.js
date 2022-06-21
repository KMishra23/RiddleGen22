import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

import Header from "./LearnerHeader";
import Infobar from "./Infobar";
import FlashCard from "./FlashCard";
import HintBox from "./HintBox";
import SmallTextBox from "./SmallTextBox";
import Button from "react-bootstrap/Button"

export default function Learner2(props) { 

  const location = useLocation()
  const { img } = location.state;
  const { riddleID } = location.state

  const[riddleData, setRiddleData] = useState([])

  const[answer, setAnswer] = useState("");

  const onChangeAnswer = (e) => {
    setAnswer(e.target.value)
  }

  const onSubmit = (e) => {
    if(window.confirm("Do you want to submit this?")) {
      e.preventDefault();

      console.log("Submitted answer is: " + answer);
      if(answer === riddleData.Concept) {
        console.log("Correct Answer")
      } else {
        console.log("Wrong Answer")
        console.log("Answer Should be: " + riddleData.Concept)
      }
    }
  }

  const testStuff = (e) => {
    console.log(riddleData)
  }

  useEffect(() => {
    // console.log(riddleID)
    axios.get('http://localhost:5000/riddles', {
      params: {
        _id: riddleID
      }
    })
      .then(res => {
        for(let i = 0; i < res.data.length; i++) {
          if(res.data[i]._id == riddleID) {
            setRiddleData(res.data[i])
          }
          // console.log(res.data[i]._id)
        }
      })
  }, [])
  

    return (
      <div className="Learner2">
        <Header />
        {/* <Button  variant="primary" onClick={testStuff}>Test</Button> */}
        <Infobar />
        <div
          className="SelectedFC"
          style={{ display: "flex", flex: "1", justifyContent: "center" }}
        >
          <FlashCard img_name={img} />
        </div>
        <div style={{ display: "flex", flex: "1", justifyContent: "center" }}>
          <h1 className="text-center text-poppins-regular">
            Let's test your concepts...
          </h1>
        </div>
        <div
          style={{
            display: "flex",
            flex: "1",
            justifyContent: "space-around",
            marginTop: "20px",
            marginRight: "50px",
            marginLeft: "50px",
            marginBottom: "20px"
          }}
        >
          <div style={{display: "flex", flexDirection: "column", flex: "1", justifyContent: "center"}}>
            <div
              className="PuzzleTextBox"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "400px",
                height: "238px",
                background: "#42C2FF",
                borderRadius: "20px",
                // marginRight: "100px",
                marginBottom: "20px"
              }}
            >
              <p className="text-poppins-medium" style={{margin: "20px"}}>{riddleData.Riddle_Text}</p>
            </div>

            <SmallTextBox boxText="Change Puzzle" style={{marginBottom: "20px"}} />
          </div>

          <form
            onSubmit={onSubmit}
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <div className="form-group">
              <label style={{marginRight: "20px"}}>Enter Your Answer</label>
              <input
                type="text"
                value={answer}
                onChange={onChangeAnswer}
                style={{backgroundColor:"purplex"}}
              />
            </div>
            <div className="form-group">
              <input
                type="submit"
                value="Submit Answer"
                className="btn btn-primary"
                style={{ marginTop: "20px" }}
              />
            </div>
            <Link to = "/learner3" state={{riddleID: riddleID, answer: answer}}>
              <Button variant="success" style={{marginTop: "10px"}}>Move to Captcha</Button>
            </Link>
          </form>

          <div
            className="HintBoxesContainer"
            style={{
              display: "flex",
              flexDirection: "column",
              marginLeft: "200px",
            }}
          >
            <HintBox hintText="Hint #1" hintNum='0' />
            <HintBox hintText="Hint #2" hintNum='1' />
            <HintBox hintText="Hint #3" hintNum='2' />
          </div>
        </div>
      </div>
    );
}
