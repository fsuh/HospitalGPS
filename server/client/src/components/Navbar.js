import React from "react";
import logo from "../Logo/fsuh_logo.png";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <img src={logo} alt="logo" className="logo" />
        <h5>WebCrawler</h5>
      </div>
    </nav>
  );
};

export default Navbar;
