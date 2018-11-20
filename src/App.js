import React, { Component } from 'react';
import Board from './components/Board/Board'
import store from './store'
import { Provider } from 'react-redux'
import './App.css'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Board /> 
      </Provider>
    );
  }
}

export default App;
