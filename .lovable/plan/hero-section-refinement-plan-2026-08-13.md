# Hero Section Refinement Plan

## Goal
Reduce the feeling of excessive whitespace in the Hero section by adding ambient depth and a structured glassmorphism content container.

## Changes

### 1. Ambient Background Glow
- Keep the existing faint dot-grid pattern (`opacity-[0.03]`, radial gradient).
- Add two absolutely positioned, highly blurred gradient orbs behind the content:
  - A faint MedTech blue orb (`bg-primary/20` or `bg-blue-600/20`) with `blur-3xl`.
  - A faint slate orb (`bg-slate-400/20`) with `blur-3xl`.
- Position them asymmetrically (e.g., top-left and bottom-right of the hero) so they peek behind the glass card without overwhelming readability.

### 2. Glassmorphism Container
- Wrap the profile picture, overline, headline, paragraph, and CTA button in a single central container.
- Container styling:
  - `bg-white/70` or `bg-white/80` translucent white background
  - `backdrop-blur-md` frosted blur
  - `border border-slate-200` delicate 1px border
  - `rounded-3xl` soft corners
  - `p-10 md:p-12` generous internal padding
  - `shadow-xl shadow-slate-200/50` soft diffused shadow
- Ensure the container remains centered via the existing `flex flex-col items-center justify-center` parent.

### 3. Verification
- Run `bun run build` to confirm no hydration or class-name issues.
- Visually inspect the preview to confirm the orbs are subtle, the card is readable, and the heading remains centered.

## Files to edit
- `src/components/Hero.tsx`
