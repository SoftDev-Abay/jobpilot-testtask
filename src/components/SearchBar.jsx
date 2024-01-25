import React from "react";
import "./SearchBar.scss";
import bagIcon from "../assets/svg/bagIcon.svg";
import searchIcon from "../assets/svg/searchIcon.svg";
import toggleIcon from "../assets/svg/toggleIcon.svg";
import engFlag from "../assets/img/eng_flag.png";
import Button from "./Button";
const SearchBar = () => {
  return (
    <div className="wrapper">
      <div className="searchbar-wrapper">
        <div className="searchbar-container">
          <div className="logo-container">
            <img src={bagIcon} alt="" />
            <span>Jobpilot</span>
          </div>
          <div className="searchbar">
            <div className="country-filter">
              <img src={engFlag} alt="" />
              <span>England</span>
              <img src={toggleIcon} alt="" />
            </div>
            <div className="search">
              <img src={searchIcon} alt="" />
              <input type="text" placeholder="Job tittle, keyword, company" />
            </div>
          </div>
        </div>
        <div className="buttons-container">
          <Button text="sign in" className="secondary" />
          <Button text="Post a Job" className="primary" />
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
