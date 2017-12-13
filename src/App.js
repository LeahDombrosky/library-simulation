import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import router from "./router";

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header> */}
        {/* <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p> */}
        {/* <div className="GrayBox">
          <h1>Book Exchange</h1>
          <div className="BlackBox" />
        </div> */}

        <div id="App__mainContainer">
          <div id="App__routerContainer">{router}</div>
        </div>
      </div>
    );
  }
}

export default App;
