# 🏡 LocalSpot — Discover & Support Local Businesses

A modern, production-ready local business discovery platform built with Next.js 14, Tailwind CSS, Prisma, and shadcn/ui. Users can browse, search, review, and save local businesses while business owners can claim and manage their listings.

## Screenshots

### Home Page
![Home Page](https://github.com/user-attachments/assets/940c50e8-54cd-4e98-a53f-29b5e781d8c5)

### Business Listings
![Businesses Page](https://github.com/user-attachments/assets/55b97ad9-2dd9-49c6-bdf0-5f4eb12a149d)

### Categories
![Categories Page](https://github.com/user-attachments/assets/9fe6d5ed-7d28-4aae-b464-cff6184f0a1b)

### Pricing
![Pricing Page](https://github.com/user-attachments/assets/11163850-bfdd-413a-b57b-6b686bad8a6b)

### Sign In
![Sign In Page](https://github.com/user-attachments/assets/259842b5-6284-4024-adce-25b2b7356fb6)

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 14 (App Router) |
| Language | TypeScript (strict mode) |
| Styling | Tailwind CSS + shadcn/ui |
| Animations | Framer Motion |
| Database | PostgreSQL via Prisma ORM |
| Auth | NextAuth.js (Google OAuth + Credentials) |
| Payments | Stripe |
| Forms | React Hook Form + Zod |
| State | Zustand |
| Icons | Lucide React |

---

## Prerequisites

Before running the project, make sure you have the following installed:

- **Node.js** ≥ 18.x — [Download](https://nodejs.org/)
- **npm** ≥ 9.x (comes with Node.js)
- **PostgreSQL** ≥ 14.x — [Download](https://www.postgresql.org/download/) *(optional for browsing UI only)*

---

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/nicvil/plan.git
cd plan
```

### 2. Install dependencies

```bash
npm install
```

### 3. Set up environment variables

Copy the example environment file and fill in your values:

```bash
cp .env.example .env
```

Edit `.env` with your configuration:

```env
# ─── Database ──────────────────────────────────────────────────────────────
DATABASE_URL="postgresql://user:password@localhost:5432/local_business_spotlight"

# ─── NextAuth ──────────────────────────────────────────────────────────────
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="generate-a-random-secret-here"

# ─── Google OAuth ──────────────────────────────────────────────────────────
GOOGLE_CLIENT_ID="your-google-client-id"
GOOGLE_CLIENT_SECRET="your-google-client-secret"

# ─── Stripe ────────────────────────────────────────────────────────────────
STRIPE_SECRET_KEY="sk_test_..."
STRIPE_PUBLISHABLE_KEY="pk_test_..."
STRIPE_WEBHOOK_SECRET="whsec_..."

# ─── App ───────────────────────────────────────────────────────────────────
NEXT_PUBLIC_APP_URL="http://localhost:3000"

# ─── Google Maps ───────────────────────────────────────────────────────────
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY="your-google-maps-api-key"

# ─── Email (Resend) ───────────────────────────────────────────────────────
RESEND_API_KEY="re_..."

# ─── Cloudinary ────────────────────────────────────────────────────────────
CLOUDINARY_URL="cloudinary://api_key:api_secret@cloud_name"

# ─── Algolia ──────────────────────────────────────────────────────────────
ALGOLIA_APP_ID="your-algolia-app-id"
ALGOLIA_API_KEY="your-algolia-api-key"
```

> **Tip:** You can generate a NextAuth secret with: `openssl rand -base64 32`

> **Note:** The app will run and display all pages with placeholder data even without configuring external services. Database, OAuth, Stripe, and other integrations are only needed for full functionality.

### 4. Set up the database *(optional — only needed for backend features)*

Create the PostgreSQL database and run Prisma migrations:

```bash
# Create the database
createdb local_business_spotlight

# Generate Prisma client
npx prisma generate

# Push the schema to your database
npx prisma db push
```

### 5. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the app.

---

## Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start the development server on port 3000 |
| `npm run build` | Create an optimized production build |
| `npm start` | Run the production build |
| `npm run lint` | Run ESLint to check for code issues |
| `npx prisma studio` | Open Prisma Studio to browse your database |
| `npx prisma generate` | Regenerate the Prisma client after schema changes |
| `npx prisma db push` | Push schema changes to the database |

---

## Project Structure

```
├── app/
│   ├── (public)/          # Public pages (home, businesses, categories, etc.)
│   │   ├── page.tsx       # Home page
│   │   ├── businesses/    # Business listing & detail pages
│   │   ├── categories/    # Category listing & detail pages
│   │   ├── events/        # Events page
│   │   ├── blog/          # Blog listing & post pages
│   │   ├── search/        # Search results page
│   │   ├── about/         # About page
│   │   ├── contact/       # Contact page
│   │   └── pricing/       # Pricing page
│   ├── (auth)/            # Authentication pages
│   │   └── auth/          # Sign in, sign up, forgot password, verify email
│   ├── (dashboard)/       # User & business owner dashboard
│   │   └── dashboard/     # Overview, saved, reviews, settings, business mgmt
│   ├── (admin)/           # Admin dashboard
│   │   └── admin/         # Businesses, users, reviews, categories management
│   ├── api/               # API route handlers
│   ├── layout.tsx         # Root layout with header, footer, providers
│   └── globals.css        # Global styles & CSS custom properties
├── components/
│   ├── ui/                # shadcn/ui components (button, card, badge, etc.)
│   ├── layout/            # Header, footer, mobile nav, breadcrumbs, search
│   ├── business/          # Business card, star rating components
│   └── providers.tsx      # SessionProvider wrapper
├── lib/
│   ├── prisma.ts          # Prisma client singleton
│   ├── auth.ts            # NextAuth configuration
│   ├── stripe.ts          # Stripe client & plan definitions
│   ├── utils.ts           # Utility functions (cn, formatDate, etc.)
│   └── validations.ts     # Zod schemas for forms
├── stores/
│   └── business-store.ts  # Zustand store for business filters
├── types/
│   └── index.ts           # TypeScript types & next-auth augmentation
├── prisma/
│   └── schema.prisma      # Database schema (12 models, 4 enums)
├── .env.example           # Environment variable template
├── tailwind.config.ts     # Tailwind + design system configuration
├── tsconfig.json          # TypeScript configuration
└── next.config.mjs        # Next.js configuration
```

---

## Pages Overview

### Public Pages
- **/** — Home page with hero, featured businesses, category grid, impact stats
- **/businesses** — Business listing with search, filters, and grid/list view
- **/businesses/[slug]** — Business detail with tabs (Overview, Photos, Reviews, Events)
- **/categories** — Browse all business categories
- **/categories/[slug]** — Businesses filtered by category
- **/events** — Local events listing
- **/blog** — Blog posts and city guides
- **/blog/[slug]** — Individual blog post
- **/search** — Unified search results
- **/about** — About the platform
- **/contact** — Contact form with FAQ
- **/pricing** — 4-tier pricing plans (Free, Basic, Premium, Featured)

### Auth Pages
- **/auth/signin** — Sign in with Google or email/password
- **/auth/signup** — Create a new account
- **/auth/forgot-password** — Password reset request
- **/auth/verify-email** — Email verification

### Dashboard Pages
- **/dashboard** — User overview (saved businesses, reviews, activity)
- **/dashboard/saved** — Bookmarked businesses
- **/dashboard/reviews** — Review history
- **/dashboard/settings** — Profile & notification settings
- **/dashboard/business** — Business owner dashboard (stats, management)
- **/dashboard/business/edit** — Edit business listing
- **/dashboard/business/reviews** — Manage reviews & replies
- **/dashboard/business/analytics** — Business analytics
- **/dashboard/business/billing** — Plan & billing management

### Admin Pages
- **/admin** — Admin overview with stats
- **/admin/businesses** — Manage all business listings
- **/admin/users** — Manage users & roles
- **/admin/reviews** — Moderate reviews

---

## Design System

| Token | Value | Usage |
|-------|-------|-------|
| Primary | `#1E3A5F` (Navy Blue) | Buttons, links, header |
| Secondary | `#F59E0B` (Amber) | Highlights, accents |
| Accent | `#FF6B6B` (Coral) | CTAs, featured badges |
| Success | `#10B981` (Emerald) | Verified badges, success states |
| Background | `#FAFAFA` | Page background |
| Text | `#1E293B` / `#64748B` | Primary / secondary text |

---

## Deployment

### Deploy to Vercel

1. Push the repo to GitHub
2. Import the project in [Vercel](https://vercel.com/new)
3. Configure environment variables in the Vercel dashboard
4. Deploy — Vercel handles builds and CDN automatically

### Environment Variables for Production

Set all variables from `.env.example` in your Vercel project settings. Make sure to update:
- `NEXTAUTH_URL` → your production domain
- `NEXT_PUBLIC_APP_URL` → your production domain
- `DATABASE_URL` → your production PostgreSQL connection string (e.g., Supabase)

---

## License

This project is private and proprietary.