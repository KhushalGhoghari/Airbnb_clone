import React from 'react';
import { RatingChip } from '../UI/RatingChip';
import { handleImageError } from '../../utils/imageFallback';

export const ReviewsSection = ({ ratingCategories, reviews, rating, reviewCount }) => {
  return (
    <div className="reviews-section" id="reviews">
      <div className="reviews-header">
        <h2 className="section-title">
          ★ {rating.toFixed(1)} · {reviewCount} reviews
        </h2>
      </div>

      <div className="rating-chips-grid">
        {ratingCategories.map((cat) => (
          <RatingChip key={cat.id} name={cat.name} score={cat.score} icon={cat.icon} />
        ))}
      </div>

      <div className="reviews-cards-grid">
        {reviews.map((rev) => (
          <div key={rev.id} className="review-card">
            <div className="reviewer-header">
              <img
                src={rev.avatar}
                alt={rev.author}
                className="reviewer-avatar"
                onError={(e) => handleImageError(e, 'avatar')}
              />
              <div className="reviewer-info">
                <h3 className="reviewer-name">{rev.author}</h3>
                <span className="review-date">{rev.date}</span>
              </div>
            </div>
            <div className="review-stars">★★★★★</div>
            <p className="review-comment">{rev.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
