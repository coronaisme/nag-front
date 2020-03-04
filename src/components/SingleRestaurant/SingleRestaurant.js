import React, { Component } from 'react'
import menuData from '../../SampleMenu'
import "./SingleRestaurant.css"


export default class SingleRestaurant extends Component {

  

  render() {
    
    const { restaurant } = this.props
    const menu  = menuData.result.data

    return (
      <div className="ui segment centered">
      <div className="ui two column centered grid">
        <div className="row">
          <div className="four wide column">
            <img
              alt="restaurant"
              className="ui large image bordered"
              src={'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.eatouteatwell.com%2Fwp-content%2Fuploads%2F2014%2F01%2Frestaurant-front.jpg&f=1&nofb=1'}
            />
          </div>
          <div className="centered column">
            <h2>{restaurant.restaurant_name}</h2>
            <p>
              <strong>Address: </strong><br/>
              {restaurant.address.formatted}
            </p>
            <strong>
              Cuisines: {restaurant.cuisines.map(c =>  <li key={Math.random()}>{c}</li>)} 
            </strong>
            <br />
            {/* <div className="ui segment"> */}
              {/* <div className="ui three row grid"> */}
                {/* <div className="row"> */}
                  <div className="row">
                    <i className="icon large green dollar" />
                    <strong>{restaurant.price_range ? restaurant.price_range : "not available" }</strong>
                  </div>
                  <br />
                  <div className="row">
                    <i className="icon large blue phone" />
                    <strong>{restaurant.restaurant_phone ? restaurant.restaurant_phone : "not available"}</strong>
                  </div>
                  <br />
                  <div className="row">
                    <i className="icon large yellow clock" />
                    <strong>{restaurant.hours ? restaurant.hours : "not available"}</strong>
                  </div>
                  <br />
                {/* </div> */}
              {/* </div> */}
            {/* </div> */}
            <button
              className="ui button fluid"
              onClick={() => this.props.onBackButtonClick()}>
              All Restaurants
            </button>
          </div>
        </div>
      </div>
      <br />
      <br />
      <div className="menuList">
        {console.log(menu)}
        {menu.map(dish => {
         return <ul className="menuItems" key={dish.item_id}>         
                {dish.menu_item_name}:  {dish.menu_item_description}    {dish.menu_item_pricing[0].priceString} 
                <br/>     
                </ul>
        })}
      </div>
    </div>
    )
  }
}
