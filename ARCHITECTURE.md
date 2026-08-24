# Implementation Architecture: Airbnb Listing Page Clone

This document details the production-quality frontend implementation architecture for the desktop-only Airbnb listing page clone, based on `REFERENCE_SPEC.md`.

---

## 1. Project Technology Stack

- **Framework**: React 18
- **Build Tool**: Vite
- **Language**: JavaScript (ES6+)
- **Styling**: Vanilla CSS (CSS Modules & Custom Properties)
- **Backend / Database**: None (Static Data & Client-Side State)

---

## 2. Folder & Directory Structure

```
src/
├── assets/
│   ├── images/              # Listing photos (1-15), avatars, rating chips, UI badges
│   └── fonts/               # Airbnb Cereal font files (.woff2)
├── components/
│   ├── Header/
│   │   ├── Header.jsx       # Fixed/sticky top navigation bar
│   │   ├── Header.css
│   │   ├── SearchBar.jsx    # Centered interactive search pill
│   │   └── UserMenu.jsx     # Right-aligned host, globe, & user menu pill
│   ├── Gallery/
│   │   ├── ImageGallery.jsx # 5-photo hero grid + "Show all photos" CTA
│   │   └── ImageGallery.css
│   ├── Listing/
│   │   ├── ListingHeader.jsx         # Title, location link, Share & Save buttons
│   │   ├── PropertyInfo.jsx          # Left-column container for property details
│   │   ├── HostHeaderCard.jsx        # Host avatar, room breakdown, superhost status
│   │   ├── GuestFavoriteBanner.jsx   # Laurel graphics & overall rating score
│   │   ├── HighlightsList.jsx        # Bulleted key feature highlights
│   │   ├── DescriptionSection.jsx    # Property text with expandable "Show more"
│   │   ├── SleepingArrangements.jsx  # Bedroom arrangements card
│   │   ├── AmenitiesGrid.jsx         # Amenities icons grid & trigger button
│   │   ├── ReviewsSection.jsx        # Category score bars & review cards
│   │   ├── LocationMap.jsx           # Location description & map container
│   │   ├── HostProfile.jsx           # Detailed host bio & house rules
│   │   └── StickyReservationCard.jsx # Sticky right-column booking card
│   ├── Overlays/
│   │   ├── PhotoTour.jsx    # Fullscreen white modal with sidebar & scroll feed
│   │   ├── PhotoTour.css
│   │   ├── Lightbox.jsx     # Dark full-screen single-photo viewer with nav
│   │   └── Lightbox.css
│   └── UI/
│       ├── Button.jsx       # Reusable button component (pill, gradient, icon)
│       └── RatingChip.jsx   # Review rating category chip component
├── context/
│   └── OverlayContext.jsx   # Context provider for Lightbox & Photo Tour state
├── data/
│   └── listingData.js       # Complete listing data schema, images, reviews, host info
├── styles/
│   ├── variables.css        # CSS Custom Properties (colors, typography, shadows, radii)
│   └── global.css           # Global resets, font-face rules, scrollbars
├── App.jsx                  # Main page entry component
└── main.jsx                 # Vite application entry point
```

---

## 3. Component Responsibilities

| Component | Parent | Responsibilities |
|---|---|---|
| **App** | Root | Entry layout container, initializes `OverlayContextProvider`, renders `Header`, `MainContainer`, `PhotoTour`, and `Lightbox`. |
| **Header** | App | Sticky top bar (`height: 80px`, `z-index: 100`). Contains `Logo`, `SearchBar`, and `UserMenu`. |
| **SearchBar** | Header | Interactive pill bar displaying "Anywhere \| Any week \| Add guests" and red search button. |
| **UserMenu** | Header | Renders "Airbnb your home", Globe button, and User menu pill (hamburger + host avatar). |
| **ListingHeader** | MainContainer | Renders listing H1 title (`Romantic Jacuzzi 1BHK Candolim | Mirashya UG10`), subtext, and Share/Save buttons. |
| **ImageGallery** | MainContainer | 5-photo grid (1 hero + 4 smaller grid photos) with rounded outer corners and absolute `"Show all 15 photos"` button. |
| **PropertyInfo** | MainContainer | Left column container (~65% width) rendering `HostHeaderCard`, `GuestFavoriteBanner`, `HighlightsList`, `DescriptionSection`, `SleepingArrangements`, `AmenitiesGrid`, `ReviewsSection`, `LocationMap`, and `HostProfile`. |
| **StickyReservationCard** | MainContainer | Sticky right column card (~35% width, `top: 120px`) displaying price per night, date picker box, guest selector, red gradient Reserve CTA button, and itemized price calculation breakdown. |
| **PhotoTour** | App | Fullscreen white overlay modal (`position: fixed`, `inset: 0`, `z-index: 1000`). Features sticky header, room categories sidebar, and right scrollable photo feed. |
| **Lightbox** | App | Fullscreen dark mode overlay (`#000000`, `z-index: 2000`). Displays active photo, counter (`X / 15`), close `✕` button, and Previous/Next navigation buttons (`‹`, `›`). |

