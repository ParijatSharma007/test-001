import React from "react";
import "./TextInput.module.css";

export default function TextInput({
  type = "text",
  placeholder,
  onChange,
  value,
  props,
}) {
  return (
    <input
      className=""
      type={type}
      onChange={onChange}
      value={value}
      {...props}
      placeholder={placeholder}
    />
  );
}
