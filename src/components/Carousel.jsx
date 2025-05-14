import React, { useEffect, useState, useRef } from "react";
import "./Carousel.css";

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

const Carousel = () => {
  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timeoutRef = useRef(null);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToSlide = (slideIndex) => {
    setIndex(slideIndex);
  };

  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  useEffect(() => {
    resetTimeout();
    if (!isPaused) {
      timeoutRef.current = setTimeout(() => {
        setIndex((prev) => (prev + 1) % images.length);
      }, 3000);
    }

    return () => {
      resetTimeout();
    };
  }, [index, isPaused]);

  const handleMouseEnter = () => {
    setIsPaused(true);
  };

  const handleMouseLeave = () => {
    setIsPaused(false);
  };

  return (
    <div
      className="carousel-wrapper"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="welcome-message">Welcome</div>
      <div className="carousel-container">
        {images.map((img, i) => (
          <div
            key={i}
            className={`carousel-slide ${i === index ? "active" : ""}`}
            style={{ backgroundImage: `url(${img.url})`, opacity: i === index ? 1 : 0 }} // Fade effect
          >
            <div className="carousel-caption">
              <h3>{img.title}</h3>
              <p>{img.desc}</p>
            </div>
          </div>
        ))}
        <button className="carousel-control prev" onClick={prevSlide}>
          &#10094;
        </button>
        <button className="carousel-control next" onClick={nextSlide}>
          &#10095;
        </button>
        <div className="carousel-indicators">
          {images.map((_, i) => (
            <button
              key={i}
              className={i === index ? "active" : ""}
              onClick={() => goToSlide(i)}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;