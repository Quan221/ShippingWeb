import './App.css';
import React, { useReducer, createContext } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './layout/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import myReducer from './reducers/UserReducers';
import Login from './components/Login';
import Register from './components/Register';
import RegisterShiper from './components/RegisterShiper';
import ShipperList from './components/ShipperList';
import Orders from './components/Orders';
import AddOrder from './components/AddOrder';
import ShipperDetail from './components/ShipperDetail';
import Home from './components/Home';
import OrderDetail from './components/OrderDetail';
import OrderList from './components/OrderList';
import RegisterCustomer from './components/RegisterCustomer';


export const UserContext = createContext()

function App() {
  const [user, dispatch] = useReducer(myReducer)

  return (
    <BrowserRouter>
      <UserContext.Provider value={[user, dispatch] } >
        <Header />
        <Routes>
          {/* <Route path="/Home " element={<Home />}/> */}
          <Route path="/registershiper" element={<RegisterShiper/>} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register/>} />
          <Route path="/shippers" element={<ShipperList/>} />
          <Route path="/my-orders" element={<Orders/>} />
          <Route path="/addOrder" element={<AddOrder/>} />
          <Route path="/shippers/:shippersId" element={<ShipperDetail/>} />
          <Route path="/orders/:ordersId" element={<OrderDetail/>} />
          <Route path="/order" element={<OrderList/>} />
          <Route path="/registercustomer" element={<RegisterCustomer/>} />
          
        </Routes>
        {/* <Footer /> */}
      </UserContext.Provider>
    </BrowserRouter>
  );
}

export default App;

