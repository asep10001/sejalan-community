import "./App.css";
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Footer, Header, Navbar } from "./components";

const App = () => {
    return (
      <Router>
        <Header />
        <Navbar />
        <Footer />
      </Router>
    );
}

export default App;
