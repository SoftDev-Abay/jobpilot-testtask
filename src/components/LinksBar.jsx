import { React, useState } from "react";
import "./LinksBar.scss";
import engFlag from "../assets/img/eng_flag.png";
import rusFlag from "../assets/img/rus_flag.png";
import kazFlag from "../assets/img/kaz_flag.jpg";
import phoneIcon from "../assets/svg/phoneIcon.svg";
import toggleIcon from "../assets/svg/toggleIcon.svg";
import {
  // menu for adoptive navbar
  FaBars,
} from "react-icons/fa";
const LinksBar = () => {
  const [activeLink, setActiveLink] = useState("Home");
  const [dropdown, setDropdown] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      <div class="navigation-wrapper">
        <div
          class="navigation-container"
          style={{
            height: menuOpen ? "282px" : "47px",
          }}
        >
          <div class="links">
            <a
              class={activeLink == "Home" && "active"}
              onClick={() => setActiveLink("Home")}
            >
              Home
            </a>
            <a
              class={activeLink == "Find Job" && "active"}
              onClick={() => setActiveLink("Find Job")}
            >
              Find Job
            </a>
            <a
              class={activeLink == "About Us" && "active"}
              onClick={() => setActiveLink("About Us")}
            >
              Employers
            </a>
            <a
              class={activeLink == "Contact Us" && "active"}
              onClick={() => setActiveLink("Contact Us")}
            >
              Candidates
            </a>
            <a
              class={activeLink == "Pricing Plans" && "active"}
              onClick={() => setActiveLink("Pricing Plans")}
            >
              Pricing Plans
            </a>
            <a
              class={activeLink == "Blog" && "active"}
              onClick={() => setActiveLink("Blog")}
            >
              Cusomer Supports
            </a>
          </div>
          <div class="info">
            <div class="phonenum-container">
              <img src={phoneIcon} alt="" />
              <span>+1-202-555-10178</span>
            </div>
            <div className="lang-toggle-container">
              <div
                class="lang-toggle"
                onClick={() => {
                  setDropdown(!dropdown);
                }}
              >
                <img className="flag" src={engFlag} alt="" />
                <span>English</span>
                <img src={toggleIcon} alt="" />
              </div>
              <div className={`dropdown ${dropdown && "active"}`}>
                <div
                  className="dropdown-item"
                  onClick={() => {
                    setDropdown(!dropdown);
                  }}
                >
                  <img src={engFlag} alt="" />
                  <span>English</span>
                </div>
                <div
                  className="dropdown-item"
                  onClick={() => {
                    setDropdown(!dropdown);
                  }}
                >
                  <img src={kazFlag} alt="" />
                  <span>Kazak</span>
                </div>
                <div
                  className="dropdown-item"
                  onClick={() => {
                    setDropdown(!dropdown);
                  }}
                >
                  <img src={rusFlag} alt="" />
                  <span>Russian</span>
                </div>
              </div>
            </div>
          </div>
          <div className="menu-container">
            <div className="icon-container">
              <FaBars
                className="icon"
                onClick={() => {
                  setMenuOpen(!menuOpen);
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LinksBar;
