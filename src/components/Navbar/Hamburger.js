import React from "react";
import "./Hamburger.css";


const toggle = "is-active";


const Hamburger = ({ open , setOpen }) => {
  return (
    <button 
    className={`hamburger hamburger--collapse ${open && toggle}`}
    type="button"
    onClick={() => setOpen(!open)}
    >
      <span className="hamburger-box">
        <span className="hamburger-inner"></span>
      </span>
    </button>  
  );
};

export default Hamburger;
