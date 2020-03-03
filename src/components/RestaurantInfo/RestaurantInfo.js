//Specific info on a certain restaurant
  //Name of restaurant, address, phone number, etc
  //cuisine type
//cart(clickable) takes user to UserCart
//List of menu items (gird of cards) will have a picture of dish, name and cost (clickables)
  //upon click -> takes user to SelectedDishInfo

//should have button to go back to home/logout/user....maybe a navbar would be the way to go...

import React, { Component } from 'react'
import { Card } from 'semantic-ui-react'


export default class RestaurantInfo extends Component {

  
  render() {
    return (
      <Card>
        <div>
          <div className="restaurant image">
            <img src={'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.eatouteatwell.com%2Fwp-content%2Fuploads%2F2014%2F01%2Frestaurant-front.jpg&f=1&nofb=1'} alt="restaurant img" height="200" width="200"/>
          </div>
          <div className="content">
             <div className="header">{ this.props.restaurant.restaurant_name }</div>
             {this.props.restaurant.cuisines[0]}<br/>
             {this.props.restaurant.address.street}
          </div>
        </div>
      </Card>
    )
  }
}