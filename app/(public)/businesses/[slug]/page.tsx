import type { Metadata } from "next";
import Link from "next/link";
import {
  MapPin,
  Phone,
  Heart,
  Share2,
  Flag,
  Shield,
  MessageSquare,
  Calendar,
  Eye,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  Card,
  CardContent,
} from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { SaveButtonSmall } from "@/components/save-button";
import { cn } from "@/lib/utils";

const listingData: Record<
  string,
  {
    title: string;
    slug: string;
    category: string;
    price: string;
    negotiable: boolean;
    condition: string;
    location: string;
    date: string;
    views: number;
    description: string;
    images: string[];
    seller: {
      name: string;
      memberSince: string;
      activeAds: number;
      phone: string;
    };
    details: { label: string; value: string }[];
  }
> = {
  "iphone-15-pro-max": {
    title: "iPhone 15 Pro Max 256GB, stare perfectă",
    slug: "iphone-15-pro-max",
    category: "Electronice",
    price: "4.500 lei",
    negotiable: true,
    condition: "Utilizat",
    location: "București, Sector 1",
    date: "Publicat azi la 14:30",
    views: 234,
    description:
      "Vând iPhone 15 Pro Max 256GB, culoare Natural Titanium. Telefonul este în stare perfectă, fără zgârieturi sau lovituri. A fost utilizat cu husă și folie de sticlă din prima zi.\n\nInclude: cutia originală, cablu USB-C, documentele de garanție.\n\nBateria este la 97% health. Telefonul este liber de rețea, funcționează cu orice operator.\n\nPrețul este ușor negociabil. Accept și schimb cu diferență.",
    images: ["📱", "📱", "📱", "📱"],
    seller: {
      name: "Alexandru M.",
      memberSince: "din 2021",
      activeAds: 5,
      phone: "07xx xxx xxx",
    },
    details: [
      { label: "Marca", value: "Apple" },
      { label: "Model", value: "iPhone 15 Pro Max" },
      { label: "Capacitate", value: "256 GB" },
      { label: "Culoare", value: "Natural Titanium" },
      { label: "Stare", value: "Utilizat — ca nou" },
    ],
  },
};

function getListing(slug: string) {
  return (
    listingData[slug] ?? {
      ...listingData["iphone-15-pro-max"],
      title: slug
        .split("-")
        .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
        .join(" "),
      slug,
    }
  );
}

const similarListings = [
  {
    id: 1,
    title: "iPhone 15 Pro 128GB, negru",
    price: "3.800 lei",
    location: "Cluj-Napoca",
    image: "📱",
    slug: "iphone-15-pro-128",
  },
  {
    id: 2,
    title: "Samsung Galaxy S24 Ultra",
    price: "4.200 lei",
    location: "București",
    image: "📱",
    slug: "samsung-galaxy-s24",
  },
  {
    id: 3,
    title: "iPhone 14 Pro Max 256GB",
    price: "3.200 lei",
    location: "Timișoara",
    image: "📱",
    slug: "iphone-14-pro-max",
  },
  {
    id: 4,
    title: "Google Pixel 8 Pro",
    price: "2.900 lei",
    location: "Iași",
    image: "📱",
    slug: "google-pixel-8-pro",
  },
];

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const listing = getListing(params.slug);
  return {
    title: `${listing.title} — LocalSpot`,
    description: listing.description.substring(0, 160),
  };
}

