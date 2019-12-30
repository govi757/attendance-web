import React, { Component } from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Login from './containers/Auth/login.js';
import Notfound from './containers/notfound.js';
import Dashboard from './containers/dashboard';

class App extends Component {
  render() {
    return (
      <Router >
        <Switch>
          <Route exact path="/auth" component={Login} />
          <Route path="/dashboard" component={Dashboard}/>
          <Route component={Notfound}/>
        </Switch>
      </Router>
    );
  }
}

export default App;
