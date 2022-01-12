import React, { useState } from "react";
import "./Navbar.css";
import Hamburger from "./Hamburger";
import { Logo } from "../../assets";

const links = [
  "products",
  "features",
  "pricing",
  "",
  "login"
];

const Navbar = () => {
  const [ open , setOpen ] = useState(false);
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Logo />
      </div>
      <div className="navbar-links">
        { links.map(link => (
          <a key={link} href={link}>{link}</a>
        ))}
      </div>
      <Hamburger open={open} setOpen={setOpen} />
      <div className={`navbar-mobile-links ${open && "link-active"}`}></div>
    </nav>
  );
};


export default Navbar ;