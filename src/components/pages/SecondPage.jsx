// src/pages/SecondPage.jsx
import React from "react";
import { Link } from "react-router-dom";

const industries = [
  {
    title: "Banking, Financial Services & Insurance",
    image: "/images/image 1.avif",
  },
  {
    title: "Travel Logistics",
    image: "/images/image 2.avif",
  },
  {
    title: "Public Sector",
    image: "/images/image 3.avif",
  },
];

function SecondPage() {
  return (
    <div className="second-page">
      <h2>Industries we Cater to</h2>
      <div className="industry-container">
        {industries.map((item, index) => (
          <div key={index} className="industry-card">
            <img src={item.image} alt={item.title} />
            <div className="overlay">
              <h3>{item.title}</h3>
              <button>Read More &gt;</button>
            </div>
          </div>
        ))}
      </div>
      <Link to="/">
        <button className="back-button">Go Back</button>
      </Link>
    </div>
  );
}

export default SecondPage;
