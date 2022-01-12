import React, { useState } from "react";
import "./Hamburger.css";


const toggle = "is-active";


const Hamburger = () => {
  const [ open , setOpen ] = useState(false);
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
