//sign up form -> goes to HomePage
import React, {Component} from 'react';
// import HomePage from '../HomePage/HomePage.js';
import { FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import { Button, Form, Grid, Header, Message, Segment } from 'semantic-ui-react'
import "./SignUp.css"
// import { queryByDisplayValue } from '@testing-library/react';

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
        <Header as='h2' color='marine blue' textAlign='center'>
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







// <form class="ui form">
//   <h4 class="ui dividing header">User Information</h4>
//   <div class="field">
//     <label>Name</label>
//     
//       <div class="field">
//         <input type="text" name="username" placeholder="Username">
//       </div>
//  <label>Password</label> 
//  <div class="field">
//         <input type="text" name="password" placeholder="Password">
//       </div>
//<label>Email</label> 
//   <div class="field">
//         <input type="text" name="email" placeholder="Email">
//       </div>
//   </div> 
//   <div class="field">
//     <label>Billing Address</label>
//     <div class="fields">
//       <div class="twelve wide field">
//         <input type="text" name="address_1" placeholder="Street Address">
//       </div>
//       <div class="four wide field">
//         <input type="text" name="address_2" placeholder="Apt #">
//       </div>
//     </div>
//   </div>
//  //states
//     <div class="field">
//       <label>State</label>
//       <select class="ui fluid dropdown">
//         <option value="">State</option>
//     <option value="AL">Alabama</option>
//     <option value="AK">Alaska</option>
//     <option value="AZ">Arizona</option>
//     <option value="AR">Arkansas</option>
//     <option value="CA">California</option>
//     <option value="CO">Colorado</option>
//     <option value="CT">Connecticut</option>
//     <option value="DE">Delaware</option>
//     <option value="DC">District Of Columbia</option>
//     <option value="FL">Florida</option>
//     <option value="GA">Georgia</option>
//     <option value="HI">Hawaii</option>
//     <option value="ID">Idaho</option>
//     <option value="IL">Illinois</option>
//     <option value="IN">Indiana</option>
//     <option value="IA">Iowa</option>
//     <option value="KS">Kansas</option>
//     <option value="KY">Kentucky</option>
//     <option value="LA">Louisiana</option>
//     <option value="ME">Maine</option>
//     <option value="MD">Maryland</option>
//     <option value="MA">Massachusetts</option>
//     <option value="MI">Michigan</option>
//     <option value="MN">Minnesota</option>
//     <option value="MS">Mississippi</option>
//     <option value="MO">Missouri</option>
//     <option value="MT">Montana</option>
//     <option value="NE">Nebraska</option>
//     <option value="NV">Nevada</option>
//     <option value="NH">New Hampshire</option>
//     <option value="NJ">New Jersey</option>
//     <option value="NM">New Mexico</option>
//     <option value="NY">New York</option>
//     <option value="NC">North Carolina</option>
//     <option value="ND">North Dakota</option>
//     <option value="OH">Ohio</option>
//     <option value="OK">Oklahoma</option>
//     <option value="OR">Oregon</option>
//     <option value="PA">Pennsylvania</option>
//     <option value="RI">Rhode Island</option>
//     <option value="SC">South Carolina</option>
//     <option value="SD">South Dakota</option>
//     <option value="TN">Tennessee</option>
//     <option value="TX">Texas</option>
//     <option value="UT">Utah</option>
//     <option value="VT">Vermont</option>
//     <option value="VA">Virginia</option>
//     <option value="WA">Washington</option>
//     <option value="WV">West Virginia</option>
//     <option value="WI">Wisconsin</option>
//     <option value="WY">Wyoming</option>
//       </select>
//     </div>
//    <div class="field">
//         <input type="text" name="city" placeholder="City">
//       </div>
//        <div class="field">
//         <input type="number" name="zipcode" placeholder="Zipcode">
//       </div>

//   <div class="ui button" tabindex="0">Sign Up</div>
// </form>








//working 

