# MenStyles

A web app that takes a few basics about you — age, height, weight, income, where you live, and what you care about most — and matches you to a personalized lifestyle archetype, with an ongoing dashboard to help you build momentum.

MenStyles is goal-based, not appearance-based. Every recommendation is framed around what works for *your* build, schedule, and goals — never around an "ideal" body type.

## MVP scope

This build includes:

- **Onboarding** (`/`): a 4-step wizard that collects your basics, home city + optional trip, and 2-3 lifestyle priorities, then generates your archetype.
- **Archetype Hub** (`/result`): your matched archetype, a snapshot of your stats, and a preview of all four lifestyle pillars (Health, Style, Finance, Social).
- **Dashboard** (`/dashboard`): your level/XP, streak, and roadmap progress, a 90-day roadmap checklist (one goal each for fitness, style, and social), quick links to each pillar, and a recent activity feed.
- A simple rule-based archetype generator (`src/lib/archetypes.ts`) that maps your stats and priorities to one of four archetypes: Balanced Builder, Outdoor Adventurer, Career-Focused Climber, and Social Connector.
- All app state (profile, archetype, XP, streak, roadmap) is stored in `localStorage` via React Context — no backend yet.

## Tech stack

- [Vite](https://vitejs.dev/)
- [React](https://react.dev/) + TypeScript
- [Tailwind CSS](https://tailwindcss.com/)
- [react-router-dom](https://reactrouter.com/)

## Getting started

```bash
npm install
npm run dev
```

Then open the printed local URL in your browser. Visiting `/result` or `/dashboard` before completing onboarding will redirect you back to `/`.

To build for production:

```bash
npm run build
```

## Project structure

```
src/
  types.ts            # shared types and default state
  lib/
    archetypes.ts      # archetype definitions, generator, and roadmap templates
    storage.ts          # localStorage persistence helpers
  context/
    AppContext.tsx      # global app state (profile, archetype, XP, streak, roadmap)
  components/
    layout/            # PageContainer, ProgressIndicator
    onboarding/         # step components for the onboarding wizard
    hub/                 # StatCard, PillarCard for the Archetype Hub
    dashboard/           # MetricCard, RoadmapChecklist, ActivityFeed
  pages/
    Onboarding.tsx
    ArchetypeHub.tsx
    Dashboard.tsx
    ComingSoon.tsx       # placeholder for Health/Style/Finance/Social pages
```

## Next steps

- Build out the full Health, Style, Finance, and Social pillar pages (currently "coming soon" placeholders).
- Add an Explore/Nearby page with location-based suggestions, travel mode, and "Explorer XP" for trips.
- Add badges/achievements for completed roadmap goals and milestones.
- Refine streak logic (currently a static placeholder set at profile creation).
- Replace localStorage with a real backend and user accounts/authentication.
