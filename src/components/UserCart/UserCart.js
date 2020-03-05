//UserCart will have all the dishes - just names and cost (could make the names clickable to take back to their SelectedDish page)
//total cost
//delivery time(?) are we actually basing this off something or just bsing? If we are bsing, do we really care about the delivery part?
//Each item has a button to remove from cart, price must be adjusted
//button at bottom of page to review and pay for items -> takes user to ReviewCart

import React from 'react';

export default class UserCart extends React.Component
{
    handleChange = () => {
        debugger
    }

    render()
    {
        return(
            <div>
                <br/>
                <form>
                {this.props.cart.length > 0 ? 
                
                    this.props.cart.map(item => {
                    console.log(item)
                    let items = item.split(',')
                    var name = items[0]
                    let stringPrice = items[items.length - 1]
                    var price = items[items.length - 1].slice(1)
                    let betterPrice = parseFloat(price)
                    console.log(betterPrice, price, name)

                   
                    return (
                    <div key={Math.random()}>
                   
                    <ul key={Math.random()}><input type="number" onChange={this.handleChange}></input> {name} : {stringPrice}</ul>

                    </div>
                    )
                })
                
                :
                <div>
                Your Cart is Empty. 
                </div>
                }
                </form>
            </div>
        )
    }
}

// {
//     "cart": [
//       "Coconut Juice,,$3.00",
//       "Green Mussel,Cooked green mussel with ponzu sauce, topped with tobiko and green onion. Served cold.,$5.00",
//       "Pineapple Fried Rice,Wok fried rice with choice of meat, egg, tomatoes, onion, pineapple, raisin, and Cashew nuts.,$9.95",
//       "Ika Sugatayaki,Grilled whole squid with Japanese mayo or spicy and sour sauce.,$12.00"
//     ]
//   }