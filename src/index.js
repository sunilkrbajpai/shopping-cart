import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as firebase from 'firebase';
import 'firebase/firestore';

var firebaseConfig = {
  apiKey: "AIzaSyAV2jjV55GVP46WkSsKvyURS7NTTh3nOlE",
  authDomain: "cart-4bdde.firebaseapp.com",
  databaseURL: "https://cart-4bdde.firebaseio.com",
  projectId: "cart-4bdde",
  storageBucket: "cart-4bdde.appspot.com",
  messagingSenderId: "260201066908",
  appId: "1:260201066908:web:14e9366f7f9fdd99405859"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

