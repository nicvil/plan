"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Search,
  SlidersHorizontal,
  LayoutGrid,
  List,
  ChevronLeft,
  ChevronRight,
  X,
  MapPin,
  Clock,
  Heart,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Card,
  CardContent,
} from "@/components/ui/card";
import { useBusinessStore } from "@/stores/business-store";
import { cn } from "@/lib/utils";

interface ListingData {
  id: number;
  title: string;
  price: string;
  location: string;
  date: string;
  image: string;
  slug: string;
  category: string;
  promoted: boolean;
  condition?: string;
}

const sampleListings: ListingData[] = [
  {
    id: 1,
    title: "iPhone 15 Pro Max 256GB, stare perfectă",
    price: "4.500 lei",
    location: "București",
    date: "Azi",
    image: "📱",
    slug: "iphone-15-pro-max",
    category: "Electronice",
    promoted: true,
    condition: "Utilizat",
  },
  {
    id: 2,
    title: "Apartament 2 camere, decomandat, zona centrală",
    price: "75.000 €",
    location: "Cluj-Napoca",
    date: "Azi",
    image: "🏠",
    slug: "apartament-2-camere-cluj",
    category: "Imobiliare",
    promoted: true,
  },
  {
    id: 3,
    title: "BMW Seria 3, 2020, 45.000 km, automată",
    price: "28.900 €",
    location: "Timișoara",
    date: "Ieri",
    image: "🚗",
    slug: "bmw-seria-3-2020",
    category: "Auto",
    promoted: false,
    condition: "Utilizat",
  },
  {
    id: 4,
    title: "MacBook Pro M2, 16GB RAM, 512GB SSD",
    price: "5.200 lei",
    location: "Iași",
    date: "Azi",
    image: "💻",
    slug: "macbook-pro-m2",
    category: "Electronice",
    promoted: false,
    condition: "Utilizat",
  },
  {
    id: 5,
    title: "Canapea extensibilă, piele naturală, gri",
    price: "2.800 lei",
    location: "Brașov",
    date: "Azi",
    image: "🛋️",
    slug: "canapea-extensibila-piele",
    category: "Casă și grădină",
    promoted: true,
    condition: "Nou",
  },
  {
    id: 6,
    title: "Bicicletă cursieră carbon, shimano 105",
    price: "3.500 lei",
    location: "Constanța",
    date: "Ieri",
    image: "🚲",
    slug: "bicicleta-cursiera-carbon",
    category: "Sport",
    promoted: false,
    condition: "Utilizat",
  },
  {
    id: 7,
    title: "Samsung Galaxy S24 Ultra, nou, sigilat",
    price: "4.200 lei",
    location: "București",
    date: "Azi",
    image: "📱",
    slug: "samsung-galaxy-s24",
    category: "Electronice",
    promoted: false,
    condition: "Nou",
  },
  {
    id: 8,
    title: "Garsonieră de închiriat, mobilată complet",
    price: "1.200 lei/lună",
    location: "Sibiu",
    date: "Azi",
    image: "🏢",
    slug: "garsoniera-sibiu",
    category: "Imobiliare",
    promoted: true,
  },
  {
    id: 9,
    title: "PlayStation 5 + 2 controllere",
    price: "1.800 lei",
    location: "București",
    date: "Acum 2 ore",
    image: "🎮",
    slug: "playstation-5",
    category: "Electronice",
    promoted: false,
    condition: "Utilizat",
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
    promoted: false,
    condition: "Nou",
  },
  {
    id: 11,
    title: "VW Golf 7, 2018, 1.6 TDI, 120.000 km",
    price: "12.500 €",
    location: "Arad",
    date: "Ieri",
    image: "🚗",
    slug: "vw-golf-7-2018",
    category: "Auto",
    promoted: false,
    condition: "Utilizat",
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
    promoted: false,
    condition: "Utilizat",
  },
];

const categories = [
  "Auto",
  "Imobiliare",
  "Electronice",
  "Electrocasnice",
  "Casă și grădină",
  "Sport",
  "Modă",
  "Servicii",
];

