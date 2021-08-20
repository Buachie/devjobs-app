import React from "react";
import SunIcon from "../assets/desktop/icon-sun.svg";
import MoonIcon from "../assets/desktop/icon-moon.svg";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div className="navbar">
        <div className="nav-content">
          <Link to="/">
            <h1>devjobs</h1>
          </Link>
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
