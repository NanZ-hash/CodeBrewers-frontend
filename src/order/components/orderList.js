import React from 'react';
import Order from './order';
import Checkout from './CreatOrder'
import {getAllMenuItems} from '../../menuItem/api'
class OrderList extends React.Component {
      constructor (props) {
          super(props) ;   
          
          this.state={ 
            total:0 ,
                    }
   }
    componentDidMount(){
      getAllMenuItems()
        .then((res)=> {
       this.props.setMenuItems(res.data.menuItems)
        })
        .catch((err)=>{
            console.log('API ERROR:',err);
        })
    }

    

    // createOrderList (){
      // createOrder = order => {
      //   // Make an axios request
      //   addNewOrder(order)
      //   .then(response => {
      //   console.log(`The order ${order} has been created successfully.`);
      //   })
      //   .catch(error => {
      //   console.log("API ERROR: ", error);
      //   });
      //   };
  
  //     axios.post(`${apiUrl}/api/orders`, {
  //      order:  
	// 	{
	//  itemsList : this.props.order,
  //   totalPrice : this.state.total,
  //   discount :"0",
  //   tax : "0",
  //  userId : "fgdgdfg364563654564"
  // }

  //     })
  //     .then(function (response) {
  //     console.log(response);
  //       })
  //   }
    

    

render() { 
    
// only prints the price 
var price = 0;
        const total= this.props.orders.map((order,index)=> { 
          const num = parseFloat(order.price) ;
          price=price +num
          return price;
        })


//for the orders 
let AllOrders = <h4>No Orders!</h4>;
if(this.props.orders.length > 0)
{
AllOrders = this.props.orders.map((order,index)=>{
return <Order  id = {order._id}
               totalPrice = {order.price}
               item = {order.name}
               key = {index}/>
});
}

let checkout = this.props.orders.map((order,index)=>{
  return <Checkout  id = {order._id}
                 key = {index}/>
  });


console.log(`orderList ORDER ARRAY ${this.props.orders}`)
        return ( 
            <>
            <h3>All Orders</h3>
             {AllOrders}
             <h4>----------------------------------------</h4>

             <h2>Total : {price} </h2>
              {checkout}
<Checkout totalPrice={price} />
              <p>Checkout  </p>
            </>
         );
    }
}
export default OrderList;

// DELETE 



/*** FUNCTIONS ***/

// total 
// sum n amount of numbers .. 
/*** 
 * 
 * var n = 5 ; 
var res = (n * (n+1)) / 2
==========================================
function numberSum(N) {
  var total = 0;
    for(var i = 1; i <= N; i++){
      total += i;
    }
    return total;
} 
=========================================
using for each ... ???

example : 
function Counter() {
  this.sum = 0
  this.count = 0
}
Counter.prototype.add = function(array) {
  array.forEach((entry) => {
    this.sum += entry
    ++this.count
  }, this)
  // ^---- Note
}

const obj = new Counter()
obj.add([2, 5, 9])
obj.count
// 3 
obj.sum
// 16

=========================================== 

 * 
 * 
 * 
 * ***/
// Edit the amount delete using slice ... 
// 