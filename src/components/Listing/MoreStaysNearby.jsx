import React from 'react';
import { handleImageError } from '../../utils/imageFallback';
import './PropertyInfo.css';

export const MoreStaysNearby = () => {
  const nearbyStays = [
    {
      id: 'stay-1',
      title: 'Beautiful Studio with a view to die for',
      price: '₹23,600',
      rating: '4.91',
      image: '/assets/images/img-06.jpeg'
    },
    {
      id: 'stay-2',
      title: 'NAQAB - 1bhk with private pool',
      price: '₹42,218',
      rating: '4.95',
      image: '/assets/images/img-07.jpeg'
    },
    {
      id: 'stay-3',
      title: 'Greentique Luxury Flat with plunge pool, Calangute',
      price: '₹44,506',
      rating: '4.94',
      image: '/assets/images/img-09.jpeg'
    },
    {
      id: 'stay-4',
      title: 'The Tropical Studio | 5 mins to Beach',
      price: '₹22,824',
      rating: '4.96',
      image: '/assets/images/img-12.jpeg'
    },
    {
      id: 'stay-5',
      title: 'Luxury Casa Bella 1BHK with plunge pool, Calangute',
      price: '₹39,942',
      rating: '4.95',
      image: '/assets/images/img-14.jpeg'
    }
  ];

  return (
    <div className="more-stays-section">
      <div className="more-stays-header">
        <h2 className="section-title">More stays nearby</h2>
        <div className="more-stays-nav">
          <span className="pagination-text">1/2</span>
          <button type="button" className="carousel-nav-btn prev" aria-label="Previous stays">
            ‹
          </button>
          <button type="button" className="carousel-nav-btn next" aria-label="Next stays">
            ›
          </button>
        </div>
      </div>

      <div className="five-cards-grid">
        {nearbyStays.map((stay) => (
          <div key={stay.id} className="stay-card">
            <div className="stay-img-wrapper">
              <img
                src={stay.image}
                alt={stay.title}
                className="stay-card-img"
                onError={(e) => handleImageError(e, 'photo')}
              />
            </div>
            <h3 className="stay-card-title">{stay.title}</h3>
            <div className="stay-card-meta">
              <span className="stay-price">{stay.price}</span>
              <span className="stay-rating">★ {stay.rating}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
