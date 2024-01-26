import React from "react";
import locationIcon from "../assets/svg/locationIcon.svg";
import bookmarkSimpleIcon from "../assets/svg/icons/bookmark-simple.svg";
import "./JobBox.scss";

const JobBox = ({ title, type, salary, company, location, companyIcon }) => {
  const salaryRange = salary.split(" - ");
  const salaryMin = parseInt(salaryRange[0].split("$")[1].split(",").join(""));
  console.log(salaryMin);
  return (
    <>
      <div className={`featured-job ${salaryMin >= 50000 && "active"}`}>
        <header>
          <div className="title">{title}</div>
          <div className="job-info">
            <div className="type">{type}</div>
            <div className="salary">Salary: {salary}</div>
          </div>
        </header>
        <div className="company">
          <div className="icon-wrapper">
            <img className="icon-img" src={companyIcon} alt="" />
          </div>
          <div className="company-info">
            <div className="name">{company}</div>
            <div className="location">
              <img src={locationIcon} alt="" srcset="" />
              <span>{location}</span>
            </div>
          </div>
          <img src={bookmarkSimpleIcon} alt="" />
        </div>
      </div>
    </>
  );
};

export default JobBox;
