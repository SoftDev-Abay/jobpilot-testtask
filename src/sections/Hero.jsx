import React from "react";
import illustration from "../assets/svg/heroIllustration.svg";
import "./Hero.scss";
import CardBg from "../components/CardBg";
import searchIcon from "../assets/svg/searchIcon.svg";
import locationIcon from "../assets/svg/locationIcon.svg";
import Button from "../components/Button";
import bagIcon from "../assets/svg/bagIcon.svg";
import usersDuotoneIcon from "../assets/svg/usersDuotoneIcon.svg";
import buildingIcon from "../assets/svg/buildingIcon.svg";
import InfoBox from "../components/InfoBox";
const Hero = () => {
  return (
    <CardBg background="rgba(241, 242, 244, 0.6)">
      <div className="section-wrapper">
        <div className="content-wrapper">
          <div className="content">
            <h1 className="heading">
              Find a job that suits your interest & skills.
            </h1>
            <p className="subheading">
              Aliquam vitae turpis in diam convallis finibus in at risus. Nullam
              in scelerisque leo, eget sollicitudin velit bestibulum.
            </p>
            {/* <div className="search-job"></div> */}

            <div className="searchbar">
              <div className="search">
                <img src={searchIcon} alt="" />
                <input type="text" placeholder="Job tittle, keyword, company" />
              </div>
              <div className="search">
                <img src={locationIcon} alt="" />
                <input type="text" placeholder="Location" />
              </div>
              <Button text="Find Job" className="primary" />
            </div>
            <p className="suggestions">
              <span className="title">Suggestion: </span>
              Designer, Programing,{" "}
              <span className="active"> {"Digital Marketing, "}</span>{" "}
              Animation.
            </p>
          </div>
          <div className="hero-img-container">
            <img src={illustration} className="hero-img" alt="" />
          </div>
        </div>
        <div className="info-contaner">
          <InfoBox icon={bagIcon} title="1,75,324" subtitle="Live Job" />
          <InfoBox
            icon={usersDuotoneIcon}
            title="97,354"
            subtitle="Companies"
          />
          <InfoBox
            icon={buildingIcon}
            title="38,47,154"
            subtitle="Candidates"
            imgBoxBg="#0A65CC"
          />
          <InfoBox icon={bagIcon} title="7,532" subtitle="New Jobs" />
        </div>
      </div>
    </CardBg>
  );
};

export default Hero;
