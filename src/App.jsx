import React from 'react';
import { OverlayProvider } from './context/OverlayContext';
import { Header } from './components/Header/Header';
import { ListingHeader } from './components/Listing/ListingHeader';
import { ImageGallery } from './components/Gallery/ImageGallery';
import { PropertyInfoTop, PropertyInfoBottom } from './components/Listing/PropertyInfo';
import { StickyReservationCard } from './components/Listing/StickyReservationCard';
import { PhotoTour } from './components/Overlays/PhotoTour';
import { Lightbox } from './components/Overlays/Lightbox';
import { LISTING_DATA, GALLERY_IMAGES } from './data/listingData';
import './styles/global.css';

export function App() {
  return (
    <OverlayProvider>
      <div className="main-wrapper">
        <Header hostAvatar={LISTING_DATA.host.avatar} />

        <main className="content-container">
          <ListingHeader
            title={LISTING_DATA.title}
            rating={LISTING_DATA.rating}
            reviewCount={LISTING_DATA.reviewCount}
            isSuperhost={LISTING_DATA.isSuperhost}
            location={LISTING_DATA.location}
          />

          <ImageGallery images={GALLERY_IMAGES} />

          {/* Top 2-Column Section: Left details + Right Sticky Reservation Card */}
          <div className="listing-grid-two-column">
            <div className="left-column">
              <PropertyInfoTop listingData={LISTING_DATA} />
            </div>
            <div className="right-column">
              <StickyReservationCard listingData={LISTING_DATA} />
            </div>
          </div>

          {/* Bottom Full-Width Section: Amenities, Reviews, Map, HostProfile, ThingsToKnow, MoreStaysNearby */}
          <div className="full-width-bottom-container">
            <PropertyInfoBottom listingData={LISTING_DATA} />
          </div>
        </main>

        {/* Overlays */}
        <PhotoTour />
        <Lightbox />
      </div>
    </OverlayProvider>
  );
}

export default App;
