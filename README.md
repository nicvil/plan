# LinkIQ

Smart link management platform — shorten, track, and optimize your links with QR codes, UTM parameters, and powerful analytics.

## Tech Stack

- **Frontend:** Next.js 15 (App Router), React, Tailwind CSS, shadcn/ui
- **Mobile:** React Native, Expo, Expo Router
- **Backend:** Next.js API Routes
- **Database:** PostgreSQL, Prisma ORM
- **Cache:** Redis
- **Auth:** NextAuth.js
- **Payments:** Stripe
- **Email:** Resend
- **Storage:** Cloudflare R2
- **Monorepo:** Turborepo, pnpm

## Getting Started

### Prerequisites

- [Node.js 20+](https://nodejs.org/)
- [pnpm 9.15.4](https://pnpm.io/installation) (`corepack enable && corepack prepare pnpm@9.15.4`)
- [Docker](https://docs.docker.com/get-docker/) and [Docker Compose](https://docs.docker.com/compose/) (for PostgreSQL & Redis)

### Quick Start

```bash
# 1. Clone the repository
git clone <repo-url>
cd linkiq

# 2. Install dependencies
pnpm install

# 3. Copy environment variables (defaults work with Docker)
cp .env.example .env

# 4. Start PostgreSQL and Redis
pnpm docker:up

# 5. Generate Prisma client and run database migrations
pnpm db:generate
pnpm db:migrate

# 6. Seed the database with sample data
pnpm db:seed

# 7. Start the development server
pnpm dev
```

The web app will be available at **http://localhost:3000**.

## Local Development Guide

### Starting Services

```bash
# Start PostgreSQL + Redis containers
pnpm docker:up

# Stop containers (data is preserved in Docker volumes)
pnpm docker:down
```

### Database Management

```bash
pnpm db:generate   # Generate Prisma client after schema changes
pnpm db:migrate    # Create and run migrations
pnpm db:push       # Push schema changes without migration (prototyping)
pnpm db:seed       # Seed sample data (demo user, workspace, links, clicks)
pnpm db:studio     # Open Prisma Studio (visual database browser at http://localhost:5555)
pnpm db:reset      # Reset database — drops all data, re-runs migrations and seed
```

### Running Individual Apps

```bash
# Run everything (web + mobile)
pnpm dev

# Run only the web app
pnpm --filter @linkiq/web dev

# Run only the mobile app
pnpm --filter @linkiq/mobile dev
```

## Testing

### Run All Tests

```bash
pnpm test
```

### Run Tests for Specific Packages

```bash
# Shared package (schemas, utilities)
pnpm --filter @linkiq/shared test

# Web app
pnpm --filter @linkiq/web test
```

### Test Coverage

The shared package includes unit tests for:

- **Zod validation schemas** — link creation, login, signup, workspace, UTM params
- **Utility functions** — slug generation, UTM URL builder, date formatting, number formatting, URL truncation, link expiry checks

### Manual Testing Checklist

After running `pnpm dev`, verify the following:

1. **Landing page** — visit http://localhost:3000
2. **Login page** — visit http://localhost:3000/login
3. **Signup page** — visit http://localhost:3000/signup
4. **Dashboard** — visit http://localhost:3000/dashboard
5. **Links page** — visit http://localhost:3000/dashboard/links
6. **Analytics page** — visit http://localhost:3000/dashboard/analytics
7. **QR Codes page** — visit http://localhost:3000/dashboard/qr-codes
8. **UTM Builder** — visit http://localhost:3000/dashboard/utm-builder
9. **Settings page** — visit http://localhost:3000/dashboard/settings
10. **Health API** — `curl http://localhost:3000/api/health`

### Seed Data

After running `pnpm db:seed`, the database contains:

| Resource          | Details                                       |
| ----------------- | --------------------------------------------- |
| User              | `demo@linkiq.app` (FREE plan)                 |
| Workspace         | `demo-workspace`                              |
| Links             | `demo`, `github`, `docs` (5 clicks each)      |
| Tags              | `marketing`, `social`, `product`              |
| QR Code           | Configured on the `demo` link                 |
| UTM Params        | Set on the `demo` link (twitter/social/launch) |

## Building

```bash
# Build all packages and apps
pnpm build

# Build only the web app
pnpm --filter @linkiq/web build

# Build only the shared package
pnpm --filter @linkiq/shared build
```

## Linting & Formatting

```bash
pnpm lint       # Lint all packages
pnpm format     # Format all files with Prettier
```

## Project Structure

```
linkiq/
├── apps/
│   ├── web/              # Next.js web application
│   │   ├── prisma/       # Database schema, migrations, seed
│   │   └── src/app/      # App Router pages and API routes
│   └── mobile/           # React Native / Expo mobile app
├── packages/
│   ├── shared/           # Shared types, Zod schemas, constants, utilities
│   ├── ui-web/           # Web component library
│   └── ui-mobile/        # Mobile component library
├── docker-compose.yml    # PostgreSQL + Redis for local dev
├── turbo.json            # Turborepo configuration
├── pnpm-workspace.yaml
└── package.json
```

## Available Scripts

| Script             | Description                                        |
| ------------------ | -------------------------------------------------- |
| `pnpm dev`         | Start all apps in development mode                 |
| `pnpm build`       | Build all apps and packages                        |
| `pnpm lint`        | Lint all apps and packages                         |
| `pnpm test`        | Run tests across the monorepo                      |
| `pnpm clean`       | Remove build artifacts                             |
| `pnpm format`      | Format code with Prettier                          |
| `pnpm docker:up`   | Start PostgreSQL and Redis containers              |
| `pnpm docker:down` | Stop PostgreSQL and Redis containers               |
| `pnpm db:generate` | Generate Prisma client                             |
| `pnpm db:migrate`  | Run database migrations                            |
| `pnpm db:push`     | Push schema to database (no migration file)        |
| `pnpm db:seed`     | Seed database with sample data                     |
| `pnpm db:studio`   | Open Prisma Studio GUI                             |
| `pnpm db:reset`    | Reset database (drop, migrate, seed)               |
| `pnpm setup`       | Install dependencies and generate Prisma client    |

## Environment Variables

Copy `.env.example` to `.env`. The defaults are configured for the Docker-based local setup:

| Variable                              | Required | Default                                                |
| ------------------------------------- | -------- | ------------------------------------------------------ |
| `DATABASE_URL`                        | Yes      | `postgresql://linkiq:linkiq@localhost:5432/linkiq`      |
| `REDIS_URL`                           | Yes      | `redis://localhost:6379`                                |
| `NEXTAUTH_SECRET`                     | Yes      | Set in `.env.example`                                  |
| `NEXTAUTH_URL`                        | Yes      | `http://localhost:3000`                                 |
| `JWT_SECRET`                          | Yes      | Set in `.env.example`                                  |
| `NEXT_PUBLIC_APP_URL`                 | Yes      | `http://localhost:3000`                                 |
| `GOOGLE_CLIENT_ID`                    | No       | Needed for Google OAuth                                |
| `GOOGLE_CLIENT_SECRET`                | No       | Needed for Google OAuth                                |
| `STRIPE_SECRET_KEY`                   | No       | Needed for payments                                    |
| `STRIPE_WEBHOOK_SECRET`              | No       | Needed for Stripe webhooks                             |
| `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` | No       | Needed for Stripe frontend                             |
| `RESEND_API_KEY`                      | No       | Needed for email                                       |
| `R2_*`                                | No       | Needed for file storage                                |