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
            {/* <img src={} />*/}
          </div>
          <div className="content">
             {/* <div className="header">{ restaurant name }</div> */}
             {/* type of food? address? */}
          </div>
        </div>
      </Card>
    )
  }
}