import React from 'react';
import Order from './order';
import axios from 'axios';
import apiUrl from '../../apiConfig';

    
    class Checkout extends React.Component {


        // Axios call for the api 
    createOrderList = order => {
    axios.post(`${apiUrl}/api/orders`, {
     order:  
      {
   itemsList : [this.props.id],
  totalPrice : this.props.totalPrice,
  discount :"0",
  tax : "0",
 userId : "fgdgdfg364563654564"
}
    })
    .then(function (response) {
    console.log(response);
      })
  }
        render() { 
            return ( 
                <div>
    <button onClick={this.createOrderList}> HERE </button>
                </div>
             );
        }
    }
    export default Checkout;