import React from "react";
import employersLogo from "../assets/svg/employersLogo.svg";
import { FaLocationDot } from "react-icons/fa6";
import "./CompanyBox.scss";
const CompanyBox = () => {
  return (
    <>
      <div className="company-box">
        <header>
          <div className="icon-wrapper">
            <img className="icon-img" src={employersLogo} alt="" />
          </div>
          <div className="company-info">
            <div className="title-wrapper">
              <div className="name">Dribbble</div>
              <div className="badge">
                <span>Featured</span>
              </div>
            </div>
            <div className="location">
              <FaLocationDot className="icon" />
              <span>Dhaka, Bangladesh</span>
            </div>
          </div>
        </header>
        <button type="button">
          <span>Open Positions (3)</span>
        </button>
      </div>
    </>
  );
};

export default CompanyBox;
