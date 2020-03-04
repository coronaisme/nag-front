import React, { Component } from 'react'


export default class SingleRestaurant extends Component {

  

  render() {
    
    const { restaurant } = this.props

    return (
      <div className="ui segment">
      <div className="ui two column centered grid">
        <div className="row">
          <div className="four wide column">
            <img
              alt="restaurant"
              className="ui large image bordered"
              src={'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.eatouteatwell.com%2Fwp-content%2Fuploads%2F2014%2F01%2Frestaurant-front.jpg&f=1&nofb=1'}
            />
          </div>
          <div className="four wide column">
            <h2>Name: {restaurant.restaurant_name}</h2>
            <p>
              <strong>Address: </strong>
              {restaurant.address.formatted}
            </p>
            <strong>
    Cuisines: {restaurant.cuisines.map(c => {return <li>{c}</li>})} 
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
              onClick={() =>
                this.props.onBackButtonClick()
              }
            >
              All Restaurants
            </button>
            {/* <button
              className="ui button fluid"
              onClick={() =>
                console.log("button2")    
              }
            >
              button2
            </button> */}
          </div>
        </div>
      </div>
    </div>
    )
  }
}
      // <div className="ui segment">
      //   <img src={'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.eatouteatwell.com%2Fwp-content%2Fuploads%2F2014%2F01%2Frestaurant-front.jpg&f=1&nofb=1'} alt="restaurant" />
      //     <div>{this.props.restaurant.restaurant_name}</div>
      // </div>