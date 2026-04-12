"use client";

import { useState } from "react";
import { Star, Pencil, Trash2 } from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

interface Review {
  id: string;
  businessName: string;
  rating: number;
  date: string;
  excerpt: string;
}

const initialReviews: Review[] = [
  { id: "1", businessName: "Downtown Cafe", rating: 4, date: "Jan 15, 2024", excerpt: "Great atmosphere and the coffee was excellent. Would definitely come back for their seasonal specials." },
  { id: "2", businessName: "Bella's Bakery", rating: 5, date: "Jan 10, 2024", excerpt: "The best croissants I've ever had! Everything is baked fresh and the staff is incredibly friendly." },
  { id: "3", businessName: "Sunrise Yoga Studio", rating: 5, date: "Dec 28, 2023", excerpt: "Amazing instructors and a very welcoming environment. Perfect for beginners and experienced practitioners alike." },
  { id: "4", businessName: "Green Garden Restaurant", rating: 3, date: "Dec 20, 2023", excerpt: "Good food but the service was a bit slow. The seasonal menu is creative but portions could be larger." },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`h-4 w-4 ${
            i < rating
              ? "fill-yellow-400 text-yellow-400"
              : "text-muted-foreground"
          }`}
        />
      ))}
    </div>
  );
}

export default function ReviewsPage() {
  const [reviews, setReviews] = useState<Review[]>(initialReviews);
  const [deleteId, setDeleteId] = useState<string | null>(null);

  const handleDelete = () => {
    if (deleteId) {
      setReviews((prev) => prev.filter((r) => r.id !== deleteId));
      setDeleteId(null);
    }
  };

  if (reviews.length === 0) {
    return (
      <div className="space-y-8">
        <h1 className="text-3xl font-bold">My Reviews</h1>
        <div className="flex flex-col items-center justify-center py-20 text-center">
          <Star className="h-12 w-12 text-muted-foreground" />
          <h2 className="mt-4 text-xl font-semibold">No reviews yet</h2>
          <p className="mt-2 text-muted-foreground">
            Share your experience by writing your first review.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">My Reviews</h1>
        <p className="text-muted-foreground">
          Manage the reviews you&apos;ve written.
        </p>
      </div>

      <div className="space-y-4">
        {reviews.map((review) => (
          <Card key={review.id}>
            <CardHeader className="pb-3">
              <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <CardTitle className="text-lg">{review.businessName}</CardTitle>
                  <div className="mt-1 flex items-center gap-2">
                    <StarRating rating={review.rating} />
                    <Badge variant="secondary">{review.date}</Badge>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">
                    <Pencil className="mr-1 h-3 w-3" />
                    Edit
                  </Button>
                  <Dialog
                    open={deleteId === review.id}
                    onOpenChange={(open) => setDeleteId(open ? review.id : null)}
                  >
                    <DialogTrigger asChild>
                      <Button variant="destructive" size="sm">
                        <Trash2 className="mr-1 h-3 w-3" />
                        Delete
                      </Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>Delete Review</DialogTitle>
                        <DialogDescription>
                          Are you sure you want to delete your review for{" "}
                          <strong>{review.businessName}</strong>? This action
                          cannot be undone.
                        </DialogDescription>
                      </DialogHeader>
                      <DialogFooter>
                        <Button
                          variant="outline"
                          onClick={() => setDeleteId(null)}
                        >
                          Cancel
                        </Button>
                        <Button variant="destructive" onClick={handleDelete}>
                          Delete
                        </Button>
                      </DialogFooter>
                    </DialogContent>
                  </Dialog>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">{review.excerpt}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
