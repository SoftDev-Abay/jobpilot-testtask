import React from "react";
import "./CardBg.scss";
const CardBg = ({
  children,
  background = "white",
  cardClassName = "",
  contentClassName = "",
  ...props
}) => {
  return (
    <div
      className={`card-bg ${cardClassName}`}
      style={{ background: background }}
      {...props}
    >
      <div className={`content ${contentClassName}`}>{children}</div>
    </div>
  );
};

export default CardBg;
