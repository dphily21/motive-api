import React, { Component } from 'react';
import './App.css';
import SidebarExample from '../Sidebar/Sidebar';

class App extends Component {
  render() {
    return (
      <div className="App">
          <h1>Motive API</h1>
          <SidebarExample/>
      </div>
    );
  }
}

export default App;
