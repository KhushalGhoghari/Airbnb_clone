# Reference Specification: Airbnb Listing Page Clone

This document provides a comprehensive technical, visual, and behavioral specification for the pixel-perfect recreation of the Airbnb listing page reference: `https://airbnb-clone-umber-two.vercel.app/`.

---

## Reference Screenshots

The following reference screenshots capture the key desktop states of the application:

### Initial Listing Page (Header & Gallery)
![Initial Listing Page](file:///C:/Users/Lenovo/.gemini/antigravity-ide/brain/d3937232-5e3e-48df-8f95-16da3f297a10/initial_listing_page_1787306675488.jpg)

### Lower Listing Page (Description, Sticky Card & Reviews)
![Lower Listing Page](file:///C:/Users/Lenovo/.gemini/antigravity-ide/brain/d3937232-5e3e-48df-8f95-16da3f297a10/lower_listing_page_1787306695826.jpg)

### Photo Tour Overlay
![Photo Tour Overlay](file:///C:/Users/Lenovo/.gemini/antigravity-ide/brain/d3937232-5e3e-48df-8f95-16da3f297a10/photo_tour_overlay_1787306716005.jpg)

### Lightbox Overlay
![Lightbox Overlay](file:///C:/Users/Lenovo/.gemini/antigravity-ide/brain/d3937232-5e3e-48df-8f95-16da3f297a10/lightbox_overlay_1787306737356.jpg)

### Interaction States & Focus Rings
![Hover & Focus Interaction States](file:///C:/Users/Lenovo/.gemini/antigravity-ide/brain/d3937232-5e3e-48df-8f95-16da3f297a10/hover_interaction_states_1787306760548.jpg)

---

## A. Global Layout

- **Desktop Viewport Target**: 1280px to 1440px wide viewport (desktop only).
- **Maximum Content Width**: `1120px` max-width container (`margin: 0 auto; padding: 0 80px`).
- **Header Height**: `80px` fixed/sticky top navigation bar.
- **Main Content Margins**:
  - Top margin below header: `24px`
  - Gap between gallery and content: `48px`
  - Bottom padding: `48px`
  - Horizontal margin: Centered container with `80px` outer padding.
- **Horizontal & Vertical Spacing**:
  - Two-column main layout below gallery: Left content column (`65%` width, ~650px), Right sticky reservation card (`35%` width, ~370px), horizontal gap = `80px`.
  - Grid gaps in photo gallery: `8px`.
  - Vertical spacing between main sections: `32px` with `1px solid #EBEBEB` horizontal divider lines.
- **Background Colors**:
  - Main Page background: `#FFFFFF`
  - Header background: `#FFFFFF`
  - Photo Tour backdrop: `#FFFFFF`
  - Lightbox backdrop: `#000000` (or `rgba(0, 0, 0, 0.9)`)
  - Hover highlights: `#F7F7F7`
  - Card background: `#FFFFFF`
- **Borders & Dividers**:
  - Header bottom border: `1px solid #EBEBEB`
  - Card borders: `1px solid #DDDDDD`
  - Section horizontal dividers: `1px solid #EBEBEB`
- **Border Radii**:
  - Search bar pill radius: `40px`
  - Gallery outer rounded corners: `12px` (hero image left corners `12px 0 0 12px`, top-right image `0 12px 0 0`, bottom-right image `0 0 12px 0`)
  - Buttons / Action pills: `8px`
  - Reservation Card: `12px`
  - User Menu Pill: `30px`
- **Shadows**:
  - Search bar default shadow: `0 1px 2px rgba(0, 0, 0, 0.08), 0 4px 12px rgba(0, 0, 0, 0.05)`
  - Search bar hover shadow: `0 2px 4px rgba(0, 0, 0, 0.18)`
  - Sticky Reservation Card shadow: `0 6px 16px rgba(0, 0, 0, 0.12)`
  - Floating overlays / modals: `0 8px 28px rgba(0, 0, 0, 0.28)`

---

## B. Header

- **Airbnb Logo Placement**:
  - Position: Left aligned inside header container.
  - SVG Icon & Wordmark: `#FF385C` primary brand color, height `32px`, clickable link to home.
- **Search Bar Dimensions & Position**:
  - Position: Centered horizontally in header.
  - Dimensions: Height `48px`, width `350px` to `400px`.
  - Container styling: `border: 1px solid #DDDDDD`, `border-radius: 40px`, `background: #FFFFFF`, box shadow `0 1px 2px rgba(0,0,0,0.08)`.
  - Sections:
    1. **"Anywhere"**: `font-weight: 600`, `font-size: 14px`, color `#222222`.
    2. **Divider**: `width: 1px`, `height: 24px`, background `#DDDDDD`.
    3. **"Any week"**: `font-weight: 600`, `font-size: 14px`, color `#222222`.
    4. **Divider**: `width: 1px`, `height: 24px`, background `#DDDDDD`.
    5. **"Add guests"**: `font-weight: 400`, `font-size: 14px`, color `#717171`.
    6. **Search Icon Button**: Red circle (`width: 32px`, `height: 32px`, background `#FF385C`, `border-radius: 50%`, white magnifying glass SVG).
- **Right Navigation Area**:
  - **"Airbnb your home" / "Become a host"**: Pill button, text `font-size: 14px`, `font-weight: 600`, color `#222222`, hover background `#F7F7F7`, `border-radius: 22px`, `padding: 10px 14px`.
  - **Globe Icon Button**: Circular button `40px x 40px`, hover background `#F7F7F7`, `border-radius: 50%`, contains language globe SVG icon.
  - **User Menu Button**: Pill button (`height: 42px`, `padding: 5px 5px 5px 12px`, `border: 1px solid #DDDDDD`, `border-radius: 30px`, flex layout with `8px` gap, hamburger menu icon + user avatar `assets/images/avatars/host.jpeg` or default avatar SVG).
- **Hover States & Transitions**:
  - Search bar expands shadow on hover (`transition: box-shadow 0.2s ease`).
  - Nav buttons change background to `#F7F7F7` on hover (`transition: background 0.15s ease`).
- **Sticky / Fixed Behavior**:
  - `position: sticky`, `top: 0`, `z-index: 100`, background `#FFFFFF`. Remains fixed at top during scroll.

---

## C. Listing Page

- **Exact Title Text**:
  - `Romantic Jacuzzi 1BHK Candolim | Mirashya UG10`
- **Location & Sub-header Details**:
  - Rating / Badge: `★ New` / `★ 5.0`
  - Location: `Candolim, Goa, India` (underlined text, clickable link)
- **Share & Save Buttons**:
  - Right aligned above photo gallery grid.
  - **Share Button**: Icon (upload/share SVG) + Text "Share", `border: 1px solid #222222`, `border-radius: 8px`, `padding: 6px 12px`, `font-size: 14px`, `font-weight: 600`, hover background `#F7F7F7`.
  - **Save Button**: Icon (heart outline SVG) + Text "Save", same pill button styling. When saved, heart turns filled `#FF385C`.
- **Main Image Gallery Grid**:
  - **Visible Images**: 5 images in grid layout.
  - **Dimensions**: Width `1120px`, Height `400px` (or `450px`).
  - **Layout**: 1 large hero image on left (`50%` width), 4 smaller images in 2x2 grid on right (`25%` width each).
  - **Aspect Ratios**: Hero ~4:3, grid items ~4:3.
  - **Cropping**: `object-fit: cover`, `width: 100%`, `height: 100%`.
  - **Border Radius**: Outer grid corners `12px` (hero top-left/bottom-left `12px`, top-right item top-right `12px`, bottom-right item bottom-right `12px`).
  - **Gap**: `8px`.
  - **"Show all photos" Button**:
    - Position: Absolute at bottom-right of gallery (`bottom: 16px`, `right: 16px`).
    - Design: White background `#FFFFFF`, `border: 1px solid #222222`, `border-radius: 8px`, `padding: 6px 12px`, `font-size: 14px`, `font-weight: 600`, 9-dot grid icon + text `"Show all 15 photos"`.
    - Hover: Scale 1.02, background `#F7F7F7`.
- **Visible Sections Below Gallery**:
  - **Host Header Card**: "Entire serviced apartment hosted by Mirashya" (subtext: "2 guests · 1 bedroom · 1 bed · 1 bath", Host avatar `assets/images/avatars/host.jpeg`, size `56px x 56px`, rounded circle).
  - **Guest Favorite Laurels Banner**: Laurels (`assets/images/ui/laurel-left.png`, `assets/images/ui/laurel-right.png`), overall score `5.0`, review count summary.
  - **Highlights List**:
    - Self check-in (Check yourself in with the keypad)
    - Mirashya is a Superhost (Superhosts are experienced, highly rated hosts)
    - Great location (95% of recent guests gave location a 5-star rating)
  - **Property Description**: Detailed text description with "Show more" expand button.
  - **Sleeping Arrangements**: Card showing "Bedroom 1" with 1 queen bed (`border: 1px solid #DDDDDD`, `border-radius: 12px`, `padding: 24px`).
  - **Amenities Section**: Grid of icons & labels (Wifi, Kitchen, Hot tub/Jacuzzi, AC, Free parking, Self check-in) + "Show all 20 amenities" button.
  - **Sticky Reservation Card**:
    - Position: `position: sticky`, `top: 120px`, `z-index: 10`.
    - Price: `$175` / `₹4,500` per night (`font-size: 22px`, `font-weight: 600`).
    - Date Picker Box: Grid input box for CHECK-IN and CHECKOUT (`border: 1px solid #B0B0B0`, `border-radius: 8px`).
    - Guest Dropdown: "1 guest" selector dropdown.
    - Primary Reserve CTA: Gradient button (`background: linear-gradient(90deg, #E61E4D 0%, #E31C5F 50%, #D70466 100%)`, `color: #FFFFFF`, `font-weight: 600`, `height: 48px`, `border-radius: 8px`, width `100%`).
    - Price Calculation Breakdown: Base price x nights, Cleaning fee, Service fee, Taxes, Total before taxes (`font-weight: 600`, `font-size: 16px`).
  - **Reviews Section**: Overall rating header, 6 category rating bar chips (`assets/images/chips/*.png`), 2-column list of review cards (reviewer avatar `assets/images/avatars/rev1.jpeg` - `rev5.jpeg`, name, date, text).
  - **Location Section**: Map container, text title "Where you'll be", location description ("Candolim, Goa, India").
  - **Host Profile & Rules**: Host Mirashya bio, response rate, response time, "Contact Host" button, House rules, Safety & cancellation policy.

---

## D. Image Assets

Every image asset required by the visible listing page and Photo Tour / Lightbox overlays:

| Image Order | Asset Category | Description / Usage | Publicly Loaded Image URL | Intrinsic Dimensions |
|---|---|---|---|---|
| 1 | Font | Primary Variable Font | `https://airbnb-clone-umber-two.vercel.app/assets/fonts/AirbnbCerealVF.woff2` | N/A |
| 2 | Gallery / Tour 1 | Living Room & Balcony (Hero 1) | `https://airbnb-clone-umber-two.vercel.app/assets/images/2367476f-11c4-4a14-a7c6-267be62c1d59.jpeg` | 1200 x 800 |
| 3 | Gallery / Tour 2 | Outdoor Jacuzzi Hot Tub (Hero 2) | `https://airbnb-clone-umber-two.vercel.app/assets/images/67c61c6f-6260-4809-9510-0360e58a345d.jpeg` | 1200 x 800 |
| 4 | Gallery / Tour 3 | Living Area Seating (Hero 3) | `https://airbnb-clone-umber-two.vercel.app/assets/images/a9831aeb-f441-44f5-a38f-4cf54e3f0fcf.jpeg` | 1200 x 800 |
| 5 | Gallery / Tour 4 | Bedroom Bed View (Hero 4) | `https://airbnb-clone-umber-two.vercel.app/assets/images/090d8b0b-b539-42c0-84f8-e1fb0cdf9a93.jpeg` | 1200 x 800 |
| 6 | Gallery / Tour 5 | Kitchen & Dining Area (Hero 5) | `https://airbnb-clone-umber-two.vercel.app/assets/images/c904e1ab-a39d-4ef0-bdea-8c0bd16b9e3d.jpeg` | 1200 x 800 |
| 7 | Photo Tour 6 | Bathroom Shower Enclosure | `https://airbnb-clone-umber-two.vercel.app/assets/images/23ea6621-6f74-4baa-acea-2fd03e312b41.jpeg` | 1200 x 800 |
| 8 | Photo Tour 7 | Jacuzzi Balcony Evening View | `https://airbnb-clone-umber-two.vercel.app/assets/images/fc02f48f-a937-42c5-895d-f9cc3113d6ca.jpeg` | 1200 x 800 |
| 9 | Photo Tour 8 | Bedroom Side Table | `https://airbnb-clone-umber-two.vercel.app/assets/images/56c44812-52c0-4481-90d8-101ec1f34c7a.jpeg` | 1200 x 800 |
| 10 | Photo Tour 9 | Living Room Sofa Angle | `https://airbnb-clone-umber-two.vercel.app/assets/images/97c78f8a-5090-4663-aebc-ba4e13b47092.jpeg` | 1200 x 800 |
| 11 | Photo Tour 10 | Kitchen Counter Appliances | `https://airbnb-clone-umber-two.vercel.app/assets/images/9aa8e65f-94ac-4ba0-9a10-9ec91e536d22.jpeg` | 1200 x 800 |
| 12 | Photo Tour 11 | Bathroom Vanity Sink | `https://airbnb-clone-umber-two.vercel.app/assets/images/9be71047-fc52-438a-9270-75cb470f6752.jpeg` | 1200 x 800 |
| 13 | Photo Tour 12 | Balcony Seating View | `https://airbnb-clone-umber-two.vercel.app/assets/images/70325367-cbae-4993-b560-18cd3f6edd53.jpeg` | 1200 x 800 |
| 14 | Photo Tour 13 | Building Exterior Façade | `https://airbnb-clone-umber-two.vercel.app/assets/images/a45feaa2-b607-4092-83ac-5fd4b2894959.jpeg` | 1200 x 800 |
| 15 | Photo Tour 14 | Apartment Pool / Garden View | `https://airbnb-clone-umber-two.vercel.app/assets/images/f1da1c3d-0d10-481e-9b63-c71f9073f30b.jpeg` | 1200 x 800 |
| 16 | Photo Tour 15 | Entry Hallway View | `https://airbnb-clone-umber-two.vercel.app/assets/images/f6de1663-4e9c-4414-b63b-29a154a92ee1.jpeg` | 1200 x 800 |
| 17 | Avatar | Host Mirashya Profile Avatar | `https://airbnb-clone-umber-two.vercel.app/assets/images/avatars/host.jpeg` | 128 x 128 |
| 18-22 | Review Avatars | Reviewer Avatars (rev1 - rev5) | `https://airbnb-clone-umber-two.vercel.app/assets/images/avatars/rev1.jpeg` | 96 x 96 |
| 23-25 | Co-host Avatars | Co-host Avatars (co1 - co3) | `https://airbnb-clone-umber-two.vercel.app/assets/images/avatars/co1.jpg` | 96 x 96 |
| 26 | UI Badge | Guest Favorite Left Laurel | `https://airbnb-clone-umber-two.vercel.app/assets/images/ui/laurel-left.png` | 64 x 120 |
| 27 | UI Badge | Guest Favorite Right Laurel | `https://airbnb-clone-umber-two.vercel.app/assets/images/ui/laurel-right.png` | 64 x 120 |
| 28 | UI Icon | Search Bar House Icon | `https://airbnb-clone-umber-two.vercel.app/assets/images/ui/searchbar-house.png` | 48 x 48 |
| 29 | UI Icon | Discount Offer SVG | `https://airbnb-clone-umber-two.vercel.app/assets/images/ui/discount.svg` | 32 x 32 |
| 30-39 | Rating Chips | Category Chips (cleanliness, accuracy, etc.) | `https://airbnb-clone-umber-two.vercel.app/assets/images/chips/cleanliness.png` | 48 x 48 |

---

## E. Photo Tour Overlay

- **Trigger / How it Opens**: Clicking the `"Show all 15 photos"` button on the gallery grid or clicking any image in the main 5-photo grid.
- **Exact Layout**:
  - Fullscreen modal (`position: fixed`, `inset: 0`, `z-index: 1000`, background `#FFFFFF`).
  - Sticky Top Bar: Height `64px`, `position: sticky`, `top: 0`, background `#FFFFFF`, `border-bottom: 1px solid #EBEBEB`.
    - Left: Close `✕` button (`width: 32px`, `height: 32px`, `border-radius: 50%`, hover background `#F7F7F7`).
    - Center: Modal Title `"Photo tour"`.
    - Right: Share button & Save heart button.
  - Two-column Layout:
    - **Left Sidebar**: Sticky room categories panel (`width: 260px`, room categories: "Photo tour", "Living room", "Bedroom 1", "Bathroom", "Exterior"). Active category highlighted with light grey pill background `#F7F7F7` and left active indicator border.
    - **Right Photo Feed**: Vertical scrollable container (`flex: 1`, padding `24px 40px`). Photos displayed full-width or in a 2-column grid grouped under section headings ("Living room", "Bedroom 1", etc.).
- **Thumbnail / Selected Behavior**:
  - Clicking any image inside the Photo Tour opens the Lightbox overlay focused on that selected image index.
- **Navigation & Scrolling**:
  - Clicking sidebar category smoothly scrolls the right feed to that category heading (`scroll-behavior: smooth`).
- **Animations**:
  - Slide up from bottom on open (`transform: translateY(100%)` to `translateY(0)`, `transition: transform 300ms cubic-bezier(0.2, 0, 0, 1)`).
- **Keyboard Behavior**:
  - `Escape` key closes Photo Tour overlay and restores scroll position on main page.
- **Focus Behavior**: Focus trapped inside modal; initial focus set to close button.

---

## F. Lightbox Overlay

- **Trigger / How it Opens**: Clicking any individual photo inside the Photo Tour overlay or main gallery grid.
- **Initial Selected Image**: Index of clicked photo (0 to 14).
- **Exact Layout & Styling**:
  - Fullscreen dark mode modal (`position: fixed`, `inset: 0`, `z-index: 2000`, background `#000000`).
  - Top Bar:
    - Left: Counter text `"X / 15"` (`color: #FFFFFF`, `font-size: 14px`, `font-weight: 600`).
    - Right: Close button (`✕` icon, white SVG, hover opacity 0.8).
  - Centered Active Image:
    - `max-width: 85vw`, `max-height: 80vh`, `object-fit: contain`, centered in viewport.
- **Previous & Next Navigation Buttons**:
  - **Previous Button (`‹`)**: Fixed left middle (`left: 24px`, `top: 50%`, circular button `width: 48px`, `height: 48px`, background `rgba(255,255,255,0.15)`, border `1px solid rgba(255,255,255,0.3)`, white arrow SVG). Hover: background `rgba(255,255,255,0.25)`.
  - **Next Button (`›`)**: Fixed right middle (`right: 24px`, `top: 50%`, same styling).
- **Keyboard Behavior**:
  - `ArrowLeft`: Move to previous image (`(index - 1 + 15) % 15`).
  - `ArrowRight`: Move to next image (`(index + 1) % 15`).
  - `Escape`: Close Lightbox overlay and return to Photo Tour (or main listing page).
- **Close Behavior**:
  - Clicking `✕` close button or clicking black backdrop area closes Lightbox overlay.
- **Transitions**:
  - Fade transition between active images (`opacity: 0` to `1`, `duration: 200ms ease-in-out`).

---

## G. Interaction Map

| Interactive Element | Trigger | Expected Result | Animation / Transition | Keyboard Behavior |
|---|---|---|---|---|
| **Airbnb Logo** | Click | Navigates to home | Opacity change 0.8 | `Enter` / `Space` triggers click |
| **Search Bar** | Click / Focus | Opens search popover | Shadow grows `0 4px 12px rgba(0,0,0,0.18)` | `Tab` focuses search bar; `Enter` opens |
| **"Airbnb your home"** | Hover | Background turns `#F7F7F7` | `background 0.15s ease` | `Tab` focusable |
| **Globe Button** | Click | Opens Language/Currency modal | Background turns `#F7F7F7` | `Tab` focusable |
| **User Menu Pill** | Click | Toggles user dropdown menu | Shadow `0 2px 4px rgba(0,0,0,0.12)` | `Tab` focusable; `Enter` toggles |
| **Share Button** | Click | Opens Share overlay / copies link | Background turns `#F7F7F7` | `Tab` focusable |
| **Save Heart Button** | Click | Toggles saved state (fills heart `#FF385C`) | Heart scale bounce `scale(1.2)` to `scale(1)` | `Tab` focusable |
| **Gallery Hero & Grid Photos** | Click | Opens Lightbox directly at photo index | Scale image `1.03x` on hover | `Tab` focusable with outline focus ring |
| **"Show all 15 photos"** | Click | Opens Photo Tour overlay | Button scale `1.02x` on hover | `Tab` focusable; `Enter` opens tour |
| **Reserve Button** | Click | Submits reservation / triggers date check | Gradient shift / active press scale `0.98x` | `Tab` focusable; `Enter` clicks |
| **Date Inputs** | Click | Opens Date Range Picker calendar | Border turns `#222222` | `Tab` focusable |
| **Guest Picker** | Click | Toggles Guest Count dropdown | Border turns `#222222` | `Tab` focusable |
| **"Show more" Description** | Click | Expands full description text | Smooth height expand | `Tab` focusable |
| **Photo Tour Sidebar Tabs** | Click | Smooth scrolls photo feed to section | Smooth scroll animation | `Tab` / `ArrowUp` / `ArrowDown` navigate tabs |
| **Photo Tour Close (✕)** | Click / Escape | Closes Photo Tour overlay | Slide down `translateY(100%)` | `Escape` key closes overlay |
| **Lightbox Prev Button (‹)** | Click / Left Arrow | Displays previous photo | Fade transition `opacity 0.2s` | `ArrowLeft` key navigates prev |
| **Lightbox Next Button (›)** | Click / Right Arrow | Displays next photo | Fade transition `opacity 0.2s` | `ArrowRight` key navigates next |
| **Lightbox Close (✕)** | Click / Escape | Closes Lightbox overlay | Fade out overlay `opacity 0` | `Escape` key closes Lightbox |

---

## H. Typography

- **Font Family**:
  - Primary font: `Airbnb Cereal VF`, `-apple-system`, `BlinkMacSystemFont`, `Roboto`, `Helvetica Neue`, `sans-serif`.
- **Font Scale & Hierarchy**:
  - **Listing Title (H1)**: `font-size: 26px`, `font-weight: 600`, `line-height: 30px`, color `#222222`.
  - **Section Titles (H2)**: `font-size: 22px`, `font-weight: 600`, `line-height: 26px`, color `#222222`.
  - **Subsection Headings (H3)**: `font-size: 18px`, `font-weight: 600`, `line-height: 22px`, color `#222222`.
  - **Body Text**: `font-size: 16px`, `font-weight: 400`, `line-height: 24px`, color `#222222`.
  - **Subtext & Muted Labels**: `font-size: 14px`, `font-weight: 400`, `line-height: 18px`, color `#717171`.
  - **Small Caption**: `font-size: 12px`, `font-weight: 600`, `line-height: 16px`, color `#717171`.
  - **Primary CTA Text**: `font-size: 16px`, `font-weight: 600`, `line-height: 20px`, color `#FFFFFF`.
- **Color Palette**:
  - Brand Primary Red: `#FF385C`
  - CTA Gradient Red: `linear-gradient(90deg, #E61E4D 0%, #E31C5F 50%, #D70466 100%)`
  - Text Primary: `#222222`
  - Text Muted / Secondary: `#717171`
  - Border Light: `#DDDDDD`
  - Divider Line: `#EBEBEB`
  - Light Hover Fill: `#F7F7F7`
  - Dark Overlay Backdrop: `#000000`

---

## I. Responsive Behavior

- **Desktop-Only Scope**:
  - Per the assignment instructions, this project is strictly **desktop-only** (target viewports: 1280px, 1440px, 1920px).
  - Mobile/tablet layouts, responsive breakpoint adapters, drawer menus for mobile.
  - Container maintains `max-width: 1120px` with horizontal centering.

---

## Summary Findings & Architectural Recommendations

### 1. What Must Be Implemented
1. **Header Component**: Logo, centered interactive search bar pill, host/globe actions, user menu avatar pill.
2. **Main Listing Page Layout**:
   - Header title bar with Share & Save pills.
   - 5-image hero gallery grid with rounded outer corners and absolute `"Show all 15 photos"` button.
   - Left content section: Host details, Guest favorite banner, Key highlights list, Description with expander, Bedroom arrangements card, Amenities grid, Reviews section with rating category bars, Location map block, Host rules & details.
   - Right section: Sticky reservation card with price display, date range input box, guest selector, Reserve gradient button, price breakdown total.
3. **Photo Tour Overlay Modal**:
   - Sticky top bar with close button `✕` and Share/Save actions.
   - Left room category navigation sidebar.
   - Right vertically scrollable photo feed showcasing all 15 listing images.
4. **Lightbox Overlay Modal**:
   - Dark mode fullscreen view (`#000000`).
   - Center active image display.
   - Photo counter `"X / 15"` and close button `✕`.
   - Previous (`‹`) and Next (`›`) navigation arrows.
   - Full keyboard controls (`ArrowLeft`, `ArrowRight`, `Escape`).

### 2. What Is Unnecessary
1. **Mobile / Responsive Layouts**: Mobile viewports, responsive breakpoint adapters, drawer menus for mobile.
2. **Full Booking Backend**: Real payment processing, user authentication backend, database integration.
3. **External API Integrations**: Live Google Maps iframe API keys (static styled map card is sufficient).

### 3. What Information Still Needs to be Manually Verified
1. **Exact Guest Count Limit in Dropdown**: Maximum allowed guests in the guest selector dropdown (default: 1-2 guests).
2. **Exact Date Availability Range**: Specific default check-in / check-out dates displayed on initial render.

### 4. Proposed Component Architecture (React + CSS Modules / Vanilla CSS)

```
src/
├── assets/
│   ├── images/          # Downloaded/scraped reference images (15 listing photos, avatars, chips)
│   └── fonts/           # Airbnb Cereal font files
├── components/
│   ├── Header/
│   │   ├── Header.jsx
│   │   ├── Logo.jsx
│   │   ├── SearchBar.jsx
│   │   └── UserMenu.jsx
│   ├── Listing/
│   │   ├── ListingTitle.jsx
│   │   ├── ImageGallery.jsx
│   │   ├── HostHeader.jsx
│   │   ├── GuestFavoriteBanner.jsx
│   │   ├── HighlightsList.jsx
│   │   ├── Description.jsx
│   │   ├── SleepingArrangements.jsx
│   │   ├── AmenitiesGrid.jsx
│   │   ├── ReviewsSection.jsx
│   │   ├── LocationMap.jsx
│   │   └── StickyReservationCard.jsx
│   └── Overlays/
│       ├── PhotoTourModal.jsx
│       └── LightboxModal.jsx
├── context/
│   └── GalleryContext.jsx  # Manages open overlay state, active image index, photo tour visibility
├── App.jsx
└── index.css
```

---
*Specification compiled for PlayPower Labs Placement Assignment.*
