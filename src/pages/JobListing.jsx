import React from "react";
import { useTheme } from "../contexts/ThemeContext";

const JobListing = ({
  location: {
    state: {
      job: {
        apply,
        company,
        contract,
        description,
        id,
        location,
        logo,
        logoBackground,
        position,
        postedAt,
        requirements,
        role,
        website,
      },
    },
  },
}) => {
  const { darkMode } = useTheme();
  return (
    <div role="main" className="container-lg">
      <div className="full-listing">
        <div className={`listing-header ${darkMode ? "dark" : "light"}`}>
          <div className="header-info">
            <div
              className="header-logo"
              style={{ backgroundColor: `${logoBackground}` }}
            >
              <img src={`.${logo}`} alt="" />
            </div>
            <div className="company-info">
              <h2 className="company-name">{company}</h2>
              <p>{`${company}.com`}</p>
            </div>
          </div>

          <a className="button light" href={website}>
            Company Website
          </a>
        </div>
        <div className={`listing-body ${darkMode ? "dark" : "light"}`}>
          <div className="job-info">
            <div className="body-header">
              <p className="time-contract">
                {postedAt} • {contract}
              </p>
              <h2>{position}</h2>
              <p className="location">{location}</p>
            </div>
            <a href={apply} className="button dark">
              Apply Now
            </a>
          </div>
          <p className="description">{description}</p>
          <h3>Requirements</h3>
          <p>{requirements.content}</p>
          <ul>
            {requirements.items.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
          <h3>What You Will Do</h3>
          <p>{role.content}</p>
          <ol>
            {role.items.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ol>
        </div>
      </div>
      <div className={`listing-footer ${darkMode ? "dark" : "light"}`}>
        <div className="footer-items">
          <div className="footer-info">
            <h2>{position}</h2>
            <p>{company}</p>
          </div>
          <a href={apply} className="button dark">
            Apply Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default JobListing;
