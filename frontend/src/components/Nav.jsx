import React from "react";
import { Link } from "react-router-dom";

import "./Nav.css";

function Nav() {
  return (
    <div>
      <nav className="nav fixed-top bg-black   justify-content-center">
        <div className="nav-item ">
          <Link to="/" className="nav-link active text-white">
            Home
          </Link>
        </div>
        <div className="nav-item mb-5">
          <Link to="/TrocMarket" className="nav-link active text-white">
            TrocMarket
          </Link>
        </div>
        <div className="nav-item">
          <Link to="/Contact" className="nav-link text-white">
            Contact
          </Link>
        </div>
      </nav>
    </div>
  );
}
export default Nav;
