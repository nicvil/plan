import type { Metadata } from "next";
import Link from "next/link";
import { Star, ArrowRight, TrendingUp, Users, DollarSign } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { SearchBar } from "@/components/layout/search-bar";
import { AnimatedSection, AnimatedDiv } from "@/components/animated-section";
import { generateSlug } from "@/lib/utils";

export const metadata: Metadata = {
  title: "LocalSpot - Discover & Support Local Businesses",
  description:
    "Discover amazing local businesses in your community. Find restaurants, shops, services, and more. Support local and make a difference.",
};

const featuredBusinesses = [
  {
    name: "The Rustic Table",
    category: "Restaurant",
    rating: 4.8,
    reviews: 124,
    description: "Farm-to-table dining with seasonal menus and local ingredients.",
    image: "🍽️",
  },
  {
    name: "Green Leaf Boutique",
    category: "Retail",
    rating: 4.6,
    reviews: 89,
    description: "Sustainable fashion and lifestyle products for conscious shoppers.",
    image: "🛍️",
  },
  {
    name: "Paws & Claws",
    category: "Services",
    rating: 4.9,
    reviews: 203,
    description: "Premium pet grooming and care with a gentle, loving touch.",
    image: "🐾",
  },
  {
    name: "Artisan Coffee Co.",
    category: "Food & Drink",
    rating: 4.7,
    reviews: 156,
    description: "Specialty coffee and fresh pastries in a cozy neighborhood spot.",
    image: "☕",
  },
];

const categories = [
  { name: "Restaurants", icon: "🍽️", count: 320 },
  { name: "Retail", icon: "🛍️", count: 215 },
  { name: "Services", icon: "🔧", count: 189 },
  { name: "Health & Beauty", icon: "💇", count: 143 },
  { name: "Entertainment", icon: "🎭", count: 97 },
  { name: "Home & Garden", icon: "🏡", count: 128 },
  { name: "Food & Drink", icon: "🍕", count: 264 },
  { name: "Professional Services", icon: "💼", count: 176 },
];

const impactStats = [
  {
    icon: DollarSign,
    stat: "$68",
    description: "of every $100 spent locally stays in the community",
  },
  {
    icon: Users,
    stat: "67%",
    description: "more local jobs created compared to chain stores",
  },
  {
    icon: TrendingUp,
    stat: "4x",
    description: "more economic impact per dollar than non-local spending",
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`h-4 w-4 ${
            i < Math.floor(rating)
              ? "fill-secondary text-secondary"
              : "text-muted-foreground/30"
          }`}
        />
      ))}
      <span className="ml-1 text-sm font-medium">{rating}</span>
    </div>
  );
}

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <AnimatedSection className="relative overflow-hidden bg-gradient-to-br from-primary/95 via-primary to-primary/80 py-24 sm:py-32">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-secondary/10 via-transparent to-accent/5" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-primary-foreground sm:text-5xl lg:text-6xl">
              Discover & Support{" "}
              <span className="text-secondary">Local Businesses</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-primary-foreground/80">
              Your community is full of amazing businesses waiting to be
              discovered. Find the best local restaurants, shops, services, and
              more — all in one place.
            </p>
            <div className="mt-10 flex justify-center">
              <SearchBar className="w-full max-w-xl" />
            </div>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-2 text-sm text-primary-foreground/60">
              <span>Popular:</span>
              {["Coffee Shops", "Restaurants", "Hair Salons", "Gyms"].map(
                (term) => (
                  <Link
                    key={term}
                    href={`/search?q=${encodeURIComponent(term)}`}
                    className="rounded-full border border-primary-foreground/20 px-3 py-1 transition-colors hover:bg-primary-foreground/10"
                  >
                    {term}
                  </Link>
                )
              )}
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Featured Businesses */}
      <AnimatedSection className="mx-auto w-full max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">
              Featured Businesses
            </h2>
            <p className="mt-2 text-muted-foreground">
              Handpicked local favorites from our community
            </p>
          </div>
          <Button variant="ghost" asChild className="hidden sm:flex">
            <Link href="/businesses">
              View all <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featuredBusinesses.map((business, index) => (
            <AnimatedDiv key={business.name} delay={index * 0.1}>
              <Card className="group h-full transition-shadow hover:shadow-lg">
                <CardHeader className="pb-3">
                  <div className="flex h-48 items-center justify-center rounded-lg bg-muted text-6xl">
                    {business.image}
                  </div>
                </CardHeader>
                <CardContent className="space-y-2">
                  <Badge variant="secondary" className="text-xs">
                    {business.category}
                  </Badge>
                  <h3 className="font-semibold group-hover:text-primary">
                    {business.name}
                  </h3>
                  <StarRating rating={business.rating} />
                  <p className="text-sm text-muted-foreground">
                    {business.description}
                  </p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" size="sm" asChild className="w-full">
                    <Link href="/businesses">
                      View Details <ArrowRight className="ml-2 h-3 w-3" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </AnimatedDiv>
          ))}
        </div>

        <div className="mt-6 text-center sm:hidden">
          <Button variant="outline" asChild>
            <Link href="/businesses">
              View all businesses <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </AnimatedSection>

      {/* Categories Grid */}
      <AnimatedSection className="bg-muted/50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight">
              Browse by Category
            </h2>
            <p className="mt-2 text-muted-foreground">
              Find exactly what you&apos;re looking for
            </p>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {categories.map((category, index) => (
              <AnimatedDiv key={category.name} delay={index * 0.05}>
                <Link href={`/categories/${generateSlug(category.name)}`}>
                  <Card className="group cursor-pointer text-center transition-all hover:border-primary hover:shadow-md">
                    <CardContent className="p-6">
                      <span className="text-4xl">{category.icon}</span>
                      <h3 className="mt-3 font-semibold group-hover:text-primary">
                        {category.name}
                      </h3>
                      <p className="mt-1 text-sm text-muted-foreground">
                        {category.count} listings
                      </p>
                    </CardContent>
                  </Card>
                </Link>
              </AnimatedDiv>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Why Support Local */}
      <AnimatedSection className="mx-auto w-full max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight">
            Why Support Local?
          </h2>
          <p className="mx-auto mt-2 max-w-2xl text-muted-foreground">
            Every purchase from a local business strengthens your community.
            Here&apos;s the real impact of shopping local.
          </p>
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-3">
          {impactStats.map((stat, index) => (
            <AnimatedDiv key={stat.stat} delay={index * 0.15}>
              <Card className="text-center">
                <CardContent className="pt-8 pb-8">
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                    <stat.icon className="h-7 w-7 text-primary" />
                  </div>
                  <p className="mt-4 text-4xl font-bold text-primary">
                    {stat.stat}
                  </p>
                  <p className="mt-2 text-muted-foreground">
                    {stat.description}
                  </p>
                </CardContent>
              </Card>
            </AnimatedDiv>
          ))}
        </div>
      </AnimatedSection>

      {/* Newsletter Signup */}
      <AnimatedSection className="bg-primary py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-primary-foreground">
              Stay in the Loop
            </h2>
            <p className="mt-3 text-primary-foreground/80">
              Get weekly updates on new businesses, events, and exclusive local
              deals delivered to your inbox.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
              <Input
                type="email"
                placeholder="Enter your email"
                className="h-12 bg-primary-foreground/10 text-primary-foreground placeholder:text-primary-foreground/50 border-primary-foreground/20 sm:w-80"
              />
              <Button size="lg" variant="secondary" className="h-12">
                Subscribe
              </Button>
            </div>
            <p className="mt-3 text-xs text-primary-foreground/50">
              No spam, ever. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
}
