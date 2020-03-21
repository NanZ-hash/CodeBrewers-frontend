import React from 'react';
class Order extends React.Component {
    render() { 
        return ( 
            <div>
                <h4> ///////////////////////////////////////////// </h4>
            <h2>{this.props.item}</h2>
        <p> Price :: { this.props.totalPrice} </p>
            </div>
         );
    }
}
export default Order;