---

## 4. State Management Approach

The application uses a hybrid state management architecture:

### Global Overlay State (`OverlayContext`)
Context manages overlay visibility and modal navigation to avoid deep prop drilling:

```javascript
// State Managed in OverlayContext:
{
  overlayMode: 'NONE' | 'PHOTO_TOUR' | 'LIGHTBOX',
  activePhotoIndex: 0, // 0 to 14
  activeCategory: 'all', // 'living-room', 'bedroom-1', 'bathroom', 'exterior'
  triggerElement: null // Reference to element that opened modal for focus restoration
}
```

### Local Component State
- `ListingHeader`: `isSaved` boolean (toggles heart fill `#FF385C`).
- `DescriptionSection`: `isExpanded` boolean (toggles description expansion).
- `StickyReservationCard`: `checkInDate`, `checkOutDate`, `guestCount` (for price calculation).
- `UserMenu`: `isDropdownOpen` boolean.

---

## 5. Image Data Structure

All image assets are structured in `src/data/listingData.js`:

```javascript
export const LISTING_IMAGES = [
  {
    id: 1,
    src: "https://airbnb-clone-umber-two.vercel.app/assets/images/2367476f-11c4-4a14-a7c6-267be62c1d59.jpeg",
    alt: "Living room & balcony view",
    category: "Living room",
    isHero: true,
    heroOrder: 1,
    aspectRatio: "4/3"
  },
  {
    id: 2,
    src: "https://airbnb-clone-umber-two.vercel.app/assets/images/67c61c6f-6260-4809-9510-0360e58a345d.jpeg",
    alt: "Outdoor Jacuzzi Hot Tub",
    category: "Outdoor",
    isHero: true,
    heroOrder: 2,
    aspectRatio: "4/3"
  },
  // ... 15 photos total
];

export const HOST_DATA = {
  name: "Mirashya",
  avatar: "https://airbnb-clone-umber-two.vercel.app/assets/images/avatars/host.jpeg",
  isSuperhost: true,
  hostingYears: 5,
  responseRate: "100%",
  responseTime: "within an hour"
};

export const REVIEWS_DATA = {
  overallRating: 5.0,
  reviewCount: 15,
  categories: [
    { name: "Cleanliness", score: 5.0, icon: "/assets/images/chips/cleanliness.png" },
    { name: "Accuracy", score: 5.0, icon: "/assets/images/chips/accuracy.png" },
    { name: "Communication", score: 5.0, icon: "/assets/images/chips/condition.png" },
    { name: "Location", score: 4.9, icon: "/assets/images/chips/location.png" },
    { name: "Check-in", score: 5.0, icon: "/assets/images/chips/hospitality.png" },
    { name: "Value", score: 4.9, icon: "/assets/images/chips/comfort.png" }
  ]
};
```

---

## 6. Lightbox State Model

The Lightbox controls single-image dark mode presentation and navigation:

- **Open Trigger**: Clicking any photo in `ImageGallery` or `PhotoTour`.
- **State Model**:
  ```javascript
  const [activePhotoIndex, setActivePhotoIndex] = useState(0);
  
  const nextPhoto = () => setActivePhotoIndex(prev => (prev + 1) % 15);
  const prevPhoto = () => setActivePhotoIndex(prev => (prev - 1 + 15) % 15);
  ```
- **Navigation Boundaries**: Circular wrap-around navigation (`0` wraps to `14`, `14` wraps to `0`).
- **Transitions**: Fade-in image transition (`opacity 0.2s ease-in-out`).

---

## 7. Photo Tour State Model

