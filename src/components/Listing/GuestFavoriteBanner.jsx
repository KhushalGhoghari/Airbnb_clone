import React from 'react';
import { handleImageError } from '../../utils/imageFallback';

export const GuestFavoriteBanner = ({ guestFavorite, rating, reviewCount }) => {
  return (
    <div className="guest-favorite-card">
      <div className="laurel-wrapper">
        <img
          src={guestFavorite.leftLaurel}
          alt="Guest Favorite Laurel Left"
          className="laurel-img"
          onError={(e) => handleImageError(e, 'laurel')}
        />
        <span className="favorite-badge-text">{guestFavorite.badgeText}</span>
        <img
          src={guestFavorite.rightLaurel}
          alt="Guest Favorite Laurel Right"
          className="laurel-img"
          onError={(e) => handleImageError(e, 'laurel')}
        />
      </div>
      <div className="favorite-subtitle">{guestFavorite.subtitle}</div>
      <div className="favorite-scores-row">
        <div className="score-block">
          <span className="big-score">{rating.toFixed(1)}</span>
          <span className="star-rating">★★★★★</span>
        </div>
        <div className="divider-line-vertical" />
        <div className="score-block">
          <span className="big-score">{reviewCount}</span>
          <span className="score-label">Reviews</span>
        </div>
      </div>
    </div>
  );
};
