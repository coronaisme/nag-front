//Home page, has background image, title of app, User greeting(clickable), search bar, list of restaurant cards near user

//user greeting button goes to UserInfo.js

//List of restaurant cards in a grid of restaurants within a ~2 mile radius of users signup addess
//search bar will filter the restaurants by search values

//upon clicking a specific restaurant card -> goes to RestaurantInfo.js

import React, {Component} from 'react';
import './HomePage.css'
import { Card, Header, Segment } from 'semantic-ui-react'
import data from '../../SampleSearchByZipcode'
import RestaurantInfo from '../RestaurantInfo/RestaurantInfo'
import UserInfo from '../UserInfo/UserInfo'
import SingleRestaurant from '../SingleRestaurant/SingleRestaurant'

export default class HomePage extends Component {

  state = { 
    myprofile: false,
    allRestaurants: [],
    restaurant: null
   }

  componentDidMount() {
    const token = localStorage.getItem('token');
    if (!token) {
      this.props.history.push('/login');
    }
    fetch(`https://us-restaurant-menus.p.rapidapi.com/restaurants/zip_code/${this.props.current_user.zipcode}?page=1`, {
	  "method": "GET",
	  "headers": {
		"x-rapidapi-host": "us-restaurant-menus.p.rapidapi.com",
		"x-rapidapi-key": "8d745e65dcmsh12b93a292d573cdp1afde5jsnef2ba2a24071"
	  }
  })
.then(res => res.json()).then(data => 
  this.setState(previousState => {
    return {
      ...previousState,
      allRestaurants: data.result.data
    }
  })
  )
  }
  

  handleClick = () => {
    this.setState(prevState => ({myprofile:!prevState.myprofile}))
  }

  onRestaurantClick = (restaurant) => {
    this.setState(previousState => {
      return {
        ...previousState,
        restaurant: restaurant
      }
    })
  }

  onBackButtonClick = () => {
		this.setState(previousState => {
			return {
				...previousState,
				restaurant: null
			}
		})
  }
  

  

  render() {
    return(
      <div className="HomePage">
        <br/>
        <Header as='h2' color='blue' textAlign='center'>Hello {this.props.current_user.username}</Header>   
        <br/>
        <div className="segment" >
        <Segment  circular onClick={this.handleClick} style={{cursor:"pointer"}} >
        <i className="icon large hand point up"  style={{cursor:"pointer"}}/> <br/>{(this.state.myprofile) ? "All Restaurants" : "My Profile"}
        </Segment>
        </div>
        <br/>
        {
        this.state.myprofile ?
        <UserInfo current_user={this.props.current_user}/>
        :
        <Card.Group centered itemsPerRow={4}>

        {this.state.restaurant ? <SingleRestaurant current_user={this.props.current_user} restaurant={this.state.restaurant} onBackButtonClick={this.onBackButtonClick}/>
          :
        this.state.allRestaurants.map(r => <RestaurantInfo key={r.restaurant_id} restaurant={r} onRestaurantClick={this.onRestaurantClick}  />)}
        </Card.Group>
        }
      </div>
    )
  }
}