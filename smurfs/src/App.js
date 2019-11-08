import React, { Component } from "react";
import "./App.css";
import SmurfList from './components/SmurfList';
import AddSmurf from './components/AddSmurf';

class App extends Component {

  render() {
    return (
      <div className="App">
        <h1>SMURFS</h1>
        <AddSmurf />
        <SmurfList />
      </div>
    );
  }
}

export default App;
