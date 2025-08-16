# Blitz Insights – Frontend (React + Tailwind)

A corporate-styled rebuild of [blitz-insights.com](https://blitz-insights.com) using:
- **React (Vite)**
- **Tailwind CSS**
- **React Router**
---

## 🚀 Setup & Run

### Prerequisites
- Node.js 18+
- npm (or yarn/pnpm)

### Install & Dev Run
```bash
git clone https://github.com/SuryanshuShekhar/blitz-insights-react.git
cd blitz-insights-react
npm install
npm run dev

**Folder Structure & Naming Conventions**

blitz-insights-react/
├── public/              # static assets (logo, images)
├── src/
│   ├── components/      # shared UI (Header, Footer, Button, Card, etc.)
│   ├── data/            # site-wide content objects (site.js, services.js, faq.js)
│   ├── pages/           # route-level pages (Home.jsx, About.jsx, Services.jsx, ...)
│   ├── App.jsx          # router + layout
│   ├── index.css        # global Tailwind base + overrides
│   └── main.jsx         # React entry point
├── index.html
├── tailwind.config.js
├── postcss.config.cjs
├── package.json
└── README.md


**Architectural Decisions (ADR style)**

ADR-001: Use Vite + React Router

Context: Need a fast dev environment and client-side routing.
Decision: Adopt Vite for speed + HMR, React Router for navigation.
Consequences: SPA routing, no SSR, excellent DX.

ADR-002: Styling with Tailwind

Context: Corporate UI with consistent design system, minimal CSS overhead.
Decision: Tailwind CSS with custom config (Inter font, brand palette, spacing).
Consequences: Utility-first approach, fewer CSS files, consistent typography/colors.

ADR-003: Centralized Content in src/data

Context: The site contains repeatable structured sections (services, FAQ, industries).
Decision: Store copy/labels in JS objects in src/data/.
Consequences: Simplifies content updates without touching JSX.

ADR-004: Accessibility & Corporate Design

Context: Improve over original site with better UX and compliance.
Decision: Add skip link, focus-visible styles, semantic HTML. Palette = corporate blue/gray, font = Inter, tighter spacing.
Consequences: Better accessibility, SEO, and consistent corporate look.
