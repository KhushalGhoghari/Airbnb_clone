import React, { useState } from 'react';
import './StickyReservationCard.css';

export const StickyReservationCard = ({ listingData }) => {
  const [nights, setNights] = useState(5);
  const [guestCount, setGuestCount] = useState(1);
  const [checkIn, setCheckIn] = useState('8/28/2026');
  const [checkOut, setCheckOut] = useState('9/2/2026');

  const baseTotal = listingData.pricePerNight * nights;
  const grandTotal = baseTotal + listingData.cleaningFee + listingData.serviceFee;

  const handleReserveClick = () => {
    alert(`Reservation request submitted for ${nights} nights (${checkIn} to ${checkOut}) for ${guestCount} guest(s). Total: ${listingData.currency}${grandTotal.toLocaleString()}`);
  };

  return (
    <div className="sticky-card-wrapper">
      <div className="reservation-card">
        <div className="card-header-row">
          <div className="price-display">
            <span className="price-amount">{listingData.currency}{listingData.pricePerNight.toLocaleString()}</span>
            <span className="price-period">/ night</span>
          </div>
          <div className="rating-summary">
            ★ {listingData.rating.toFixed(1)} · <a href="#reviews" className="underline-link">{listingData.reviewCount} reviews</a>
          </div>
        </div>

        <div className="picker-box-container">
          <div className="date-picker-row">
            <div className="date-input-field" role="button" tabIndex={0}>
              <span className="field-label">CHECK-IN</span>
              <span className="field-value">{checkIn}</span>
            </div>
            <div className="date-input-field" role="button" tabIndex={0}>
              <span className="field-label">CHECKOUT</span>
              <span className="field-value">{checkOut}</span>
            </div>
          </div>
          <div className="guest-picker-field" role="button" tabIndex={0}>
            <div>
              <span className="field-label">GUESTS</span>
              <span className="field-value">{guestCount} guest{guestCount > 1 ? 's' : ''}</span>
            </div>
            <span className="dropdown-arrow">▼</span>
          </div>
        </div>

        <button type="button" className="reserve-cta-btn" onClick={handleReserveClick}>
          Reserve
        </button>

        <p className="no-charge-text">You won't be charged yet</p>

        <div className="price-breakdown-list">
          <div className="breakdown-row">
            <span className="breakdown-label">{listingData.currency}{listingData.pricePerNight.toLocaleString()} x {nights} nights</span>
            <span className="breakdown-value">{listingData.currency}{baseTotal.toLocaleString()}</span>
          </div>
          <div className="breakdown-row">
            <span className="breakdown-label">Cleaning fee</span>
            <span className="breakdown-value">{listingData.currency}{listingData.cleaningFee.toLocaleString()}</span>
          </div>
          <div className="breakdown-row">
            <span className="breakdown-label">Airbnb service fee</span>
            <span className="breakdown-value">{listingData.currency}{listingData.serviceFee.toLocaleString()}</span>
          </div>
          <div className="breakdown-row total">
            <span className="breakdown-label">Total before taxes</span>
            <span className="breakdown-value">{listingData.currency}{grandTotal.toLocaleString()}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
