# Visual QA Report: Airbnb Listing Page Clone

This document logs the visual QA audit comparing our local implementation (`http://localhost:3000/`) against the official reference website (`https://airbnb-clone-umber-two.vercel.app/`) at a consistent 1440x900 desktop viewport.

---

## Visual QA Audit Findings

### 1. Main Content Container & Layout Margins
- **Reference**: Inner content width = `1120px` (`max-width: 1280px; padding: 0 80px`).
- **Local**: Inner content width was `960px` because `max-width: 1120px` with `padding: 0 80px` squeezed the inner box (`1120px - 160px = 960px`).
- **Difference**: Content container was 160px narrower than reference.
- **Likely Cause**: `box-sizing: border-box` combined with `max-width: 1120px` and `padding: 0 80px` in `global.css`.
- **Recommended Fix**: Update `.content-container` and `.header-container` to `max-width: 1280px; padding: 0 80px; width: 100%;` so inner content width is exactly `1120px`.

### 2. Left Column Width & Two-Column Grid
- **Reference**: Left content column width ~ `670px`, Right sticky column = `370px`, Gap = `80px`. Total = `1120px`.
- **Local**: Left content column was `510px` due to narrowed main container.
- **Difference**: Left content column was 160px too narrow.
- **Likely Cause**: Cascading effect from the narrowed content container.
- **Recommended Fix**: Expanding container width to `1280px` (`1120px` inner) automatically expands left column to `670px`.

### 3. Gallery Grid Dimensions & Cropping
- **Reference**: Gallery height = `400px`, gap = `8px`, outer corners `border-radius: 12px`.
- **Local**: Gallery height was `408px` (`grid-template-rows: 200px 200px` + `8px` gap).
- **Difference**: Gallery height was 8px taller than reference.
- **Likely Cause**: Height explicitly set to 408px instead of 400px.
- **Recommended Fix**: Set `.gallery-grid` to `grid-template-rows: 196px 196px; gap: 8px; height: 400px;`.

### 4. "Show all 15 photos" Button Position & Styling
- **Reference**: Button height `34px`, border `1px solid #222222`, `border-radius: 8px`, `padding: 6px 14px`, box shadow `0 1px 2px rgba(0,0,0,0.18)`.
- **Local**: Button height was `31px`.
- **Difference**: 3px difference in height.
- **Likely Cause**: Missing explicit `height: 34px` or `line-height` adjustment.
- **Recommended Fix**: Set explicit `height: 34px`, `display: flex`, `align-items: center` on `.show-all-photos-btn`.

### 5. Header Search Bar & User Menu Alignment
- **Reference**: Header height `80px`. Search bar `48px` centered. User menu pill `42px` height, border `1px solid #DDDDDD`.
- **Local**: Search bar width `326px` (slightly squeezed).
- **Difference**: Search bar section padding slightly narrower.
- **Likely Cause**: Container width squeeze.
- **Recommended Fix**: Fixed container width restores natural `350px - 380px` search bar width.

### 6. Rating Category Chips Layout
- **Reference**: 6 rating category score bars (`Cleanliness`, `Accuracy`, `Communication`, etc.) displayed in a 2-column or 3-column progress bar grid with category icons.
- **Local**: Rendered as simple 3-column text boxes without full rating progress bar visuals.
- **Difference**: Visual score progress bar graphics missing.
- **Likely Cause**: Simplified `RatingChip.jsx` markup.
- **Recommended Fix**: Update `RatingChip.jsx` to render title, numeric score, and visual progress bar matching Airbnb design.

---

## Action Plan & Fix Execution

1. Fix `.content-container` & `.header-container` max-width and padding in `global.css`.
2. Fix `.gallery-grid` height to `400px` in `ImageGallery.css`.
3. Fix `.show-all-photos-btn` height & padding in `ImageGallery.css`.
4. Update `RatingChip.jsx` with rating score progress bar visuals.
5. Re-run local app, capture updated screenshots, and verify visual alignment.
6. Run `npm run build`.

---
*Report generated during Visual QA Pass.*
