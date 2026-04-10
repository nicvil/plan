import type { Metadata } from "next";
import Link from "next/link";
import { Calendar, Clock, Share2, ExternalLink, Link2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  Card,
  CardFooter,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { formatDate } from "@/lib/utils";

const blogPostData: Record<
  string,
  {
    title: string;
    slug: string;
    excerpt: string;
    date: string;
    category: string;
    author: string;
    readTime: string;
    content: string;
  }
> = {
  "must-try-restaurants-portland": {
    title: "10 Must-Try Restaurants in Portland",
    slug: "must-try-restaurants-portland",
    excerpt:
      "Discover the hidden culinary gems that make Portland a food lover's paradise.",
    date: "2025-06-15",
    category: "Food & Drink",
    author: "Sarah Mitchell",
    readTime: "5 min read",
    content: `Portland's culinary scene is as diverse and creative as the city itself. Whether you're a lifelong resident or just passing through, these ten restaurants represent the very best of what the Rose City has to offer.

## 1. The Rustic Table

Farm-to-table dining at its finest. Chef Maria Santiago sources ingredients from local farms within a 50-mile radius, creating dishes that change with the seasons. The wood-fired short ribs are a must, and the wine list features an impressive selection from Oregon's Willamette Valley.

## 2. Sakura Ramen House

This tiny noodle shop in the Pearl District serves what many consider the best ramen in the Pacific Northwest. The tonkotsu broth is simmered for 18 hours, and the hand-pulled noodles have the perfect chewy texture. Arrive early—there's always a line.

## 3. Verdant Kitchen

A plant-based restaurant that even the most devoted carnivores will love. Chef David Brooks transforms seasonal vegetables into works of art. The beet tartare and mushroom "steak" are crowd favorites.

## 4. Casa Oaxaca

Authentic Oaxacan cuisine prepared with traditional techniques passed down through generations. The mole negro is legendary, and the handmade tortillas are pressed to order. Don't miss the mezcal flights curated by owner Rosa Hernandez.

## 5. Maritime & Main

Perched along the Willamette River, this seafood restaurant specializes in sustainably caught Pacific Northwest seafood. The Dungeness crab rolls and pan-seared salmon are standouts. The waterfront patio is the perfect spot for a summer dinner.

## The Bottom Line

Portland's restaurant scene continues to evolve, driven by passionate chefs and a community that values quality, sustainability, and creativity. Whether you're craving comfort food or seeking a culinary adventure, these restaurants deliver unforgettable dining experiences.

*Have you tried any of these restaurants? Share your favorites in the comments below!*`,
  },
};

function getBlogPost(slug: string) {
  return (
    blogPostData[slug] ?? {
      title: slug
        .split("-")
        .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
        .join(" "),
      slug,
      excerpt: "An insightful article about local businesses and community.",
      date: "2025-06-01",
      category: "Community",
      author: "LocalSpot Team",
      readTime: "4 min read",
      content: `Welcome to this article about local businesses and the communities they serve.

## Supporting Local Matters

When you choose to shop at a local business, you're not just making a purchase—you're making an investment in your community. Studies show that for every dollar spent at a local business, approximately 67 cents stays in the local economy.

## Building Connections

Local businesses are the backbone of strong communities. They create gathering places, sponsor little league teams, and contribute to the unique character that makes each neighborhood special.

## Getting Started

Here are some simple ways to support local businesses:

- **Shop local first** — Before heading to a chain store, check if a local business carries what you need.
- **Leave reviews** — A positive review on LocalSpot can make a huge difference for a small business.
- **Spread the word** — Tell friends and family about great local finds.
- **Attend events** — Many local businesses host community events that are free and open to all.

*Together, we can build stronger, more vibrant communities.*`,
    }
  );
}

const relatedPosts = [
  {
    title: "How to Support Local Businesses This Summer",
    slug: "support-local-summer",
    excerpt: "Simple ways to make a big impact on your local economy.",
    date: "2025-06-10",
    category: "Community",
    author: "James Henderson",
  },
  {
    title: "The Rise of Artisan Coffee Shops",
    slug: "rise-artisan-coffee-shops",
    excerpt: "How independent coffee roasters are transforming neighborhoods.",
    date: "2025-06-05",
    category: "Food & Drink",
    author: "Emily Chen",
  },
  {
    title: "Small Business Marketing on a Budget",
    slug: "small-business-marketing-budget",
    excerpt: "Proven marketing strategies that won't break the bank.",
    date: "2025-05-28",
    category: "Business Tips",
    author: "Michael Torres",
  },
];

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const post = getBlogPost(params.slug);
  return {
    title: `${post.title} - LocalSpot Blog`,
    description: post.excerpt,
  };
}

