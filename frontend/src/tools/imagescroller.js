import React, { useState } from 'react';
import './imagescroller.css';



function ImageScroller({images}) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    if (currentIndex < images.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(0); // Loop back to the first image
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else {
      setCurrentIndex(images.length - 1); // Loop back to the last image
    }
  };

  return (
    <div className="image-scroller-container">
      <button className="scroll-btn" onClick={handlePrevious}>
        {"<"}
      </button>
      <div className="image-display">
        <img
          src={images[currentIndex].src}
          alt={images[currentIndex].alt}
          key={images[currentIndex].id}
        />
      </div>
      <button className="scroll-btn" onClick={handleNext}>
        {">"}
      </button>
    </div>
  );
}

export default ImageScroller;
