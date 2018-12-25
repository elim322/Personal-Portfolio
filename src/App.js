import React, { Component } from "react";
import "./App.css";
import NavigationMenu from "./components/NavigationMenu";
import CLT from "./components/CLT";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <NavigationMenu />
        </div>
        <h1>Einer Lim FullStack Front End Developer</h1>
        <div>
          <CLT />
        </div>
      </div>
    );
  }
}

export default App;
