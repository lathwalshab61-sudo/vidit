---
name: ExploreVerse Narrative System
colors:
  surface: '#fbf9f3'
  surface-dim: '#dcdad4'
  surface-bright: '#fbf9f3'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f5f3ed'
  surface-container: '#f0eee8'
  surface-container-high: '#eae8e2'
  surface-container-highest: '#e4e2dd'
  on-surface: '#1b1c18'
  on-surface-variant: '#43474d'
  inverse-surface: '#30312d'
  inverse-on-surface: '#f3f1eb'
  outline: '#74777e'
  outline-variant: '#c4c6ce'
  surface-tint: '#49607e'
  primary: '#000f22'
  on-primary: '#ffffff'
  primary-container: '#0a2540'
  on-primary-container: '#768dad'
  inverse-primary: '#b0c8eb'
  secondary: '#006a61'
  on-secondary: '#ffffff'
  secondary-container: '#86f2e4'
  on-secondary-container: '#006f66'
  tertiary: '#1a0b00'
  on-tertiary: '#ffffff'
  tertiary-container: '#381e00'
  on-tertiary-container: '#af8255'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d2e4ff'
  primary-fixed-dim: '#b0c8eb'
  on-primary-fixed: '#001c37'
  on-primary-fixed-variant: '#314865'
  secondary-fixed: '#89f5e7'
  secondary-fixed-dim: '#6bd8cb'
  on-secondary-fixed: '#00201d'
  on-secondary-fixed-variant: '#005049'
  tertiary-fixed: '#ffdcbd'
  tertiary-fixed-dim: '#f0bd8b'
  on-tertiary-fixed: '#2c1600'
  on-tertiary-fixed-variant: '#623f18'
  background: '#fbf9f3'
  on-background: '#1b1c18'
  surface-variant: '#e4e2dd'
typography:
  display-hero:
    fontFamily: Playfair Display
    fontSize: 56px
    fontWeight: '600'
    lineHeight: 64px
  display-hero-mobile:
    fontFamily: Playfair Display
    fontSize: 36px
    fontWeight: '600'
    lineHeight: 44px
  headline-lg:
    fontFamily: Playfair Display
    fontSize: 40px
    fontWeight: '600'
    lineHeight: 48px
  headline-lg-mobile:
    fontFamily: Playfair Display
    fontSize: 28px
    fontWeight: '600'
    lineHeight: 36px
  headline-md:
    fontFamily: Playfair Display
    fontSize: 28px
    fontWeight: '500'
    lineHeight: 36px
  headline-sm:
    fontFamily: Playfair Display
    fontSize: 22px
    fontWeight: '600'
    lineHeight: 28px
  body-xl:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 15px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 20px
  label-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 18px
  label-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
  label-caps:
    fontFamily: Plus Jakarta Sans
    fontSize: 11px
    fontWeight: '700'
    lineHeight: 14px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  gutter: 1.5rem
  gutter-mobile: 1rem
  margin: 3rem
  margin-mobile: 1.25rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
---

## Brand & Style

This design system expresses high-end international travel discovery through an editorial, immersive lens. It pairs the romance of heritage travel publications with modern digital ergonomics, evoking wanderlust, trust, curation, and refined adventure.

The aesthetic blends **Editorial Elegance** and **Modern Glassmorphic Layering**:
- Rich, high-fidelity imagery acts as the primary canvas foundation.
- Atmospheric frosted surfaces hover over expansive photography, lending lightness to data-dense travel itineraries.
- High-contrast, stately typography is balanced by clean, highly legible operational UI.
- Accents reference organic equatorial landscapes (dense tropical foliage, sun-washed sands, and deep ocean trenches).

## Colors

The palette derives from terrestrial and nautical horizons:

- **Primary (`#0A2540` - Deep Ocean Navy):** Establishes authority, high-contrast readability, grounding backgrounds, headers, and primary structural elements.
- **Secondary (`#0D9488` - Tropical Flora Teal):** Conveys vital energy and lush wilderness. Employed for primary interactive CTAs, verified badges, active filter states, and booking triggers.
- **Tertiary (`#D4A373` - Coastal Dune Gold):** Evokes sunlight and warm shores. Reserved for luxury status markers, curator badges, rating stars, and editorial accents.
- **Neutral Canvas (`#F8F6F0` - Soft Sand):** A low-strain, sun-bleached foundation replacing stark clinical whites for page backgrounds, low-tier containers, and structural dividers.
- **Surface Elevation System:**
  - Base canvas: `#F8F6F0`
  - Elevated cards & sheets: `#FFFFFF`
  - Floating panels / Glass base: `rgba(255, 255, 255, 0.72)` paired with `rgba(10, 37, 64, 0.06)` borders.
  - Deep Dark Mode / Hero Immersive Scrim: `#061526` fading into transparent overlays.

## Typography

The pairing reconciles classic editorial wanderlust with modern product clarity.

