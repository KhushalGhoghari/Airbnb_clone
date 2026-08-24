import React, { useState } from 'react';

export const DescriptionSection = ({ description }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const truncatedText = description.slice(0, 180) + '...';

  return (
    <div className="description-container">
      <div className={`description-text ${isExpanded ? 'expanded' : ''}`}>
        {isExpanded ? description : truncatedText}
      </div>
      <button
        type="button"
        className="show-more-btn underline-link"
        onClick={() => setIsExpanded(!isExpanded)}
        aria-expanded={isExpanded}
      >
        {isExpanded ? 'Show less' : 'Show more ›'}
      </button>
    </div>
  );
};
