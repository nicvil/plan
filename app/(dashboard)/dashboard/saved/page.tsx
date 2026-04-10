"use client";

import { useState } from "react";
import { Heart, Bookmark, MapPin, Star } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface SavedBusiness {
  id: string;
  name: string;
  category: string;
  shortDescription: string;
  rating: number;
  location: string;
}

const initialSaved: SavedBusiness[] = [
  { id: "1", name: "Bella's Bakery", category: "Food & Drink", shortDescription: "Artisan breads and pastries baked fresh daily.", rating: 4.8, location: "Downtown" },
  { id: "2", name: "Downtown Cafe", category: "Cafe", shortDescription: "Cozy spot for coffee and light bites.", rating: 4.5, location: "Main Street" },
  { id: "3", name: "Green Garden Restaurant", category: "Restaurant", shortDescription: "Farm-to-table dining with a seasonal menu.", rating: 4.7, location: "West End" },
  { id: "4", name: "Sunrise Yoga Studio", category: "Health & Wellness", shortDescription: "Classes for all levels in a welcoming space.", rating: 4.9, location: "East Side" },
  { id: "5", name: "Tech Hub Coworking", category: "Services", shortDescription: "Modern coworking space with high-speed WiFi.", rating: 4.3, location: "Innovation District" },
  { id: "6", name: "Pet Paradise", category: "Pets", shortDescription: "Premium pet grooming and daycare services.", rating: 4.6, location: "Suburbia" },
];

export default function SavedPage() {
  const [saved, setSaved] = useState<SavedBusiness[]>(initialSaved);

  const removeSaved = (id: string) => {
    setSaved((prev) => prev.filter((b) => b.id !== id));
  };

  if (saved.length === 0) {
    return (
      <div className="space-y-8">
        <h1 className="text-3xl font-bold">Saved Businesses</h1>
        <div className="flex flex-col items-center justify-center py-20 text-center">
          <Bookmark className="h-12 w-12 text-muted-foreground" />
          <h2 className="mt-4 text-xl font-semibold">No saved businesses</h2>
          <p className="mt-2 text-muted-foreground">
            Start exploring and save businesses you love.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Saved Businesses</h1>
        <p className="text-muted-foreground">
          Businesses you&apos;ve bookmarked for later.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {saved.map((biz) => (
          <Card key={biz.id}>
            <CardHeader className="pb-3">
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle className="text-lg">{biz.name}</CardTitle>
                  <Badge variant="secondary" className="mt-1">
                    {biz.category}
                  </Badge>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-red-500 hover:text-red-600"
                  onClick={() => removeSaved(biz.id)}
                >
                  <Heart className="h-4 w-4 fill-current" />
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <p className="mb-3 text-sm text-muted-foreground">
                {biz.shortDescription}
              </p>
              <div className="flex items-center justify-between text-sm">
                <span className="flex items-center gap-1 text-muted-foreground">
                  <MapPin className="h-3 w-3" />
                  {biz.location}
                </span>
                <span className="flex items-center gap-1 font-medium">
                  <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                  {biz.rating}
                </span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
