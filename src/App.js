// import logo from './logo.svg';
import { Component } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from './Components/SignIn/SignIn';
import { WaiterView } from './Components/WaiterView/WaiterView';
import Sample from './Components/Sample';
const ChefView = () => <h1>Burger queen CV</h1>

class App extends Component {
  render() {
    return(
      <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<SignIn />} />
            <Route exact path="/waiter-view" element={<WaiterView />} />
            <Route exact path="/chef-view" element={<ChefView />} />
            <Route exact path="/sample" element={<Sample/>} />
          </Routes>
      </BrowserRouter>
    );
  } 
}

export default App;
