//sign up form -> goes to HomePage
import React, {Component} from 'react';
import HomePage from '../HomePage/HomePage.js';

export default class SignUp extends Component {

  handleSubmit = (e) => {
    e.preventDefault()
  }

  render() {

    return (
      <div className="SignUp">
        <h3>Sign Up Here!</h3>
        <form onSubmit={this.handleSubmit}>
            
        </form>
      </div>
    )
  }
}