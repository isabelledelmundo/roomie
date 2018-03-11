import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import LandingPage from './LandingPage';

const App = () => {
  return (
    <div className="App">
      <LandingPage/>
    </div>
  );
};


export default App;

//Initialize Firebase
// var config = {
// 	apiKey: "AIzaSyBn3fdur2Tqfb1ZZMuhRWh9D6uk-b4fosg",
// 	authDomain: "room-me-ee2e6.firebaseapp.com",
// 	databaseURL: "https://room-me-ee2e6.firebaseio.com",
// 	projectId: "room-me-ee2e6",
// 	storageBucket: "room-me-ee2e6.appspot.com",
// 	messagingSenderId: "912691567908"
// };
// firebase.initializeApp(config);
// var storage = firebase.storage();
