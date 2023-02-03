import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div>
      <nav className="navbar fixed-top navbar-light bg-light justify-content-center border-bottom shadow-sm">
        <Link to="/" className="nav-link fs-5 text-dark">

        </Link>
        <Link to="/trocMarket" className="nav-link fs-5 text-dark">

        </Link>  
        <Link to="/Contact" className="nav-link fs-5 text-dark">

        </Link>
      </nav>
    </div>
  );
}
export default Nav;
