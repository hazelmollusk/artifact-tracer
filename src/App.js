import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

/* feathers setup */
const io = require('socket.io-client'); 
const feathers = require('@feathersjs/feathers');
const socketio = require('@feathersjs/socketio-client');
const socket = io('http://localhost:3030');
const artifactTracer = require('artifact-tracer');

const feather = feathers();

feather.configure(socketio(socket));
feather.configure(artifactTracer);

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
