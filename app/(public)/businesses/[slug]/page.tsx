import type { Metadata } from "next";
import Link from "next/link";
import {
  MapPin,
  Phone,
  Globe,
  Clock,
  BadgeCheck,
  Share2,
  Bookmark,
  Flag,
  ExternalLink,
  Calendar,
  Tag,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { StarRating } from "@/components/business/star-rating";
import { BusinessCard, type BusinessCardData } from "@/components/business/business-card";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { formatDate } from "@/lib/utils";

const businessData: Record<
  string,
  {
    name: string;
    slug: string;
    category: string;
    averageRating: number;
    totalReviews: number;
    isVerified: boolean;
    isFeatured: boolean;
    city: string;
    state: string;
    shortDescription: string;
    fullDescription: string;
    address: string;
    phone: string;
    website: string;
    hours: { day: string; time: string }[];
    tags: string[];
    socialLinks: { platform: string; url: string }[];
  }
> = {
  "the-rustic-table": {
    name: "The Rustic Table",
    slug: "the-rustic-table",
    category: "Restaurant",
    averageRating: 4.8,
    totalReviews: 124,
    isVerified: true,
    isFeatured: true,
    city: "Portland",
    state: "OR",
    shortDescription: "Farm-to-table dining with seasonal menus.",
    fullDescription:
      "The Rustic Table is Portland's premier farm-to-table restaurant, offering an ever-changing menu that celebrates the finest seasonal ingredients from local farms and artisan producers. Our chef curates a dining experience that bridges the gap between rustic comfort food and contemporary culinary innovation.\n\nFrom hand-made pasta using heritage grains to wood-fired dishes featuring sustainably raised meats, every plate tells the story of our region's agricultural heritage. Our warm, inviting atmosphere—complete with reclaimed wood accents and an open kitchen—makes The Rustic Table the perfect destination for date nights, family gatherings, and celebrations.\n\nWe also host monthly wine pairing dinners, seasonal tasting menus, and cooking classes for food enthusiasts of all levels.",
    address: "742 Evergreen Terrace, Portland, OR 97201",
    phone: "(503) 555-0142",
    website: "https://therustictable.example.com",
    hours: [
      { day: "Monday", time: "Closed" },
      { day: "Tuesday", time: "11:00 AM – 9:00 PM" },
      { day: "Wednesday", time: "11:00 AM – 9:00 PM" },
      { day: "Thursday", time: "11:00 AM – 9:00 PM" },
      { day: "Friday", time: "11:00 AM – 10:00 PM" },
      { day: "Saturday", time: "10:00 AM – 10:00 PM" },
      { day: "Sunday", time: "10:00 AM – 8:00 PM" },
    ],
    tags: [
      "Farm-to-Table",
      "Organic",
      "Date Night",
      "Outdoor Seating",
      "Wine Bar",
      "Brunch",
    ],
    socialLinks: [
      { platform: "Facebook", url: "#" },
      { platform: "Instagram", url: "#" },
      { platform: "Twitter", url: "#" },
    ],
  },
};

// Fallback for any slug
function getBusiness(slug: string) {
  return (
    businessData[slug] ?? {
      ...businessData["the-rustic-table"],
      name: slug
        .split("-")
        .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
        .join(" "),
      slug,
    }
  );
}

const sampleReviews = [
  {
    id: 1,
    author: "Sarah M.",
    rating: 5,
    date: "2025-06-20",
    text: "Absolutely outstanding! The seasonal tasting menu was a culinary journey. Every dish was beautifully presented and bursting with flavor. The staff was incredibly attentive without being intrusive. Will definitely be coming back!",
  },
  {
    id: 2,
    author: "James K.",
    rating: 4,
    date: "2025-06-15",
    text: "Great food and atmosphere. The wood-fired short ribs were incredible. Only slight critique is the wait time was a bit long on a Friday night, but totally worth it. The cocktail menu is also fantastic.",
  },
  {
    id: 3,
    author: "Emily R.",
    rating: 5,
    date: "2025-06-10",
    text: "We hosted our anniversary dinner here and it was perfect. The chef even prepared a special dessert for us. The farm-to-table concept really shines through in every bite. Best restaurant in Portland!",
  },
  {
    id: 4,
    author: "David L.",
    rating: 4,
    date: "2025-05-28",
    text: "Lovely place with excellent food. The brunch menu is a must-try. Fresh ingredients and creative dishes. Parking can be a challenge on weekends but the experience makes up for it.",
  },
];

const sampleEvents = [
  {
    id: 1,
    title: "Summer Wine Pairing Dinner",
    date: "2025-07-20",
    time: "7:00 PM",
    price: "$85",
    description: "Five-course dinner paired with wines from the Willamette Valley.",
  },
  {
    id: 2,
    title: "Farm Tour & Brunch",
    date: "2025-08-03",
    time: "9:00 AM",
    price: "$55",
    description: "Visit our partner farm, then enjoy a special brunch featuring the harvest.",
  },
  {
    id: 3,
    title: "Pasta Making Workshop",
    date: "2025-08-15",
    time: "2:00 PM",
    price: "$45",
    description: "Learn to make fresh pasta from scratch with our head chef.",
  },
];

const similarBusinesses: BusinessCardData[] = [
  {
    name: "Harvest Kitchen",
    slug: "harvest-kitchen",
    shortDescription: "Seasonal American cuisine in a cozy setting.",
    averageRating: 4.6,
    totalReviews: 89,
    city: "Portland",
    state: "OR",
    category: "Restaurant",
    isVerified: true,
    isFeatured: false,
  },
  {
    name: "The Garden Café",
    slug: "the-garden-cafe",
    shortDescription: "Organic café with garden-fresh salads and smoothies.",
    averageRating: 4.5,
    totalReviews: 56,
    city: "Portland",
    state: "OR",
    category: "Restaurant",
    isVerified: false,
    isFeatured: false,
  },
];

const ratingDistribution = [
  { stars: 5, count: 78, percentage: 63 },
  { stars: 4, count: 32, percentage: 26 },
  { stars: 3, count: 10, percentage: 8 },
  { stars: 2, count: 3, percentage: 2 },
  { stars: 1, count: 1, percentage: 1 },
];

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const biz = getBusiness(params.slug);
  return {
    title: `${biz.name} - LocalSpot`,
    description: biz.shortDescription,
  };
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const SocialIcon = ({ platform }: { platform: string }) => {
  return <ExternalLink className="h-4 w-4" />;
};

export default function BusinessDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const biz = getBusiness(params.slug);

  return (
    <div>
      {/* Cover */}
      <div className="relative h-56 bg-gradient-to-r from-primary/90 via-primary/70 to-primary/50 sm:h-72">
        <div className="absolute -bottom-10 left-1/2 flex h-20 w-20 -translate-x-1/2 items-center justify-center rounded-2xl border-4 border-background bg-card text-3xl font-bold shadow-lg sm:left-auto sm:translate-x-0 sm:ml-8">
          {biz.name.charAt(0)}
        </div>
      </div>

      <div className="container mx-auto px-4 pb-16 pt-14">
        <Breadcrumbs className="mb-4" />

        <div className="flex flex-col gap-8 lg:flex-row">
          {/* Main content */}
          <div className="flex-1">
            {/* Header */}
            <div className="mb-6">
              <div className="flex flex-wrap items-center gap-2">
                <h1 className="text-3xl font-bold">{biz.name}</h1>
                {biz.isVerified && (
                  <BadgeCheck className="h-6 w-6 text-blue-500" />
                )}
                {biz.isFeatured && (
                  <Badge className="bg-amber-500 text-white hover:bg-amber-500">
                    Featured
                  </Badge>
                )}
              </div>
              <div className="mt-2 flex flex-wrap items-center gap-3">
                <Badge variant="secondary">{biz.category}</Badge>
                <StarRating
                  rating={biz.averageRating}
                  showCount
                  count={biz.totalReviews}
                />
              </div>
            </div>

            {/* Quick info */}
            <div className="mb-6 flex flex-wrap gap-4 rounded-lg border bg-card p-4 text-sm">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-muted-foreground" />
                <span>{biz.address}</span>
              </div>
              <Separator orientation="vertical" className="hidden h-5 sm:block" />
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-muted-foreground" />
                <span>{biz.phone}</span>
              </div>
              <Separator orientation="vertical" className="hidden h-5 sm:block" />
              <div className="flex items-center gap-2">
                <Globe className="h-4 w-4 text-muted-foreground" />
                <a
                  href={biz.website}
                  className="text-primary hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Website
                </a>
              </div>
              <Separator orientation="vertical" className="hidden h-5 sm:block" />
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-muted-foreground" />
                <span>Open today</span>
              </div>
            </div>

            {/* Tabs */}
            <Tabs defaultValue="overview">
              <TabsList className="mb-6 w-full justify-start overflow-x-auto">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="photos">Photos</TabsTrigger>
                <TabsTrigger value="reviews">Reviews</TabsTrigger>
                <TabsTrigger value="events">Events</TabsTrigger>
              </TabsList>

              {/* Overview */}
              <TabsContent value="overview" className="space-y-8">
                <div>
                  <h2 className="mb-3 text-xl font-semibold">About</h2>
                  {biz.fullDescription.split("\n\n").map((para, i) => (
                    <p key={i} className="mb-3 leading-relaxed text-muted-foreground">
                      {para}
                    </p>
                  ))}
                </div>

                {/* Tags */}
                <div>
                  <h3 className="mb-3 text-lg font-semibold">Tags</h3>
                  <div className="flex flex-wrap gap-2">
                    {biz.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="gap-1">
                        <Tag className="h-3 w-3" />
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Hours */}
                <div>
                  <h3 className="mb-3 text-lg font-semibold">Business Hours</h3>
                  <div className="overflow-hidden rounded-lg border">
                    <table className="w-full text-sm">
                      <tbody>
                        {biz.hours.map((h) => (
                          <tr key={h.day} className="border-b last:border-0">
                            <td className="px-4 py-2.5 font-medium">{h.day}</td>
                            <td className="px-4 py-2.5 text-muted-foreground">
                              {h.time}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Map placeholder */}
                <div>
                  <h3 className="mb-3 text-lg font-semibold">Location</h3>
                  <div className="flex h-64 items-center justify-center rounded-lg border bg-muted text-muted-foreground">
                    <div className="text-center">
                      <MapPin className="mx-auto mb-2 h-8 w-8" />
                      <p className="font-medium">Map Placeholder</p>
                      <p className="text-sm">{biz.address}</p>
                    </div>
                  </div>
                </div>

                {/* Social links */}
                <div>
                  <h3 className="mb-3 text-lg font-semibold">Connect</h3>
                  <div className="flex gap-2">
                    {biz.socialLinks.map((link) => (
                      <Button
                        key={link.platform}
                        variant="outline"
                        size="icon"
                        asChild
                      >
                        <a
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={link.platform}
                        >
                          <SocialIcon platform={link.platform} />
                        </a>
                      </Button>
                    ))}
                  </div>
                </div>
              </TabsContent>

              {/* Photos */}
              <TabsContent value="photos">
                <h2 className="mb-4 text-xl font-semibold">Photos</h2>
                <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                  {Array.from({ length: 6 }, (_, i) => (
                    <div
                      key={i}
                      className="flex aspect-square items-center justify-center rounded-lg bg-gradient-to-br from-muted to-muted/50 text-4xl"
                    >
                      {["🍽️", "🥗", "🍷", "🏠", "👨‍🍳", "🌿"][i]}
                    </div>
                  ))}
                </div>
              </TabsContent>

              {/* Reviews */}
              <TabsContent value="reviews" className="space-y-8">
                <div>
                  <h2 className="mb-4 text-xl font-semibold">Reviews</h2>
                  {/* Rating breakdown */}
                  <div className="mb-6 flex flex-col gap-6 sm:flex-row sm:items-start">
                    <div className="text-center">
                      <div className="text-5xl font-bold">{biz.averageRating}</div>
                      <StarRating rating={biz.averageRating} className="mt-1 justify-center" />
                      <p className="mt-1 text-sm text-muted-foreground">
                        {biz.totalReviews} reviews
                      </p>
                    </div>
                    <div className="flex-1 space-y-2">
                      {ratingDistribution.map((row) => (
                        <div key={row.stars} className="flex items-center gap-2 text-sm">
                          <span className="w-8 text-right">{row.stars}★</span>
                          <div className="h-2.5 flex-1 overflow-hidden rounded-full bg-muted">
                            <div
                              className="h-full rounded-full bg-amber-400"
                              style={{ width: `${row.percentage}%` }}
                            />
                          </div>
                          <span className="w-8 text-muted-foreground">
                            {row.count}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <Button className="mb-6">Write a Review</Button>
                </div>

                <Separator />

                {/* Reviews list */}
                <div className="space-y-6">
                  {sampleReviews.map((review) => (
                    <div key={review.id}>
                      <div className="flex items-start gap-3">
                        <Avatar>
                          <AvatarFallback>
                            {review.author
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <div className="flex items-center gap-2">
                            <span className="font-medium">{review.author}</span>
                            <span className="text-sm text-muted-foreground">
                              {formatDate(review.date)}
                            </span>
                          </div>
                          <StarRating
                            rating={review.rating}
                            size="sm"
                            className="mt-1"
                          />
                          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                            {review.text}
                          </p>
                        </div>
                      </div>
                      <Separator className="mt-6" />
                    </div>
                  ))}
                </div>
              </TabsContent>

              {/* Events */}
              <TabsContent value="events" className="space-y-4">
                <h2 className="mb-4 text-xl font-semibold">Upcoming Events</h2>
                {sampleEvents.map((event) => (
                  <Card key={event.id}>
                    <CardHeader className="pb-2">
                      <div className="flex items-start justify-between">
                        <CardTitle className="text-lg">{event.title}</CardTitle>
                        <Badge variant="outline">{event.price}</Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="mb-2 text-sm text-muted-foreground">
                        {event.description}
                      </p>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Calendar className="h-3.5 w-3.5" />
                          {formatDate(event.date)}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="h-3.5 w-3.5" />
                          {event.time}
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </TabsContent>
            </Tabs>
          </div>

          {/* Sidebar */}
          <aside className="w-full shrink-0 space-y-4 lg:w-72">
            <div className="flex gap-2">
              <Button variant="outline" className="flex-1 gap-2">
                <Bookmark className="h-4 w-4" />
                Save
              </Button>
              <Button variant="outline" className="flex-1 gap-2">
                <Share2 className="h-4 w-4" />
                Share
              </Button>
            </div>
            <Button variant="ghost" className="w-full justify-start gap-2 text-muted-foreground" asChild>
              <Link href="#">
                <Flag className="h-4 w-4" />
                Claim this business
              </Link>
            </Button>

            <Separator />

            <div>
              <h3 className="mb-3 font-semibold">Similar Businesses</h3>
              <div className="space-y-4">
                {similarBusinesses.map((sb) => (
                  <BusinessCard key={sb.slug} business={sb} />
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
