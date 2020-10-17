import React from "react";
import { Card, CardBody, CardText, CardTitle } from "reactstrap";

function TeamCard(props) {
  return (
    <div>
      <Card>
        <img alt="img" />
        <CardBody>
          <CardTitle>{props.name}</CardTitle>
          <CardText>
            <p>{props.description}</p>
          </CardText>
        </CardBody>
      </Card>
    </div>
  );
}

export default TeamCard;
