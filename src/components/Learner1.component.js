import Header from "./LearnerHeader.js";
import Infobar from "./Infobar";
import FCBox from "./FCBox";

import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";

export default function Learner1(props) {
  
  const location = useLocation()
  const { id } = location.state

  useEffect(() => {
    // console.log(id)
  })
  
  return (
    <div className="Learner1">
      <Header />
      <Infobar />
      <section className="PickFCSpacing">
        <h1 className="text-center text-poppins-regular">
          Pick a FlashCard to begin!
        </h1>
      </section>
      <FCBox id = {id}/>
    </div>
  );
}
