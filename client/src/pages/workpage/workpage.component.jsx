import React from "react";
import WorkerCard from "../../components/worker-card/worker-card.component";
import {
  executeQueryAndReturnData,
  firestore,
} from "../../firebase/firebase.utils";
import { cities } from "../../utils/cities";
import { professions } from "../../utils/professions";
import "./workpage.styles.css";
import { Button } from "reactstrap";

const baseQuery = firestore.collection("workers");

class WorkPage extends React.Component {
  constructor() {
    super();
    this.state = {
      listOfWorkers: null,
      currentQuery: baseQuery,
      location: "",
      profession: "",
    };
  }

  handleChange = async (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
    this.setState({
      currentQuery: this.state.currentQuery.where(name, "==", value),
    });
    this.setState({
      listOfWorkers: await executeQueryAndReturnData(this.state.currentQuery),
    });
  };

  render() {
    return (
      <div className="work">
        <WorkerCard
          name="Suneet Pujan"
          profession="Plumber"
          phone="9559197732"
          location="Lucknow"
        />
      </div>
    );
  }
}

export default WorkPage;
