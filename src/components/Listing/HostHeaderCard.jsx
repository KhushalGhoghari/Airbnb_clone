import React from 'react';
import { handleImageError } from '../../utils/imageFallback';

export const HostHeaderCard = ({ propertyType, host, specs }) => {
  return (
    <div className="host-header-card">
      <div className="host-text-details">
        <h2 className="property-subtitle">{propertyType} hosted by {host.name}</h2>
        <p className="property-specs">{specs}</p>
      </div>
      <div className="host-avatar-container">
        <img
          src={host.avatar}
          alt={`Host ${host.name}`}
          className="host-avatar-img"
          onError={(e) => handleImageError(e, 'avatar')}
        />
        {host.isSuperhost && <span className="superhost-badge-icon" title="Superhost">󰓋</span>}
      </div>
    </div>
  );
};
