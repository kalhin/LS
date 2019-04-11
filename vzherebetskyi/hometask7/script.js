'use strict';

// import React from 'react';   
// import ReactDOM from 'react-dom';

var React = require('react');
var ReactDOM = require('react-dom');

// class App extends React.Component{

//     render() {
//         return(
//             <div><h1>Hello World!</h1></div>
//         ); 
//     }
// }

// const appRoot = document.getElementById('app');
// ReactDOM.render(<App />, appRoot);

console.log("app is running");

var test = React.createElement(
  'h1',
  null,
  'This is JSX!'
);
var appRoot = document.getElementById('app');
ReactDOM.render(test, appRoot);
