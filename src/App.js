import React, { Component } from 'react';
import './App.css';
import Natofier from './components/Natofier'

class App extends Component {
  render() {
    return (
      <div id="app" className="container">
        <h1>natofy.io - React</h1>
        <Natofier />
      </div>
    );
  }
}

export default App;
