import axios from 'axios';
import apiUrl from '../apiConfig';

const getAllOrders = () => {
    return axios.get(`${apiUrl}/api/orders`);
  };

    // Add a new order
 const createOrder = order => {
  // return a promise
  axios.post(`${apiUrl}/api/orders`, {order});
  };


export { getAllOrders , createOrder }