//Home page, has background image, title of app, User greeting(clickable), search bar, list of restaurant cards near user

//user greeting button goes to UserInfo.js

//List of restaurant cards in a grid of restaurants within a ~2 mile radius of users signup addess
//search bar will filter the restaurants by search values

//upon clicking a specific restaurant card -> goes to RestaurantInfo.js

import React, {Component} from 'react';
import './HomePage.css'
import { Card } from 'semantic-ui-react'
import data from '../../SampleSearchByZipcode'
import RestaurantInfo from '../RestaurantInfo/RestaurantInfo'
import UserInfo from '../UserInfo/UserInfo'


export default class HomePage extends Component {

  state = {myprofile:false}

  componentDidMount() {
    const token = localStorage.getItem('token');
    if (!token) {
      this.props.history.push('/login');
    }
  }

  handleClick = () => {
    this.setState(prevState => ({myprofile:!prevState.myprofile}))
  }


  render() {

    

    return(
      <div className="HomePage">

        <p className="current_userName">Hello, {this.props.current_user.username}</p> 
        <p onClick={this.handleClick} style={{cursor:"pointer"}}>My Profile</p>
        {
        this.state.myprofile ?
        <UserInfo current_user={this.props.current_user}/>
        :
        <Card.Group itemsPerRow={4}>
        {data.result.data.map(r => <RestaurantInfo key={r.restaurant_id} restaurant={r} />)}
        {console.log(data.result.data)}
        </Card.Group>
        }
      </div>
    )
  }
}
