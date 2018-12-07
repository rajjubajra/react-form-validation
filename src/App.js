import React, { Component } from 'react';
import './App.css';
import MyForm from './components/MyForm';
import SigninForm from './components/SigninForm';

class App extends Component {
  render() {
    return (
      <div className="App">
        <SigninForm />

        <hr /><br />
        <MyForm />
      </div>
    );
  }
}

export default App;
