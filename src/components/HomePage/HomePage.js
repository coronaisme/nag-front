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
import SingleRestaurant from '../SingleRestaurant/SingleRestaurant'


export default class HomePage extends Component {
  
  componentDidMount() { 
    const token = localStorage.getItem('token');
    if (!token) {
      this.props.history.push('/login');
    }
  }
  
  state = {
    restaurant: null
  }

  onBackButtonClick = () => {
		this.setState(previousState => {
			return {
				...previousState,
				restaurant: null
			}
		})
	}


  onRestaurantClick = (restaurant) => {
    this.setState(previousState => {
      return {
        ...previousState,
        restaurant: restaurant
      }
    })
  }

  render() {
    return(
      <div className="HomePage">

        <h2 className="current_userName">Hello, {this.props.current_user.username}</h2> 
        <Card.Group itemsPerRow={4}>

        {this.state.restaurant ? <SingleRestaurant restaurant={this.state.restaurant} onBackButtonClick={this.onBackButtonClick}/>
          :
        data.result.data.map(r => <RestaurantInfo key={r.restaurant_id} restaurant={r} onRestaurantClick={this.onRestaurantClick} />)}
        {console.log(data.result.data)}
        </Card.Group>

      </div>
    )
  }
}
