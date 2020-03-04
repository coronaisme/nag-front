//Login / signup page -> goes to either SignUp page or HomePage

import React, {Component} from 'react';
import "./Login.css"
import api from "../../api.js"

export default class Login extends Component {

  state = {
    error: false,
    fields: {
      username: "",
      password: ""
    }
  }

  handleChange = (e) => {
    const newFields = { ...this.state.fields, [e.target.name]: e.target.value}
    this.setState({
      fields: newFields
    })
  }

handleSubmit = e => {
  e.preventDefault()

  api.auth
    .login(this.state.fields.username, this.state.fields.password)
    .then(res => { 
      if(res.error) {
        this.setState({
          error: true
        })
      } else {
        this.props.handleLogin(res);
        this.props.history.push('/')
      }
    })

}
  
  handleSignUp = (e) => {
    e.preventDefault()
    this.props.history.push('/signup')
  }

 

  render() {
    const { fields } = this.state


//     <div class="ui input focus">
//   <input type="text" placeholder="Search...">
// </div>

    return (
      <div className="LoginContainer">
        {this.state.error ? <h1>Invalid</h1> : null}
        <div className="ui form">
          <form onSubmit={this.handleSubmit}>
            <div className="ui field ">
              <label>Username: </label>
              <input
                name="username"
                placeholder="username"
                value={fields.username}
                onChange={this.handleChange}
              />
            </div>
            <div className="ui field">
              <label>Password: </label>
              <input
                name="password"
                type="password"
                placeholder="password"
                value={fields.password}
                onChange={this.handleChange}
              />
            </div>
            <button type="submit" className="ui login button">
              Login
            </button>
            <button onClick={this.handleSignUp} type="submit" className="ui signup button">
              SignUp
            </button>
          </form>
        </div>
      </div>
    )
  }

}