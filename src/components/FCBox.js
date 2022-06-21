import FlashCard from "./FlashCard";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export default function FCBox({ numFC, id }) {

  const[riddleID, setID] = useState(id)

  useEffect(() => {
    // console.log(id)
  })

  return (
    <div className="flex-container">
      <Link to="/learner2" state={{ img: "ZoologyFC", riddleID:"62b1b3bf02ecfed9eca05e17" }}>
        <FlashCard img_name="ZoologyFC" />
      </Link>
      <Link to="/learner2" state={{ img: "ScienceFC", riddleID:"somethingHere2" }}>
        <FlashCard img_name="ScienceFC" />
      </Link>
      <Link to="/learner2" state={{ img: "DSAFC", riddleID:"somethingHere3" }}>
        <FlashCard img_name="DSAFC" />
      </Link>
    </div>
  );
}
