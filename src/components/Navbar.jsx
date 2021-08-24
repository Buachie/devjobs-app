import React from "react";
import SunIcon from "../assets/desktop/icon-sun.svg";
import MoonIcon from "../assets/desktop/icon-moon.svg";
import { Link } from "react-router-dom";
import { useTheme } from "../contexts/ThemeContext";

const Navbar = () => {
  const { toggleDarkMode } = useTheme();

  return (
    <nav className="navbar">
      <div className="nav-content">
        <Link to="/">devjobs</Link>
        <div className="toggle-container">
          <img src={SunIcon} alt="" />
          <div className="toggle">
            <label className="switch">
              <input
                type="checkbox"
                name="theme"
                placeholder="theme"
                onClick={toggleDarkMode}
              ></input>
              <span className="slider round"></span>
            </label>
          </div>
          <img src={MoonIcon} alt="" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
