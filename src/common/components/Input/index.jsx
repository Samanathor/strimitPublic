import React from "react";
import styles from "./styles";

const Input = ({ type, placeholder, onChange, value, onBlur }) => {
  return (
    <input
      className={`${styles.base}`}
      placeholder={placeholder}
      type={type}
      onChange={() => onChange}
      value={value}
      onBlur={() => onBlur}
    />
  );
};

export default Input;
