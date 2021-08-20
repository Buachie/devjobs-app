import React from "react";
import SunIcon from "../assets/desktop/icon-sun.svg";
import MoonIcon from "../assets/desktop/icon-moon.svg";

const Navbar = () => {
  return (
    <div>
      <div className="navbar">
        <div className="nav-content">
          <h1>devjobs</h1>
          <div className="toggle-container">
            <img src={SunIcon} alt="" />
            <div className="toggle">
              <label className="switch">
                <input type="checkbox"></input>
                <span className="slider round"></span>
              </label>
            </div>
            <img src={MoonIcon} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
