import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { type, colors } from "./ButtonStyles";

const Button = ({ btnType, text, color, icon, className, onClick }) => {
  return (
    <button
      type={btnType}
      className={`${type.base} ${colors[color]} ${className}`}
      onClick={onClick}
    >
      {icon ? <FontAwesomeIcon className="mr-2" size="lg" icon={icon} /> : null}
      {text}
    </button>
  );
};

export default Button;