export default function BlogPostPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = getBlogPost(params.slug);

  return (
    <div className="container mx-auto px-4 py-12">
      <Breadcrumbs className="mb-6" />

      <article className="mx-auto max-w-3xl">
        {/* Header */}
        <div className="mb-8">
          <Badge variant="secondary" className="mb-3">
            {post.category}
          </Badge>
          <h1 className="mb-4 text-4xl font-bold leading-tight">
            {post.title}
          </h1>
          <p className="mb-4 text-lg text-muted-foreground">{post.excerpt}</p>
          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Avatar className="h-8 w-8">
                <AvatarFallback className="text-xs">
                  {post.author
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>
              <span className="font-medium text-foreground">{post.author}</span>
            </div>
            <span className="flex items-center gap-1">
              <Calendar className="h-3.5 w-3.5" />
              {formatDate(post.date)}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="h-3.5 w-3.5" />
              {post.readTime}
            </span>
          </div>
        </div>

        {/* Cover image placeholder */}
        <div className="mb-8 flex h-64 items-center justify-center rounded-lg bg-gradient-to-br from-primary/80 to-accent/40 text-6xl sm:h-80">
          📰
        </div>

        {/* Article body */}
        <div className="prose prose-lg max-w-none">
          {post.content.split("\n\n").map((block, i) => {
            if (block.startsWith("## ")) {
              return (
                <h2 key={i} className="mb-3 mt-8 text-2xl font-bold">
                  {block.replace("## ", "")}
                </h2>
              );
            }
            if (block.startsWith("- ")) {
              const items = block.split("\n").filter((l) => l.startsWith("- "));
              return (
                <ul key={i} className="mb-4 list-disc space-y-1 pl-6 text-muted-foreground">
                  {items.map((item, j) => (
                    <li key={j}>{item.replace(/^- \*\*(.+?)\*\* — /, "$1 — ").replace("- ", "")}</li>
                  ))}
                </ul>
              );
            }
            if (block.startsWith("*") && block.endsWith("*")) {
              return (
                <p key={i} className="mb-4 italic text-muted-foreground">
                  {block.replace(/^\*|\*$/g, "")}
                </p>
              );
            }
            return (
              <p key={i} className="mb-4 leading-relaxed text-muted-foreground">
                {block}
              </p>
            );
          })}
        </div>

        {/* Share buttons */}
        <Separator className="my-8" />
        <div className="flex items-center gap-3">
          <span className="text-sm font-medium">Share this article:</span>
          <Button variant="outline" size="icon" aria-label="Share on Facebook">
            <ExternalLink className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="icon" aria-label="Share on Twitter">
            <Link2 className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="icon" aria-label="Copy link">
            <Share2 className="h-4 w-4" />
          </Button>
        </div>
      </article>

      {/* Related posts */}
      <Separator className="my-12" />
      <section className="mx-auto max-w-5xl">
        <h2 className="mb-6 text-2xl font-bold">Related Posts</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {relatedPosts.map((rp) => (
            <Link key={rp.slug} href={`/blog/${rp.slug}`} className="group block">
              <Card className="h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <div className="flex h-32 items-center justify-center bg-gradient-to-br from-muted to-muted/50 text-3xl">
                  {rp.category === "Food & Drink"
                    ? "🍽️"
                    : rp.category === "Community"
                      ? "🤝"
                      : "💡"}
                </div>
                <CardHeader className="pb-2">
                  <Badge variant="secondary" className="mb-1 w-fit text-xs">
                    {rp.category}
                  </Badge>
                  <CardTitle className="text-base leading-tight group-hover:text-primary">
                    {rp.title}
                  </CardTitle>
                  <CardDescription className="text-sm">
                    {rp.excerpt}
                  </CardDescription>
                </CardHeader>
                <CardFooter className="text-sm text-muted-foreground">
                  {formatDate(rp.date)}
                </CardFooter>
              </Card>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
