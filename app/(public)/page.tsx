import type { Metadata } from "next";
import Link from "next/link";
import { MapPin, Clock, ArrowRight, Star, ShieldCheck, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AnimatedSection, AnimatedDiv } from "@/components/animated-section";
import { SaveButton } from "@/components/save-button";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "LocalSpot — Anunțuri gratuite în România",
  description:
    "Cumpără și vinde rapid pe LocalSpot. Anunțuri gratuite de la particulari și firme. Auto, imobiliare, electronice, locuri de muncă și multe altele.",
};

const categories = [
  { name: "Auto, Moto", icon: "🚗", count: 45820, slug: "auto-moto", color: "bg-blue-50" },
  { name: "Imobiliare", icon: "🏠", count: 32100, slug: "imobiliare", color: "bg-green-50" },
  { name: "Electronice", icon: "📱", count: 28450, slug: "electronice", color: "bg-purple-50" },
  { name: "Locuri de muncă", icon: "💼", count: 15200, slug: "locuri-de-munca", color: "bg-orange-50" },
  { name: "Modă", icon: "👗", count: 21300, slug: "moda", color: "bg-pink-50" },
  { name: "Casă și grădină", icon: "🏡", count: 18700, slug: "casa-gradina", color: "bg-emerald-50" },
  { name: "Sport, timp liber", icon: "⚽", count: 9850, slug: "sport-timp-liber", color: "bg-cyan-50" },
  { name: "Animale de companie", icon: "🐾", count: 6200, slug: "animale", color: "bg-amber-50" },
  { name: "Servicii", icon: "🔧", count: 12400, slug: "servicii", color: "bg-slate-50" },
  { name: "Agro & Industrie", icon: "🌾", count: 4300, slug: "agro-industrie", color: "bg-lime-50" },
];

const featuredListings = [
  {
    id: 1,
    title: "iPhone 15 Pro Max 256GB, stare perfectă",
    price: "4.500 lei",
    location: "București",
    date: "Azi",
    image: "📱",
    slug: "iphone-15-pro-max",
    promoted: true,
    category: "Electronice",
  },
  {
    id: 2,
    title: "Apartament 2 camere, decomandat, zona centrală",
    price: "75.000 €",
    location: "Cluj-Napoca",
    date: "Azi",
    image: "🏠",
    slug: "apartament-2-camere-cluj",
    promoted: true,
    category: "Imobiliare",
  },
  {
    id: 3,
    title: "BMW Seria 3, 2020, 45.000 km, automată",
    price: "28.900 €",
    location: "Timișoara",
    date: "Ieri",
    image: "🚗",
    slug: "bmw-seria-3-2020",
    promoted: false,
    category: "Auto",
  },
  {
    id: 4,
    title: "MacBook Pro M2, 16GB RAM, 512GB SSD",
    price: "5.200 lei",
    location: "Iași",
    date: "Azi",
    image: "💻",
    slug: "macbook-pro-m2",
    promoted: false,
    category: "Electronice",
  },
  {
    id: 5,
    title: "Canapea extensibilă, piele naturală, gri",
    price: "2.800 lei",
    location: "Brașov",
    date: "Azi",
    image: "🛋️",
    slug: "canapea-extensibila-piele",
    promoted: true,
    category: "Casă și grădină",
  },
  {
    id: 6,
    title: "Bicicletă cursieră carbon, shimano 105",
    price: "3.500 lei",
    location: "Constanța",
    date: "Ieri",
    image: "🚲",
    slug: "bicicleta-cursiera-carbon",
    promoted: false,
    category: "Sport",
  },
  {
    id: 7,
    title: "Samsung Galaxy S24 Ultra, nou, sigilat",
    price: "4.200 lei",
    location: "București",
    date: "Azi",
    image: "📱",
    slug: "samsung-galaxy-s24",
    promoted: false,
    category: "Electronice",
  },
  {
    id: 8,
    title: "Garsonieră de închiriat, mobilată complet",
    price: "1.200 lei/lună",
    location: "Sibiu",
    date: "Azi",
    image: "🏢",
    slug: "garsoniera-sibiu",
    promoted: true,
    category: "Imobiliare",
  },
];

