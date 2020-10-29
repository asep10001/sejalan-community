import "./App.css";
import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Header, Navbar } from "./components";

class App extends Component {
  render() {
    return (
      <Router>
        <Header />
        <Navbar />
      </Router>
    );
  }
}

export default App;
