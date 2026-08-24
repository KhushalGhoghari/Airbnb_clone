# Airbnb Clone - Desktop Listing Page & Overlays

[![Vercel Deployment](https://img.shields.io/badge/Vercel-Live%20Demo-000000?style=for-the-badge&logo=vercel)](https://airbnb-clone-project-seven.vercel.app/)
[![GitHub Repo](https://img.shields.io/badge/GitHub-Repository-181717?style=for-the-badge&logo=github)](https://github.com/KhushalGhoghari/Airbnb_clone)
[![React](https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-5-646CFF?style=for-the-badge&logo=vite)](https://vitejs.dev/)

A pixel-accurate, high-performance desktop recreation of an Airbnb property listing page, including its two overlay views (**Photo Tour** and **Lightbox**), created for the **PlayPower Labs** frontend assignment.

---

## 🔗 Live Demo & Links

- 🌐 **Live Website**: [https://airbnb-clone-project-seven.vercel.app/](https://airbnb-clone-project-seven.vercel.app/)
- 📦 **GitHub Repository**: [https://github.com/KhushalGhoghari/Airbnb_clone](https://github.com/KhushalGhoghari/Airbnb_clone)

---

## ✨ Features & Architecture

### 1. Listing Page
- **Sticky Header & Search Bar**: Logo, search control pill (`Anywhere | Any week | Add guests`), host control, language globe button, and user menu pill.
- **Hero Image Gallery**: 5-photo grid (`1 large hero + 4 stacked small photos`) with hover brightness states and a **"Show all 15 photos"** trigger button.
- **Header Actions**: Interactive **Share** and **Save** (heart toggle) buttons.
- **Host Header Card**: Host profile photo, specs (`2 guests · 1 bedroom · 1 bed · 1 bath`), and Superhost badge.
- **Guest Favorite Laurels Banner**: Laurels card with rating `5.0` and review count.
- **Where You'll Sleep**: Photo cards for `Bedroom` (double bed) and `Living room` (sofa).
- **Interactive Dual Calendar**: Side-by-side **October 2026** and **November 2026** calendars with `18 Oct – 23 Oct` date range highlighting, keyboard shortcut button, disabled date indicators, and a **Clear dates** action.
- **Sticky Reservation Card**: Unpins dynamically at the end of the two-column grid so lower sections span the **100% full container width**.
- **Full-Width Bottom Sections**:
  - **Amenities Grid**: 2-column list of property amenities.
  - **Reviews Section**: Rating score progress bars and 4 reviewer feedback cards.
  - **Where You'll Be**: Custom map graphic (`sea & land split, green highlights, black center pin, zoom controls`) + Neighbourhood highlights description.
  - **Hosted by Mirashya**: Host stats, bio, response rate, and contact button.
  - **Things to Know**: 3-column grid covering Cancellation policy, House rules, and Safety & property.
  - **More Stays Nearby**: 5-card listing carousel grid with prices, ratings, and pagination.

### 2. Full-Screen Photo Tour Overlay
- Fullscreen modal overlay (`z-index: 1000`) with left room category navigation (`Photo tour`, `Living room`, `Bedroom 1`, `Kitchen & Dining`, `Bathroom 1`, `Exterior`).
- Smooth auto-scrolling to room sections.
- Focus trapping and `Escape` key close handling.

### 3. Single-Photo Lightbox Overlay
- Fullscreen dark backdrop viewer (`z-index: 2000`) displaying `1 / 15` photo counter.
- Keyboard navigation (**`ArrowLeft`**, **`ArrowRight`**, **`Escape`**).
- Boundary wrap-around (`Photo 1 ↔ Photo 15`), smooth fade transitions, and background scroll locking.

---

## 🛠️ Technology Stack

- **Framework**: React 18
- **Build Tool**: Vite 5
- **Language**: JavaScript (ES6+)
- **Styling**: Vanilla CSS with CSS Custom Properties / Design Tokens (`variables.css` & `global.css`)
- **Icons & Assets**: Custom SVG components and local media assets (`public/assets/images/`)
- **State Management**: React Context API (`OverlayContext.jsx`)
- **Deployment**: Vercel

---

## 🚀 Local Setup & Installation

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Steps

1. **Clone the repository**:
   ```bash
   git clone https://github.com/KhushalGhoghari/Airbnb_clone.git
   cd Airbnb_clone
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the local development server**:
   ```bash
   npm run dev
   ```
   Open your browser and navigate to `http://localhost:3000/`.

4. **Build for production**:
   ```bash
   npm run build
   ```
   The optimized production bundle will be generated in the `dist/` directory.

5. **Preview the production build**:
   ```bash
   npm run preview
   ```

---

## 📁 Project Structure

```text
Airbnb_clone/
├── public/
│   └── assets/
│       └── images/             # Local property photos & supporting UI assets
├── src/
│   ├── components/
│   │   ├── Gallery/            # ImageGallery component & CSS
│   │   ├── Header/             # Header, Logo, SearchBar, UserMenu components
│   │   ├── Listing/            # PropertyInfo, CalendarSection, LocationMap, etc.
│   │   ├── Overlays/           # PhotoTour & Lightbox overlays
│   │   └── UI/                 # Reusable UI components (RatingChip, Button)
│   ├── context/
│   │   └── OverlayContext.jsx  # Global overlay state management
│   ├── data/
│   │   ├── listingData.js      # Property metadata & reviews
│   │   └── propertyImages.js   # Centralized 15 property photos & supporting assets
│   ├── styles/
│   │   ├── global.css          # Global resets, layout containers & focus rings
│   │   └── variables.css       # CSS design tokens (colors, typography, radii)
│   ├── utils/
│   │   └── imageFallback.js    # Image fallback utility
│   ├── App.jsx                 # Main application layout component
│   └── main.jsx                # Entry point
├── ARCHITECTURE.md             # Component architecture & state model spec
├── ARCHITECTURE_DIAGRAM.md     # Production-scale marketplace system architecture
├── REFERENCE_SPEC.md           # Reference site visual specification
├── REFERENCE_IMAGE_ASSETS.md   # Inventory of all 15 property photos
├── LOCAL_ASSET_STATUS.md       # Status report of local downloaded assets
├── IMAGE_DEBUG.md              # Technical image debugging diagnosis report
├── VISUAL_QA.md                # Visual QA comparison report
├── FINAL_CODE_REVIEW.md        # Code review findings & optimizations
├── package.json
└── vite.config.js
```

---

## 📄 License

This project was built for evaluation purposes as part of the PlayPower Labs frontend assignment.
