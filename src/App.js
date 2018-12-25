import React, { Component } from 'react';
import './App.css';
import NavigationMenu from './components/NavigationMenu'

class App extends Component {
  render() {
    return (
      <div className="App">
      <div>
        <NavigationMenu/>
      </div>
      <h1>Einer Lim Web and Mobile App Developer</h1>
      </div>
    );
  }
}

export default App;
