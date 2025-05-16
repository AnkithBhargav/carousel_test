// src/App.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import Carousel from "./components/Carousel";



function App() {
  const navigate = useNavigate();

  const handleClick = () => {
    // Show alert (optional)
    alert("Button clicked!");
    // Navigate to /second page
    // navigate("/second");
  };

  return (
    <div style={{ textAlign: "center", padding: "20px", width: "100%" }}>
      <Carousel />
      <button
        onClick={handleClick}
        style={{
          marginTop: "20px",
          padding: "10px 20px",
          fontSize: "16px",
        }}
      >
        Click Me
      </button>
    </div>
  );
}

export default App;
