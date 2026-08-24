import React, { useState } from 'react';
import './PropertyInfo.css';

export const CalendarSection = ({ locationName = "Candolim" }) => {
  // State for date selection (defaulting to screenshot: Oct 18, 2026 - Oct 23, 2026)
  const [selectedRange, setSelectedRange] = useState({
    start: 18,
    end: 23,
    month: 'October 2026'
  });

  const handleClearDates = () => {
    setSelectedRange({ start: null, end: null, month: null });
  };

  // October 2026: 31 days, 1st is Thursday (index 4 in S M T W T F S)
  const octOffset = 4;
  const octDays = Array.from({ length: 31 }, (_, i) => i + 1);

  // November 2026: 30 days, 1st is Sunday (index 0)
  const novOffset = 0;
  const novDays = Array.from({ length: 30 }, (_, i) => i + 1);

  // Disabled dates in November as shown in screenshot (Nov 18-24, 29-30)
  const novDisabledDays = [18, 19, 20, 21, 22, 23, 24, 29, 30];

  const nightsCount = selectedRange.start && selectedRange.end
    ? selectedRange.end - selectedRange.start
    : 0;

  return (
    <div className="calendar-section" id="calendar">
      <div className="calendar-header-group">
        <h2 className="section-title">
          {nightsCount > 0 ? `${nightsCount} nights in ${locationName}` : 'Select dates'}
        </h2>
        <p className="calendar-subtitle">
          {selectedRange.start && selectedRange.end
            ? `18 Oct 2026 - 23 Oct 2026`
            : 'Add your travel dates for exact pricing'}
        </p>
      </div>

      <div className="dual-calendar-container">
        {/* Navigation Arrows */}
        <div className="calendar-nav-row">
          <button type="button" className="calendar-nav-btn prev" aria-label="Previous month">
            ‹
          </button>
          <button type="button" className="calendar-nav-btn next" aria-label="Next month">
            ›
          </button>
        </div>

        {/* Month 1: October 2026 */}
        <div className="month-calendar">
          <h3 className="month-title">October 2026</h3>
          <div className="weekdays-grid">
            <span>S</span>
            <span>M</span>
            <span>T</span>
            <span>W</span>
            <span>T</span>
            <span>F</span>
            <span>S</span>
          </div>
          <div className="days-grid">
            {/* Blank padding cells before 1st */}
            {Array.from({ length: octOffset }).map((_, idx) => (
              <div key={`oct-empty-${idx}`} className="day-cell empty" />
            ))}

            {/* Days 1 to 31 */}
            {octDays.map((day) => {
              const isStart = selectedRange.start === day;
              const isEnd = selectedRange.end === day;
              const isInRange = selectedRange.start && selectedRange.end && day > selectedRange.start && day < selectedRange.end;

              let cellClass = 'day-cell';
              if (isStart) cellClass += ' range-start';
              if (isEnd) cellClass += ' range-end';
              if (isInRange) cellClass += ' in-range';

              return (
                <div key={`oct-day-${day}`} className={cellClass}>
                  <button
                    type="button"
                    className="day-btn"
                    onClick={() => {
                      if (!selectedRange.start || (selectedRange.start && selectedRange.end)) {
                        setSelectedRange({ start: day, end: null, month: 'October 2026' });
                      } else if (day > selectedRange.start) {
                        setSelectedRange({ ...selectedRange, end: day });
                      }
                    }}
                  >
                    {day}
                  </button>
                </div>
              );
            })}
          </div>
        </div>

        {/* Month 2: November 2026 */}
        <div className="month-calendar">
          <h3 className="month-title">November 2026</h3>
          <div className="weekdays-grid">
            <span>S</span>
            <span>M</span>
            <span>T</span>
            <span>W</span>
            <span>T</span>
            <span>F</span>
            <span>S</span>
          </div>
          <div className="days-grid">
            {Array.from({ length: novOffset }).map((_, idx) => (
              <div key={`nov-empty-${idx}`} className="day-cell empty" />
            ))}

            {novDays.map((day) => {
              const isDisabled = novDisabledDays.includes(day);
              return (
                <div key={`nov-day-${day}`} className={`day-cell ${isDisabled ? 'disabled' : ''}`}>
                  <button type="button" className="day-btn" disabled={isDisabled}>
                    {day}
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Footer controls: Keyboard button left, Clear dates right */}
      <div className="calendar-footer-row">
        <button type="button" className="keyboard-icon-btn" aria-label="Keyboard shortcuts">
          <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" style={{ display: 'block', height: '16px', width: '16px', fill: 'currentColor' }}>
            <path d="M29 6H3a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h26a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2zM5 10h2v2H5zm0 4h2v2H5zm0 4h2v2H5zm10 4H9v-2h6zm-4-4H9v-2h2zm0-4H9v-2h2zm4 4h-2v-2h2zm0-4h-2v-2h2zm4 8h-2v-2h2zm0-4h-2v-2h2zm0-4h-2v-2h2zm8 8h-6v-2h6zm0-4h-2v-2h2zm0-4h-2v-2h2z" />
          </svg>
        </button>

        <button type="button" className="clear-dates-btn" onClick={handleClearDates}>
          Clear dates
        </button>
      </div>
    </div>
  );
};
