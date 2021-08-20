import React, { useRef } from "react";
import { useSearch } from "../contexts/SearchContext";
import SearchIcon from "../assets/desktop/icon-search.svg";
import LocationIcon from "../assets/desktop/icon-location.svg";

const SearchBar = () => {
  const searchRef = useRef();
  const locationRef = useRef();
  const fullTimeRef = useRef();
  const { setFilters } = useSearch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await setFilters(
      searchRef.current.value,
      locationRef.current.value,
      fullTimeRef.current.value
    );
  };

  return (
    <div className="searchbar">
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <img src={SearchIcon} alt="" />
          <input
            type="text"
            name="title"
            id="title"
            className="text-input"
            placeholder="Filter by title, companies, expertise..."
            ref={searchRef}
          />
        </div>
        <div className="input-container">
          <img src={LocationIcon} alt="" />
          <input
            type="text"
            name="location"
            id="location"
            className="text-input"
            placeholder="Filter by location"
            ref={locationRef}
          />
        </div>
        <div className="input-container">
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
      </form>
    </div>
  );
};

export default SearchBar;
