# Plan: Refine Header and Hero Layout

## Goal
Adjust the header and hero based on feedback: keep the headline on one line, remove the "Kelly Cao" header logo, and make the navigation feel more expanded.

## What will be changed

1. **Header (`src/components/Header.tsx`)**
   - Remove the left-side "Kelly Cao" text logo.
   - Rename the "Professional Experiences" nav link to "Experiences".
   - Expand the navigation: center the desktop nav links within the full header width and increase horizontal spacing between items so the section feels more open.
   - Keep the mobile hamburger menu unchanged.

2. **Hero (`src/components/Hero.tsx`)**
   - Ensure the main h1 headline renders on a single line on desktop by reducing the large breakpoint font size and/or preventing wrapping at `md` and above.
   - Keep the overline "Portfolio of Kelly Cao" and all existing copy exactly as specified.
   - Preserve the CTA button and hover-lift effect.

## Out of scope
- No changes to colors, typography, or smooth scrolling.
- No new sections (About Me remains pending).
