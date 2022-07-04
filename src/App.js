// import logo from './logo.svg';
import { Component } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from './Components/SignIn/SignIn';
import { WaiterView } from './Components/WaiterView/WaiterView';
import Sample from './Components/Sample';
import Navigate from './Components/Navigate/Navigate';
import ChefView from './Components/ChefView/ChefView';

class App extends Component {
  render() {
    return(
      <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<SignIn />} />
            <Route exact path="/navigate" element={<Navigate/>} />
            <Route exact path="/waiter-view" element={<WaiterView />} />
            <Route exact path="/chef-view" element={<ChefView />} />
            <Route exact path="/sample" element={<Sample/>} />
          </Routes>
      </BrowserRouter>
    );
  } 
}

export default App;
