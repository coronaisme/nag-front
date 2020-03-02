//Login / signup page -> goes to either SignUp page or HomePage

import React, {Component} from 'react';
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import "./Login.css"

export default class Login extends Component {
  
  handleSignUp = (e) => {
    e.preventDefault()
    this.props.history.push('/signup')
  }

  handleLogin = (e) => {
    e.preventDefault()
    //render home page
  }

  render() {
    


    return (
      <div className="Login">
        <form onSubmit={this.handleLogin}>
        <FormGroup controlId="username" bsSize="large">
          <ControlLabel>Username: </ControlLabel>
          <FormControl
            autoFocus
            placeholder="username"
            type="username"
            // value={username}
          />
        </FormGroup>
        <FormGroup controlId="password" bsSize="large">
          <ControlLabel>Password: </ControlLabel>
          <FormControl
            placeholder="password"
            type="password"
            // value={password}
          />
        </FormGroup>
        
        <Button block bsSize="large"  type="submit" >
          Login
        </Button>
      </form>
  
      <Button onClick={this.handleSignUp} block bsSize="large"  type="submit" >
          SignUp
        </Button>
    
      </div>
    )
  }

}