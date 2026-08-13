# Premium Minimalist Biomedical Portfolio Redesign

## Goal
Refresh the global visual language of the portfolio to a premium, minimalist biomedical-engineering aesthetic: cool off-white canvas, sharp slate headings, readable gray body text, crisp white bordered cards, and a deep MedTech blue accent.

## What will change

### 1. Global design tokens (`src/styles.css`)
- Keep Inter as the global sans font (already loaded).
- Set `--background` to a soft cool off-white matching `bg-slate-50`.
- Set `--foreground` to a dark slate (`text-slate-800`) for headings and primary text.
- Set `--muted-foreground` to a medium gray (`text-slate-600`) for body paragraphs and secondary text.
- Set `--primary` to deep MedTech blue `#1e3a8a` and adjust `--primary-foreground` for contrast.
- Set `--border` to a delicate slate-200 tone for 1px card borders.
- Keep `--card` as pure white for card surfaces.
- Tighten `--radius` toward `rounded-md` for a modern software-interface feel.

### 2. Hero section (`src/components/Hero.tsx`)
- Convert the hero to `min-h-[75vh] flex flex-col justify-center items-center py-12`.
- Constrain intro text to `max-w-2xl` and center it.
- Add a very faint (3% opacity) abstract dot-grid background pattern to subtly evoke data/signal processing without visual noise.
- Keep the circular headshot, overline, headline, sub-headline, and CTA; ensure the CTA uses the new primary blue.

### 3. Card & panel styling across components
Apply a consistent white card treatment to:
- `src/components/Projects.tsx` project cards
- `src/components/Skills.tsx` skill category cards
- `src/components/Certifications.tsx` certification cards
- `src/components/Experiences.tsx` timeline panels
- Any other bordered surface (About Me, Coursework accordion, Connect section where appropriate)

Each card/panel will use:
- `bg-card` (white)
- `border border-border` (slate-200)
- `shadow-sm`
- `hover:shadow-md transition-shadow` on interactive cards

### 4. Buttons & prominent links
- Update the Hero "Resume" CTA and the Connect "Resume" button to use the deep MedTech blue primary color.
- Ensure primary buttons have `rounded-md` (via the tightened radius token or explicit class).

### 5. Verification
- Run `bun run build` to confirm no type or build errors.
- Spot-check the preview for consistent spacing, contrast, and the hero pattern visibility.

## Out of scope
- No content changes (text, project descriptions, links, images).
- No layout restructuring beyond the hero flex container and card styling.
- No new pages or navigation changes.
