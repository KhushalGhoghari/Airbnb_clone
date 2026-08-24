import React from 'react';
import { useOverlay } from '../../context/OverlayContext';
import { handleImageError } from '../../utils/imageFallback';
import './ImageGallery.css';

export const ImageGallery = ({ images }) => {
  const { openLightbox, openPhotoTour } = useOverlay();

  // Get the first 5 images for the hero grid
  const heroImages = images.slice(0, 5);

  return (
    <section className="gallery-section" aria-label="Photo Gallery">
      <div className="gallery-grid">
        {heroImages.map((img, index) => {
          const itemClass = index === 0 ? 'hero' : `item-${index}`;
          return (
            <div
              key={img.id}
              className={`gallery-item ${itemClass}`}
              onClick={() => openLightbox(index)}
              role="button"
              tabIndex={0}
              aria-label={`View photo ${index + 1}: ${img.alt}`}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  openLightbox(index);
                }
              }}
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="eager"
                onError={(e) => handleImageError(e, 'photo')}
              />
            </div>
          );
        })}

        <button
          type="button"
          className="show-all-photos-btn"
          onClick={openPhotoTour}
          aria-label="Show all 15 photos in photo tour"
        >
          <div className="grid-icon" aria-hidden="true">
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
          </div>
          <span>Show all {images.length} photos</span>
        </button>
      </div>
    </section>
  );
};
