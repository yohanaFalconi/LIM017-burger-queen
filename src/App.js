import { Component } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from './Components/SignIn/SignIn';
import { WaiterView } from './Components/WaiterView/WaiterView';
import Navigate from './Components/Navigate/Navigate';
import ChefView from './Components/ChefView/ChefView';
import PlaceOrders from './Components/PlaceOrders/PlaceOrders';

class App extends Component {
  render() {
    return(
      <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<SignIn />} />
            <Route exact path="/navigate" element={<Navigate/>} />
            <Route exact path="/waiter-view" element={<PlaceOrders />} />
            <Route exact path="/chef-view" element={<ChefView />} />
            <Route exact path="/waiter-view/place-orders" element={<PlaceOrders />} />
            <Route exact path="/waiter-view/ready-to-serve" element={<WaiterView />} />
          </Routes>
      </BrowserRouter>
    );
  } 
}

export default App;
