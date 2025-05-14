import React, { useEffect, useState } from "react";// React is a JavaScript library for building user interfaces
import "./Carousel.css"; // Importing CSS for styling


export const images = [
  {
    url: "/images/photo1.avif",
    title: "First Slide Label",
    desc: "This is the first slide description.",
  },
  {
    url: "/images/photo2.avif",
    title: "Second Slide Label",
    desc: "This is the second slide description.",
  },
  {
    url: "/images/photo3.avif",
    title: "Third Slide Label",
    desc: "Praesent commodo cursus magna, vel scelerisque nisl consectetur.",
  },
];


const Carousel = () => { // Carousel component
  const [index, setIndex] = useState(0);// useState is a React hook that allows you to add state to functional components

  useEffect(() => { 
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="carousel-wrapper">
      <div className="welcome-message">Welcome</div>
      <div className="carousel-container"> 
        {images.map((img, i) => (
          <div
            key={i}
            className={`carousel-slide ${i === index ? "active" : ""}`} // Adding active class to the current slide
            style={{ backgroundImage: `url(${img.url})` }}
          >
            <div className="carousel-caption">
              <h3>{img.title}</h3>
              <p>{img.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
