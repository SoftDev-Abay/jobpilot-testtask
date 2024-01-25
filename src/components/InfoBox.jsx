import React from "react";
import "./InfoBox.scss";

const InfoBox = ({
  icon,
  title,
  subtitle,
  className,
  styles,
  imgBoxBg = "#E7F0FA",
  containerBg = "white",
}) => {
  return (
    <div
      className={`info-item ${className}`}
      style={{
        background: containerBg,
        ...styles,
      }}
    >
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
