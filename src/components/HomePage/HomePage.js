//Home page, has background image, title of app, User greeting(clickable), search bar, list of restaurant cards near user

//user greeting button goes to UserInfo.js

//List of restaurant cards in a grid of restaurants within a ~2 mile radius of users signup addess
//search bar will filter the restaurants by search values

//upon clicking a specific restaurant card -> goes to RestaurantInfo.js

import React, {Component} from 'react';
import './HomePage.css'
import { Card } from 'semantic-ui-react'


export default class HomePage extends Component {

  componentDidMount() {
    const token = localStorage.getItem('token');
    if (!token) {
      this.props.history.push('/login');
    }
  }


  render() {
    return(
      <div className="HomePage">

        <p className="current_userName">Hello, {this.props.current_user.username}</p> 
        <Card.Group itemsPerRow={4}>
          {/* render a bunch of restaurants */}
        </Card.Group>

      </div>
    )
  }
}
