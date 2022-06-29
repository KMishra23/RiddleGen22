import { Component } from "react";
import { Link } from "react-router-dom";

export default function bruh(props) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
      }}
    >
      <h1 className="text-poppins-medium" style={{ marginTop: "100px" }}>
        RiddleGenerator Main Page
      </h1>
    </div>
  );
}