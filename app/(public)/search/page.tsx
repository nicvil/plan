import type { Metadata } from "next";
import Link from "next/link";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardHeader,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { StarRating } from "@/components/business/star-rating";

export const metadata: Metadata = {
  title: "Search - LocalSpot",
  description: "Search for local businesses, events, and blog posts on LocalSpot.",
};

const businessResults = [
  {
    name: "The Rustic Table",
    slug: "the-rustic-table",
    category: "Restaurant",
    rating: 4.8,
    reviews: 124,
    location: "Portland, OR",
    description: "Farm-to-table dining with seasonal menus and local ingredients.",
  },
  {
    name: "Bloom & Petal Floristry",
    slug: "bloom-petal-floristry",
    category: "Retail",
    rating: 4.9,
    reviews: 67,
    location: "Austin, TX",
    description: "Artisan flower arrangements for every occasion, sourced from local growers.",
  },
  {
    name: "TechSpark Academy",
    slug: "techspark-academy",
    category: "Education",
    rating: 4.7,
    reviews: 45,
    location: "Seattle, WA",
    description: "Coding bootcamps and technology workshops for all ages.",
  },
];

const eventResults = [
  {
    title: "Summer Farmers Market",
    date: "Jul 12, 2025",
    location: "Portland, OR",
    business: "Downtown Community Center",
  },
  {
    title: "Wine & Paint Night",
    date: "Jul 18, 2025",
    location: "Austin, TX",
    business: "The Creative Corner",
  },
];

const blogResults = [
  {
    title: "10 Must-Try Restaurants in Portland",
    slug: "must-try-restaurants-portland",
    excerpt: "Discover the hidden culinary gems that make Portland a food lover's paradise.",
    date: "Jun 15, 2025",
    category: "Food & Drink",
  },
  {
    title: "How to Support Local Businesses This Summer",
    slug: "support-local-summer",
    excerpt: "Simple ways to make a big impact on your local economy this season.",
    date: "Jun 10, 2025",
    category: "Community",
  },
];

export default function SearchPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Search bar */}
      <div className="mx-auto mb-10 max-w-2xl text-center">
        <h1 className="mb-6 text-4xl font-bold tracking-tight">Search</h1>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Search businesses, events, blog posts…"
            className="h-12 pl-10 text-base"
            defaultValue="local"
          />
        </div>
        <p className="mt-3 text-sm text-muted-foreground">
          Showing results for &ldquo;local&rdquo; &mdash;{" "}
          {businessResults.length + eventResults.length + blogResults.length}{" "}
          results found
        </p>
      </div>

      {/* Tabbed results */}
      <Tabs defaultValue="businesses" className="mx-auto max-w-4xl">
        <TabsList className="mb-6 w-full justify-start">
          <TabsTrigger value="businesses">
            Businesses ({businessResults.length})
          </TabsTrigger>
          <TabsTrigger value="events">
            Events ({eventResults.length})
          </TabsTrigger>
          <TabsTrigger value="blog">
            Blog Posts ({blogResults.length})
          </TabsTrigger>
        </TabsList>

        {/* Businesses tab */}
        <TabsContent value="businesses" className="space-y-4">
          {businessResults.map((biz) => (
            <Link
              key={biz.slug}
              href={`/businesses/${biz.slug}`}
              className="block"
            >
              <Card className="transition-colors hover:bg-muted/50">
                <CardHeader className="pb-2">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-semibold">{biz.name}</h3>
                      <p className="text-sm text-muted-foreground">
                        {biz.description}
                      </p>
                    </div>
                    <Badge variant="secondary">{biz.category}</Badge>
                  </div>
                </CardHeader>
                <CardContent className="flex items-center gap-4 text-sm text-muted-foreground">
                  <StarRating
                    rating={biz.rating}
                    size="sm"
                    showCount
                    count={biz.reviews}
                  />
                  <Separator orientation="vertical" className="h-4" />
                  <span>{biz.location}</span>
                </CardContent>
              </Card>
            </Link>
          ))}
        </TabsContent>

        {/* Events tab */}
        <TabsContent value="events" className="space-y-4">
          {eventResults.map((event) => (
            <Card key={event.title} className="transition-colors hover:bg-muted/50">
              <CardHeader className="pb-2">
                <h3 className="font-semibold">{event.title}</h3>
                <p className="text-sm text-muted-foreground">
                  Hosted by {event.business}
                </p>
              </CardHeader>
              <CardContent className="flex items-center gap-4 text-sm text-muted-foreground">
                <span>{event.date}</span>
                <Separator orientation="vertical" className="h-4" />
                <span>{event.location}</span>
              </CardContent>
            </Card>
          ))}
        </TabsContent>

        {/* Blog tab */}
        <TabsContent value="blog" className="space-y-4">
          {blogResults.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="block"
            >
              <Card className="transition-colors hover:bg-muted/50">
                <CardHeader className="pb-2">
                  <div className="flex items-start justify-between">
                    <h3 className="font-semibold">{post.title}</h3>
                    <Badge variant="outline">{post.category}</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {post.excerpt}
                  </p>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">
                  {post.date}
                </CardContent>
              </Card>
            </Link>
          ))}
        </TabsContent>
      </Tabs>

      {/* No results state (hidden, shown when search returns nothing) */}
      <div className="mx-auto mt-12 hidden max-w-md text-center">
        <div className="mb-4 text-5xl">🔍</div>
        <h2 className="text-xl font-semibold">No results found</h2>
        <p className="mt-2 text-muted-foreground">
          Try adjusting your search terms or browse our categories.
        </p>
        <Button asChild className="mt-4">
          <Link href="/categories">Browse Categories</Link>
        </Button>
      </div>
    </div>
  );
}
