import React, { createContext, useContext, useState, useCallback, useMemo } from 'react';
import { GALLERY_IMAGES } from '../data/listingData';

const OverlayContext = createContext({
  overlayMode: 'NONE', // 'NONE' | 'PHOTO_TOUR' | 'LIGHTBOX'
  activePhotoIndex: 0,
  activeCategory: 'all',
  openPhotoTour: () => {},
  openLightbox: (index = 0) => {},
  closeOverlay: () => {},
  nextPhoto: () => {},
  prevPhoto: () => {}
});

export const OverlayProvider = ({ children }) => {
  const [overlayMode, setOverlayMode] = useState('NONE');
  const [activePhotoIndex, setActivePhotoIndex] = useState(0);
  const [activeCategory, setActiveCategory] = useState('all');

  const totalPhotos = GALLERY_IMAGES.length || 15;

  const openPhotoTour = useCallback(() => {
    setOverlayMode('PHOTO_TOUR');
  }, []);

  const openLightbox = useCallback((index = 0) => {
    setActivePhotoIndex(index);
    setOverlayMode('LIGHTBOX');
  }, []);

  const closeOverlay = useCallback(() => {
    setOverlayMode('NONE');
  }, []);

  const nextPhoto = useCallback(() => {
    setActivePhotoIndex((prev) => (prev + 1) % totalPhotos);
  }, [totalPhotos]);

  const prevPhoto = useCallback(() => {
    setActivePhotoIndex((prev) => (prev - 1 + totalPhotos) % totalPhotos);
  }, [totalPhotos]);

  const value = useMemo(() => ({
    overlayMode,
    activePhotoIndex,
    activeCategory,
    setActiveCategory,
    openPhotoTour,
    openLightbox,
    closeOverlay,
    nextPhoto,
    prevPhoto
  }), [
    overlayMode,
    activePhotoIndex,
    activeCategory,
    openPhotoTour,
    openLightbox,
    closeOverlay,
    nextPhoto,
    prevPhoto
  ]);

  return (
    <OverlayContext.Provider value={value}>
      {children}
    </OverlayContext.Provider>
  );
};

export const useOverlay = () => useContext(OverlayContext);
