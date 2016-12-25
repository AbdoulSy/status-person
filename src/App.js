import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Person</h2>
        </div>
        <div className="person">
          <h1>Abdoul Sy</h1>
          <h3>Developer</h3>
          <h5>message@abdoulsy.eu</h5>
        </div>
      </div>
    );
  }
}

export default App;
