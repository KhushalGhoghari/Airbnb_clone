import React from 'react';
import { HostHeaderCard } from './HostHeaderCard';
import { GuestFavoriteBanner } from './GuestFavoriteBanner';
import { HighlightsList } from './HighlightsList';
import { DescriptionSection } from './DescriptionSection';
import { SleepingArrangements } from './SleepingArrangements';
import { CalendarSection } from './CalendarSection';
import { AmenitiesGrid } from './AmenitiesGrid';
import { ReviewsSection } from './ReviewsSection';
import { LocationMap } from './LocationMap';
import { HostProfile } from './HostProfile';
import { ThingsToKnow } from './ThingsToKnow';
import { MoreStaysNearby } from './MoreStaysNearby';
import './PropertyInfo.css';

// Top 2-Column Left Section (stops after CalendarSection)
export const PropertyInfoTop = ({ listingData }) => {
  return (
    <div className="property-info-top">
      <HostHeaderCard
        propertyType={listingData.propertyType}
        host={listingData.host}
        specs={listingData.specs}
      />

      <hr className="section-divider" />

      <GuestFavoriteBanner
        guestFavorite={listingData.guestFavorite}
        rating={listingData.rating}
        reviewCount={listingData.reviewCount}
      />

      <hr className="section-divider" />

      <HighlightsList highlights={listingData.highlights} />

      <hr className="section-divider" />

      <DescriptionSection description={listingData.description} />

      <hr className="section-divider" />

      <SleepingArrangements />

      <hr className="section-divider" />

      <CalendarSection locationName="Candolim" />
    </div>
  );
};

// Bottom Full-Width Section (Spans 100% width across container after CalendarSection)
export const PropertyInfoBottom = ({ listingData }) => {
  return (
    <div className="property-info-bottom">
      <hr className="section-divider" />

      <AmenitiesGrid amenities={listingData.amenities} />

      <hr className="section-divider" />

      <ReviewsSection
        ratingCategories={listingData.ratingCategories}
        reviews={listingData.reviews}
        rating={listingData.rating}
        reviewCount={listingData.reviewCount}
      />

      <hr className="section-divider" />

      <LocationMap location={listingData.location} />

      <hr className="section-divider" />

      <HostProfile host={listingData.host} />

      <hr className="section-divider" />

      <ThingsToKnow />

      <hr className="section-divider" />

      <MoreStaysNearby />
    </div>
  );
};

export const PropertyInfo = ({ listingData }) => {
  return (
    <>
      <PropertyInfoTop listingData={listingData} />
      <PropertyInfoBottom listingData={listingData} />
    </>
  );
};
