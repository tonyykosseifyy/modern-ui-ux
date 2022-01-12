import React from "react";
import "./Hamburger.css";


const toggle = "is-active";


const Hamburger = () => {
  return (
    <button className="hamburger hamburger--collapse" type="button">
      <span className="hamburger-box">
        <span className="hamburger-inner"></span>
      </span>
    </button>  
  );
};

export default Hamburger;
