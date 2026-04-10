import type { Metadata } from "next";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Browse Categories - LocalSpot",
  description:
    "Browse local business categories. Find restaurants, retail shops, health services, and more in your community.",
};

const categories = [
  {
    name: "Restaurants & Cafés",
    slug: "restaurants",
    emoji: "🍽️",
    count: 142,
    description:
      "From cozy cafés to fine dining, discover the best local eateries near you.",
  },
  {
    name: "Retail & Shopping",
    slug: "retail",
    emoji: "🛍️",
    count: 98,
    description:
      "Unique boutiques, bookstores, and specialty shops run by local owners.",
  },
  {
    name: "Health & Wellness",
    slug: "health-wellness",
    emoji: "💆",
    count: 76,
    description:
      "Gyms, spas, yoga studios, and holistic wellness providers nearby.",
  },
  {
    name: "Home Services",
    slug: "home-services",
    emoji: "🔧",
    count: 64,
    description:
      "Trusted plumbers, electricians, cleaners, and home improvement pros.",
  },
  {
    name: "Arts & Entertainment",
    slug: "arts-entertainment",
    emoji: "🎭",
    count: 53,
    description:
      "Galleries, theaters, music venues, and creative studios in your area.",
  },
  {
    name: "Professional Services",
    slug: "professional-services",
    emoji: "💼",
    count: 87,
    description:
      "Accountants, lawyers, consultants, and other professional service providers.",
  },
  {
    name: "Beauty & Personal Care",
    slug: "beauty",
    emoji: "💇",
    count: 69,
    description:
      "Salons, barbershops, nail studios, and skincare specialists.",
  },
  {
    name: "Education & Tutoring",
    slug: "education",
    emoji: "📚",
    count: 41,
    description:
      "Language schools, tutoring centers, and educational workshops.",
  },
  {
    name: "Automotive",
    slug: "automotive",
    emoji: "🚗",
    count: 35,
    description:
      "Auto repair shops, detailing services, and car dealerships.",
  },
  {
    name: "Pets & Animals",
    slug: "pets",
    emoji: "🐾",
    count: 28,
    description:
      "Veterinarians, pet grooming, boarding, and pet supply stores.",
  },
];

export default function CategoriesPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-10 text-center">
        <h1 className="text-4xl font-bold tracking-tight">
          Browse Categories
        </h1>
        <p className="mt-3 text-lg text-muted-foreground">
          Explore local businesses by category and find exactly what you need.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {categories.map((category) => (
          <Link
            key={category.slug}
            href={`/categories/${category.slug}`}
            className="group block"
          >
            <Card className="h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <CardHeader>
                <div className="mb-2 text-4xl">{category.emoji}</div>
                <CardTitle className="text-lg group-hover:text-primary">
                  {category.name}
                </CardTitle>
                <CardDescription>{category.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <Badge variant="secondary">
                  {category.count} businesses
                </Badge>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
