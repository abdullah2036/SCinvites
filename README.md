# منصة دعوات نادي العلوم · SCinvites

Digital invitations for the Science Club: locked templates with per-track motion, personal and public links, leader requests with owner approval, RSVP, calendar files and owner-only analytics.

- **Club guide (Arabic):** [docs/guide-ar.md](docs/guide-ar.md)
- **Developer runbook:** [docs/runbook.md](docs/runbook.md)
- **Spec and plan:** [docs/superpowers/specs](docs/superpowers/specs) · [docs/superpowers/plans](docs/superpowers/plans)
- **Client handoff and design boards:** [docs/handoff.md](docs/handoff.md) · `design-reference/`

## Quick start

```bash
npm install
npm run db:dev   # local Postgres (keep running)
npm run dev
```

Tests: `npm test` · `npx playwright test` · `npm run typecheck` · `npm run lint`.

> The Thmanyah font files in `public/fonts/` are licensed for use, not redistribution — keep this repository private.
