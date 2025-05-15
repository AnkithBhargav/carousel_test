// src/components/SimpleButton.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

function SimpleButton() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/second"); // 
  };

  return (
    <button
      onClick={handleClick}
      style={{ marginTop: "20px", padding: "10px 20px", fontSize: "16px" }}
    >
      Click Me
    </button>
  );
}

export default SimpleButton;
