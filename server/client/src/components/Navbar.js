import React from "react";
import logo from "../Logo/logo.png";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <img src={logo} alt="logo" className="logo" />
        <h5>Finland Hospital Finder</h5>
      </div>
    </nav>
  );
};

export default Navbar;