The Photo Tour presents all 15 images organized by room category:

- **Open Trigger**: Clicking `"Show all 15 photos"` button or gallery image.
- **State Model**:
  ```javascript
  const [activeCategory, setActiveCategory] = useState('all');
  ```
- **Category Navigation**: Sidebar category click smoothly scrolls the right feed to the target section header using `element.scrollIntoView({ behavior: 'smooth' })`.
- **Transitions**: Modal slides up from bottom (`transform: translateY(0)` with `300ms cubic-bezier`).

---

## 8. Keyboard Navigation Strategy

A centralized `useEffect` keydown handler attached to `window` handles all keyboard interactions when an overlay is active:

| Active View | Keypress | Action |
|---|---|---|
| **Lightbox** | `ArrowLeft` | Triggers `prevPhoto()` |
| **Lightbox** | `ArrowRight` | Triggers `nextPhoto()` |
| **Lightbox** | `Escape` | Closes Lightbox (returns to Photo Tour or main page) |
| **Photo Tour** | `Escape` | Closes Photo Tour |
| **Photo Tour** | `Tab` / `Shift+Tab` | Cycles focus inside focus-trap container |
| **Main Page** | `Tab` | Standard visible focus navigation through interactive elements |

---

## 9. Focus Management Strategy

1. **Focus Capture on Modal Open**:
   - Before opening `PhotoTour` or `Lightbox`, store `document.activeElement` in `triggerElement` ref.
2. **Initial Focus Assignment**:
   - On modal mount, auto-focus the modal's primary Close button (`✕`) using `closeButtonRef.current.focus()`.
3. **Focus Trapping**:
   - Intercept `Tab` and `Shift+Tab` within the open modal so focus cycles strictly between modal interactive elements (Close, Prev/Next buttons, sidebar category tabs).
4. **Focus Restoration on Modal Close**:
   - Upon closing the modal, trigger `triggerElement.current?.focus()` to restore focus back to the user's triggering button.

---

## 10. CSS Organization & Design System Tokens

### Custom Properties (`src/styles/variables.css`):
```css
:root {
  /* Brand Colors */
  --color-primary: #FF385C;
  --color-primary-gradient: linear-gradient(90deg, #E61E4D 0%, #E31C5F 50%, #D70466 100%);
  --color-text-primary: #222222;
  --color-text-secondary: #717171;
  --color-border-light: #DDDDDD;
  --color-divider: #EBEBEB;
  --color-hover-bg: #F7F7F7;
  --color-bg-white: #FFFFFF;
  --color-bg-dark: #000000;

  /* Typography */
  --font-family-base: "Airbnb Cereal VF", -apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", sans-serif;
  
  /* Layout Spacing */
  --container-max-width: 1120px;
  --header-height: 80px;
  
  /* Border Radii */
  --radius-pill: 40px;
  --radius-card: 12px;
  --radius-btn: 8px;

  /* Box Shadows */
  --shadow-search: 0 1px 2px rgba(0, 0, 0, 0.08), 0 4px 12px rgba(0, 0, 0, 0.05);
  --shadow-search-hover: 0 2px 4px rgba(0, 0, 0, 0.18);
  --shadow-card: 0 6px 16px rgba(0, 0, 0, 0.12);
  --shadow-modal: 0 8px 28px rgba(0, 0, 0, 0.28);

  /* Z-Index Hierarchy */
  --z-sticky: 10;
  --z-header: 100;
  --z-photo-tour: 1000;
  --z-lightbox: 2000;
}
```

---

## 11. Accessibility Approach (a11y)

- **Semantic Elements**: Native `<header>`, `<main>`, `<nav>`, `<section>`, `<article>`, and `<button>`.
- **ARIA Attributes**:
  - `role="dialog"` and `aria-modal="true"` on Photo Tour and Lightbox modals.
  - `aria-label` on icon-only buttons (e.g. `aria-label="Close"`, `aria-label="Next photo"`).
  - `aria-expanded` on expandable description and dropdowns.
- **Focus Ring Indicators**: High-contrast outline focus rings (`outline: 2px solid #222222; outline-offset: 2px`) for keyboard tab navigation.
- **Color Contrast**: All text elements meet WCAG AAA standards (`#222222` text on `#FFFFFF` background = 16:1 contrast ratio).

---

*Architecture design complete. Awaiting user review and approval prior to implementation.*
