import React, { Component } from "react";
import "./App.css";
import Header from "../../layout/Header";
import Center from "../../layout/Center";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Center />
      </div>
    );
  }
}

export default App;