export default function BusinessesPage() {
  const {
    searchQuery,
    setSearchQuery,
    viewMode,
    setViewMode,
    sortBy,
    setSortBy,
  } = useBusinessStore();

  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [priceMin, setPriceMin] = useState("");
  const [priceMax, setPriceMax] = useState("");

  const toggleCategory = (cat: string) => {
    setSelectedCategories((prev) =>
      prev.includes(cat) ? prev.filter((c) => c !== cat) : [...prev, cat],
    );
  };

  const filtered = sampleListings.filter((listing) => {
    if (
      searchQuery &&
      !listing.title.toLowerCase().includes(searchQuery.toLowerCase())
    )
      return false;
    if (
      selectedCategories.length > 0 &&
      !selectedCategories.includes(listing.category)
    )
      return false;
    return true;
  });

  const sorted = [...filtered].sort((a, b) => {
    switch (sortBy) {
      case "name":
        return a.title.localeCompare(b.title);
      default:
        // Promoted first, then by date
        if (a.promoted !== b.promoted) return a.promoted ? -1 : 1;
        return 0;
    }
  });

  return (
    <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
      {/* Page header */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold tracking-tight">
          Anunțuri
        </h1>
        <p className="mt-1 text-muted-foreground">
          {sorted.length} anunțuri găsite
        </p>
      </div>

      {/* Search and controls bar */}
      <div className="mb-5 flex flex-wrap items-center gap-3 rounded-xl border bg-white p-3">
        <div className="relative flex-1 min-w-[200px]">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Caută în anunțuri..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-9 border-0 bg-muted/50 focus-visible:ring-1"
          />
        </div>
        <Select value={sortBy} onValueChange={setSortBy}>
          <SelectTrigger className="w-[180px] bg-muted/50 border-0">
            <SelectValue placeholder="Sortează după" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="newest">Cele mai noi</SelectItem>
            <SelectItem value="rating">Preț crescător</SelectItem>
            <SelectItem value="reviews">Preț descrescător</SelectItem>
            <SelectItem value="name">A–Z</SelectItem>
          </SelectContent>
        </Select>
        <div className="flex items-center rounded-lg border bg-muted/50">
          <Button
            variant={viewMode === "grid" ? "default" : "ghost"}
            size="icon"
            className="h-9 w-9"
            onClick={() => setViewMode("grid")}
            aria-label="Grid view"
          >
            <LayoutGrid className="h-4 w-4" />
          </Button>
          <Button
            variant={viewMode === "list" ? "default" : "ghost"}
            size="icon"
            className="h-9 w-9"
            onClick={() => setViewMode("list")}
            aria-label="List view"
          >
            <List className="h-4 w-4" />
          </Button>
        </div>
        <Button
          variant="outline"
          className="lg:hidden"
          onClick={() => setSidebarOpen(!sidebarOpen)}
        >
          <SlidersHorizontal className="mr-2 h-4 w-4" />
          Filtre
        </Button>
      </div>

      <div className="flex gap-6">
        {/* Filter sidebar */}
        <aside
          className={cn(
            "w-60 shrink-0 space-y-5",
            sidebarOpen
              ? "fixed inset-0 z-40 overflow-y-auto bg-background p-6 lg:static lg:z-auto lg:p-0"
              : "hidden lg:block",
          )}
        >
          {sidebarOpen && (
            <div className="flex items-center justify-between lg:hidden">
              <h2 className="text-lg font-semibold">Filtre</h2>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setSidebarOpen(false)}
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          )}

          <div className="rounded-xl border bg-white p-4">
            {/* Categories */}
            <div>
              <h3 className="mb-3 text-sm font-semibold text-foreground">
                Categorie
              </h3>
              <div className="space-y-2">
                {categories.map((cat) => (
                  <div key={cat} className="flex items-center gap-2">
                    <Checkbox
                      id={`cat-${cat}`}
                      checked={selectedCategories.includes(cat)}
                      onCheckedChange={() => toggleCategory(cat)}
                    />
                    <Label
                      htmlFor={`cat-${cat}`}
                      className="text-sm font-normal cursor-pointer"
                    >
                      {cat}
                    </Label>
                  </div>
                ))}
              </div>
            </div>

            <Separator className="my-4" />

            {/* Price filter */}
            <div>
              <h3 className="mb-3 text-sm font-semibold text-foreground">
                Preț
              </h3>
              <div className="flex items-center gap-2">
                <Input
                  placeholder="De la"
                  value={priceMin}
                  onChange={(e) => setPriceMin(e.target.value)}
                  className="h-9 text-sm"
                />
                <span className="text-muted-foreground">—</span>
                <Input
                  placeholder="Până la"
                  value={priceMax}
                  onChange={(e) => setPriceMax(e.target.value)}
                  className="h-9 text-sm"
                />
              </div>
            </div>

            <Separator className="my-4" />

            {/* Condition filter */}
            <div>
              <h3 className="mb-3 text-sm font-semibold text-foreground">
                Stare
              </h3>
              <div className="space-y-2">
                {["Nou", "Utilizat"].map((cond) => (
                  <div key={cond} className="flex items-center gap-2">
                    <Checkbox id={`cond-${cond}`} />
                    <Label
                      htmlFor={`cond-${cond}`}
                      className="text-sm font-normal cursor-pointer"
                    >
                      {cond}
                    </Label>
                  </div>
                ))}
              </div>
            </div>

            <Separator className="my-4" />

            <Button
              variant="outline"
              size="sm"
              className="w-full"
              onClick={() => {
                setSearchQuery("");
                setSelectedCategories([]);
                setPriceMin("");
                setPriceMax("");
              }}
            >
              Șterge filtrele
            </Button>
          </div>
        </aside>

        {/* Main content */}
        <div className="flex-1">
          {sorted.length === 0 ? (
            <div className="py-20 text-center rounded-xl border bg-white">
              <div className="mb-4 text-5xl">🔍</div>
              <h2 className="text-xl font-semibold">Niciun anunț găsit</h2>
              <p className="mt-2 text-muted-foreground">
                Încearcă să modifici filtrele sau termenii de căutare.
              </p>
            </div>
          ) : (
            <div
              className={cn(
                viewMode === "grid"
                  ? "grid gap-3 grid-cols-2 md:grid-cols-3 xl:grid-cols-4"
                  : "space-y-3",
              )}
            >
              {sorted.map((listing) =>
                viewMode === "grid" ? (
                  <Link key={listing.id} href={`/businesses/${listing.slug}`}>
                    <Card className="group h-full overflow-hidden transition-shadow hover:shadow-lg border-0 shadow-sm">
                      <div className="relative aspect-[4/3] bg-muted flex items-center justify-center text-5xl">
                        {listing.image}
                        {listing.promoted && (
                          <Badge className="absolute top-2 left-2 bg-accent text-accent-foreground text-xs px-2 py-0.5">
                            Promovat
                          </Badge>
                        )}
                        <button
                          className="absolute top-2 right-2 flex h-8 w-8 items-center justify-center rounded-full bg-white/80 text-muted-foreground hover:text-red-500 hover:bg-white transition-colors"
                          aria-label="Salvează"
                          onClick={(e) => e.preventDefault()}
                        >
                          <Heart className="h-4 w-4" />
                        </button>
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
                ) : (
                  <Link key={listing.id} href={`/businesses/${listing.slug}`}>
                    <Card className="group overflow-hidden transition-shadow hover:shadow-md border-0 shadow-sm">
                      <div className="flex">
                        <div className="relative w-40 sm:w-52 shrink-0 bg-muted flex items-center justify-center text-4xl">
                          {listing.image}
                          {listing.promoted && (
                            <Badge className="absolute top-2 left-2 bg-accent text-accent-foreground text-xs px-2 py-0.5">
                              Promovat
                            </Badge>
                          )}
                        </div>
                        <CardContent className="p-4 flex-1 flex flex-col justify-between">
                          <div>
                            <h3 className="font-medium text-foreground group-hover:text-secondary transition-colors">
                              {listing.title}
                            </h3>
                            <p className="font-bold text-lg text-secondary mt-1">
                              {listing.price}
                            </p>
                          </div>
                          <div className="flex items-center justify-between text-xs text-muted-foreground mt-2">
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
                        <div className="flex items-start p-4 shrink-0">
                          <button
                            className="flex h-8 w-8 items-center justify-center rounded-full text-muted-foreground hover:text-red-500 transition-colors"
                            aria-label="Salvează"
                            onClick={(e) => e.preventDefault()}
                          >
                            <Heart className="h-4 w-4" />
                          </button>
                        </div>
                      </div>
                    </Card>
                  </Link>
                )
              )}
            </div>
          )}

          {/* Pagination */}
          <div className="mt-6 flex items-center justify-center gap-2">
            <Button variant="outline" size="sm" disabled>
              <ChevronLeft className="mr-1 h-4 w-4" />
              Anterior
            </Button>
            <span className="px-3 text-sm text-muted-foreground">
              Pagina 1 din 1
            </span>
            <Button variant="outline" size="sm" disabled>
              Următorul
              <ChevronRight className="ml-1 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
