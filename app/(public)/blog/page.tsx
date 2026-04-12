import type { Metadata } from "next";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardFooter,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Calendar, User, Clock } from "lucide-react";
import { formatDate } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Local Business Blog - LocalSpot",
  description:
    "Tips, stories, and guides for discovering and supporting local businesses in your community.",
};

const blogPosts = [
  {
    title: "10 Must-Try Restaurants in Portland",
    slug: "must-try-restaurants-portland",
    excerpt:
      "Discover the hidden culinary gems that make Portland a food lover's paradise. From farm-to-table establishments to cozy neighborhood bistros.",
    date: "2025-06-15",
    category: "Food & Drink",
    author: "Sarah Mitchell",
    readTime: "5 min read",
    featured: true,
  },
  {
    title: "How to Support Local Businesses This Summer",
    slug: "support-local-summer",
    excerpt:
      "Simple yet impactful ways to make a difference in your local economy this season. Shop small, dine local, and build community.",
    date: "2025-06-10",
    category: "Community",
    author: "James Henderson",
    readTime: "4 min read",
    featured: false,
  },
  {
    title: "The Rise of Artisan Coffee Shops",
    slug: "rise-artisan-coffee-shops",
    excerpt:
      "How independent coffee roasters are transforming neighborhoods and creating unique gathering spaces for communities.",
    date: "2025-06-05",
    category: "Food & Drink",
    author: "Emily Chen",
    readTime: "6 min read",
    featured: false,
  },
  {
    title: "Small Business Marketing on a Budget",
    slug: "small-business-marketing-budget",
    excerpt:
      "Proven marketing strategies that won't break the bank. Learn how successful local businesses attract customers online and offline.",
    date: "2025-05-28",
    category: "Business Tips",
    author: "Michael Torres",
    readTime: "7 min read",
    featured: false,
  },
  {
    title: "Spotlight: Women-Owned Businesses to Watch",
    slug: "women-owned-businesses-spotlight",
    excerpt:
      "Celebrating inspiring women entrepreneurs who are making waves in their communities with innovative products and services.",
    date: "2025-05-20",
    category: "Spotlight",
    author: "Lisa Park",
    readTime: "5 min read",
    featured: false,
  },
  {
    title: "Planning the Perfect Local Event",
    slug: "planning-perfect-local-event",
    excerpt:
      "A complete guide to hosting community events that bring people together and showcase local talent and businesses.",
    date: "2025-05-15",
    category: "Events",
    author: "David Brooks",
    readTime: "8 min read",
    featured: false,
  },
];

const categoryFilters = [
  "All",
  "Food & Drink",
  "Community",
  "Business Tips",
  "Spotlight",
  "Events",
];

export default function BlogPage() {
  const featuredPost = blogPosts.find((p) => p.featured);
  const regularPosts = blogPosts.filter((p) => !p.featured);

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-10 text-center">
        <h1 className="text-4xl font-bold tracking-tight">
          Local Business Blog
        </h1>
        <p className="mt-3 text-lg text-muted-foreground">
          Tips, stories, and guides for discovering and supporting local
          businesses.
        </p>
      </div>

      {/* Category filter tags */}
      <div className="mb-8 flex flex-wrap justify-center gap-2">
        {categoryFilters.map((cat) => (
          <Badge
            key={cat}
            variant={cat === "All" ? "default" : "outline"}
            className="cursor-pointer px-3 py-1 text-sm"
          >
            {cat}
          </Badge>
        ))}
      </div>

      {/* Featured post */}
      {featuredPost && (
        <Link href={`/blog/${featuredPost.slug}`} className="group mb-10 block">
          <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg">
            <div className="flex flex-col md:flex-row">
              <div className="flex h-64 items-center justify-center bg-gradient-to-br from-primary/80 to-accent/40 text-6xl md:h-auto md:w-1/2">
                📰
              </div>
              <div className="flex flex-1 flex-col justify-center p-6 md:p-8">
                <Badge variant="secondary" className="mb-3 w-fit">
                  {featuredPost.category}
                </Badge>
                <h2 className="mb-2 text-2xl font-bold group-hover:text-primary">
                  {featuredPost.title}
                </h2>
                <p className="mb-4 text-muted-foreground">
                  {featuredPost.excerpt}
                </p>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <User className="h-3.5 w-3.5" />
                    {featuredPost.author}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="h-3.5 w-3.5" />
                    {formatDate(featuredPost.date)}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="h-3.5 w-3.5" />
                    {featuredPost.readTime}
                  </span>
                </div>
              </div>
            </div>
          </Card>
        </Link>
      )}

      {/* Posts grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {regularPosts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group block"
          >
            <Card className="h-full overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <div className="flex h-40 items-center justify-center bg-gradient-to-br from-muted to-muted/50 text-4xl">
                {post.category === "Food & Drink"
                  ? "🍽️"
                  : post.category === "Community"
                    ? "🤝"
                    : post.category === "Business Tips"
                      ? "💡"
                      : post.category === "Spotlight"
                        ? "⭐"
                        : "📅"}
              </div>
              <CardHeader className="pb-2">
                <Badge variant="secondary" className="mb-1 w-fit text-xs">
                  {post.category}
                </Badge>
                <CardTitle className="text-lg leading-tight group-hover:text-primary">
                  {post.title}
                </CardTitle>
                <CardDescription>{post.excerpt}</CardDescription>
              </CardHeader>
              <CardFooter className="flex items-center justify-between text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Avatar className="h-6 w-6">
                    <AvatarFallback className="text-xs">
                      {post.author
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <span>{post.author}</span>
                </div>
                <span>{formatDate(post.date)}</span>
              </CardFooter>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
