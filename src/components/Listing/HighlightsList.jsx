import React from 'react';

export const HighlightsList = ({ highlights }) => {
  return (
    <div className="highlights-container">
      {highlights.map((item) => (
        <div key={item.id} className="highlight-item">
          <div className="highlight-icon">
            {item.icon === 'key' && (
              <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" style={{ display: 'block', height: '24px', width: '24px', fill: 'none', stroke: 'currentColor', strokeWidth: 2 }}>
                <path d="M21 2a9 9 0 0 1 6.36 15.36L15.41 29.3a2 2 0 0 1-2.83 0l-3.53-3.53a2 2 0 0 1 0-2.83L17.05 15A9 9 0 0 1 21 2z" />
              </svg>
            )}
            {item.icon === 'medal' && (
              <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" style={{ display: 'block', height: '24px', width: '24px', fill: 'none', stroke: 'currentColor', strokeWidth: 2 }}>
                <path d="M16 2l4 8 9 1-6.5 6 2 9L16 21.5 7.5 26l2-9L3 11l9-1 4-8z" />
              </svg>
            )}
            {item.icon === 'location' && (
              <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" style={{ display: 'block', height: '24px', width: '24px', fill: 'none', stroke: 'currentColor', strokeWidth: 2 }}>
                <path d="M16 2a11 11 0 0 1 11 11c0 7.33-8.8 15.7-10.42 17.18a.88.88 0 0 1-1.16 0C13.8 28.7 5 20.33 5 13A11 11 0 0 1 16 2zm0 6a5 5 0 1 0 0 10 5 5 0 0 0 0-10z" />
              </svg>
            )}
          </div>
          <div className="highlight-text">
            <h3 className="highlight-title">{item.title}</h3>
            <p className="highlight-desc">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
