import React from "react";
import "./register-box.styles.css";
import { Link } from "react-router-dom";

function RegisterBox(props) {
  return (
    <div className="box">
      <h1 className="ntext">Register As A</h1>
      <h1 className="mtext">{props.workType}</h1>
      <Link to="/account">
        <button>Click Here</button>
      </Link>
    </div>
  );
}

export default RegisterBox;
