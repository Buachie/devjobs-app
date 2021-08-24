import React, { useState, useEffect } from "react";
import data from "../data/data.json";
import JobCard from "../components/JobCard";
import SearchBar from "../components/SearchBar";
import { useSearch } from "../contexts/SearchContext";

const Home = () => {
  const { title, location, fullTime } = useSearch();
  const [jobs, setJobs] = useState([]);

  // Filters for the location and contract type
  const stringFilter = (data, key, value) => {
    if (value.length > 0) {
      return data.filter((item) =>
        item[key].toLowerCase().includes(value.toLowerCase())
      );
    } else {
      return null;
    }
  };
  useEffect(() => {
    setJobs(data);
    //console.log(jobs);
  }, [jobs]);

  const filteredJobs = (jobs) => {
    if (title) {
      const convertedTitle = title.toLowerCase();
      jobs = data.filter(
        (item) =>
          item["position"].toLowerCase().includes(convertedTitle) ||
          item["company"].toLowerCase().includes(convertedTitle)
      );
    }
    if (location) {
      jobs = stringFilter(jobs, "location", location);
    }

    if (fullTime) {
      jobs = stringFilter(jobs, "contract", fullTime);
    }

    return jobs;
  };

  return (
    <div role="main" className="container-lg">
      <SearchBar />
      <div className="container">
        {filteredJobs(jobs).map((job) => {
          return <JobCard key={job.id} job={job} id={job.id} />;
        })}
      </div>
    </div>
  );
};

export default Home;
