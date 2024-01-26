import React from "react";
import CardBg from "../components/CardBg";
import "./TopCompanies.scss";
import CompanyBox from "../components/CompanyBox";
const TopCompanies = () => {
  return (
    <CardBg contentClassName="section-top-companies">
      <h1>Top Companies</h1>
      <div className="top-companies-container">
        <CompanyBox />
        <CompanyBox />
        <CompanyBox />
        <CompanyBox />
        <CompanyBox />
        <CompanyBox />
      </div>
    </CardBg>
  );
};

export default TopCompanies;
