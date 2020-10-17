import React from "react";
import "./worker-card.styles.css";

function WorkerCard(props) {
  return (
    <div className="cbody">
      <div className="cinbody">
        <div className="line-1">
          <h1 className="plus">+</h1>
        </div>
        <div className="line-2">
          <div className="wimg">
            <img alt="img" />
          </div>
          <div className="wtext">
            <h1 className="worker-name">{props.name}</h1>
            <h1 className="worker-profession">{props.profession}</h1>
          </div>
        </div>
        <div className="line-3">
          <h3 className="worker-pno">Contact Number:{props.phone}</h3>
          <h3 className="worker-location">{props.location}</h3>
        </div>
      </div>
    </div>
  );
}

export default WorkerCard;
