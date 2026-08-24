import React from 'react';
import './PropertyInfo.css';

export const ThingsToKnow = () => {
  return (
    <div className="things-to-know-section">
      <h2 className="section-title">Things to know</h2>

      <div className="things-three-col-grid">
        {/* Column 1: Cancellation policy */}
        <div className="things-col">
          <div className="col-header">
            <div className="col-icon">
              <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" style={{ display: 'block', height: '22px', width: '22px', fill: 'currentColor' }}>
                <path d="M26 4h-2V2h-2v2H10V2H8v2H6a2 2 0 0 0-2 2v22a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 24H6V10h20v18z" />
              </svg>
            </div>
            <h3 className="col-title">Cancellation policy</h3>
          </div>
          <p className="col-text">
            Free cancellation before 17 October. Cancel before check-in on 18 October for a partial refund.
          </p>
          <p className="col-text">
            Review this host's full policy for details.
          </p>
          <button type="button" className="learn-more-link">
            Learn more
          </button>
        </div>

        {/* Column 2: House rules */}
        <div className="things-col">
          <div className="col-header">
            <div className="col-icon">
              <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" style={{ display: 'block', height: '22px', width: '22px', fill: 'currentColor' }}>
                <path d="M21.5 2a8.5 8.5 0 0 0-7.89 11.66L2 25.26V30h4.74l2.5-2.5h3.16v-3.16h3.16v-3.16l2.1-2.1A8.5 8.5 0 1 0 21.5 2zm3.5 8.5a2 2 0 1 1 0-4 2 2 0 0 1 0 4z" />
              </svg>
            </div>
            <h3 className="col-title">House rules</h3>
          </div>
          <p className="col-text">Check-in after 2:00 pm</p>
          <p className="col-text">Checkout before 11:00 am</p>
          <p className="col-text">3 guests maximum</p>
          <button type="button" className="learn-more-link">
            Learn more
          </button>
        </div>

        {/* Column 3: Safety & property */}
        <div className="things-col">
          <div className="col-header">
            <div className="col-icon">
              <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" style={{ display: 'block', height: '22px', width: '22px', fill: 'currentColor' }}>
                <path d="M16 2L4 7v9c0 7.55 5.12 14.6 12 16 6.88-1.4 12-8.45 12-16V7L16 2z" />
              </svg>
            </div>
            <h3 className="col-title">Safety & property</h3>
          </div>
          <p className="col-text">Carbon monoxide alarm not reported</p>
          <p className="col-text">Smoke alarm not reported</p>
          <p className="col-text">Exterior security cameras on property</p>
          <button type="button" className="learn-more-link">
            Learn more
          </button>
        </div>
      </div>
    </div>
  );
};
