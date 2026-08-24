// Helper for graceful image fallback when external reference images are blocked by CORS/ORB
export const handleImageError = (e, fallbackType = 'photo') => {
  if (fallbackType === 'avatar') {
    e.target.src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64" fill="%23717171"><circle cx="32" cy="24" r="16"/><path d="M10 56c0-12 10-20 22-20s22 8 22 20z"/></svg>';
  } else if (fallbackType === 'laurel') {
    e.target.style.display = 'none';
  } else {
    // Default listing photo placeholder
    e.target.src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="600" height="400" viewBox="0 0 600 400" fill="%23EBEBEB"><rect width="600" height="400"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-family="sans-serif" font-size="20" fill="%23717171">Listing Photo</text></svg>';
  }
};
