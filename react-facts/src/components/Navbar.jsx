import React from "react";
import logo from "../logo192.png";
const Navbar = () => {
  return (
    <nav>
      <div className="block-logo">
        <img src={logo} alt="" />
        <h3 className="nav--logo_text">ReactFacts</h3>
      </div>
      <h4 className="nav--title">React Course - Project 1</h4>
    </nav>
  );
};

export default Navbar;
