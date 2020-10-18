import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import JobCard from "../../components/job-card/job-card.component";
import ClipLoader from "react-spinners/ClipLoader";

import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
  Label,
  Input,
  Spinner,
} from "reactstrap";
import { createStructuredSelector } from "reselect";
import {
  addJobPost,
  executeQueryAndReturnData,
} from "../../firebase/firebase.utils";
import { selectCurrentUser } from "../../redux/user/user.selectors";
import "./jobspage.styles.css";
import { firestore } from "firebase";

const JobsPage = ({ currentUser }) => {
  const [modal, setModal] = useState(false);
  const [listOfJobs, setListOfJobs] = useState(null);
  console.log(currentUser);
  const baseQuery =
    currentUser === null || currentUser === undefined
      ? firestore().collection("jobs")
      : firestore()
          .collection("jobs")
          .where("id", "==", currentUser.uid ?? currentUser.id);

  useEffect(() => {
    executeQueryAndReturnData(baseQuery).then((data) => {
      setListOfJobs(data);
    });
  }, []);

  const toggle = () => setModal(!modal);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  return (
    <div className="create-job">
      <Button className="job-button" color="danger" onClick={toggle}>
        Post Job
      </Button>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Create Job</ModalHeader>
        <ModalBody>
          <Form>
            <Label>Job Title</Label>
            <Input onChange={(e) => setTitle(e.target.value)} />
            <FormGroup>
              <Label>Job Description</Label>
              <Input
                type="textarea"
                name="text"
                onChange={(e) => setDescription(e.target.value)}
              />
            </FormGroup>
            <Button
              color="warning"
              onClick={() => {
                if (title == "" || description == "") {
                  alert("Required fields are empty");
                  return;
                }
                addJobPost(
                  title,
                  description,
                  currentUser.phoneNumber,
                  currentUser.location,
                  currentUser.uid ?? currentUser.id
                );
                toggle();
              }}
            >
              Create
            </Button>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
      {listOfJobs == null ? (
        <ClipLoader size={150} color={"#123abc"} loading={true} />
      ) : (
        listOfJobs.map((job) => {
          return (
            <JobCard
              title={job.title}
              description={job.description}
              phoneNumber={job.phoneNumber}
              location={job.location}
            />
          );
        })
      )}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

export default connect(mapStateToProps)(JobsPage);
