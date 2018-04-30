import React, { Component } from 'react';
import './App.css';
import Sidebar from '../Sidebar/Sidebar';

class App extends Component {
  render() {
    return (
      <div className="App">
          <h1>Motive API</h1>
          <Sidebar/>
      </div>
    );
  }
}

export default App;
