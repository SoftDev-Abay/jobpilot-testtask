import React from "react";
import "./Tutorial.scss";
import CardBg from "../components/CardBg";
import circleWavyCheckIcon from "../assets/svg/circleWavyCheckIcon.svg";
import cloudArrowUpIcon from "../assets/svg/cloudArrowUpIcon.svg";
import magnifyingGlassPlusIcon from "../assets/svg/magnifyingGlassPlusIcon.svg";
import userPlusIcon from "../assets/svg/userPlusIcon.svg";
import arrow from "../assets/svg/arrow.svg";
const Tutorial = () => {
  return (
    <CardBg background="#F1F2F4" contentClassName="">
      <div className="tutorial-wrapper">
        <h1>How jobpilot work</h1>
        <div className="steps-container">
          <div className="step-box">
            <img className="arrow" src={arrow} alt="" />
            <div className="step-icon-wrapper">
              <div className="step-icon-container">
                <img src={userPlusIcon} alt="" srcset="" />
              </div>
            </div>
            <div>
              <div className="step-title">Create account</div>
              <div className="step-description">
                Aliquam facilisis egestas sapien, nec tempor leo tristique at.
              </div>
            </div>
          </div>
          <div
            className="step-box"
            style={{
              background: "white",
            }}
          >
            <div className="step-icon-wrapper">
              <div
                className="step-icon-container"
                style={{
                  background: "#0A65CC",
                }}
              >
                <img src={cloudArrowUpIcon} alt="" srcset="" />
              </div>
            </div>
            <div>
              <div className="step-title">Upload CV/Resume</div>
              <div className="step-description">
                Curabitur sit amet maximus ligula. Nam a nulla ante. Nam sodales
              </div>
            </div>
          </div>
          <div className="step-box">
            <div className="step-icon-wrapper">
              <div className="step-icon-container">
                <img src={magnifyingGlassPlusIcon} alt="" srcset="" />
              </div>
            </div>
            <div>
              <div className="step-title">Find suitable job</div>
              <div className="step-description">
                Phasellus quis eleifend ex. Morbi nec fringilla nibh.
              </div>
            </div>
          </div>
          <div className="step-box">
            <div className="step-icon-wrapper">
              <div className="step-icon-container">
                <img src={circleWavyCheckIcon} alt="" srcset="" />
              </div>
            </div>
            <div>
              <div className="step-title">Apply job</div>
              <div className="step-description">
                Curabitur sit amet maximus ligula. Nam a nulla ante, Nam sodales
                purus.
              </div>
            </div>
          </div>
        </div>
      </div>
    </CardBg>
  );
};

export default Tutorial;
