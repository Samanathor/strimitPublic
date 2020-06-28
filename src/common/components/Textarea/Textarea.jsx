import React from "react";
import textareaStyles from "./TextareaStyles";

const Textarea = ({
  type,
  placeholder,
  onChange,
  value,
  onBlur,
  propRef,
  name,
  border,
  onFocus,
}) => {
  return (
    <textarea
      name={name}
      ref={propRef}
      className={`${textareaStyles.base} ${textareaStyles.border[border]}`}
      placeholder={placeholder}
      type={type}
      onChange={onChange}
      value={value}
      onBlur={onBlur}
      onFocus={onFocus}
    ></textarea>
  );
};

export default Textarea;
