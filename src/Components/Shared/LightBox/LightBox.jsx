import React, { useState, useEffect } from "react";
import { XLg, ChevronRight, ChevronLeft } from "react-bootstrap-icons";

const Lightbox = ({ images, setLightboxOpen, currentId }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(currentId || 0); // Initialize currentImageIndex with currentId or 0

  useEffect(() => {
    setCurrentImageIndex(currentId); // Update currentImageIndex if currentId changes
  }, [currentId]);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  return (
    <div className="lightbox">
      <div className="lightbox__content">
        <button className="close_button" onClick={closeLightbox}>
          <i>
            <XLg />
          </i>
        </button>
        <div className="image-container">
          <img
            width={880}
            height={500}
            src={images[currentImageIndex]}
            alt={`Image ${currentImageIndex + 1}`}
          />
        </div>
        <div className="image_count">
          {currentImageIndex + 1} / {images.length}
        </div>
      </div>
      <div className="lightbox__btns">
        <button className="prev__button" onClick={prevImage}>
          <ChevronLeft />
        </button>
        <button className="next__button" onClick={nextImage}>
          <i>
            <ChevronRight />
          </i>
        </button>
      </div>
    </div>
  );
};

export default Lightbox;
