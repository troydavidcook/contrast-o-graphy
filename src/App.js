import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Masonry from './components/Masonry';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Masonry />
      </div>
    );
  }
}

export default App;
