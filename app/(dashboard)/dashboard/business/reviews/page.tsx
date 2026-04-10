"use client";

import { useState } from "react";
import { Star, Send } from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface BusinessReview {
  id: string;
  reviewer: string;
  avatar: string | null;
  rating: number;
  date: string;
  text: string;
  reply: string | null;
}

const allReviews: BusinessReview[] = [
  { id: "1", reviewer: "Alice Martinez", avatar: null, rating: 5, date: "Jan 20, 2024", text: "Absolutely loved this place! The pastries are incredible and the staff is so welcoming. Will definitely be coming back every week.", reply: "Thank you so much, Alice! We look forward to seeing you again." },
  { id: "2", reviewer: "Bob Kim", avatar: null, rating: 4, date: "Jan 18, 2024", text: "Great selection of breads and the coffee is solid. Only wish they had more seating during peak hours.", reply: null },
  { id: "3", reviewer: "Carol Smith", avatar: null, rating: 5, date: "Jan 15, 2024", text: "Best croissants in town, hands down. The sourdough is also phenomenal. A must-visit!", reply: null },
  { id: "4", reviewer: "Dave Johnson", avatar: null, rating: 3, date: "Jan 12, 2024", text: "Decent bakery but a bit pricey for what you get. The quality is there but I expected larger portions.", reply: null },
  { id: "5", reviewer: "Eva Chen", avatar: null, rating: 2, date: "Jan 10, 2024", text: "Had a disappointing experience. My order was wrong and it took a long time. Hopefully it was just an off day.", reply: null },
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

export default function ManageReviewsPage() {
  const [filter, setFilter] = useState("all");
  const [replyingTo, setReplyingTo] = useState<string | null>(null);
  const [replyText, setReplyText] = useState("");

  const filtered =
    filter === "all"
      ? allReviews
      : allReviews.filter((r) => r.rating === parseInt(filter));

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const handleSubmitReply = (reviewId: string) => {
    // Placeholder: would save reply
    setReplyingTo(null);
    setReplyText("");
  };

  return (
    <div className="space-y-8">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-3xl font-bold">Manage Reviews</h1>
          <p className="text-muted-foreground">
            View and respond to customer reviews.
          </p>
        </div>
        <Select value={filter} onValueChange={setFilter}>
          <SelectTrigger className="w-[160px]">
            <SelectValue placeholder="Filter by rating" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Ratings</SelectItem>
            <SelectItem value="5">5 Stars</SelectItem>
            <SelectItem value="4">4 Stars</SelectItem>
            <SelectItem value="3">3 Stars</SelectItem>
            <SelectItem value="2">2 Stars</SelectItem>
            <SelectItem value="1">1 Star</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-4">
        {filtered.map((review) => (
          <Card key={review.id}>
            <CardHeader className="pb-3">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <Avatar className="h-9 w-9">
                    <AvatarImage src={review.avatar ?? undefined} />
                    <AvatarFallback>
                      {review.reviewer
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle className="text-sm font-medium">
                      {review.reviewer}
                    </CardTitle>
                    <div className="mt-0.5 flex items-center gap-2">
                      <StarRating rating={review.rating} />
                      <span className="text-xs text-muted-foreground">
                        {review.date}
                      </span>
                    </div>
                  </div>
                </div>
                <Badge variant="secondary">{review.rating} / 5</Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-sm">{review.text}</p>

              {/* Existing Reply */}
              {review.reply && (
                <div className="rounded-md bg-muted p-3">
                  <p className="text-xs font-medium text-muted-foreground">
                    Your Reply
                  </p>
                  <p className="mt-1 text-sm">{review.reply}</p>
                </div>
              )}

              {/* Reply Form */}
              {!review.reply && replyingTo === review.id ? (
                <div className="space-y-2">
                  <Textarea
                    placeholder="Write your reply..."
                    value={replyText}
                    onChange={(e) => setReplyText(e.target.value)}
                    rows={3}
                  />
                  <div className="flex gap-2">
                    <Button
                      size="sm"
                      onClick={() => handleSubmitReply(review.id)}
                    >
                      <Send className="mr-1 h-3 w-3" />
                      Submit Reply
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => {
                        setReplyingTo(null);
                        setReplyText("");
                      }}
                    >
                      Cancel
                    </Button>
                  </div>
                </div>
              ) : (
                !review.reply && (
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setReplyingTo(review.id)}
                  >
                    Reply
                  </Button>
                )
              )}
            </CardContent>
          </Card>
        ))}

        {filtered.length === 0 && (
          <div className="flex flex-col items-center justify-center py-20 text-center">
            <Star className="h-12 w-12 text-muted-foreground" />
            <h2 className="mt-4 text-xl font-semibold">No reviews found</h2>
            <p className="mt-2 text-muted-foreground">
              No reviews match the selected filter.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
