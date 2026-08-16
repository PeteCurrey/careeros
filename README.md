# Career OS

The Career Operating System — a production-grade platform that supports a person throughout their entire working life.

> Education → Career Discovery → Skills Development → First Opportunities → Employment → Progression → Career Changes → Leadership → International Mobility → Entrepreneurship

---

## Tech Stack

- **Next.js 16.3.1** (App Router, TypeScript strict)
- **React 19.2.8**
- **Tailwind CSS v4.3.3** (CSS-first `@theme`, OKLCH colour space)
- **Supabase** (PostgreSQL + Row Level Security)
- **Vitest** (unit tests) + **Playwright** (E2E & accessibility)

## Getting Started

```bash
# Install dependencies
npm install

# Set up environment variables
cp .env.local.example .env.local

# Run development server
npm run dev

# Run type check
npm run typecheck

# Run unit tests
npm test

# Production build
npm run build
```

## Project Structure

```
career-os/
├── src/
│   ├── app/                  # Next.js App Router pages & layouts
│   ├── components/           # Reusable UI & layout components
│   │   ├── layout/           # Header, Footer, MegaMenu, SkipLink
│   │   ├── marketing/        # Landing page components
│   │   └── ui/               # Design system primitives
│   ├── lib/                  # Utilities, routes registry, navigation
│   └── types/
│       └── platform/         # Domain type system
├── supabase/
│   └── migrations/           # 11 timestamped SQL migrations (RLS enabled)
└── e2e/                      # Playwright tests
```

## Architecture Highlights

- **5-tenant workspace model**: `INDIVIDUAL`, `SCHOOL`, `EMPLOYER`, `PARTNER`, `ADMIN`
- **Consent as first-class**: append-only audit ledger, SHA-256 integrity chaining
- **Field-level access control**: `DataAccessGrant` — no blanket employer data access
- **Jurisdictional profiles**: FERPA, COPPA, NYC LL 144, EU AI Act, EEOC
- **WCAG 2.1 AA**: SkipLink, semantic HTML, keyboard navigation, colour contrast

## Routes (43 static pages)

Marketing, product, audiences, pathways, trust, standards, regulatory, legal, company, auth shell, and application shell.

## Environment Variables

Copy `.env.local.example` to `.env.local` and fill in your Supabase credentials.
