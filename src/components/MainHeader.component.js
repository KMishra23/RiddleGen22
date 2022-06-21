import { Component } from "react";
import { Link } from "react-router-dom";

export default function MainHeader() {
  return (
    <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
      <Link to="/" className="navbar-brand" style={{ marginLeft: "20px" }}>
        RiddleGenerator
      </Link>
      <div className="collpase navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="navbar-item">
            <Link to="/educator" className="nav-link">
              Educator Dashboard
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/learner1" className="nav-link">
              Learner Dashboard
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
