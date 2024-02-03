import React from "react";
import CardBg from "./CardBg";
import "./Footer.scss";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import { PiBriefcase } from "react-icons/pi";
const Footer = () => {
  return (
    <>
      <CardBg background="#18191C" cardClassName="footer-links">
        <div className="navigation">
          <div className="main-navigation-item navigation-item">
            <header>
              <PiBriefcase className="icon" />
              <span>Jobpilot</span>
            </header>
            <div className="body">
              <div className="call-now">
                Call now:
                <span className="number">{" (319) 555-0115"}</span>
              </div>
              <div className="address">
                6391 Elgin St. Celina, Delaware 10299, New York, United States
                of America
              </div>
            </div>
          </div>
          <div className="navigation-item">
            <header>Quick Links</header>
            <ul>
              <li>Home</li>
              <li>About Us</li>
              <li>Services</li>
              <li>Jobs</li>
            </ul>
          </div>
          <div className="navigation-item">
            <header>Candidate</header>
            <ul>
              <li>Browse Jobs</li>
              <li>Browse Employers</li>
              <li>Candidate Dashboard</li>
              <li>Saved Jobs</li>
            </ul>
          </div>
          <div className="navigation-item">
            <header>Employers</header>
            <ul>
              <li>Post a Job</li>
              <li>Browse Candidates</li>
              <li>Employers Dashboard</li>
              <li>Applications</li>
            </ul>
          </div>
          <div className="navigation-item">
            <header>Support</header>
            <ul>
              <li>Faqs</li>
              <li>Privacy Policy</li>
              <li>Terms & Conditions</li>
            </ul>
          </div>
        </div>
      </CardBg>
      <CardBg
        cardClassName="footer-rights"
        contentClassName="footer-rights-content"
        background="#18191C"
      >
        <div className="rights">
          <div className="text">
            @ 2021 Jobpilot - Job Portal. All rights Rserved
          </div>
          <div className="social-links-container">
            <FaFacebookF className="icon" />
            <FaTwitter className="icon" />
            <FaInstagram className="icon" />
            <FaYoutube className="icon" />
          </div>
        </div>
      </CardBg>
    </>
  );
};

export default Footer;
