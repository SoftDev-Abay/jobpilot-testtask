import React from "react";
import "./InfoBox.scss";

const InfoBox = ({ icon, title, subtitle, imgBoxBg = "#E7F0FA" }) => {
  return (
    <div className="info-item">
      <div className="img-box" style={{ background: imgBoxBg }}>
        <img src={icon} alt="" />
      </div>
      <div className="info">
        <h3 className="number">{title}</h3>
        <p className="description">{subtitle}</p>
      </div>
    </div>
  );
};

export default InfoBox;
