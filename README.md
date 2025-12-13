# 🎉 Event Supply Marketplace

A nationwide peer-to-peer marketplace where people can buy, sell, OR rent event supplies and book services for personal events.

## 🎯 Core Value Proposition

- **Buy new/used** - Items you'll use multiple times or keep as decor
- **Rent** - Expensive one-time use items
- **Sell** - After your event, recoup costs

## 📦 Categories

### Best for RENTING (High-value, single-use)
- Tents and canopies
- Sound systems and DJ equipment
- Projectors and screens
- Dance floors and photo booths
- Specialty furniture
- Large quantities (100+ chairs)
- Inflatables and bounce houses

### Best for BUYING NEW
- Custom banners and signage
- Personalized items (napkins, favors)
- Consumables (candles, confetti)
- Small decor (picture frames, vases)
- Party supplies (plates, cups, balloons)

### Best for BUYING USED
- Previously rented items being sold off
- Post-event items (wedding decor)
- Seasonal items (Christmas, Halloween)
- Artificial flowers and greenery
- Tablecloths and linens
- Centerpieces and vases
- String lights, arches and backdrops

## 🛠️ Tech Stack

- **Frontend**: Next.js 14 (App Router)
- **Backend**: Next.js API Routes
- **Database**: PostgreSQL with Prisma ORM
- **Authentication**: NextAuth.js
- **Payments**: Stripe
- **File Storage**: AWS S3 / Cloudflare R2
- **Deployment**: Vercel

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- PostgreSQL 15+
- Stripe account

### Installation

```bash
# Clone the repository
git clone https://github.com/nicvil/plan.git
cd plan

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env.local

# Set up the database
npm run db:push

# Run development server
npm run dev
```

### Environment Variables

Copy `.env.example` to `.env.local` and fill in:

```
DATABASE_URL=postgresql://...
NEXTAUTH_SECRET=...
STRIPE_SECRET_KEY=...
STRIPE_PUBLISHABLE_KEY=...
```

## 📊 Database Schema

See `/prisma/schema.prisma` for the complete database schema including:

- **Users** - Authentication and profiles
- **Listings** - Items for sale or rent
- **Transactions** - Sales and rental records
- **RentalCalendar** - Availability tracking
- **Offers** - Price negotiations
- **Reviews** - User and listing ratings
- **Messages** - Communication between users

## 💰 Revenue Model

- **Sales Commission**: 10-12%
- **Rental Commission**: 15-20%
- **Service Commission**: 15%
- **Premium Subscriptions**: $19-99/month

## 📱 Key Features

### For Sellers/Owners
- Create sale, rent, or dual listings
- Set prices, rates, and availability
- Manage bookings and offers
- Track earnings and analytics

### For Buyers/Renters
- Search by type, location, price, dates
- Make offers on sale items
- Book rentals with availability calendar
- Secure payment with escrow

### Trust & Safety
- User verification
- Photo requirements
- Reviews and ratings
- Payment protection
- Security deposits for rentals

## 📋 MVP Phases

### Phase 1: Core Marketplace (Weeks 1-8)
- User authentication
- Listing creation (sale OR rent)
- Browse/search with filters
- Basic messaging
- Stripe payment integration

### Phase 2: Trust & Polish (Weeks 9-12)
- Offers/negotiation system
- Reviews & ratings
- Email/SMS notifications
- Dispute resolution

### Phase 3: Growth (Months 4-6)
- Shipping integration
- Rental insurance
- Mobile apps
- Analytics dashboard

## 📄 License

MIT License - see LICENSE file for details