import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  BusinessCard,
  type BusinessCardData,
} from "@/components/business/business-card";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";

const categoryData: Record<
  string,
  { name: string; description: string; emoji: string }
> = {
  restaurants: {
    name: "Restaurants & Cafés",
    description:
      "From cozy cafés to fine dining, discover the best local eateries in your area.",
    emoji: "🍽️",
  },
  retail: {
    name: "Retail & Shopping",
    description:
      "Unique boutiques, bookstores, and specialty shops run by local owners.",
    emoji: "🛍️",
  },
  "health-wellness": {
    name: "Health & Wellness",
    description:
      "Gyms, spas, yoga studios, and holistic wellness providers nearby.",
    emoji: "💆",
  },
  "home-services": {
    name: "Home Services",
    description:
      "Trusted plumbers, electricians, cleaners, and home improvement professionals.",
    emoji: "🔧",
  },
  "arts-entertainment": {
    name: "Arts & Entertainment",
    description:
      "Galleries, theaters, music venues, and creative studios in your area.",
    emoji: "🎭",
  },
  "professional-services": {
    name: "Professional Services",
    description:
      "Accountants, lawyers, consultants, and other professional service providers.",
    emoji: "💼",
  },
  beauty: {
    name: "Beauty & Personal Care",
    description: "Salons, barbershops, nail studios, and skincare specialists.",
    emoji: "💇",
  },
  education: {
    name: "Education & Tutoring",
    description:
      "Language schools, tutoring centers, and educational workshops.",
    emoji: "📚",
  },
  automotive: {
    name: "Automotive",
    description:
      "Auto repair shops, detailing services, and car dealerships.",
    emoji: "🚗",
  },
  pets: {
    name: "Pets & Animals",
    description:
      "Veterinarians, pet grooming, boarding, and pet supply stores.",
    emoji: "🐾",
  },
};

function getCategory(slug: string) {
  return (
    categoryData[slug] ?? {
      name: slug
        .split("-")
        .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
        .join(" "),
      description: "Browse local businesses in this category.",
      emoji: "📂",
    }
  );
}

function getSampleBusinesses(slug: string): BusinessCardData[] {
  const bases: BusinessCardData[] = [
    {
      name: "The Rustic Table",
      slug: "the-rustic-table",
      shortDescription:
        "Farm-to-table dining with seasonal menus and locally sourced ingredients.",
      averageRating: 4.8,
      totalReviews: 124,
      city: "Portland",
      state: "OR",
      category: getCategory(slug).name,
      isVerified: true,
      isFeatured: true,
    },
    {
      name: "Sunrise Bistro",
      slug: "sunrise-bistro",
      shortDescription:
        "Charming breakfast and brunch spot with inventive seasonal dishes.",
      averageRating: 4.6,
      totalReviews: 89,
      city: "Austin",
      state: "TX",
      category: getCategory(slug).name,
      isVerified: true,
      isFeatured: false,
    },
    {
      name: "The Garden Café",
      slug: "the-garden-cafe",
      shortDescription:
        "Organic café with garden-fresh salads, smoothies, and light bites.",
      averageRating: 4.5,
      totalReviews: 56,
      city: "Denver",
      state: "CO",
      category: getCategory(slug).name,
      isVerified: false,
      isFeatured: false,
    },
    {
      name: "Maple & Main",
      slug: "maple-and-main",
      shortDescription:
        "Cozy neighbourhood spot known for craft cocktails and small plates.",
      averageRating: 4.7,
      totalReviews: 98,
      city: "Chicago",
      state: "IL",
      category: getCategory(slug).name,
      isVerified: true,
      isFeatured: false,
    },
    {
      name: "Blue Harbor Kitchen",
      slug: "blue-harbor-kitchen",
      shortDescription:
        "Waterfront seafood restaurant with stunning views and fresh catches.",
      averageRating: 4.4,
      totalReviews: 72,
      city: "San Diego",
      state: "CA",
      category: getCategory(slug).name,
      isVerified: false,
      isFeatured: true,
    },
    {
      name: "Elm Street Eatery",
      slug: "elm-street-eatery",
      shortDescription:
        "Family-owned diner serving classic American comfort food since 1985.",
      averageRating: 4.3,
      totalReviews: 201,
      city: "Nashville",
      state: "TN",
      category: getCategory(slug).name,
      isVerified: true,
      isFeatured: false,
    },
  ];
  return bases;
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const cat = getCategory(params.slug);
  return {
    title: `${cat.name} - LocalSpot`,
    description: cat.description,
  };
}

export default function CategoryPage({
  params,
}: {
  params: { slug: string };
}) {
  const category = getCategory(params.slug);
  const businesses = getSampleBusinesses(params.slug);

  return (
    <div>
      {/* Banner */}
      <div className="bg-gradient-to-r from-primary/90 via-primary/70 to-primary/50 py-16 text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <div className="mb-3 text-5xl">{category.emoji}</div>
          <h1 className="text-4xl font-bold">{category.name}</h1>
          <p className="mt-3 text-lg opacity-90">{category.description}</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-10">
        <Breadcrumbs className="mb-6" />

        <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            Showing {businesses.length} businesses
          </p>
          <Select defaultValue="rating">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="rating">Highest Rated</SelectItem>
              <SelectItem value="reviews">Most Reviewed</SelectItem>
              <SelectItem value="newest">Newest</SelectItem>
              <SelectItem value="name">A–Z</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {businesses.map((business) => (
            <BusinessCard key={business.slug} business={business} />
          ))}
        </div>

        <div className="mt-10 text-center">
          <Button variant="outline" asChild>
            <Link href="/categories">← Back to All Categories</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
