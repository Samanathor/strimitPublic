import React from "react";
import inputStyles from "./InputStyles";

const Input = ({
  type,
  placeholder,
  onChange,
  value,
  onBlur,
  propRef,
  name,
  border,
}) => {
  return (
    <input
      name={name}
      ref={propRef}
      className={`${inputStyles.base} ${inputStyles.border[border]}`}
      placeholder={placeholder}
      type={type}
      onChange={onChange}
      value={value}
      onBlur={onBlur}
    />
  );
};

export default Input;
