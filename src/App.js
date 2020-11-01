import "./App.css";
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Header, Navbar } from "./components";

const App = () => {
    return (
      <Router>
        <Header />
        <Navbar />
      </Router>
    );
}

export default App;
