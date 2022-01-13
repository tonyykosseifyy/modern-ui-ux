import React from "react";
import "./HomeSection.css";
import illustration from "../../illustration.svg";

const HomeSection = () => {
  return (
    <div className="homesection">
      <div className="homesection-left">
        <div className="homesection-left-heading">
          <div className="homesection-left-new"><span>NEW</span></div>
          <h3>monograph dashboard</h3>
        </div>
        <div className="homesection-left-body">
          <h1>powerful insights into your team</h1>
          <p>Project planning and time tracking for agile teams</p>
        </div>
        <div className="homesection-left-buttons">
          <button className="red-button">schedule a demo</button>
          <button className="transparent-button">to see a preview</button>
        </div>
      </div>
      <div className="homesection-right">
        <img src={illustration} />
      </div>
    </div>
  );
};

export default HomeSection ;