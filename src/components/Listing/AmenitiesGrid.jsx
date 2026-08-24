import React from 'react';

export const AmenitiesGrid = ({ amenities }) => {
  return (
    <div className="amenities-section">
      <h2 className="section-title">What this place offers</h2>
      <div className="amenities-grid">
        {amenities.map((item) => (
          <div key={item.id} className="amenity-item">
            <span className="amenity-bullet">•</span>
            <span className="amenity-name">{item.name}</span>
          </div>
        ))}
      </div>
      <button type="button" className="outline-btn font-semibold">
        Show all {amenities.length + 12} amenities
      </button>
    </div>
  );
};
