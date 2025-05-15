// src/pages/SecondPage.jsx
import React from "react";
import { Link } from "react-router-dom";

function SecondPage() {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Welcome to the Second Page!</h2>
      <Link to="/">
        <button>Go Back</button>
      </Link>
    </div>
  );
}

export default SecondPage;
