import React, { Component } from 'react';
import NavBar from './components/NavBar';
import Dashboard from './screens/Dashboard';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Router >
          <Switch>
            <Route exact path='/' component={Dashboard}/>
          </Switch>
        </Router>
        {/* <Dashboard /> */}
      </div>
    );
  }
}

export default App;
