import React from "react";

const Navbar = () => {
  return (
    <div>
      <div className="navbar">
        <div className="nav-content">
          <h1>devjobs</h1>
          <div className="toggle">
            <img src="../assets/desktop/icon-sun.svg" alt="" />
            <label className="switch">
              <input type="checkbox"></input>

              <span className="slider round"></span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
