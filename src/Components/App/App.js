import React, { Component } from 'react';
import logo from '../../logo.svg';
import './App.css';
import {SwaggerTest} from "../SwaggerUI/SwaggerUI";

class App extends Component {
  render() {
    return (
      <div className="App">
          <SwaggerTest/>
      </div>
    );
  }
}

export default App;
