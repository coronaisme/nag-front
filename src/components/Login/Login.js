


import React, {Component} from 'react';
import "./Login.css"
import api from "../../api.js"
import { Button, Form, Grid, Header, Message, Segment } from 'semantic-ui-react'

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
    
    return (
      <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
      {this.state.error ? <h1>Invalid</h1> : null}
    <Grid.Column style={{ maxWidth: 450 }}>
      <Header as='h2' color='marine blue' textAlign='center'>
        Log-in to your account
      </Header>
      <Form size='large' onSubmit={this.handleSubmit}>
        <Segment stacked>
          <Form.Input fluid icon='user' iconPosition='left' placeholder='Username' name="username"  value={fields.username}
        onChange={this.handleChange}/>
          <Form.Input
            fluid
            icon='lock'
            iconPosition='left'
            name="password"
            type="password"
            placeholder="Password"
            value={fields.password}
            onChange={this.handleChange}
            />

          <Button color='marine blue' fluid size='large'>
            Login
          </Button>
        </Segment>
      </Form>
      <Message onClick={this.handleSignUp} fluid style={{cursor:"pointer"}}>
       Sign Up
      </Message>
    </Grid.Column>
  </Grid>
  )
}


}