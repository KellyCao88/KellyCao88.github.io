# Plan: Connect Section

## Goal
Add a dark, premium "Connect" section at the bottom of the page to close out the portfolio. It should provide centered contact CTAs, match the requested deep-slate aesthetic, and wire up the existing "Contact me" nav link.

## What will be changed

1. **New component: `src/components/Connect.tsx`**
   - Dark section (`bg-slate-900`) with `id="contact"` so the header "Contact me" link scrolls here.
   - Centered layout with generous vertical padding.
   - Headline: "Let's Connect" (`text-4xl`, `font-bold`, `text-slate-50`).
   - Sub-headline: "Whether you are hiring for a role or simply want to connect, my inbox is always open." (`max-w-2xl`, centered, `text-slate-300`).
   - Three sleek outline-style CTA buttons:
     - **Email Me** — `mailto:keca4089@gmail.com` with a Mail icon.
     - **LinkedIn** — `https://www.linkedin.com/in/kelly-cao-490a031b8/` with a LinkedIn icon, opens in a new tab.
     - **Download Resume** — links to `/resume.pdf` with a Download icon (consistent with the Hero CTA).
   - Buttons stack vertically on mobile and sit in a horizontal row on `md`+ screens.
   - Subtle hover lift/shadow transition on each button.

2. **Home route: `src/routes/index.tsx`**
   - Import and render `<Connect />` immediately after `<Coursework />` so it closes the page before the `</main>` tag.

3. **Polish pass**
   - Confirm smooth scrolling is already enabled in `src/styles.css` (`html { scroll-behavior: smooth; }`) so anchor links still work.
   - Confirm project cards already have a hover lift (`hover:-translate-y-1`).
   - Apply matching subtle hover transitions to the new Connect buttons.

## Out of scope for this turn
- No footer or copyright line unless requested.
- No backend or contact form.
- No actual resume file upload; the Download Resume button will link to the existing `/resume.pdf` path used in the Hero.
