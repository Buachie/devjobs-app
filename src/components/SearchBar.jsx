import React, { useState, useRef } from "react";
import { useSearch } from "../contexts/SearchContext";
import SearchIcon from "../assets/desktop/icon-search.svg";
import WhiteSearchIcon from "../assets/desktop/search-white.svg";
import LocationIcon from "../assets/desktop/icon-location.svg";
import FilterIcon from "../assets/mobile/icon-filter.svg";

const SearchBar = () => {
  const searchRef = useRef();
  const locationRef = useRef();
  const fullTimeRef = useRef();
  const searchMobileRef = useRef();
  const locationMobileRef = useRef();
  const fullTimeMobileRef = useRef();
  const { setFilters } = useSearch();
  const [modal, setModal] = useState(false);
  const [isChecked, setIsChecked] = useState(true);

  const handleCheck = () => {
    setIsChecked(!isChecked);
    console.log(isChecked);
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
      <div className="modal-container">
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
            value="Full Time"
            ref={fullTimeMobileRef}
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
    <div className="searchbar">
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
              value={false}
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
