import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "@pages/Home";
import TrocMarket from "@pages/TrocMarket";
import Contact from "@pages/Contact";
import Nav from "@components/Nav";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/trocmarket" element={<TrocMarket />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
