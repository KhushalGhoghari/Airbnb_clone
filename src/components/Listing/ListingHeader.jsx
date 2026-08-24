import React, { useState } from 'react';

export const ListingHeader = ({ title, rating, reviewCount, isSuperhost, location }) => {
  const [isSaved, setIsSaved] = useState(false);

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      alert('Listing link copied to clipboard!');
    }
  };

  return (
    <div className="listing-header-container">
      <h1 className="listing-main-title">{title}</h1>
      <div className="listing-title-action-row">
        <div className="listing-meta-info">
          <span className="rating-badge">
            ★ {rating.toFixed(1)}
          </span>
          <span className="meta-dot">·</span>
          <span className="reviews-link">{reviewCount} reviews</span>
          {isSuperhost && (
            <>
              <span className="meta-dot">·</span>
              <span className="superhost-badge">󰓋 Superhost</span>
            </>
          )}
          <span className="meta-dot">·</span>
          <a href="#location" className="location-link underline-link">
            {location}
          </a>
        </div>

        <div className="title-action-buttons">
          <button type="button" className="action-pill-btn" onClick={handleShare} aria-label="Share listing">
            <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" style={{ display: 'block', height: '16px', width: '16px', fill: 'none', stroke: 'currentColor', strokeWidth: 2 }}>
              <path d="M27 18v9a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-9M16 3v20M23 10l-7-7-7 7" />
            </svg>
            <span>Share</span>
          </button>

          <button
            type="button"
            className={`action-pill-btn ${isSaved ? 'saved' : ''}`}
            onClick={() => setIsSaved(!isSaved)}
            aria-label={isSaved ? "Remove from saved" : "Save listing"}
          >
            <svg
              viewBox="0 0 32 32"
              xmlns="http://www.w3.org/2000/svg"
              style={{
                display: 'block',
                height: '16px',
                width: '16px',
                fill: isSaved ? 'var(--color-primary)' : 'none',
                stroke: isSaved ? 'var(--color-primary)' : 'currentColor',
                strokeWidth: 2
              }}
            >
              <path d="M16 28c7-4.73 14-10 14-17a6.98 6.98 0 0 0-7-7c-1.8 0-3.58.83-4.84 2.18L16 8.35l-2.16-2.17A6.98 6.98 0 0 0 9 4a6.98 6.98 0 0 0-7 7c0 7 7 12.27 14 17z" />
            </svg>
            <span>{isSaved ? 'Saved' : 'Save'}</span>
          </button>
        </div>
      </div>
    </div>
  );
};
