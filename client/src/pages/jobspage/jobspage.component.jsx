import React, { useState } from "react";
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
} from "reactstrap";
import "./jobspage.styles.css";

const JobsPage = () => {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div className="create-job">
      <Button color="danger" onClick={toggle}>
        Post Job
      </Button>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Create Job</ModalHeader>
        <ModalBody>
          <Form>
            <Label>Job Title</Label>
            <Input />
            <FormGroup>
              <Label>Job Description</Label>
              <Input type="textarea" name="text" />
            </FormGroup>
            <Button color="warning">Create</Button>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default JobsPage;
