import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import './App.css';
import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home';
import Reservations from './components/reservations/Reservations';
import Confirmation from './components/confirmation/Confirmation';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />

          <Route path='/' exact component={Home} />
          <Route path='/reservations' component={Reservations} />
          <Route path='/confirmation' component={Confirmation} />
        </div>     
      </BrowserRouter>
    );
  }
}

export default App;
