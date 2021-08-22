import React from "react";
import { withRouter } from "react-router";
import { useTheme } from "../contexts/ThemeContext";

const JobCard = ({ job, id, history }) => {
  const handleClick = () => {
    history.push(`/job/${job.id}`, {
      job,
    });
  };

  const { darkMode } = useTheme();

  return (
    <div className={`card ${darkMode ? "dark" : "light"}`}>
      <div
        className="logo-container"
        style={{ backgroundColor: `${job.logoBackground}` }}
      >
        <img src={job.logo} alt="company-logo" />
      </div>
      <div className="job-info">
        <p className="time-contract">
          {job.postedAt} • {job.contract}
        </p>
        <button className="link" onClick={handleClick}>
          {job.position}
        </button>
        <p className="job company">{job.company}</p>
      </div>
      <p className="location">{job.location}</p>
    </div>
  );
};

export default withRouter(JobCard);
