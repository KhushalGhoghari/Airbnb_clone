import React from 'react';
import { handleImageError } from '../../utils/imageFallback';

export const HostProfile = ({ host }) => {
  return (
    <div className="host-profile-section">
      <div className="host-profile-card">
        <div className="host-profile-header">
          <img
            src={host.avatar}
            alt={`Host ${host.name}`}
            className="host-profile-avatar"
            onError={(e) => handleImageError(e, 'avatar')}
          />
          <div className="host-profile-title">
            <h2 className="section-title">Hosted by {host.name}</h2>
            <p className="host-joined">{host.hostingDuration}</p>
          </div>
        </div>

        <div className="host-stats-row">
          <div className="host-stat-item">
            <span className="stat-value">★ 5.0</span>
            <span className="stat-label">Rating</span>
          </div>
          <div className="host-stat-item">
            <span className="stat-value">15</span>
            <span className="stat-label">Reviews</span>
          </div>
          <div className="host-stat-item">
            <span className="stat-value">Superhost</span>
            <span className="stat-label">Badge</span>
          </div>
        </div>

        <p className="host-bio">{host.bio}</p>

        <div className="host-response-details">
          <p>Response rate: <strong>{host.responseRate}</strong></p>
          <p>Response time: <strong>{host.responseTime}</strong></p>
        </div>

        <button type="button" className="outline-btn font-semibold">
          Contact Host
        </button>
      </div>
    </div>
  );
};
