import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Welcome extends Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>
  }
}

class App extends Component {
  render() {
    return <Welcome name="asdfasdfsadfasdf" />;
  }
}

export default App;
