import React, { useState, useRef, useEffect } from 'react';
import './Carousel.css'; // Import the CSS for this component

const Carousel = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      goToNext();
    }, 3000); // Auto-scroll every 3 seconds (adjust as needed)

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  const goToPrevious = () => {
    const newIndex = (currentIndex - 1 + items.length) % items.length;
    setCurrentIndex(newIndex);
    scrollToItem(newIndex);
  };

  const goToNext = () => {
    const newIndex = (currentIndex + 1) % items.length;
    setCurrentIndex(newIndex);
    scrollToItem(newIndex);
  };

  const goToIndex = (index) => {
    setCurrentIndex(index);
    scrollToItem(index);
  };

  const scrollToItem = (index) => {
    if (carouselRef.current) {
      const itemWidth = carouselRef.current.offsetWidth;
      carouselRef.current.scrollLeft = index * itemWidth;
    }
  };

  return (
    <div className="carousel-container">
      <div className="carousel-wrapper" ref={carouselRef}>
        {items.map((item, index) => (
          <div key={index} className="carousel-item">
            {item}
          </div>
        ))}
      </div>
      <div className="carousel-controls">
        <button onClick={goToPrevious}>Previous</button>
        <div className="carousel-indicators">
          {items.map((_, index) => (
            <button
              key={index}
              className={index === currentIndex ? 'active' : ''}
              onClick={() => goToIndex(index)}
            ></button>
          ))}
        </div>
        <button onClick={goToNext}>Next</button>
      </div>
    </div>
  );
};

export default Carousel;