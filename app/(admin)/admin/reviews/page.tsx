"use client";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  MoreVertical,
  CheckCircle,
  Trash2,
  Flag,
  Star,
} from "lucide-react";

type Review = {
  id: number;
  business: string;
  user: string;
  rating: number;
  excerpt: string;
  status: "Pending" | "Approved" | "Flagged";
};

const reviews: Review[] = [
  { id: 1, business: "Coastal Coffee Roasters", user: "Tom Brown", rating: 5, excerpt: "Absolutely love this place! Best espresso in town and the staff are incredibly friendly...", status: "Approved" },
  { id: 2, business: "Downtown Deli", user: "Emily Davis", rating: 2, excerpt: "Service was slow and the food was mediocre at best. Would not recommend to anyone...", status: "Flagged" },
  { id: 3, business: "Apex Fitness Studio", user: "Alex Rivera", rating: 4, excerpt: "Great equipment and trainers. A bit pricey but worth it for the quality of classes...", status: "Approved" },
  { id: 4, business: "Green Valley Landscaping", user: "Sarah Chen", rating: 1, excerpt: "Terrible experience. They never showed up on the scheduled day and ghosted my calls...", status: "Flagged" },
  { id: 5, business: "Pixel Perfect Design", user: "Mark Johnson", rating: 5, excerpt: "Outstanding web design work. They delivered ahead of schedule with amazing attention to detail...", status: "Pending" },
  { id: 6, business: "Sunset Auto Repair", user: "Lisa Wang", rating: 3, excerpt: "Decent repair work but communication could be better. Took longer than estimated...", status: "Pending" },
];

const statusColor = (status: string) => {
  switch (status) {
    case "Approved": return "bg-green-100 text-green-800 border-green-300";
    case "Pending": return "bg-yellow-100 text-yellow-800 border-yellow-300";
    case "Flagged": return "bg-red-100 text-red-800 border-red-300";
    default: return "";
  }
};

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`h-3.5 w-3.5 ${
            i < rating
              ? "fill-amber-400 text-amber-400"
              : "fill-gray-200 text-gray-200"
          }`}
        />
      ))}
    </div>
  );
}

export default function ModerateReviewsPage() {
  const [statusFilter, setStatusFilter] = useState("all");

  const filtered = reviews.filter(
    (r) => statusFilter === "all" || r.status.toLowerCase() === statusFilter
  );

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-900">Moderate Reviews</h2>
        <p className="text-sm text-muted-foreground mt-1">
          Review, approve, or flag user-submitted reviews.
        </p>
      </div>

      {/* Filters */}
      <Card>
        <CardContent className="pt-6">
          <Select value={statusFilter} onValueChange={setStatusFilter}>
            <SelectTrigger className="w-full sm:w-[200px]">
              <SelectValue placeholder="Filter by status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Statuses</SelectItem>
              <SelectItem value="pending">Pending</SelectItem>
              <SelectItem value="approved">Approved</SelectItem>
              <SelectItem value="flagged">Flagged</SelectItem>
            </SelectContent>
          </Select>
        </CardContent>
      </Card>

      {/* Table */}
      <Card>
        <CardHeader>
          <CardTitle className="text-base">
            Reviews ({filtered.length})
          </CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          {/* Header */}
          <div className="hidden lg:grid lg:grid-cols-[1.5fr_1fr_0.8fr_2fr_0.8fr_0.5fr] gap-4 px-6 py-3 bg-muted/50 text-xs font-medium text-muted-foreground uppercase tracking-wide border-b">
            <div>Business</div>
            <div>User</div>
            <div>Rating</div>
            <div>Excerpt</div>
            <div>Status</div>
            <div className="text-right">Actions</div>
          </div>

          {filtered.map((review) => (
            <div
              key={review.id}
              className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr_0.8fr_2fr_0.8fr_0.5fr] gap-2 lg:gap-4 items-center px-6 py-4 border-b last:border-0 hover:bg-muted/30 transition-colors"
            >
              <div className="font-medium text-sm">{review.business}</div>
              <div className="text-sm text-muted-foreground">{review.user}</div>
              <div>
                <StarRating rating={review.rating} />
              </div>
              <div className="text-sm text-muted-foreground line-clamp-2">
                {review.excerpt}
              </div>
              <div>
                <Badge
                  variant="outline"
                  className={statusColor(review.status)}
                >
                  {review.status}
                </Badge>
              </div>
              <div className="flex justify-end">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <MoreVertical className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem className="gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      Approve
                    </DropdownMenuItem>
                    <DropdownMenuItem className="gap-2 text-orange-600">
                      <Flag className="h-4 w-4" />
                      Flag
                    </DropdownMenuItem>
                    <DropdownMenuItem className="gap-2 text-red-600">
                      <Trash2 className="h-4 w-4" />
                      Delete
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
          ))}

          {filtered.length === 0 && (
            <div className="px-6 py-12 text-center text-sm text-muted-foreground">
              No reviews match the selected filter.
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
