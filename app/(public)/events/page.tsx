import type { Metadata } from "next";
import { Calendar, MapPin, Clock, DollarSign, Filter } from "lucide-react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export const metadata: Metadata = {
  title: "Local Events - LocalSpot",
  description:
    "Discover upcoming local events in your community. Festivals, workshops, markets, and more.",
};

const events = [
  {
    id: 1,
    title: "Summer Farmers Market",
    slug: "summer-farmers-market",
    date: "2025-07-12",
    time: "8:00 AM - 1:00 PM",
    business: "Downtown Community Center",
    location: "Portland, OR",
    price: "Free",
    category: "Markets",
    description:
      "Fresh produce, artisan goods, and live music every Saturday morning.",
    image: "🌽",
  },
  {
    id: 2,
    title: "Wine & Paint Night",
    slug: "wine-paint-night",
    date: "2025-07-18",
    time: "7:00 PM - 9:30 PM",
    business: "The Creative Corner",
    location: "Austin, TX",
    price: "$45",
    category: "Workshop",
    description:
      "Guided painting session with complimentary wine and snacks.",
    image: "🎨",
  },
  {
    id: 3,
    title: "Jazz on the Rooftop",
    slug: "jazz-on-the-rooftop",
    date: "2025-07-20",
    time: "6:00 PM - 10:00 PM",
    business: "Skyline Lounge",
    location: "Chicago, IL",
    price: "$25",
    category: "Music",
    description:
      "Live jazz performances with panoramic city views and craft cocktails.",
    image: "🎵",
  },
  {
    id: 4,
    title: "Small Business Networking Brunch",
    slug: "networking-brunch",
    date: "2025-07-22",
    time: "10:00 AM - 12:00 PM",
    business: "The Rustic Table",
    location: "Denver, CO",
    price: "$35",
    category: "Networking",
    description:
      "Connect with fellow local business owners over brunch and mimosas.",
    image: "🤝",
  },
  {
    id: 5,
    title: "Yoga in the Park",
    slug: "yoga-in-the-park",
    date: "2025-07-25",
    time: "7:00 AM - 8:30 AM",
    business: "ZenFit Studio",
    location: "San Diego, CA",
    price: "Free",
    category: "Wellness",
    description:
      "Start your weekend with a rejuvenating outdoor yoga session for all levels.",
    image: "🧘",
  },
  {
    id: 6,
    title: "Craft Beer Festival",
    slug: "craft-beer-festival",
    date: "2025-08-02",
    time: "2:00 PM - 8:00 PM",
    business: "Hopside Brewing Co.",
    location: "Portland, OR",
    price: "$30",
    category: "Food & Drink",
    description:
      "Sample craft beers from 20+ local breweries with food truck fare.",
    image: "🍺",
  },
  {
    id: 7,
    title: "Kids Coding Workshop",
    slug: "kids-coding-workshop",
    date: "2025-08-05",
    time: "10:00 AM - 12:00 PM",
    business: "TechSpark Academy",
    location: "Seattle, WA",
    price: "$20",
    category: "Workshop",
    description:
      "Introduction to coding for kids ages 8-14. No experience required.",
    image: "💻",
  },
  {
    id: 8,
    title: "Vintage & Artisan Pop-Up Market",
    slug: "vintage-popup-market",
    date: "2025-08-10",
    time: "9:00 AM - 4:00 PM",
    business: "Warehouse District Collective",
    location: "Nashville, TN",
    price: "Free",
    category: "Markets",
    description:
      "One-of-a-kind vintage finds and handcrafted goods from local artisans.",
    image: "🏷️",
  },
];

function formatEventDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

export default function EventsPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-10 text-center">
        <h1 className="text-4xl font-bold tracking-tight">Local Events</h1>
        <p className="mt-3 text-lg text-muted-foreground">
          Discover upcoming events hosted by local businesses in your community.
        </p>
      </div>

      {/* Filter bar */}
      <div className="mb-8 flex flex-wrap items-center gap-3 rounded-lg border bg-card p-4">
        <Filter className="h-4 w-4 text-muted-foreground" />
        <Input
          type="date"
          className="w-auto"
          defaultValue="2025-07-01"
          aria-label="From date"
        />
        <span className="text-sm text-muted-foreground">to</span>
        <Input
          type="date"
          className="w-auto"
          defaultValue="2025-08-31"
          aria-label="To date"
        />
        <Select defaultValue="all">
          <SelectTrigger className="w-[160px]">
            <SelectValue placeholder="Category" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Categories</SelectItem>
            <SelectItem value="markets">Markets</SelectItem>
            <SelectItem value="workshop">Workshop</SelectItem>
            <SelectItem value="music">Music</SelectItem>
            <SelectItem value="networking">Networking</SelectItem>
            <SelectItem value="wellness">Wellness</SelectItem>
            <SelectItem value="food-drink">Food & Drink</SelectItem>
          </SelectContent>
        </Select>
        <div className="flex items-center gap-2 rounded-md border px-3 py-2">
          <span className="text-sm">Free only</span>
          <input
            type="checkbox"
            className="h-4 w-4 rounded border-input"
            aria-label="Show free events only"
          />
        </div>
      </div>

      {/* Events grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {events.map((event) => (
          <Card
            key={event.id}
            className="overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
          >
            <div className="flex h-32 items-center justify-center bg-gradient-to-br from-primary/70 to-accent/40 text-5xl">
              {event.image}
            </div>
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <Badge variant="secondary" className="text-xs">
                  {event.category}
                </Badge>
                <Badge
                  variant={event.price === "Free" ? "default" : "outline"}
                  className="text-xs"
                >
                  {event.price === "Free" ? (
                    "Free"
                  ) : (
                    <span className="flex items-center gap-0.5">
                      <DollarSign className="h-3 w-3" />
                      {event.price.replace("$", "")}
                    </span>
                  )}
                </Badge>
              </div>
              <h3 className="mt-2 font-semibold leading-tight">
                {event.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {event.description}
              </p>
            </CardHeader>
            <CardContent className="space-y-1.5 pb-2 text-sm text-muted-foreground">
              <div className="flex items-center gap-1.5">
                <Calendar className="h-3.5 w-3.5 shrink-0" />
                {formatEventDate(event.date)}
              </div>
              <div className="flex items-center gap-1.5">
                <Clock className="h-3.5 w-3.5 shrink-0" />
                {event.time}
              </div>
              <div className="flex items-center gap-1.5">
                <MapPin className="h-3.5 w-3.5 shrink-0" />
                {event.location}
              </div>
            </CardContent>
            <CardFooter>
              <p className="text-xs font-medium text-primary">
                Hosted by {event.business}
              </p>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
