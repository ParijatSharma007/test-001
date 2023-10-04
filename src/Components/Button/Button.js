import React from "react";
import "./Button.css";

export default function Button({
  text,
  type = "button",
  color = "#4096FF",
  onClick,
}) {
  return (
    <button
      style={{ backgroundColor: color }}
      className="btn"
      onClick={onClick}
      type={type}
    >
      {text}
    </button>
  );
}
