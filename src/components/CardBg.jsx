import React from "react";
import "./CardBg.scss";
const CardBg = ({
  children,
  background = "white",
  contentClassName = "",
  ...props
}) => {
  return (
    <div className={`card-bg `} style={{ background: background }} {...props}>
      <div className={`content ${contentClassName}`}>{children}</div>
    </div>
  );
};

export default CardBg;
