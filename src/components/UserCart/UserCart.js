//UserCart will have all the dishes - just names and cost (could make the names clickable to take back to their SelectedDish page)
//total cost
//delivery time(?) are we actually basing this off something or just bsing? If we are bsing, do we really care about the delivery part?
//Each item has a button to remove from cart, price must be adjusted
//button at bottom of page to review and pay for items -> takes user to ReviewCart

import React from 'react';
import "./UserCart.css"
import StripeCheckout from "react-stripe-checkout";
import Display from "./Display"
export default class UserCart extends React.Component
{
    state = {total:null,item:[],show_message:false,msg:""}

    handlePay = () => {
        var today = new Date();
        var order_date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
        var order_time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        var user_details = {}
        const token = localStorage.getItem('token')
        console.log(this.props.current_user)
        if (token)
        {
            fetch(`http://localhost:3000/user/${this.props.current_user.id}`,
            {headers:{ 'Content-Type': 'application/json',Accept: 'application/json',Authorization: token}})
            .then(resp => resp.json())
            .then(data => user_details = data.user_details)
        }
        else { this.props.history.push('/login'); }
       
        var data = {delivery_address:(user_details.address_one,user_details.address_two,user_details.city,user_details.zipcode) ,pickup_address:(this.props.rest_addr) , order_date:order_date , order_time: order_time , delivery_date:order_date , delivery_time: null, fee:(this.state.total) , status: "delivered" , user_id: (this.props.current_user.id), payment_info_id:9 }
        fetch("http://localhost:3000/new_order",{
        method: 'POST',
        headers: {'Content-Type': 'application/json',Accept: 'application/json',Authorization: ""},
        body: JSON.stringify(data)
        }).then(resp => { if (resp.status === 200) { this.setState(prevState => ({...prevState,show_message:!prevState.show_message,msg:"success"})) }
                        else {this.setState(prevState => ({...prevState,show_message:!prevState.show_message,msg:"failure"}))} })
        .then(data => console.log(data))
      }    

    handleToken = () => {
        return Math.random()
    }

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
                {this.state.show_message ? <Display msg={this.state.msg}/> :
            <div> 
                <table> <thead><td>Quantity</td><td>Item Name</td><td>Single Price</td><td>Price</td></thead><tbody>
                {this.state.item.map(singleitem => {
                    return (<tr key={Math.random()}>
                       <td> <input type="number" key={Math.random()} placeholder={singleitem.qty} onChange={this.handleChange} name={singleitem.name}/></td>
                       <td>{singleitem.name}: </td>
                    <td>order/$ {singleitem.single_price.toFixed(2)}</td>
                    <td>total/$ {singleitem.item_price.toFixed(2)}</td>
                    </tr>)
                })}
                </tbody></table>
                Aaron Fee = 4% of ${((this.state.total * 100) * (0.1 * 10)) / 100}<br/>
                Delivery Fee = $ 3.99 <br/>
                GRAND TOTAL = ${(((((this.state.total) + 3.99) * 1.04) * 100) * (0.1 * 10)) / 100 }<br/>
                <br></br>
                    <StripeCheckout
                        closed={this.handlePay}
                        stripeKey="pk_test_4TbuO6qAW2XPuce1Q6ywrGP200NrDZ2233"
                        token={this.handleToken}
                        amount={this.state.total * 100}
                        name="Total Items"
                        billingAddress
                        shippingAddress
                    />
            </div>
            }</div>
        )
    }
}
