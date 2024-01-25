import React from "react";
import "./Button.scss";
const Button = ({
  text,
  className,
  onClick,
  type = "button",
  disabled,
  loading,
  ...props
}) => {
  return (
    <button className={`btn ${className}`} type={type}>
      {text}
    </button>
  );
};

export default Button;
