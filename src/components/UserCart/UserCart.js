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
    {   var tot = 0;
        if(this.props.cart.length > 0)
        {
            this.props.cart.map(item => {
                var name = item.split(",")[0]
                var price = parseFloat(item.split(",")[item.split(",").length-1].slice(1))
                var item_details = {qty:1,name:name,single_price:price,item_price:price}
                tot += price
                this.setState(prevState => ({...prevState,item:prevState.item.concat(item_details),total:tot}))
                return null
                })
        }
    }

    handleChange = (event) => {
        var tot = 0;
        var name = event.target.name;
        var value = event.target.value
        var state_items = this.state.item
        var changed_item = state_items.filter(item => {
            if (item.name == name){
                if (parseInt(value) <= 0)
                {
                    item.qty = 0
                    item.item_price = item.qty * item.single_price
                }
                else
                {
                    item.qty = parseInt(value)
                    item.item_price = item.qty * item.single_price
                }
            }
            if (item.qty === 0)
            {
                return null
            }
            tot += item.item_price
            return item
        })
        this.setState(prevState => ({...prevState,item:changed_item,total:tot}))
    }

    render()
    {
       
        return(
            <div> 
                <table> <th><td>Quantity</td><td>Item Name</td><td>Single Price</td><td>Price</td></th><tbody>
                {this.state.item.map(singleitem => {
                    return (<tr>
                       <td> <input type="number" placeholder={singleitem.qty} onChange={this.handleChange} name={singleitem.name}/></td>
                       <td>{singleitem.name} </td>
                    <td>{singleitem.single_price}</td>
                    <td>{singleitem.item_price}</td>
                    </tr>)
                })}
                </tbody></table>
                GRAND TOTAL = {this.state.total}
            </div>
        )
    }
}