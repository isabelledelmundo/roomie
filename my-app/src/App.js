import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// Initialize Firebase
var config = {
	apiKey: "AIzaSyBn3fdur2Tqfb1ZZMuhRWh9D6uk-b4fosg",
	authDomain: "room-me-ee2e6.firebaseapp.com",
	databaseURL: "https://room-me-ee2e6.firebaseio.com",
	projectId: "room-me-ee2e6",
	storageBucket: "room-me-ee2e6.appspot.com",
	messagingSenderId: "912691567908"
};
firebase.initializeApp(config);
var storage = firebase.storage();

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