const recentListings = [
  {
    id: 9,
    title: "PlayStation 5 + 2 controllere, stare impecabilă",
    price: "1.800 lei",
    location: "București",
    date: "Acum 2 ore",
    image: "🎮",
    slug: "playstation-5",
    category: "Electronice",
  },
  {
    id: 10,
    title: "Mașină de spălat Samsung, 8 kg, clasa A+++",
    price: "1.200 lei",
    location: "Oradea",
    date: "Acum 3 ore",
    image: "🧺",
    slug: "masina-spalat-samsung",
    category: "Electrocasnice",
  },
  {
    id: 11,
    title: "Set mobilier living, stejar natural, nou",
    price: "4.500 lei",
    location: "Galați",
    date: "Acum 5 ore",
    image: "🪑",
    slug: "mobilier-living-stejar",
    category: "Casă și grădină",
  },
  {
    id: 12,
    title: "Canon EOS R6 Mark II + obiectiv 24-105mm",
    price: "9.800 lei",
    location: "Cluj-Napoca",
    date: "Acum 1 oră",
    image: "📷",
    slug: "canon-eos-r6",
    category: "Electronice",
  },
];

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Category Grid Section */}
      <section className="bg-white border-b">
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <h2 className="text-lg font-semibold mb-5">Categorii principale</h2>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-5">
            {categories.map((category) => (
              <Link
                key={category.slug}
                href={`/categories/${category.slug}`}
                className="group"
              >
                <div className={cn(
                  "flex flex-col items-center gap-2 rounded-xl p-4 transition-all hover:shadow-md hover:-translate-y-0.5",
                  category.color
                )}>
                  <span className="text-3xl">{category.icon}</span>
                  <span className="text-sm font-medium text-center text-foreground group-hover:text-secondary transition-colors">
                    {category.name}
                  </span>
                  <span className="text-xs text-muted-foreground">
                    {category.count.toLocaleString("ro-RO")} anunțuri
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Promoted / Featured Listings */}
      <AnimatedSection className="bg-background">
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-5">
            <h2 className="text-lg font-semibold">Anunțuri promovate</h2>
            <Button variant="ghost" size="sm" asChild className="text-secondary hover:text-secondary/80">
              <Link href="/businesses">
                Vezi toate <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {featuredListings.map((listing, index) => (
              <AnimatedDiv key={listing.id} delay={index * 0.05}>
                <Link href={`/businesses/${listing.slug}`}>
                  <Card className="group h-full overflow-hidden transition-shadow hover:shadow-lg border-0 shadow-sm">
                    {/* Image placeholder */}
                    <div className="relative aspect-[4/3] bg-muted flex items-center justify-center text-5xl">
                      {listing.image}
                      {listing.promoted && (
                        <Badge className="absolute top-2 left-2 bg-accent text-accent-foreground text-xs px-2 py-0.5">
                          Promovat
                        </Badge>
                      )}
                      <SaveButton />
                    </div>
                    <CardContent className="p-3">
                      <p className="font-bold text-base text-secondary mb-1">
                        {listing.price}
                      </p>
                      <h3 className="text-sm font-medium text-foreground line-clamp-2 group-hover:text-secondary transition-colors leading-snug">
                        {listing.title}
                      </h3>
                      <div className="mt-2 flex items-center justify-between text-xs text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <MapPin className="h-3 w-3" />
                          {listing.location}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          {listing.date}
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </AnimatedDiv>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Recent Listings */}
      <AnimatedSection className="bg-white border-t">
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-5">
            <h2 className="text-lg font-semibold">Anunțuri recente</h2>
            <Button variant="ghost" size="sm" asChild className="text-secondary hover:text-secondary/80">
              <Link href="/businesses">
                Vezi toate <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {recentListings.map((listing, index) => (
              <AnimatedDiv key={listing.id} delay={index * 0.05}>
                <Link href={`/businesses/${listing.slug}`}>
                  <Card className="group h-full overflow-hidden transition-shadow hover:shadow-lg border-0 shadow-sm">
                    <div className="relative aspect-[4/3] bg-muted flex items-center justify-center text-5xl">
                      {listing.image}
                      <SaveButton />
                    </div>
                    <CardContent className="p-3">
                      <p className="font-bold text-base text-secondary mb-1">
                        {listing.price}
                      </p>
                      <h3 className="text-sm font-medium text-foreground line-clamp-2 group-hover:text-secondary transition-colors leading-snug">
                        {listing.title}
                      </h3>
                      <div className="mt-2 flex items-center justify-between text-xs text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <MapPin className="h-3 w-3" />
                          {listing.location}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          {listing.date}
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </AnimatedDiv>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Why LocalSpot / Trust Section */}
      <section className="border-t bg-muted/50 py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 sm:grid-cols-3 text-center">
            <div className="flex flex-col items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary/10">
                <ShieldCheck className="h-6 w-6 text-secondary" />
              </div>
              <h3 className="font-semibold">Tranzacții sigure</h3>
              <p className="text-sm text-muted-foreground">
                Verificăm anunțurile și protejăm utilizatorii împotriva fraudelor.
              </p>
            </div>
            <div className="flex flex-col items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary/10">
                <TrendingUp className="h-6 w-6 text-secondary" />
              </div>
              <h3 className="font-semibold">Milioane de anunțuri</h3>
              <p className="text-sm text-muted-foreground">
                Cea mai mare platformă de anunțuri locale. Găsești orice cauți.
              </p>
            </div>
            <div className="flex flex-col items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary/10">
                <Star className="h-6 w-6 text-secondary" />
              </div>
              <h3 className="font-semibold">Gratuit și simplu</h3>
              <p className="text-sm text-muted-foreground">
                Publică anunțuri gratuit în câteva secunde. Fără complicații.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
