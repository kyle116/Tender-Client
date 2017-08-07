import React, { Component } from 'react';
import './App.css';
import NavBar from './components/NavBar'
import {BrowserRouter as Router, Route, Redirect} from 'react-router-dom';
import SignUp from './components/SignUp';
import axios from 'axios';

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        <div className="App-header">
          <NavBar />
        </div>
        <Route path="/signup" component={SignUp} />
      </div>
      </Router>
    );
  }
}

export default App;
