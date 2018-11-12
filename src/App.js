import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Test1 from './pages/test1'

class App extends Component {
  render() {
    return (
          <div>
              {this.props.children}
          </div>
    );
  }
}

export default App;
