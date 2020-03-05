//sign up form -> goes to HomePage
import React, { Component } from 'react';
// import HomePage from '../HomePage/HomePage.js';
import {  ControlLabel } from "react-bootstrap";
import { Button, Form, Grid, Header} from 'semantic-ui-react'
import "./SignUp.css"


export default class SignUp extends Component {





  handleSubmit = (e) => {
    
      e.preventDefault()
      e.persist()
      
      var data = {name:e.target.username.value , email: e.target.email.value, address_one: e.target.address_1.value, address_two: e.target.address_2.value, city: e.target.city.value, state: e.target.state.value, zipcode: e.target.zipcode.value, password:e.target.password.value }
      fetch("http://localhost:3000/new",
      {
        method: 'POST',
        headers: {'Content-Type': 'application/json',Accept: 'application/json',Authorization: ""},
        body: JSON.stringify(data)
      })
      .then(resp => resp.json())
      .then(dataz => {
        if(dataz.token) {
          this.props.history.push('/login')
        } else {
          alert('No dice brother')
        }
      })
     
    }

    handleLoginClick = () => {
      this.props.history.push('/login')
    }
  

  render() {

    return (

      
      <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
      <div className="SignUp">
        <Header as='h2' color='blue' textAlign='center'>
        Sign Up Here!
      </Header>
        <form onSubmit={this.handleSubmit}>
          {/* username */}
          {/* <div class="ui field"> */}
        <Form controlId="username" bsSize="large">
          <ControlLabel>Username: </ControlLabel>
          <Form.Input
            autoFocus
            placeholder="username"
            type="username"
          />
        </Form>
  
          {/* </div> */}
        {/* password */}
        <Form controlId="password" bsSize="large">
          <ControlLabel>Password: </ControlLabel>
          <Form.Input
            autoFocus
            placeholder="password"
            type="password"
            // value={username}
          />
        </Form> 
        {/* email */}
        <Form controlId="email" bsSize="large">
          <ControlLabel>Email Address: </ControlLabel>
          <Form.Input
            autoFocus
            placeholder="email"
            type="email"
            // value={username}
          />
        </Form> 
        {/* address 1  */}
        <Form controlId="address_1" bsSize="large">
          <ControlLabel>Prefered Adress: </ControlLabel>
          <Form.Input
            autoFocus
            placeholder="address_1"
            type="address_1"
            // value={username}
          />
        </Form> 
          {/* address 2 */}
        <Form controlId="address_2" bsSize="large">
          <ControlLabel>Apt/Suite Number: </ControlLabel>
          <Form.Input
            autoFocus
            placeholder="address_2"
            type="address_2"
            // value={username}
          />
        </Form> 
          {/* city */}
        <Form controlId="city" bsSize="large">
          <ControlLabel>City: </ControlLabel>
          <Form.Input
            autoFocus
            placeholder="city"
            type="city"
            // value={username}
          />
        </Form> 
           {/* state */}
        <Form controlId="state" bsSize="large">
          <ControlLabel>State: </ControlLabel>
          <Form.Input
            autoFocus
            placeholder="state"
            type="state"
            // value={username}
          />
        </Form> 
          {/* zipcode */}
        <Form controlId="zipcode" bsSize="large">
          <ControlLabel>Zipcode: </ControlLabel>
          <Form.Input
            autoFocus
            placeholder="zipcode"
            type="tel"
            maxLength="5"
            charSet="0123456789"
           
            // value={username}
          />
        </Form> 
        <br/>
        <Button block bsSize="large" fluid type="submit" >
          SignUp
        </Button>
       <br/>
        <Button block bsSize="large" fluid type="click" onClick={this.handleLoginClick} >
          Login
        </Button>
        
        <p>Upon succesful sign up you will be prompted to Login with your username and password</p>
        </form>
      </div>
      </Grid>
    )
  }
}

