import React from "react";
import CardBg from "../components/CardBg";
import ViewAllButton from "../components/ViewAllButton";
import "./FeaturedJob.scss";
import JobBox from "../components/JobBox";
import { featuredJobs } from "../assets/index";
const FeaturedJob = () => {
  return (
    <CardBg cardClassName="section-featured-job">
      <header className="section-header">
        <h1>Featured job</h1>
        <ViewAllButton />
      </header>
      <div className="featured-jobs-container">
        {featuredJobs.map((job) => (
          <JobBox
            key={job.id + job.title + job.type + job.salary + job.company}
            title={job.title}
            type={job.type}
            salary={job.salary}
            company={job.company}
            location={job.location}
            companyIcon={job.companyIcon}
          />
        ))}
      </div>
    </CardBg>
  );
};

export default FeaturedJob;
