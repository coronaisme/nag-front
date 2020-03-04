//User info has Users name
//a list of their past orders -> are clickable -> go to CompletedOrder.js (like a reciept with items ordered..etc)
//A button to edit UserInfo -> ie: payment info, address, etc
//A button to go back to HomePage.js
import React from 'react';
import api from "../../api.js";

class UserInfo extends React.Component
{   
    state = {
        user_details: {},cards: {}
    }
    componentDidMount()
    {
        const token = localStorage.getItem('token')
        
        if (token)
        {
            fetch(`http://localhost:3000/user/${this.props.current_user.id}`,
            {headers:{ 'Content-Type': 'application/json',Accept: 'application/json',Authorization: token}})
            .then(resp => resp.json())
            .then(data => 
                 this.setState(
                    {
                    user_details:data.user_details,
                    user_cards: data.cards
                    }
                )
                )
        }
        else{ this.props.history.push('/login'); }
    }
    render()
    {   
        const user_details = this.state.user_details
        
        return(
           
            <div>
               {/* {this.state.cards}
               {this.state.user_details} */}
                <h2>Manage profile</h2>
                 Member name: <h4>{user_details.name}</h4>
                {/* Email : {this.state.data['user_details']['email']}<br/>
                Mailing Address - 1 : {this.state.data['user_details']['address_one']}<br/>
                Mailing Address - 2 : {this.state.data['user_details']['address_two']}<br/>
                City : {this.state.data['user_details']['city']}<br/>
                State : {this.state.data['user_details']['state']}<br/>
                Zipcode : {this.state.data['user_details']['zipcode']}<br/> */} 
            </div>
        )
    }
}

export default UserInfo

// user_details:
// id: 3
// name: "nick"
// email: "nick@hotmail.com"
// address_one: "1460 mission st"
// address_two: "floor one"
// city: "San Francisco"
// state: "California"
// zipcode: "94016"
// password_digest: "$2a$12$8Oa6SSuIPC5X.KVbH/kxDe6jQLcVBwu32b8JUHhXAzrqUuvhiHDAW"
// created_at: "2020-03-02T21:53:21.637Z"
// updated_at: "2020-03-02T21:53:21.637Z"

// cards: Array(1)
// 0:
// id: 2
// card_grid1: 1111
// card_grid2: 2222
// card_grid3: 3333
// card_grid4: 4444
// first_name: "nick"
// last_name: "corona"
// expiration_date: "2022-12-31"
// cvv: 123
// card_type: "visa"
// user_id: 3
// created_at: "2020-03-02T21:53:22.827Z"
// updated_at: "2020-03-02T21:53:22.827Z"