import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

function Header() {
  return (
    <h1><img src={logo} alt="logo"/></h1>
  );
}

function Footer() {
  return (
    <p className="copyright">Copyright &copy; Hoge</p>
  );
}

class App extends Component {
  render() {
    return (
      <div>
        <Header></Header>
        <Footer></Footer>
      </div>
    );
  }
}

export default App;
