//UserCart will have all the dishes - just names and cost (could make the names clickable to take back to their SelectedDish page)
//total cost
//delivery time(?) are we actually basing this off something or just bsing? If we are bsing, do we really care about the delivery part?
//Each item has a button to remove from cart, price must be adjusted
//button at bottom of page to review and pay for items -> takes user to ReviewCart

import React from 'react';

export default class UserCart extends React.Component
{
    state = {total:null,item:[]}

    componentDidMount()
    {
        if(this.props.cart.length > 0)
        {
            this.props.cart.map(item => {
                // var qty = 1;
                var name = item.split(",")[0]
                var price = parseFloat(item.split(",")[item.split(",").length-1].slice(1))
                // let string_price = item.split(",")[item.split(",").length-1]
                // var item_total = ;
                var item_details = {qty:1,name:name,price:price}
                this.setState(prevState => ({...prevState,item:prevState.item.concat(item_details)}))
                return null
                })
        }
    }

    render()
    {
        return(
            <div>
                <table> <th><td>Quantity</td><td>Item Name</td><td>Price</td></th><tbody>
                {this.state.item.map(singleitem => {
                    return (<tr>
                       <td> <input type="number" value={singleitem.qty} on={this.handleChange} /></td>
                       <td>{singleitem.name} </td>
                    <td>{singleitem.price}</td>
                    </tr>)
                })}
                </tbody></table>
            </div>
        )
    }

    handleChange = () => {
        debugger
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