import React from "react";
import WorkerCard from "../../components/worker-card/worker-card.component";
import "./workpage.styles.css";

function WorkPage() {
  return (
    <div className="wcard-container">
      <WorkerCard
        name="Suneet Pujan"
        profession="Plumber"
        phone="9559197732"
        location="Lucknow"
      />
    </div>
  );
}

export default WorkPage;
