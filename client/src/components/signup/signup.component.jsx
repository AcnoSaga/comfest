import React from "react";

import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";
import { cities } from "../../utils/cities";
import { professions } from "../../utils/professions";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";

import "./sign-up.styles.css";

class SignUp extends React.Component {
  constructor() {
    super();

    this.state = {
      displayName: "",
      email: "",
      password: "",
      confirmPassword: "",
      location: "",
      profession: "",
      phoneNumber: "",
      image: null,
      fieldEnable: true,
    };
  }

  handleSubmit = async (event) => {
    event.preventDefault();

    const {
      displayName,
      email,
      password,
      confirmPassword,
      location,
      profession,
      phoneNumber,
      image,
    } = this.state;

    if (password !== confirmPassword) {
      alert("Passwords don't match");
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );

      await createUserProfileDocument(user, {
        displayName,
        email,
        password,
        location,
        profession,
        phoneNumber,
        image,
      });

      this.setState({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: "",
        location: "",
        profession: "",
        phoneNumber: "",
        image: null,
      });
    } catch (error) {
      console.error(error);
    }
  };

  handleChange = (event) => {
    const { name, value } = event.target;

    this.setState({ ...this.state, [name]: value });
  };

  render() {
    const {
      displayName,
      email,
      password,
      confirmPassword,
      phoneNumber,
    } = this.state;
    return (
      <div className="sign-up">
        <h1>I do not have an account</h1>
        <h2>Create an Account</h2>

        <Form className="sign-up-form" onSubmit={this.handleSubmit}>
          <FormGroup tag="fieldset">
            <Label className="label">Register as</Label>
            <FormGroup check>
              <Label check>
                <Input
                  type="radio"
                  name="radio1"
                  defaultChecked
                  onClick={() => this.setState({ fieldEnable: true })}
                />
                <h2>Worker</h2>
              </Label>
            </FormGroup>
            <FormGroup check>
              <Label check>
                <Input
                  type="radio"
                  name="radio1"
                  onClick={() => this.setState({ fieldEnable: !true })}
                />
                <h2>Employer</h2>
              </Label>
            </FormGroup>
          </FormGroup>
          <FormGroup>
            <Label className="label">Display Picture:</Label>
            <Input type="file" name="image" onChange={this.handleChange} />
            <br />
            <Input
              className="input"
              type="text"
              name="displayName"
              value={displayName}
              onChange={this.handleChange}
              label="Display Name"
              placeholder="Enter your Name"
              required
            />
            <br />
            <Input
              className="input"
              type="email"
              name="email"
              value={email}
              onChange={this.handleChange}
              label="Email"
              placeholder="Enter your Email"
              required
            />
            <br />
            <Input
              className="input"
              type="password"
              name="password"
              value={password}
              onChange={this.handleChange}
              label="Password"
              placeholder="Enter a Password"
              required
            />
            <br />
            <Input
              className="input"
              type="password"
              name="confirmPassword"
              value={confirmPassword}
              onChange={this.handleChange}
              label="Confirm Password"
              placeholder="Confirm Password"
              required
            />
            <br />
            <Input
              className="input"
              type="text"
              name="phoneNumber"
              value={phoneNumber}
              onChange={this.handleChange}
              label="Phone Number"
              placeholder="Phone Number"
              required
            />
            <br />
            <Label className="label">Location:</Label>
            <Input
              className="input"
              type="select"
              id="location"
              name="location"
              onChange={this.handleChange}
            >
              {cities.map((city) => (
                <option value={city}>{city}</option>
              ))}
            </Input>
            <br />
            <Label className="label">Profession:</Label>
            <Input
              className="input"
              type="select"
              id="profession"
              name="profession"
              onChange={this.handleChange}
              disabled={!this.state.fieldEnable}
            >
              {professions.map((profession) => (
                <option value={profession}>{profession}</option>
              ))}
            </Input>
          </FormGroup>

          <Button color="warning" type="submit">
            Sign up
          </Button>
        </Form>
      </div>
    );
  }
}

export default SignUp;
