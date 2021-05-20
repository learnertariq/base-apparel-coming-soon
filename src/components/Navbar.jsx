import React from "react";
import logo from "../assets/logo.svg";

function Navbar(props) {
  return (
    <nav className="navbar">
      <div className="container">
        <img src={logo} />
      </div>
    </nav>
  );
}

export default Navbar;
