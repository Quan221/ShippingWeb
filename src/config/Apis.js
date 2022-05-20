import axios from "axios"

import cookies from "react-cookies"

export let endpoints = {

   "register": "/users/",
   "orders":"/orders/",
   "current-user": "/users/current-user/",
   "login":"/o/token/",
   "register-shipper":"/register-shipper/",
   "shippers":"/shippers/",
   "list-user":"/users/",
   "shipper-detail": (shippersId) => `/shippers/${shippersId}/`,
   "order-detail":(orderId)=> `/orders/${orderId}/`,
   "my-orders" : "/customers/my-orders/",
   "comment": (shippersId)=> `/shippers/${shippersId}/comments/`,
   "addcomment" : (shippersId)=> `/shippers/${shippersId}/add-comment/`,
   "orderlist" :"/orders/",
   "registercustomer": "/register-customer/", 
   "customers": "/customers/",




}
export const authApi = () => {
    return axios.create({
        baseURL: "http://127.0.0.1:8000/",
        headers: {
            'Authorization': `Bearer ${cookies.load('token')}`
        }
    })
}


export default axios.create({
    baseURL:"http://127.0.0.1:8000/"

})