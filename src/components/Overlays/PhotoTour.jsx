import React, { useEffect, useRef, useState } from 'react';
import { useOverlay } from '../../context/OverlayContext';
import { propertyImages } from '../../data/propertyImages';
import { handleImageError } from '../../utils/imageFallback';
import './PhotoTour.css';

export const PhotoTour = () => {
  const { overlayMode, closeOverlay, openLightbox } = useOverlay();
  const [activeCategory, setActiveCategory] = useState('all');
  const modalRef = useRef(null);
  const closeBtnRef = useRef(null);
  const triggerElementRef = useRef(null);

  // Group images by category
  const categories = [
    { id: 'all', name: 'Photo tour', count: propertyImages.length },
    { id: 'living-room', name: 'Living room', count: propertyImages.filter(i => i.category === 'Living room').length },
    { id: 'bedroom-1', name: 'Bedroom 1', count: propertyImages.filter(i => i.category === 'Bedroom 1').length },
    { id: 'kitchen-dining', name: 'Kitchen & Dining', count: propertyImages.filter(i => i.category === 'Kitchen & Dining').length },
    { id: 'bathroom-1', name: 'Bathroom 1', count: propertyImages.filter(i => i.category === 'Bathroom 1').length },
    { id: 'exterior', name: 'Exterior', count: propertyImages.filter(i => i.category === 'Exterior').length }
  ];

  // Grouped image list for rendering sections
  const groupedSections = [
    { id: 'living-room', name: 'Living room', images: propertyImages.filter(i => i.category === 'Living room') },
    { id: 'bedroom-1', name: 'Bedroom 1', images: propertyImages.filter(i => i.category === 'Bedroom 1') },
    { id: 'kitchen-dining', name: 'Kitchen & Dining', images: propertyImages.filter(i => i.category === 'Kitchen & Dining') },
    { id: 'bathroom-1', name: 'Bathroom 1', images: propertyImages.filter(i => i.category === 'Bathroom 1') },
    { id: 'exterior', name: 'Exterior', images: propertyImages.filter(i => i.category === 'Exterior') }
  ];

  // Focus management, Focus trapping, and Scroll locking
  useEffect(() => {
    if (overlayMode === 'PHOTO_TOUR') {
      triggerElementRef.current = document.activeElement;
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';

      if (closeBtnRef.current) {
        closeBtnRef.current.focus();
      }

      const handleKeyDown = (e) => {
        if (e.key === 'Escape') {
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
  }, [overlayMode, closeOverlay]);

  if (overlayMode !== 'PHOTO_TOUR') {
    return null;
  }

  const handleCategoryClick = (catId) => {
    setActiveCategory(catId);
    if (catId === 'all') {
      const feed = document.getElementById('photo-tour-feed');
      if (feed) feed.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const targetEl = document.getElementById(`section-${catId}`);
      if (targetEl) {
        targetEl.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <div
      ref={modalRef}
      className="photo-tour-overlay"
      role="dialog"
      aria-modal="true"
      aria-label="Photo tour overlay"
    >
      <header className="photo-tour-header">
        <button
          ref={closeBtnRef}
          type="button"
          className="photo-tour-close-btn"
          onClick={closeOverlay}
          aria-label="Close photo tour"
        >
          <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" style={{ display: 'block', height: '16px', width: '16px', stroke: 'currentColor', strokeWidth: 3, fill: 'none' }}>
            <path d="M6 6l20 20M26 6L6 26" />
          </svg>
        </button>

        <h2 className="photo-tour-header-title">Photo tour</h2>

        <div className="photo-tour-header-actions">
          <button type="button" className="action-pill-btn" aria-label="Share listing">
            <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" style={{ display: 'block', height: '16px', width: '16px', fill: 'none', stroke: 'currentColor', strokeWidth: 2 }}>
              <path d="M27 18v9a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-9M16 3v20M23 10l-7-7-7 7" />
            </svg>
            <span>Share</span>
          </button>
          <button type="button" className="action-pill-btn" aria-label="Save listing">
            <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" style={{ display: 'block', height: '16px', width: '16px', fill: 'none', stroke: 'currentColor', strokeWidth: 2 }}>
              <path d="M16 28c7-4.73 14-10 14-17a6.98 6.98 0 0 0-7-7c-1.8 0-3.58.83-4.84 2.18L16 8.35l-2.16-2.17A6.98 6.98 0 0 0 9 4a6.98 6.98 0 0 0-7 7c0 7 7 12.27 14 17z" />
            </svg>
            <span>Save</span>
          </button>
        </div>
      </header>

      <div className="photo-tour-body">
        <nav className="photo-tour-sidebar" aria-label="Room categories">
          {categories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              className={`category-nav-btn ${activeCategory === cat.id ? 'active' : ''}`}
              onClick={() => handleCategoryClick(cat.id)}
            >
              <span>{cat.name}</span>
              <span className="category-count">{cat.count}</span>
            </button>
          ))}
        </nav>

        <main id="photo-tour-feed" className="photo-tour-feed">
          {groupedSections.map((sec) => (
            <section key={sec.id} id={`section-${sec.id}`} className="photo-category-section">
              <h3 className="category-section-title">{sec.name}</h3>
              <div className="photo-grid-two-col">
                {sec.images.map((img) => {
                  const globalIndex = propertyImages.findIndex(i => i.id === img.id);
                  return (
                    <div
                      key={img.id}
                      className="photo-card"
                      onClick={() => openLightbox(globalIndex)}
                      role="button"
                      tabIndex={0}
                      aria-label={`View photo ${globalIndex + 1} of ${propertyImages.length}: ${img.alt}`}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          e.preventDefault();
                          openLightbox(globalIndex);
                        }
                      }}
                    >
                      <div className="photo-card-img-wrapper">
                        <img
                          src={img.src}
                          alt={img.alt}
                          className="photo-card-img"
                          onError={(e) => handleImageError(e, 'photo')}
                        />
                      </div>
                      <span className="photo-card-caption">{img.alt}</span>
                    </div>
                  );
                })}
              </div>
            </section>
          ))}
        </main>
      </div>
    </div>
  );
};
