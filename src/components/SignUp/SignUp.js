//sign up form -> goes to HomePage
import React, {Component} from 'react';
import HomePage from '../HomePage/HomePage.js';
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import "./SignUp.css"

export default class SignUp extends Component {

  handleSubmit = (e) => {
    
    
  }

  render() {

    return (
      <div className="SignUp">
        <h3>Sign Up Here!</h3>
        <form onSubmit={this.handleSubmit}>
          {/* username */}
        <FormGroup controlId="username" bsSize="large">
          <ControlLabel>Username: </ControlLabel>
          <FormControl
            autoFocus
            placeholder="username"
            type="username"
            // value={username}
          />
        </FormGroup>
        {/* password */}
        <FormGroup controlId="password" bsSize="large">
          <ControlLabel>Password: </ControlLabel>
          <FormControl
            autoFocus
            placeholder="password"
            type="password"
            // value={username}
          />
        </FormGroup> 
        {/* email */}
        <FormGroup controlId="email" bsSize="large">
          <ControlLabel>Email Address: </ControlLabel>
          <FormControl
            autoFocus
            placeholder="email"
            type="email"
            // value={username}
          />
        </FormGroup> 
        {/* address 1  */}
        <FormGroup controlId="address_1" bsSize="large">
          <ControlLabel>Prefered Adress: </ControlLabel>
          <FormControl
            autoFocus
            placeholder="address_1"
            type="address_1"
            // value={username}
          />
        </FormGroup> 
          {/* address 2 */}
        <FormGroup controlId="address_2" bsSize="large">
          <ControlLabel>Apt/Suite Number: </ControlLabel>
          <FormControl
            autoFocus
            placeholder="address_2"
            type="address_2"
            // value={username}
          />
        </FormGroup> 
          {/* city */}
        <FormGroup controlId="city" bsSize="large">
          <ControlLabel>City: </ControlLabel>
          <FormControl
            autoFocus
            placeholder="city"
            type="city"
            // value={username}
          />
        </FormGroup> 
           {/* state */}
        <FormGroup controlId="state" bsSize="large">
          <ControlLabel>State: </ControlLabel>
          <FormControl
            autoFocus
            placeholder="state"
            type="state"
            // value={username}
          />
        </FormGroup> 
          {/* zipcode */}
        <FormGroup controlId="zipcode" bsSize="large">
          <ControlLabel>Zipcode: </ControlLabel>
          <FormControl
            autoFocus
            placeholder="zipcode"
            type="tel"
            maxLength="5"
            charSet="0123456789"
           
            // value={username}
          />
        </FormGroup> 
        <br/>
        <Button onClick={this.handleSubmit} block bsSize="large"  type="submit" >
          SignUp
        </Button>

        </form>
      </div>
    )
  }
}