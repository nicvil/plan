# 🏪 LocalSpot — Platformă de anunțuri gratuite (OLX-style)

O platformă modernă de anunțuri locale, inspirată de OLX.ro, construită cu Next.js 14, Tailwind CSS, Prisma și shadcn/ui. Utilizatorii pot posta anunțuri gratuite, căuta produse și servicii, salva favorite și contacta vânzători.

## Screenshots

### Pagina principală
![Home Page](https://github.com/user-attachments/assets/55b97ad9-2dd9-49c6-bdf0-5f4eb12a149d)

### Categorii
![Categories Page](https://github.com/user-attachments/assets/9fe6d5ed-7d28-4aae-b464-cff6184f0a1b)

### Detaliu anunț
![Listing Detail](https://github.com/user-attachments/assets/11163850-bfdd-413a-b57b-6b686bad8a6b)

### Autentificare
![Sign In Page](https://github.com/user-attachments/assets/259842b5-6284-4024-adce-25b2b7356fb6)

---

## Tehnologii folosite

| Layer | Tehnologie |
|-------|-----------|
| Framework | Next.js 14 (App Router) |
| Limbaj | TypeScript (strict mode) |
| Styling | Tailwind CSS + shadcn/ui |
| Animații | Framer Motion |
| Bază de date | PostgreSQL via Prisma ORM |
| Autentificare | NextAuth.js (Google OAuth + Email/Parolă) |
| Plăți | Stripe |
| Formulare | React Hook Form + Zod |
| State Management | Zustand |
| Iconițe | Lucide React |

---

## Cerințe

- **Node.js** ≥ 18.x — [Descarcă](https://nodejs.org/)
- **npm** ≥ 9.x (vine cu Node.js)
- **PostgreSQL** ≥ 14.x — [Descarcă](https://www.postgresql.org/download/) *(opțional, doar pentru funcționalități backend)*

---

## Cum rulezi proiectul

### 1. Clonează repository-ul

```bash
git clone https://github.com/nicvil/plan.git
cd plan
```

### 2. Instalează dependențele

```bash
npm install
```

### 3. Configurează variabilele de mediu

```bash
cp .env.example .env
```

Editează `.env` cu valorile tale:

```env
# Bază de date
DATABASE_URL="postgresql://user:password@localhost:5432/localspot"

# NextAuth
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="genereaza-un-secret-random"

# Google OAuth (opțional)
GOOGLE_CLIENT_ID="id-ul-tau-google"
GOOGLE_CLIENT_SECRET="secret-ul-tau-google"

# Stripe (opțional)
STRIPE_SECRET_KEY="sk_test_..."
STRIPE_PUBLISHABLE_KEY="pk_test_..."

# App
NEXT_PUBLIC_APP_URL="http://localhost:3000"
```

> **Notă:** Aplicația funcționează și afișează toate paginile cu date placeholder chiar și fără a configura servicii externe. Baza de date, OAuth și Stripe sunt necesare doar pentru funcționalitatea completă.

### 4. Configurează baza de date *(opțional)*

```bash
# Generează clientul Prisma
npx prisma generate

# Aplică schema în baza de date
npx prisma db push
```

### 5. Pornește serverul de dezvoltare

```bash
npm run dev
```

Deschide [http://localhost:3000](http://localhost:3000) în browser.

---

## Comenzi disponibile

| Comandă | Descriere |
|---------|-----------|
| `npm run dev` | Pornește serverul de dezvoltare pe port 3000 |
| `npm run build` | Creează un build optimizat de producție |
| `npm start` | Rulează build-ul de producție |
| `npm run lint` | Verifică codul cu ESLint |
| `npx prisma studio` | Deschide Prisma Studio pentru a naviga baza de date |
| `npx prisma generate` | Regenerează clientul Prisma |
| `npx prisma db push` | Aplică schema în baza de date |

---

## Structura proiectului

```
├── app/
│   ├── (public)/          # Pagini publice
│   │   ├── page.tsx       # Pagina principală (categorii, anunțuri promovate/recente)
│   │   ├── businesses/    # Lista anunțuri & detaliu anunț
│   │   ├── categories/    # Categorii cu subcategorii
│   │   ├── events/        # Evenimente locale
│   │   ├── search/        # Rezultate căutare
│   │   ├── about/         # Despre platformă
│   │   ├── contact/       # Formular contact + FAQ
│   │   └── pricing/       # Pachete de promovare
│   ├── (auth)/            # Pagini de autentificare
│   │   └── auth/          # Conectare, înregistrare, resetare parolă
│   ├── (dashboard)/       # Dashboard utilizator & business
│   │   └── dashboard/     # Contul meu, favorite, recenzii, setări
│   ├── (admin)/           # Panou administrare
│   │   └── admin/         # Gestionare anunțuri, utilizatori, recenzii
│   ├── api/               # API route handlers
│   ├── layout.tsx         # Layout root cu header, footer, providers
│   └── globals.css        # Stiluri globale & variabile CSS
├── components/
│   ├── ui/                # Componente shadcn/ui
│   ├── layout/            # Header, footer, mobile nav, breadcrumbs, search
│   ├── business/          # Componente specifice anunțuri
│   └── save-button.tsx    # Buton salvare favori
├── lib/
│   ├── prisma.ts          # Prisma client singleton
│   ├── auth.ts            # Configurare NextAuth
│   ├── stripe.ts          # Client Stripe & planuri
│   ├── utils.ts           # Funcții utilitare
│   └── validations.ts     # Scheme Zod pentru formulare
├── stores/
│   └── business-store.ts  # Zustand store pentru filtre
├── prisma/
│   └── schema.prisma      # Schema bazei de date
├── .env.example           # Template variabile de mediu
└── tailwind.config.ts     # Configurare Tailwind
```

---

## Pagini disponibile

### Pagini publice
- **/** — Pagina principală cu categorii, anunțuri promovate și recente
- **/businesses** — Lista anunțurilor cu căutare, filtre și grid/list view
- **/businesses/[slug]** — Detaliu anunț cu galerie foto, info vânzător, anunțuri similare
- **/categories** — Toate categoriile cu subcategorii
- **/categories/[slug]** — Anunțuri filtrate pe categorie
- **/events** — Evenimente locale
- **/search** — Rezultate căutare
- **/about** — Despre LocalSpot
- **/contact** — Formular contact + întrebări frecvente
- **/pricing** — Pachete de promovare anunțuri

### Autentificare
- **/auth/signin** — Conectare cu Google sau email/parolă
- **/auth/signup** — Creează cont nou
- **/auth/forgot-password** — Resetare parolă
- **/auth/verify-email** — Verificare email

### Dashboard
- **/dashboard** — Prezentare generală cont
- **/dashboard/saved** — Anunțuri favorite
- **/dashboard/reviews** — Istoric recenzii
- **/dashboard/settings** — Setări profil
- **/dashboard/business** — Dashboard vânzător
- **/dashboard/business/analytics** — Analiză anunțuri

### Administrare
- **/admin** — Panou administrare
- **/admin/businesses** — Gestionare anunțuri
- **/admin/users** — Gestionare utilizatori
- **/admin/reviews** — Moderare recenzii

---

## Design inspirat de OLX.ro

| Element | Stil |
|---------|------|
| Header | Dark, cu search bar integrat, selector locație, buton "Adaugă anunț" |
| Culoare principală | Dark (#2B2D42) |
| Culoare accent | Teal (#2DBEAD) |
| Culoare promoții | Amber (#F59E0B) |
| Card-uri anunțuri | Imagine + preț + titlu + locație + data |
| Categorii | Grid cu icon-uri, badge-uri subcategorii |
| Footer | Dark, minimal, cu link-uri rapide |

---

## Licență

Proiect privat.