- **Headlines (`Playfair Display`):** Reserved for destination titles, brand statements, collection curators, and section openings. Maintain generous line heights to preserve the distinct elegance of serif ascenders and descenders.
- **Body & Operational Labels (`Plus Jakarta Sans`):** Selected for high legibility across search fields, logistics data, coordinates, flight indicators, and prices.
- **Micro-Copy (`label-caps`):** Rendered with `letter-spacing: 0.08em` in all uppercase styling for category tags (e.g., `EXPEDITION`, `COASTAL ESCAPE`, `BOUTIQUE LODGE`).

## Layout & Spacing

A 12-column fluid grid defines tablet and desktop viewports, condensing to an 8-column layout on small tablets and a 4-column layout on mobile devices.

- **Breakpoints:**
  - Mobile: `< 640px` (4 columns, `margin-mobile: 1.25rem`, `gutter-mobile: 1rem`)
  - Tablet: `640px – 1024px` (8 columns, `margin: 2rem`, `gutter: 1.25rem`)
  - Desktop: `> 1024px` (12 columns, max-width `1440px`, `margin: 3rem`, `gutter: 1.5rem`)

- **Vertical Rhythm:** 
  - Section blocks utilize `space-xl` multiplied by 2 (5rem) on desktop to achieve an unhurried, magazine-like cadence.
  - Sub-elements within cards and flight/itinerary rows maintain tight cohesion via `space-xs` and `space-sm`.

## Elevation & Depth

Depth is modeled as physical layers floating above travel scenes, relying on soft chromatic dispersion rather than generic grey drop shadows.

- **Level 0 (Canvas Base):** Plain `#F8F6F0` matte background.
- **Level 1 (Card & Content Blocks):** Pure `#FFFFFF` with a subtle contact shadow: `0 4px 20px -2px rgba(10, 37, 64, 0.05)`, edged with a 1px solid border of `rgba(10, 37, 64, 0.06)`.
- **Level 2 (Glassmorphic Floating Search & Navbars):** Surface composed of `background: rgba(255, 255, 255, 0.78); backdrop-filter: blur(16px); -webkit-backdrop-filter: blur(16px);`. Box shadow: `0 16px 36px -4px rgba(10, 37, 64, 0.10)`. Outer rim uses a 1px hairline border: `rgba(255, 255, 255, 0.6)`.
- **Level 3 (Modals, Lightboxes & Itinerary Drawers):** `0 24px 48px -8px rgba(10, 37, 64, 0.18)` positioned over a backdrop veil tinted with `#0A2540` at `45%` opacity with a `4px` blur.

## Shapes

The visual language balances architectural precision with rounded, welcoming corners:

- **Inputs, Buttons, and Selectors:** Default to `0.5rem` (`8px`) for compact stability, while icon containers and search bars utilize continuous pill-radius curves (`9999px`).
- **Cards and Modal Panels (`rounded-lg` / `rounded-xl`):** `1rem` (`16px`) to `1.5rem` (`24px`) to gracefully wrap high-resolution bleed imagery without clipping essential composition.
- **Micro-Badges & Filter Chips:** Full-pill geometry (`9999px`) to visually separate operational tags from architectural card containers.

## Components

### Buttons
- **Primary:** Filled `#0D9488` with `#FFFFFF` text. Hover transitions to `#0A7D74` with a gentle translateY(-1px) lift. Padding: `12px 24px`. Roundedness: `0.5rem` or full pill for quick booking actions.
- **Secondary (Editorial Dark):** Filled `#0A2540` with `#FFFFFF` text. Used for primary navigation triggers and final checkouts.
- **Ghost / Glass:** Translucent white background (`rgba(255, 255, 255, 0.25)`) with white text and backdrop blur, overlaid directly across hero photographs.

### Floating Search & Itinerary Bar
- A centralized floating horizontal island.
- Constructed with Level 2 glassmorphic blur, segmented into segmented zones: "Where", "When", "Travel Style", and "Curators".
- Hovering zones shifts background to `rgba(10, 37, 64, 0.03)` with clean vertical hairlines (`rgba(10, 37, 64, 0.08)`) between entries.

### Destination & Itinerary Cards
- Aspect ratio defaults to `4:5` (portrait portraiture) or `16:10` (landscape collections).
- Image occupies the top or full background with bottom-scrim gradients (`linear-gradient(180deg, rgba(10,37,64,0) 40%, rgba(10,37,64,0.85) 100%)`).
- Floating price chips appear in the top-right corner using Level 2 frosted glass.

### Destination Tags & Micro-Badges
- Scaled to `label-caps` typography.
- Filled with a subtle tint: `rgba(13, 148, 136, 0.10)` background with `#0D9488` text for natural/adventure filters; `rgba(212, 163, 115, 0.15)` with `#9C6E3D` for luxury tiers.

### Star Ratings
- Displayed with solid 5-star vectors rendered in tertiary `#D4A373`.
- Accompanied by numerical rating in bold `Plus Jakarta Sans` and review counts enclosed in parentheses with reduced opacity.

### Form Inputs & Date Pickers
- Bordered in `rgba(10, 37, 64, 0.15)` against white or sand backgrounds.
- Active focus state applies a crisp `2px` ring in `#0D9488` with zero outer offset fuzziness.