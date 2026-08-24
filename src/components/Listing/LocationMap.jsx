import React from 'react';
import './PropertyInfo.css';

export const LocationMap = ({ location = "Candolim, Goa, India" }) => {
  return (
    <div className="location-section" id="location">
      <h2 className="section-title">Where you'll be</h2>
      <p className="location-subtitle">{location}</p>

      {/* Styled Airbnb Map Visual Graphic */}
      <div className="custom-map-graphic">
        {/* Sea / Land Background Split */}
        <div className="map-sea-area" />
        <div className="map-land-grid" />

        {/* Translucent Highlight Circles */}
        <div className="map-highlight-circle circle-1" />
        <div className="map-highlight-circle circle-2" />

        {/* Center Home Pin Badge */}
        <div className="map-center-home-pin">
          <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" style={{ display: 'block', height: '22px', width: '22px', fill: '#FFFFFF' }}>
            <path d="M16 1L2 12v18h9v-9h10v9h9V12L16 1zm0 3.3L27 12v15h-3v-9H8v9H5V12L16 4.3z" />
          </svg>
        </div>

        {/* Top-Left Search Glass Button */}
        <button type="button" className="map-control-btn search-btn" aria-label="Search map">
          <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" style={{ display: 'block', height: '14px', width: '14px', fill: 'none', stroke: 'currentColor', strokeWidth: 3 }}>
            <path d="M13 24a11 11 0 1 0 0-22 11 11 0 0 0 0 22zm8-3l9 9" />
          </svg>
        </button>

        {/* Top-Right Zoom Controls */}
        <div className="map-zoom-controls">
          <button type="button" className="zoom-btn" aria-label="Zoom in">+</button>
          <div className="zoom-divider" />
          <button type="button" className="zoom-btn" aria-label="Zoom out">−</button>
        </div>
      </div>

      <p className="exact-location-note">Exact location will be provided after booking.</p>

      {/* Neighbourhood Highlights */}
      <div className="neighbourhood-highlights">
        <h3 className="highlights-subtitle">Neighbourhood highlights</h3>
        <p className="highlights-body">
          Located in the heart of Candolim, Amor de Goa offers a peaceful stay with easy access to beaches, cafés, and popular attractions.
        </p>
      </div>
    </div>
  );
};
