import React, { useState, useEffect } from "react";
import data from "../data/data.json";
import JobCard from "../components/JobCard";
import SearchBar from "../components/SearchBar";
import { useSearch } from "../contexts/SearchContext";

const Home = () => {
  const { title, location, fullTime } = useSearch();
  const [jobs, setJobs] = useState([]);

  const stringComparator = (data, key, value) => {
    if (value.length > 0) {
      return data.filter(
        (item) => item[key].toLowerCase().includes(value.toLowerCase())
        //item[key].toLowerCase() === value.toLowerCase()
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
    // let jobs = data;

    if (title) {
      const convertedTitle = title.toLowerCase();
      jobs = data.filter(
        (item) =>
          item["position"].toLowerCase().includes(convertedTitle) ||
          item["company"].toLowerCase().includes(convertedTitle)
      );
    }
    if (location) {
      jobs = stringComparator(jobs, "location", location);
    }

    if (fullTime) {
      jobs = stringComparator(jobs, "contract", fullTime);
    }

    return jobs;
  };

  //console.log(filteredJobs(jobs));
  return (
    <div className="container-lg">
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
