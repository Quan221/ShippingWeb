import axios from "axios"

import cookies from "react-cookies"

export let endpoints = {

   "register": "/users/",
   "orders":"/orders/",
   "current-user": "/users/current-user/",
   "login":"/o/token/",
   "register-shipper":"/addshipper/",
   "shippers":"/shippers/",
   "list-user":"/users/",
   "shippers-detail": (shippersId) => `/shippers/${shippersId}/`,
   




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