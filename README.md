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

- Node.js 20+
- pnpm 9.15.4
- PostgreSQL
- Redis

### Setup

1. **Clone the repository:**

   ```bash
   git clone <repo-url>
   cd linkiq
   ```

2. **Install dependencies:**

   ```bash
   pnpm install
   ```

3. **Set up environment variables:**

   ```bash
   cp .env.example .env
   ```

   Update `.env` with your credentials.

4. **Start development servers:**

   ```bash
   pnpm dev
   ```

## Project Structure

```
linkiq/
├── apps/
│   ├── web/          # Next.js web application
│   └── mobile/       # React Native / Expo mobile app
├── packages/
│   ├── shared/       # Shared types, Zod schemas, constants, utilities
│   ├── ui-web/       # Web component library
│   └── ui-mobile/    # Mobile component library
├── turbo.json        # Turborepo configuration
├── pnpm-workspace.yaml
└── package.json
```

## Available Scripts

| Script         | Description                        |
| -------------- | ---------------------------------- |
| `pnpm dev`     | Start all apps in development mode |
| `pnpm build`   | Build all apps and packages        |
| `pnpm lint`    | Lint all apps and packages         |
| `pnpm test`    | Run tests across the monorepo     |
| `pnpm clean`   | Remove build artifacts             |
| `pnpm format`  | Format code with Prettier          |