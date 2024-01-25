import React from "react";
import "./ViewAllButton.scss";
import arrowRightIcon from "../assets/svg/arrowRightIcon.svg";

const ViewAllButton = () => {
  return (
    <button className="btn-view-all">
      <span>View All</span>
      <img src={arrowRightIcon} alt="" />
    </button>
  );
};

export default ViewAllButton;
