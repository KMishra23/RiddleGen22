import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import React, { Component } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Learner1 from "./components/Learner1.component";
import Learner2 from "./components/Learner2.component";
import Learner3 from "./components/Learner3.component";
import MainHeader from "./components/MainHeader.component";
import WelcomePage from "./components/WelcomePage.component";
import Educator from "./components/Educator.component";
import bruh from "./components/bruh.component";

const testing = () => <div> <h1>Text here</h1> </div>

function App() {
  return (
    <BrowserRouter>
      <MainHeader />
      <div className="App"></div>
      <Routes>
        <Route exact path="/" element={<WelcomePage />} />
        <Route path="/learner1" element={<Learner1 />} />
        <Route path="/learner2" element={<Learner2 />} />
        <Route path="/learner3" element={<Learner3 />} />
        <Route path="/educator" element={<Educator />} />
        <Route path="/bruh" Component={testing} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
