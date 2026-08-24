import React, { useEffect, useRef, useState } from 'react';
import { useOverlay } from '../../context/OverlayContext';
import { propertyImages } from '../../data/propertyImages';
import { handleImageError } from '../../utils/imageFallback';
import './Lightbox.css';

export const Lightbox = () => {
  const { overlayMode, activePhotoIndex, closeOverlay, nextPhoto, prevPhoto } = useOverlay();
  const modalRef = useRef(null);
  const closeBtnRef = useRef(null);
  const triggerElementRef = useRef(null);
  const [isFading, setIsFading] = useState(false);

  const currentPhoto = propertyImages[activePhotoIndex] || propertyImages[0];
  const totalPhotos = propertyImages.length;

  // Prevent background scrolling & handle focus management, focus trap, + keyboard navigation
  useEffect(() => {
    if (overlayMode === 'LIGHTBOX') {
      triggerElementRef.current = document.activeElement;
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';

      if (closeBtnRef.current) {
        closeBtnRef.current.focus();
      }

      const handleKeyDown = (e) => {
        if (e.key === 'ArrowLeft') {
          e.preventDefault();
          triggerFadeNav(prevPhoto);
        } else if (e.key === 'ArrowRight') {
          e.preventDefault();
          triggerFadeNav(nextPhoto);
        } else if (e.key === 'Escape') {
          e.preventDefault();
          closeOverlay();
        } else if (e.key === 'Tab' && modalRef.current) {
          const focusables = modalRef.current.querySelectorAll(
            'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
          );
          if (focusables.length > 0) {
            const first = focusables[0];
            const last = focusables[focusables.length - 1];

            if (e.shiftKey && document.activeElement === first) {
              e.preventDefault();
              last.focus();
            } else if (!e.shiftKey && document.activeElement === last) {
              e.preventDefault();
              first.focus();
            }
          }
        }
      };

      window.addEventListener('keydown', handleKeyDown);

      return () => {
        window.removeEventListener('keydown', handleKeyDown);
        document.body.style.overflow = originalOverflow;
        if (triggerElementRef.current) {
          triggerElementRef.current.focus();
        }
      };
    }
  }, [overlayMode, closeOverlay, nextPhoto, prevPhoto]);

  if (overlayMode !== 'LIGHTBOX') {
    return null;
  }

  const triggerFadeNav = (navFn) => {
    setIsFading(true);
    setTimeout(() => {
      navFn();
      setIsFading(false);
    }, 100);
  };

  const handlePrev = (e) => {
    e.stopPropagation();
    triggerFadeNav(prevPhoto);
  };

  const handleNext = (e) => {
    e.stopPropagation();
    triggerFadeNav(nextPhoto);
  };

  return (
    <div
      ref={modalRef}
      className="lightbox-overlay"
      role="dialog"
      aria-modal="true"
      aria-label="Image lightbox viewer"
      onClick={closeOverlay}
    >
      <header className="lightbox-header" onClick={(e) => e.stopPropagation()}>
        <span className="lightbox-counter">
          {activePhotoIndex + 1} / {totalPhotos}
        </span>

        <button
          ref={closeBtnRef}
          type="button"
          className="lightbox-close-btn"
          onClick={closeOverlay}
          aria-label="Close lightbox"
        >
          <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" style={{ display: 'block', height: '16px', width: '16px', stroke: 'currentColor', strokeWidth: 3, fill: 'none' }}>
            <path d="M6 6l20 20M26 6L6 26" />
          </svg>
        </button>
      </header>

      <div className="lightbox-stage" onClick={closeOverlay}>
        <button
          type="button"
          className="lightbox-nav-btn prev"
          onClick={handlePrev}
          aria-label="Previous photo"
        >
          <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" style={{ display: 'block', height: '18px', width: '18px', stroke: 'currentColor', strokeWidth: 3, fill: 'none' }}>
            <path d="M20 24L10 16l10-8" />
          </svg>
        </button>

        <div className="lightbox-image-wrapper" onClick={(e) => e.stopPropagation()}>
          <img
            src={currentPhoto.src}
            alt={currentPhoto.alt}
            className={`lightbox-image ${isFading ? 'fading' : ''}`}
            onError={(e) => handleImageError(e, 'photo')}
          />
        </div>

        <button
          type="button"
          className="lightbox-nav-btn next"
          onClick={handleNext}
          aria-label="Next photo"
        >
          <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" style={{ display: 'block', height: '18px', width: '18px', stroke: 'currentColor', strokeWidth: 3, fill: 'none' }}>
            <path d="M12 8l10 8-10 8" />
          </svg>
        </button>
      </div>
    </div>
  );
};
