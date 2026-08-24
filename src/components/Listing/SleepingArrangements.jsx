import React from 'react';
import { handleImageError } from '../../utils/imageFallback';

export const SleepingArrangements = () => {
  const sleepingOptions = [
    {
      id: 'bedroom',
      title: 'Bedroom',
      subtitle: '1 double bed',
      image: '/assets/images/img-02.jpeg',
      alt: 'Bedroom with double bed'
    },
    {
      id: 'living-room',
      title: 'Living room',
      subtitle: '1 sofa',
      image: '/assets/images/img-03.jpeg',
      alt: 'Living room with sofa'
    }
  ];

  return (
    <div className="sleeping-section">
      <h2 className="section-title">Where you'll sleep</h2>
      <div className="sleeping-cards-grid">
        {sleepingOptions.map((item) => (
          <div key={item.id} className="sleeping-photo-card">
            <div className="sleeping-img-wrapper">
              <img
                src={item.image}
                alt={item.alt}
                className="sleeping-card-img"
                onError={(e) => handleImageError(e, 'photo')}
              />
            </div>
            <h3 className="room-photo-title">{item.title}</h3>
            <p className="room-photo-subtitle">{item.subtitle}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
