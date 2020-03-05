//UserCart will have all the dishes - just names and cost (could make the names clickable to take back to their SelectedDish page)
//total cost
//delivery time(?) are we actually basing this off something or just bsing? If we are bsing, do we really care about the delivery part?
//Each item has a button to remove from cart, price must be adjusted
//button at bottom of page to review and pay for items -> takes user to ReviewCart

import React from 'react';

export default class UserCart extends React.Component
{
    render()
    {
        return(
            <div> Props : {this.props}
                {console.log(this.props)}
            </div>
        )
    }
}