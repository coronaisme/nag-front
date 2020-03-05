import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import './App.css';
import Login from './components/Login/Login.js';
import HomePage from './components/HomePage/HomePage.js'
import SignUp from './components/SignUp/SignUp.js'
import api from "./api.js"
import UserCart from './components/UserCart/UserCart'
import SingleRestaurant from './components?'



class App extends React.Component{

  state = { 
    auth: {
      currentUser: {}
    }
  };

  componentDidMount() {
    const token = localStorage.getItem('token');

    if (token) {
      api.auth.getCurrentUser().then(user => {
        const currentUser = { currentUser: user }

        this.setState({
          auth: currentUser
        })
      })
    }
  }

  handleLogin = user => {
    const currentUser = { currentUser: user }
    localStorage.setItem('token', user.token)
    this.setState({ auth: currentUser });
  }

  handleLogout = () => {
    localStorage.removeItem('token');
    this.setState({ auth: { currentUser: {} } });
  };
  

  render() {
    return (
      <div className="App">
        <Switch>

          <Route path="/login" render={routerProps => {
            return (<Login {...routerProps} handleLogin={this.handleLogin} />);
          }} />

          <Route path="/signup" render={(routerProps) => {
            return <SignUp {...routerProps} />
          }}/>

          <Route path="/cart" render={(routerProps) => {
            return <UserCart {...routerProps} />
          }}/>

          <Route path="/restaurant" render={(routerProps) => {
            return <SingleRestaurant {...routerProps}/>
          }} />


          <Route path='/' render={(routerProps) => {
            const loggedIn = !!this.state.auth.currentUser.id;

            return loggedIn ? <HomePage {...routerProps} current_user={this.state.auth.currentUser} /> : <Redirect to="/login" />
          }} />

        </Switch>
      </div>
    );
  }
}

export default App;
