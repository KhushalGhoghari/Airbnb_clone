import React from 'react';

export const RatingChip = ({ name, score }) => {
  // Safely parse score whether passed as a number or string ("5.0")
  const numScore = typeof score === 'number' ? score : parseFloat(score) || 5.0;
  const percentage = Math.min(100, Math.max(0, (numScore / 5.0) * 100));

  return (
    <div className="rating-chip-item">
      <div className="chip-header">
        <span className="chip-name">{name}</span>
        <span className="chip-score">{numScore.toFixed(1)}</span>
      </div>

      <div
        className="chip-bar-container"
        style={{
          height: '4px',
          backgroundColor: '#EBEBEB',
          borderRadius: '2px',
          width: '100%',
          overflow: 'hidden',
          marginTop: '4px'
        }}
      >
        <div
          className="chip-bar-fill"
          style={{
            height: '100%',
            width: `${percentage}%`,
            backgroundColor: '#222222',
            borderRadius: '2px'
          }}
        />
      </div>
    </div>
  );
};
