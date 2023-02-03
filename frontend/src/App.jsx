import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Nav from "@components/UI/Nav";

import "./App.css";

function App() {
  return (
    <Router>
      <div className="App h-100">
        <Nav />
        <Home />
        <p>coucou</p>
      </div>
    </Router>
  );
}

export default App;
