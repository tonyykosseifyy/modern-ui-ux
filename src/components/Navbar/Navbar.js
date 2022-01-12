import React from "react";
import "./Navbar.css";
import Hamburger from "./Hamburger";

const links = [
  "products",
  "features",
  "pricing",
  "",
  "login"
];

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo"></div>
      <div className="navbar-links">
        { links.map(link => (
          <a key={link} href={link}>{link}</a>
        ))}
      </div>
      <Hamburger />
    </nav>
  );
};


export default Navbar ;