Move mobile hamburger menu to the right

## Goal
Position the mobile hamburger menu button on the right side of the sticky header while keeping the desktop navigation links centered.

## Current state
`src/components/Header.tsx` uses a single flex container with `justify-center`. On mobile, the hamburger button renders near the horizontal center because it is the only visible element inside a centered flex container.

## Proposed change
Update the header's inner container in `src/components/Header.tsx`:
- Change flex justification from `justify-center` to `justify-end lg:justify-center`.
- The hamburger button (`lg:hidden`) will then align to the right on mobile.
- The desktop navigation (`hidden lg:flex`) will remain centered on large screens.

## Files to edit
- `src/components/Header.tsx`

## Verification
- Screenshot the header at a mobile viewport width to confirm the hamburger icon sits on the right.
- Screenshot at desktop width to confirm the nav links stay centered.
