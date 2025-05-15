import React from "react";
import Carousel from "./components/carousel"; // Keep your carousel
import "./App.css"; // Optional if you're using it


function App() {
  const handleClick = () => {
    alert("Button clicked!");
  };

  return (
    <div style={{ textAlign: "center", padding: "20px","width" : "100vw", "height": "100vh" }}>
      
      
      {/* Carousel stays here */}
      <Carousel />

      {/* Simple Button */}
      <button 
        onClick={handleClick}
        style={{ marginTop: "20px", padding: "10px 20px", fontSize: "16px" }}
      >
        Click Me
      </button>
    </div>
  );
}

export default App;
