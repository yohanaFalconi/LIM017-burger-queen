// import logo from './logo.svg';
import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

const WaiterView = () => <h1>Burguer queen WV</h1>

const ChefView = () => <h1>Burguer queen CV</h1>

class App extends Component {
  render() {
    return(
      <BrowserRouter>
        <div className="App">
          <Link to='/waiter-view' className='routeBtn'>
            <p>I'm a waiter or waitress</p>
          </Link>
          <p>Place orders</p>

          <Link to='/chef-view' className='routeBtn'>
            <p>I'm a chef</p>
          </Link>
          <p>See orders</p>

          <Routes>
            <Route exact path="/waiter-view" element={<WaiterView />} />
            <Route exact path="/chef-view" element={<ChefView />} />
          </Routes>
        </div>
      </BrowserRouter>
    );
  } 
}

export default App;
