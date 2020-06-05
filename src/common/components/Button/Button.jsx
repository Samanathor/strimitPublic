import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { type, colors } from "./ButtonStyles";

const Button = ({ text, color, icon, className, onClick }) => {
  return (
    <div className={`${type.base} ${colors[color]} ${className}`} onClick={onClick}>
      <FontAwesomeIcon className="mr-2" size="lg" icon={icon} />
      {text}
    </div>
  );
};

export default Button;
