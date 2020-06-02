import React from "react";
import inputStyles from "./InputStyles";

const Input = ({ type, placeholder, onChange, value, onBlur }) => {
  return (
    <input
      className={`${inputStyles.base}`}
      placeholder={placeholder}
      type={type}
      onChange={() => onChange}
      value={value}
      onBlur={() => onBlur}
    />
  );
};

export default Input;
