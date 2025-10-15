# Inventory Management

Full‑stack inventory dashboard with:
- Client: Next.js (App Router), TypeScript, Tailwind CSS, Redux Toolkit + RTK Query, Recharts
- Server: Node.js, TypeScript, Prisma, PostgreSQL

## Monorepo Structure
- Client/ — Next.js app (UI, dashboards, charts)
- Server/ — API + Prisma ORM
- Server/prisma/seedData — JSON seed files (products, sales, expenses, summaries, users, etc.)

## Prerequisites
- Node.js 18+ (LTS recommended)
- PostgreSQL 13+
- npm or pnpm
- Mac/Linux/WSL recommended

## Quick Start

1) Clone
```bash
git clone https://github.com/<your-username>/InventoryManagement.git
cd InventoryManagement
```

2) Install deps
```bash
cd Server && npm install
cd ../Client && npm install
```

3) Configure environment (Server)
```bash
# Server/.env
PORT=8000
DATABASE_URL="postgresql://<user>:<password>@localhost:5432/inventorymanagement?schema=public"
```

4) Database setup (Server)
```bash
cd Server
npx prisma generate
npx prisma migrate dev
# Seed database (uses prisma/seed.ts and prisma/seedData/*.json)
npx prisma db seed
```

5) Run apps
```bash
# Terminal 1 (Server)
cd Server
npm run dev    # or: npm start

# Terminal 2 (Client)
cd Client
npm run dev
```

- Client dev server: http://localhost:3000
- API server: http://localhost:8000

If the client can’t reach the server, update the API base URL in your client API file (e.g., src/app/state/api.ts).

## Features
- Dashboard metrics (sales, purchases, expenses)
- Expense breakdown by category (Recharts Pie chart)
- Dark mode toggle
- Collapsible sidebar
- Seeded demo data via Prisma + JSON files

## Troubleshooting

- Pie chart not visible:
  - Ensure parent container has fixed height (ResponsiveContainer needs it).
  - Verify expenseCategories contains data (console.log it).
  - Confirm data keys: { name, value }.

- Prisma FK error (P2003) during seed/clear:
  - Delete children before parents. In seed.ts, reverse deletion order (already handled with slice().reverse()).

- Seeding:
  - Ensure PostgreSQL is running and DATABASE_URL is correct.
  - Run: npx prisma migrate dev && npx prisma db seed

## Scripts (common)
- Server
  - npx prisma studio — inspect DB
  - npx prisma migrate dev — apply migrations
  - npx prisma db seed — seed data
- Client
  - npm run dev — start Next.js dev server
