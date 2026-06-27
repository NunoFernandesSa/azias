# A.D. AZIAS FC

Private website project for `A.D. Azias`, built with `Next.js`, `TypeScript`, and `Tailwind CSS`.

This README is intended as an internal onboarding document for the next people who will work on the project, including people who were not involved in the initial implementation.

## Project Status

- Private repository, not intended to be open source.
- Main frontend built with `Next.js App Router`.
- Design direction focuses on a modern club showcase website.
- The project currently relies on local static data.
- A future migration to `Strapi` is planned so non-technical staff can manage content through an admin interface.

## Tech Stack

- `Next.js 16`
- `React 19`
- `TypeScript`
- `Tailwind CSS 4`
- `react-icons`
- `zustand`
- `Radix Slot`
- `class-variance-authority`

## Local Setup

### Requirements

- `Node.js` 20+ recommended
- `npm` recommended to stay aligned with the current project setup

### Install

```bash
npm install
```

### Development

```bash
npm run dev
```

The app is available at `http://localhost:3000`.

### Checks

```bash
npm run lint
```

### Production Build

```bash
npm run build
npm run start
```

## Available Scripts

- `npm run dev`: start the development server
- `npm run build`: build the production app
- `npm run start`: run the production build
- `npm run lint`: run ESLint

## Project Structure

```text
src/
  app/                      App Router pages
  components/
    common/                 Global shared components (Navbar, Footer, Container, Title)
    features/               Feature/domain-based sections
    layout/                 Client/mobile layout helpers
    ui/                     Reusable UI primitives
  constants/                Static project data
  hooks/                    Custom hooks
  providers/                React providers
  styles/                   Global styles
  types/                    TypeScript types
```

## Page Organization

- Keep `page.tsx` files short.
- Delegate rendering logic to dedicated section components inside `src/components/features/...`.
- Example already in place: the calendar page delegates its UI to `src/components/features/calendar/CalendarSection.tsx`.

## Main Pages

- `/`: homepage
- `/calendario`: season calendar
- `/equipa`: squad
- `/loja`: shop
- `/contacto`: contact

## UI/UX Conventions

- Desktop navbar is a fixed sidebar with width `w-48`.
- Desktop main content uses a lateral offset aligned with the sidebar.
- The footer must also respect the desktop navbar offset.
- Prefer `min-h-dvh` over `h-screen`.
- Prefer `isolate` and `relative z-10` for safer layering.
- On image-heavy backgrounds, use a dark overlay such as `bg-primary/65` when needed for readability.
- Metadata is often displayed as badges.
- Stats should read like small dashboard indicators.

## Technical Conventions

- Use `next/image` whenever possible.
- Add `sizes` to important images.
- For purely decorative images, use `alt=""` and `aria-hidden="true"`.
- Use semantic structure: `section`, `h1`, `h2`, `aria-labelledby`, and similar patterns.
- Normalize data before rendering when source formats are inconsistent.
- Avoid negative `z-index` values when they can break layering.

## Global Layout

- `Navbar` is fixed on desktop and becomes a mobile header on smaller screens.
- `ClientLayout` manages how navigation and content fit together.
- `Footer` is rendered separately and must stay aligned with the desktop sidebar layout.

## Current Data Source

The project still relies mostly on local constants inside `src/constants/constants.ts`.

This currently includes:

- navigation
- calendar
- sponsors
- squad
- coaches
- shop products

Current limitation:

- some data structures are not fully consistent yet, especially the calendar data
- newer components already normalize these structures in the UI layer to avoid rendering issues

## Planned CMS

Recommended choice going forward: `Strapi`.

Why:

- easier for non-technical staff to use
- built-in admin interface
- simple content collections for players, matches, sponsors, news, and results
- API available without having to build a custom back-office from scratch

Recommended approach:

- keep `Next.js` as the frontend
- progressively migrate static data to `Strapi`
- only introduce Python later if a specific automation or business workflow requires it

## Important Notes

- The desktop navbar uses a fixed width of `12rem` (`w-48`): do not change it without checking the content and footer offsets.
- The mobile navbar closes on outside click and on link click.
- Components have already been progressively harmonized visually, so avoid going back to overly plain cards or raw page layouts.

## Known Technical Debt

At the moment, lint still reports warnings for components that still use `<img>`:

- `src/components/features/shop/product-card/ProductImage.tsx`
- `src/components/features/team/CoachCard.tsx`

These are not blocking issues, but they should eventually be migrated to `next/image`.

## Project Handover

If you are new to the project, this is the recommended reading order:

1. `src/app/layout.tsx`
2. `src/components/common/Navbar.tsx`
3. `src/app/page.tsx`
4. `src/components/features/`
5. `src/constants/constants.ts`

Then, for any major update:

1. check whether the page can remain lightweight
2. create a dedicated section component when needed
3. follow the visual conventions already in place
4. run `npm run lint`

## Final Note

This project is maintained as an internal product for the club.  
The goal is not to provide a generic starter, but to keep a clear, modern, and maintainable website for the next people who will work on it.
