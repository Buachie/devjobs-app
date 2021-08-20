import React, { useState, useRef } from "react";
import { useSearch } from "../contexts/SearchContext";
import SearchIcon from "../assets/desktop/icon-search.svg";
import LocationIcon from "../assets/desktop/icon-location.svg";
import FilterIcon from "../assets/mobile/icon-filter.svg";

const SearchBar = () => {
  const searchRef = useRef();
  const locationRef = useRef();
  const fullTimeRef = useRef();
  const { setFilters } = useSearch();

  const [modal, setModal] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await setFilters(
      searchRef.current.value,
      locationRef.current.value,
      fullTimeRef.current.value
    );
  };

  const mobileMenu = (
    <form className="mobile-search" onSubmit={handleSubmit}>
      <div className="input-container">
        <input
          type="text"
          name="title"
          id="title"
          className="text-input"
          placeholder="Filter by title, companies..."
          ref={searchRef}
        />
      </div>
      <div className="filters">
        <img
          src={FilterIcon}
          alt="filter-icon"
          onClick={() => setModal(true)}
        />
        <input type="submit" className="button dark" />
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
            id="location"
            className="text-input"
            placeholder="Filter by location"
            ref={locationRef}
          />
        </div>
        <div className="input-container fullTime">
          <input
            type="checkbox"
            name="fulltime"
            id="fulltime"
            value="Full Time"
            ref={fullTimeRef}
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
            placeholder="Filter by title, companies..."
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
              ref={fullTimeRef}
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
