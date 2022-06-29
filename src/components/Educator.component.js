import Header from "./EducatorHeader.js";

import React, { Component, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Table from "react-bootstrap/Table";
import Form from "react-bootstrap/Form"
import axios from "axios";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import Button from "react-bootstrap/Button"

export default function Educator(props) {

  const location = useLocation()

  const [riddles, setRiddles] = useState([])

  function clickModify(riddle) { 
    
  }

  useEffect(() => {
    // console.log("Change Detected")
    axios.get("http://localhost:5000/riddles")
      .then((res) => {
        setRiddles(res.data)
      })
  }, [])

  return (
    <div className="Educator" >
      {/* <Header /> */}
      
      <div className="header" style={{display: "flex", justifyContent: "space-between"}}>
        <h1>Educator Dashboard</h1>
        <Link to = "/learner1" state={{ id : "62b1b3bf02ecfed9eca05e17"}}>
          <Button variant="success">Launch Learner Dashboard</Button>
        </Link>
      </div>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Sr. No.</th>
            <th>Riddle</th>
            <th>Difficulty Level</th>
            <th>Hints</th>
            <th>Concept</th>
          </tr>
        </thead>
        <tbody>
          { 
            riddles.map((value, key) => {
              return (
                <tr key={key}>
                  <td>
                    <Form>
                      {['checkbox'].map((type) => (
                        <div key={`default-${type}`} className="mb-3">
                          <Form.Check
                            type={type}
                            id={`default-${type}`}
                            label={`1`}
                            >
                              <Form.Check.Input type={type} isValid />
                              <Form.Check.Label>{`${key}`}</Form.Check.Label>
                              {/* <Form.Control.Feedback type="valid">You did it!</Form.Control.Feedback> */}
                            </Form.Check> 
                        </div>
                      )
                      )}
                    </Form>
                  </td>
                  <td>{value.Riddle_Text}</td>
                  <td>{value.Difficulty_Level}</td>
                  <td>{value.Hints}</td>
                  <td>
                    {value.Concept}
                    <br></br>
                    <Button variant="primary" onClick={() => clickModify(value)}>Modify</Button>
                  </td>
                </tr>
              )
            })
            }
        </tbody>
      </Table>
    </div>
  );
}
