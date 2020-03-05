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

  state = {myprofile:false}

  componentDidMount() {
    const token = localStorage.getItem('token');
    if (!token) {
      this.props.history.push('/login');
    }
  }
  
  state = { restaurant: null }

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

        {this.state.restaurant ? <SingleRestaurant restaurant={this.state.restaurant} onBackButtonClick={this.onBackButtonClick}/>
          :
        data.result.data.map(r => <RestaurantInfo key={r.restaurant_id} restaurant={r} onRestaurantClick={this.onRestaurantClick} />)}
        </Card.Group>
        }
      </div>
    )
  }
}