import React, { useState, useContext, createContext } from "react";

const SearchContext = createContext();

export const useSearch = () => {
  return useContext(SearchContext);
};

export const SearchProvider = ({ children }) => {
  const [title, setTitle] = useState(null);
  const [location, setLocation] = useState(null);
  const [fullTime, setFullTime] = useState(null);

  const setFilters = (queryInput, locationInput, fullTimeInput) => {
    setTitle(queryInput);
    setLocation(locationInput);
    setFullTime(fullTimeInput);
    console.log(title, location, fullTime);
  };

  const value = {
    title,
    location,
    fullTime,
    setFilters,
  };
  return (
    <SearchContext.Provider value={value}>{children}</SearchContext.Provider>
  );
};

export default SearchContext;
