//User info has Users name
//a list of their past orders -> are clickable -> go to CompletedOrder.js (like a reciept with items ordered..etc)
//A button to edit UserInfo -> ie: payment info, address, etc
//A button to go back to HomePage.js


import React from 'react';

class UserInfo extends React.Component
{   
    state = { user_details: {},user_cards:{},user_orders:[]}

    componentDidMount()
    {
      
        const token = localStorage.getItem('token')
        if (token)
        {
            fetch(`http://localhost:3000/user/${this.props.current_user.id}`,
            {headers:{ 'Content-Type': 'application/json',Accept: 'application/json',Authorization: token}})
            .then(resp => resp.json())
            .then(data => 
                 this.setState({ user_details:data.user_details, user_cards: data.cards, user_orders: data.orders }))
        }
        else { this.props.history.push('/login'); }
    }
    render()
    {   
        const user_details = this.state.user_details
        const cards = this.state.user_cards
        return(
            <div> 
                <h2>Manage profile</h2>
                
                <h2>Member Details</h2>
                
                <div>
                    <h4>Member name: {user_details.name}<br/>
                    Email : {user_details.email}<br/>
                    Mailing Address - 1 : {user_details.address_one}<br/>
                    Mailing Address - 2 : {user_details.address_two}<br/>
                    City : {user_details.city}<br/>
                    State : {user_details.state}<br/>
                    Zipcode : {user_details.zipcode}<br/> </h4>
                </div>
                {this.state.user_cards.length > 0 ?  
                <div> 
                    <h2>Payment Information</h2>
                    <h5>
                        Name on Card : {cards[0].first_name} {cards[0].last_name}<br/>
                        Card Number : ****  ****  **** {cards[0].card_grid4}<br/>
                        Card Type : {cards[0].card_type}<br/>
                    </h5>
                </div> : null}
                {this.state.user_orders &&  
                <div> 
                    <h2>Past orders</h2>
                    {this.state.user_orders.map(order => {
                        return <div><ul>
                        <h5> Order Status : {order.status}<br/>
                             Delivered to : {order.delivery_address}<br/>
                             Amount Paid : {order.fee}<br/>
                             </h5></ul></div>
                    })}
                </div>}
             </div>
        )
    }
}

export default UserInfo