import React, { useState, useRef } from "react";
import { useSearch } from "../contexts/SearchContext";
import { useTheme } from "../contexts/ThemeContext";
import SearchIcon from "../assets/desktop/icon-search.svg";
import WhiteSearchIcon from "../assets/desktop/search-white.svg";
import LocationIcon from "../assets/desktop/icon-location.svg";
import FilterIcon from "../assets/mobile/icon-filter.svg";

const SearchBar = () => {
  const searchRef = useRef(null);
  const locationRef = useRef(null);
  const fullTimeRef = useRef(null);
  const searchMobileRef = useRef(null);
  const locationMobileRef = useRef(null);
  const fullTimeMobileRef = useRef(null);
  const { setFilters } = useSearch();
  const { darkMode } = useTheme();
  const [modal, setModal] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  const handleCheck = () => {
    setIsChecked(!isChecked);
    //console.log(isChecked);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isChecked) {
      await setFilters(
        searchRef.current.value,
        locationRef.current.value,
        fullTimeRef.current.value,
        searchMobileRef.current.value,
        locationMobileRef.current.value,
        fullTimeMobileRef.current.value
      );
    } else {
      await setFilters(
        searchRef.current.value,
        locationRef.current.value,
        null,
        searchMobileRef.current.value,
        locationMobileRef.current.value,
        null
      );
    }
  };

  const handleClick = (e) => {
    e.preventDefault();
    setModal(true);
  };

  const mobileMenu = (
    <form className="mobile-search">
      <div className="input-container">
        <input
          type="text"
          name="title"
          id="title-mobile"
          className="text-input"
          placeholder="Filter by title or company"
          ref={searchMobileRef}
        />
      </div>
      <div className="filters">
        <button className="filter-button" onClick={handleClick}>
          <img src={FilterIcon} alt="filter-icon" />
        </button>

        <button className="button">
          <img
            src={WhiteSearchIcon}
            alt="white-search-icon"
            onClick={handleSubmit}
          />
        </button>
      </div>
    </form>
  );

  const modalMenu = (
    <form
      className={`modal-menu ${modal ? "active" : ""}`}
      onSubmit={handleSubmit}
    >
      <div className="modal" onClick={() => setModal(false)}></div>
      <div className={`modal-container ${darkMode ? "dark" : "light"}`}>
        <div className="input-container location">
          <img src={LocationIcon} alt="location-icon" />
          <input
            type="text"
            name="location"
            id="location-mobile"
            className="text-input"
            placeholder="Filter by location"
            ref={locationMobileRef}
          />
        </div>
        <div className="input-container fullTime">
          <input
            type="checkbox"
            name="fulltime"
            id="fulltime-mobile"
            placeholder="Full Time"
            value="Full Time"
            ref={fullTimeMobileRef}
            checked={isChecked}
            onChange={handleCheck}
          />
          <h3>Fulltime Only</h3>
        </div>
        <input
          type="submit"
          className="button dark"
          onClick={() => setModal(false)}
        />
      </div>
    </form>
  );

  return (
    <div className={`searchbar ${darkMode ? "dark" : "light"}`}>
      <form className="expanded-search" onSubmit={handleSubmit}>
        <div className="input-container">
          <img src={SearchIcon} alt="search-icon" />
          <input
            type="text"
            name="title"
            id="title"
            className="text-input"
            placeholder="Filter by title or company"
            ref={searchRef}
          />
        </div>
        <div className="input-container location">
          <img src={LocationIcon} alt="location-icon" />
          <input
            type="text"
            name="location"
            id="location"
            className="text-input"
            placeholder="Filter by location"
            ref={locationRef}
          />
        </div>
        <div className="input-container fullTime">
          <div className="flex-container">
            <input
              type="checkbox"
              name="fulltime"
              id="fulltime"
              value="Full Time"
              placeholder="Full Time"
              ref={fullTimeRef}
              checked={isChecked}
              onChange={handleCheck}
            />
            <h3>Fulltime Only</h3>
          </div>
          <input type="submit" value="Search" className="button dark" />
        </div>
      </form>

      {mobileMenu}
      {modalMenu}
    </div>
  );
};

export default SearchBar;
