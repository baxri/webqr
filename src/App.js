import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import logo from './logo.svg';
import './App.scss';
import { Provider } from "react-redux";

import PrivateRoute from "./routes/PrivateRoute";

import store from './store/index';

import home from "./pages/home/index";
// import about from "./pages/about";
// import posts from "./pages/posts";
// import login from "./pages/login";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Switch>
              <Route exact path='/' component={home} />
              {/* <Route exact path='/about' component={about} />
              <Route exact path='/login' component={login} />
              <PrivateRoute exact path='/posts' component={posts} /> */}
            </Switch>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
