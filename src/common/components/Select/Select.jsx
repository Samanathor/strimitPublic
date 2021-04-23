import React from "react";
import selectStyles from "./SelectStyles";

const Select = ({
  type,
  placeholder,
  onChange,
  value,
  onBlur,
  propRef,
  name,
  border,
  onFocus,
  options,
}) => {
  return (
    <select
      name={name}
      ref={propRef}
      className={`${selectStyles.base} ${selectStyles.border[border]}`}
      type={type}
      onChange={onChange}
      value={value}
      onBlur={onBlur}
      onFocus={onFocus}
    >
      {placeholder && (
        <option disabled defaultValue value="">
          {placeholder}
        </option>
      )}
      {options?.map((option) => {
        return (
          <option key={option.value} value={option.value}>
            {option.name}
          </option>
        );
      })}
    </select>
  );
};

export default Select;
