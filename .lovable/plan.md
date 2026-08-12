# Plan: Header & Hero for Kelly Cao Portfolio

## Goal
Build the first two sections of a professional biomedical engineering portfolio website: a sticky navigation header and a hero section. Use a corporate/professional aesthetic with a cool gray and muted blue palette, the Inter font globally, and smooth scrolling.

## What will be changed

1. **Global typography & smooth scrolling (`src/styles.css`, `src/routes/__root.tsx`)**
   - Load the Inter font via Google Fonts `<link>` in the root route head.
   - Set Inter as the global font family in `src/styles.css` under `@theme`.
   - Add `scroll-behavior: smooth` to the HTML element for anchor navigation.

2. **Design tokens (`src/styles.css`)**
   - Override the default theme to use the requested corporate palette: slate-50 background, slate-700 foreground/body text, and blue-600 as the primary accent.
   - Keep OKLCH format for all custom colors as required by the template.

3. **Home route (`src/routes/index.tsx`)**
   - Replace the placeholder page with a real landing page.
   - Add a sticky top navigation bar with a blurred/slate-50 background.
   - Left side: text logo "Kelly Cao".
   - Right side: links to "About", "Professional Experiences", "Projects", "Skills", "Certifications", "Coursework", "Contact me".
   - Include a hamburger menu for mobile that opens a slide-down or sheet-style menu.
   - Build a hero section with the exact required copy:
     - Overline: "Portfolio of Kelly Cao"
     - H1: "Biomedical Engineer | Design, Testing, and Compliance"
     - Sub-headline: "Leveraging a BS and MS in Biomedical Engineering to support product development. Passionate about regulatory compliance, continuous improvement, and creating innovative solutions that have meaningful impacts."
     - CTA button: "Download Resume" with a subtle hover-lift effect.
   - Add route-specific head metadata (title, description, og, twitter) for SEO.

4. **Verification**
   - Run the dev build to confirm no compilation errors.
   - Check the preview at desktop and mobile widths to verify the sticky nav, hamburger menu, and hero layout.

## Out of scope for this turn
- The "About Me" section will not be built yet; it will be added after this plan is approved and the header/hero are complete.
- No backend, no resume download functionality, no routing beyond the home page.
