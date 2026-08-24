import React from 'react';
import { handleImageError } from '../../utils/imageFallback';

export const UserMenu = ({ hostAvatar }) => {
  return (
    <div className="user-menu-container">
      <button type="button" className="become-host-btn">
        Airbnb your home
      </button>

      <button type="button" className="globe-btn" aria-label="Choose a language and currency">
        <svg
          viewBox="0 0 16 16"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          role="presentation"
          focusable="false"
          style={{ display: 'block', height: '16px', width: '16px', fill: 'currentColor' }}
        >
          <path d="M8 0a8 8 0 1 0 8 8 8.009 8.009 0 0 0-8-8zm5.94 5h-2.29a13.3 13.3 0 0 0-1.22-3.41A6.02 6.02 0 0 1 13.94 5zM8 1.48c.67 1.02 1.25 2.29 1.63 3.52H6.37C6.75 3.77 7.33 2.5 8 1.48zM1.99 9.5a6.03 6.03 0 0 1 0-3h2.64a14.7 14.7 0 0 0 0 3zm.07 1.5h2.29c.3 1.25.72 2.42 1.22 3.41A6.02 6.02 0 0 1 2.06 11zm1.6-9.41A13.3 13.3 0 0 0 2.44 5h2.29a14.6 14.6 0 0 1 1.22-3.41zM8 14.52c-.67-1.02-1.25-2.29-1.63-3.52h3.26C9.25 12.23 8.67 13.5 8 14.52zM9.63 9.5H6.37a13.2 13.2 0 0 1 0-3h3.26a13.2 13.2 0 0 1 0 3zm.64 4.91c.5-.99.92-2.16 1.22-3.41h2.29a6.02 6.02 0 0 1-3.51 3.41zM11.37 9.5a14.7 14.7 0 0 0 0-3h2.64a6.03 6.03 0 0 1 0 3z" />
        </svg>
      </button>

      <button type="button" className="user-profile-btn" aria-label="Main navigation menu">
        <svg
          viewBox="0 0 32 32"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          role="presentation"
          focusable="false"
          style={{ display: 'block', height: '16px', width: '16px', stroke: 'currentColor', strokeWidth: 3, fill: 'none' }}
        >
          <g fill="none">
            <path d="M2 16h28M2 24h28M2 8h28" />
          </g>
        </svg>
        <div className="user-avatar-circle">
          {hostAvatar ? (
            <img
              src={hostAvatar}
              alt="Host Avatar"
              className="avatar-img"
              onError={(e) => handleImageError(e, 'avatar')}
            />
          ) : (
            <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" style={{ display: 'block', height: '100%', width: '100%', fill: '#717171' }}>
              <path d="M16 1a15 15 0 1 0 15 15A15 15 0 0 0 16 1zm0 4a5 5 0 1 1-5 5 5 5 0 0 1 5-5zm0 21a11.9 11.9 0 0 1-8.5-3.6C8.8 20.3 11.9 19 16 19s7.2 1.3 8.5 3.4A11.9 11.9 0 0 1 16 26z" />
            </svg>
          )}
        </div>
      </button>
    </div>
  );
};
