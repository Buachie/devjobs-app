import React, { useState, useEffect } from "react";
import data from "../data/data.json";
import JobCard from "../components/JobCard";
import { useParams } from "react-router-dom";

const Home = () => {
  const [jobs, setJobs] = useState([]);

  let params = useParams();

  useEffect(() => {
    setJobs(data);
    console.log(jobs);
  }, [jobs]);

  return (
    <div className="container">
      {jobs.map((job) => {
        return <JobCard key={job.id} job={job} id={job.id} />;
      })}
    </div>
  );
};

export default Home;