export default function ListingDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const listing = getListing(params.slug);

  return (
    <div className="bg-background">
      <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
        <Breadcrumbs className="mb-4" />

        <div className="flex flex-col gap-6 lg:flex-row">
          {/* Main content */}
          <div className="flex-1 space-y-4">
            {/* Image gallery */}
            <div className="rounded-xl border bg-white overflow-hidden">
              {/* Main image */}
              <div className="aspect-[16/10] bg-muted flex items-center justify-center text-8xl">
                {listing.images[0]}
              </div>
              {/* Thumbnails */}
              <div className="flex gap-1 p-2 bg-white">
                {listing.images.map((img, i) => (
                  <div
                    key={i}
                    className={cn(
                      "flex-1 aspect-square bg-muted flex items-center justify-center text-2xl rounded-lg cursor-pointer transition-opacity",
                      i === 0 ? "ring-2 ring-secondary" : "opacity-60 hover:opacity-100"
                    )}
                  >
                    {img}
                  </div>
                ))}
              </div>
            </div>

            {/* Listing info */}
            <div className="rounded-xl border bg-white p-5 space-y-4">
              <div className="flex items-start justify-between">
                <div>
                  <h1 className="text-xl font-bold sm:text-2xl">{listing.title}</h1>
                  <div className="mt-2 flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <MapPin className="h-3.5 w-3.5" />
                      {listing.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="h-3.5 w-3.5" />
                      {listing.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Eye className="h-3.5 w-3.5" />
                      {listing.views} vizualizări
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  <Button variant="outline" size="icon" className="h-9 w-9" aria-label="Salvează">
                    <Heart className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="icon" className="h-9 w-9" aria-label="Distribuie">
                    <Share2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-2xl font-bold text-secondary sm:text-3xl">{listing.price}</span>
                {listing.negotiable && (
                  <Badge variant="outline" className="text-sm">Negociabil</Badge>
                )}
              </div>
            </div>

            {/* Description */}
            <div className="rounded-xl border bg-white p-5 space-y-4">
              <h2 className="text-lg font-semibold">Descriere</h2>
              <div className="text-muted-foreground whitespace-pre-line leading-relaxed text-sm">
                {listing.description}
              </div>
            </div>

            {/* Details / Specs */}
            <div className="rounded-xl border bg-white p-5 space-y-4">
              <h2 className="text-lg font-semibold">Detalii</h2>
              <div className="grid grid-cols-2 gap-3">
                {listing.details.map((detail) => (
                  <div key={detail.label} className="flex flex-col">
                    <span className="text-xs text-muted-foreground">{detail.label}</span>
                    <span className="text-sm font-medium">{detail.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Report */}
            <div className="flex justify-center py-2">
              <Button variant="ghost" size="sm" className="text-muted-foreground gap-1.5 text-xs">
                <Flag className="h-3.5 w-3.5" />
                Raportează anunțul
              </Button>
            </div>
          </div>

          {/* Sidebar — Seller info */}
          <aside className="w-full shrink-0 lg:w-80 space-y-4">
            {/* Seller card */}
            <div className="rounded-xl border bg-white p-5 space-y-4 lg:sticky lg:top-32">
              <div className="flex items-center gap-3">
                <Avatar className="h-12 w-12">
                  <AvatarFallback className="bg-secondary/10 text-secondary text-lg">
                    {listing.seller.name.charAt(0)}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-semibold">{listing.seller.name}</p>
                  <p className="text-xs text-muted-foreground">
                    Pe LocalSpot {listing.seller.memberSince} · {listing.seller.activeAds} anunțuri active
                  </p>
                </div>
              </div>

              <Button className="w-full bg-secondary hover:bg-secondary/90 text-white gap-2">
                <Phone className="h-4 w-4" />
                Arată telefonul
              </Button>

              <Button variant="outline" className="w-full gap-2">
                <MessageSquare className="h-4 w-4" />
                Trimite mesaj
              </Button>

              <Separator />

              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Shield className="h-4 w-4 text-secondary" />
                <span>Sfaturi pentru cumpărături sigure</span>
              </div>
            </div>

            {/* Promoted / Safety tips */}
            <div className="rounded-xl border bg-secondary/5 p-4 space-y-3">
              <h3 className="text-sm font-semibold flex items-center gap-2">
                <Shield className="h-4 w-4 text-secondary" />
                Sfaturi de siguranță
              </h3>
              <ul className="text-xs text-muted-foreground space-y-1.5">
                <li>• Nu trimite bani în avans</li>
                <li>• Întâlnește-te în locuri publice</li>
                <li>• Verifică produsul înainte de plată</li>
                <li>• Raportează anunțurile suspecte</li>
              </ul>
            </div>
          </aside>
        </div>

        {/* Similar listings */}
        <div className="mt-8 pb-8">
          <h2 className="text-lg font-semibold mb-4">Anunțuri similare</h2>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-2 md:grid-cols-4">
            {similarListings.map((item) => (
              <Link key={item.id} href={`/businesses/${item.slug}`}>
                <Card className="group h-full overflow-hidden transition-shadow hover:shadow-lg border-0 shadow-sm">
                  <div className="relative aspect-[4/3] bg-muted flex items-center justify-center text-4xl">
                    {item.image}
                    <SaveButtonSmall />
                  </div>
                  <CardContent className="p-3">
                    <p className="font-bold text-sm text-secondary mb-0.5">
                      {item.price}
                    </p>
                    <h3 className="text-xs font-medium text-foreground line-clamp-2 group-hover:text-secondary transition-colors">
                      {item.title}
                    </h3>
                    <p className="mt-1 flex items-center gap-1 text-xs text-muted-foreground">
                      <MapPin className="h-3 w-3" />
                      {item.location}
                    </p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
