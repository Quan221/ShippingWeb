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
import ShipperDetail from './components/ShipperDetail';

export const UserContext = createContext()

function App() {
  const [user, dispatch] = useReducer(myReducer)

  return (
    <BrowserRouter>
      <UserContext.Provider value={[user, dispatch]}>
        <Header />
        <Routes>
          <Route path="/registershiper" element={<RegisterShiper/>} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register/>} />
          <Route path="/shipperlist" element={<ShipperList/>} />
          <Route path="/oders" element={<Orders/>} />
          <Route path="/shippers/:shippersId" element={<ShipperDetail />} />
        </Routes>
        {/* <Footer /> */}
      </UserContext.Provider>
    </BrowserRouter>
  );
}

export default App;

