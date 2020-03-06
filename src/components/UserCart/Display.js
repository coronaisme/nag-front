import React from 'react'

export default class Display extends React.Component
{
    render()
    {
        return(
            <div>
                 {this.props.msg === "success" ? 
                 "Order placed successfully !"
                :
                "Order cannot be placed at this moment. Contact the support team to help you out."
                 }
            </div>
        )
    }
}