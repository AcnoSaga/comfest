import React from "react";
import "./worker-card.styles.css";
import { Jumbotron, Button } from "reactstrap";

function WorkerCard(props) {
  return (
    <div className="work-card">
      <Jumbotron fluid className="worker-card">
        <h1 className="display-3">{props.name}</h1>
        <h2>{props.profession}</h2>
        <hr className="my-2" />
        <h2>Contact Number: {props.phoneNumber}</h2>
        <h2>{props.location}</h2>
      </Jumbotron>
    </div>
  );
}

export default WorkerCard;
