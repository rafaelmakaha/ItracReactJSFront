import React, { Component } from 'react';
import NavBar from './components/NavBar';
import Dashboard from './screens/Dashboard';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Dashboard />
      </div>
    );
  }
}

export default App;
