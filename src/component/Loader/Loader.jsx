// src/components/Loader.jsx
import React from "react";

const Loader = () => {
  return (
    <div style={spinnerContainer}>
      <div style={spinnerStyle}></div>
    </div>
  );
};

// Styles
const spinnerContainer = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100px",
};

const spinnerStyle = {
  width: "40px",
  height: "40px",
  border: "5px solid lightgray",
  borderTop: "5px solid black",
  borderRadius: "30%",
  animation: "spin 1s linear infinite",
};

// Adding keyframes for animation
const styleTag = document.createElement("style");
styleTag.innerHTML = `
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;
document.head.appendChild(styleTag);

export default Loader;
