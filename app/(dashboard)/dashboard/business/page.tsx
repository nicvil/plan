import Link from "next/link";
import {
  Eye,
  Star,
  MessageSquare,
  Pencil,
  BarChart3,
  ArrowRight,
  Zap,
  Check,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const stats = [
  { label: "Total Views", value: "1,234", icon: Eye },
  { label: "Total Reviews", value: "48", icon: MessageSquare },
  { label: "Average Rating", value: "4.6", icon: Star },
];

const recentReviews = [
  { reviewer: "Alice M.", rating: 5, excerpt: "Absolutely loved this place! Will be back soon." },
  { reviewer: "Bob K.", rating: 4, excerpt: "Great service and nice ambiance. Food was solid." },
  { reviewer: "Carol S.", rating: 5, excerpt: "Best experience I've had in a long time. Highly recommend!" },
];

const proFeatures = [
  "Priority search placement",
  "Advanced analytics dashboard",
  "Respond to reviews",
  "Photo gallery (up to 50)",
  "Remove competitor ads",
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`h-3 w-3 ${
            i < rating ? "fill-yellow-400 text-yellow-400" : "text-muted-foreground"
          }`}
        />
      ))}
    </div>
  );
}

export default function BusinessPage() {
  return (
    <div className="space-y-8">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-3xl font-bold">Business Dashboard</h1>
          <p className="text-muted-foreground">
            Manage your business listing.
          </p>
        </div>
        <Badge variant="secondary" className="w-fit text-sm">
          Free Plan
        </Badge>
      </div>

      {/* Stats Grid */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {stats.map((stat) => (
          <Card key={stat.label}>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardDescription>{stat.label}</CardDescription>
              <stat.icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {/* Recent Reviews */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Reviews</CardTitle>
            <CardDescription>Latest feedback from customers</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {recentReviews.map((review, i) => (
              <div key={i}>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">{review.reviewer}</span>
                  <StarRating rating={review.rating} />
                </div>
                <p className="mt-1 text-sm text-muted-foreground">
                  {review.excerpt}
                </p>
                {i < recentReviews.length - 1 && <Separator className="mt-4" />}
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
            <CardDescription>Manage your business</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <Button asChild variant="outline" className="w-full justify-between">
              <Link href="/dashboard/business/edit">
                <span className="flex items-center gap-2">
                  <Pencil className="h-4 w-4" />
                  Edit Business
                </span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" className="w-full justify-between">
              <Link href="/dashboard/business/analytics">
                <span className="flex items-center gap-2">
                  <BarChart3 className="h-4 w-4" />
                  View Analytics
                </span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" className="w-full justify-between">
              <Link href="/dashboard/business/reviews">
                <span className="flex items-center gap-2">
                  <MessageSquare className="h-4 w-4" />
                  Manage Reviews
                </span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Upgrade CTA */}
      <Card className="border-primary/50 bg-primary/5">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Zap className="h-5 w-5 text-primary" />
            Upgrade to Pro
          </CardTitle>
          <CardDescription>
            Unlock powerful features to grow your business.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="mb-4 space-y-2">
            {proFeatures.map((feature) => (
              <li key={feature} className="flex items-center gap-2 text-sm">
                <Check className="h-4 w-4 text-primary" />
                {feature}
              </li>
            ))}
          </ul>
          <Button asChild>
            <Link href="/dashboard/business/billing">Upgrade Now</Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
