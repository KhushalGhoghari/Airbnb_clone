import React from 'react';

export const SearchBar = () => {
  return (
    <div className="search-bar-container" role="button" tabIndex={0} aria-label="Search destination, dates, and guests">
      <button type="button" className="search-bar-section bold-text">
        Anywhere
      </button>
      <span className="search-bar-divider" />
      <button type="button" className="search-bar-section bold-text">
        Any week
      </button>
      <span className="search-bar-divider" />
      <button type="button" className="search-bar-section muted-text">
        Add guests
      </button>
      <div className="search-icon-circle" aria-hidden="true">
        <svg
          viewBox="0 0 32 32"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          role="presentation"
          focusable="false"
          style={{ display: 'block', height: '12px', width: '12px', stroke: '#FFFFFF', strokeWidth: 5, fill: 'none' }}
        >
          <path d="M13 24a11 11 0 1 0 0-22 11 11 0 0 0 0 22zm8-3 9 9" />
        </svg>
      </div>
    </div>
  );
};
