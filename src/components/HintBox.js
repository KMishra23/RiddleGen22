
import axios from "axios";
import { useEffect, useState } from "react";

export default function HintBox(props) {
  const [users, setUsers] = useState([]);
  const [username, setUsername] = useState("");
  const [hintText, setHintText] = useState(props.hintText);


  const HintStyleBeforeClick = {
    display: "flex",
    width: "339px",
    height: "74px",
    background: '#E5E5E5',
    borderRadius: "7px",
    justifyContent: "center",
    position: "relative",
    alignItems: "center",
    marginBottom: "20px",
  }
  const HintStyleAfterClick = {
    display: "flex",
    width: "339px",
    height: "74px",
    background: "#B0DEFF",
    borderRadius: "7px",
    justifyContent: "center",
    position: "relative",
    alignItems: "center",
    marginBottom: "20px",
  }
  const[buttonStyle, setButtonStyle] = useState("HintStyleBefore");

  const onClickEvent = (e) => {
    e.preventDefault();

    setButtonStyle("HintStyleAfter")

    axios.get("http://localhost:5000/users").then((res) => {
      if (res.data.length > 0) {
        setUsers(res.data.map((user) => user.username));
        setHintText(res.data[props.hintNum].username);
      }
    });
  };

  return (
    <div
      className={buttonStyle}
      // style={buttonStyle}
      onClick={onClickEvent}
    >
      <p className="text-poppins-medium">
        {hintText}
      </p>
    </div>
  );
}
