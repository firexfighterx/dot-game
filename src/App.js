import React, { Component } from 'react';
import logo from './logo.svg'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from './actions/nameActions';
import './App.css';

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
            {this.props.name}
          </a>
          <button onClick={() => this.props.actions.updateName('TESTING')}>change</button>
        </header>
      </div>
    );
  }
}

export default connect(
state => ({name: state.name}), 
dispatch => ({actions: bindActionCreators(actions, dispatch)}))(App);
