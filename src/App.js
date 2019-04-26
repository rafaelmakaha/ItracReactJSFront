import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import NavBar from './components/NavBar';
import Dashboard from './screens/Dashboard';
import Edit from './screens/Edit';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      url:'',
    }
    this.handleOnClickModerate = this.handleOnClickModerate.bind(this);
  }

  handleOnClickModerate(url){
    this.setState({url:url})
  }
  render() {
    return (
      <div className="App">
        <Router >
          <NavBar />
          <Switch>
            <Route exact path='/' component={() => <Dashboard onClickModerate={this.handleOnClickModerate}/>}/>
            <Route exact path='/edit' component={() => <Edit url={this.state.url} />} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
