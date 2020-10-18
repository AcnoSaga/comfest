import React from "react";
import "./worker-card.styles.css";
import { Jumbotron } from "reactstrap";

function JobCard(props) {
  return (
    <div className="work-card">
      <Jumbotron fluid className="worker-card">
        <h1 className="display-3">{props.title}</h1>
        <p>{props.description}</p>
        <hr className="my-2" />
        <h2>Contact Number: {props.phoneNumber}</h2>
        <h2>{props.location}</h2>
      </Jumbotron>
    </div>
  );
}

export default JobCard;
