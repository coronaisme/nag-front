//Login / signup page -> goes to either SignUp page or HomePage

import React, {Component} from 'react';
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import "./Login.css"

export default class Login extends Component {

  render() {

    

    function handleSubmit(event) {
      event.preventDefault();
    }


    return (
      <div className="Login">
        <form onSubmit={handleSubmit}>
        <FormGroup controlId="username" bsSize="large">
          <ControlLabel>Username</ControlLabel>
          <FormControl
            autoFocus
            type="username"
            value={"username"}
            //onChange
          />
        </FormGroup>
        <FormGroup controlId="password" bsSize="large">
          <ControlLabel>Password</ControlLabel>
          <FormControl
            value={"password"}
            //onChange
            type="password"
          />
        </FormGroup>
        <Button block bsSize="large"  type="submit">
          Login
        </Button>
      </form>
      </div>
    )
  }

}