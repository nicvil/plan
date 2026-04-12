"use client";

import Link from "next/link";
import { MapPin, BadgeCheck, Sparkles } from "lucide-react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { StarRating } from "@/components/business/star-rating";
import { cn, truncateText } from "@/lib/utils";

export interface BusinessCardData {
  name: string;
  slug: string;
  shortDescription: string;
  averageRating: number;
  totalReviews: number;
  city: string;
  state: string;
  category: string;
  isVerified: boolean;
  isFeatured: boolean;
  coverImage?: string;
}

interface BusinessCardProps {
  business: BusinessCardData;
  className?: string;
}

export function BusinessCard({ business, className }: BusinessCardProps) {
  return (
    <Link href={`/businesses/${business.slug}`} className="group block">
      <Card
        className={cn(
          "overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1",
          className,
        )}
      >
        {/* Cover image */}
        <div className="relative h-40 bg-gradient-to-br from-primary/80 to-primary/40">
          {/* Logo overlay */}
          <div className="absolute -bottom-5 left-4 flex h-12 w-12 items-center justify-center rounded-lg border-2 border-background bg-card text-lg font-bold shadow-sm">
            {business.name.charAt(0)}
          </div>
          {business.isFeatured && (
            <Badge className="absolute right-2 top-2 gap-1 bg-amber-500 text-white hover:bg-amber-500">
              <Sparkles className="h-3 w-3" />
              Featured
            </Badge>
          )}
        </div>

        <CardHeader className="pb-2 pt-8">
          <div className="flex items-start justify-between gap-2">
            <h3 className="font-semibold leading-tight group-hover:text-primary">
              {business.name}
            </h3>
            {business.isVerified && (
              <BadgeCheck className="h-4 w-4 shrink-0 text-blue-500" />
            )}
          </div>
          <p className="text-sm text-muted-foreground">
            {truncateText(business.shortDescription, 80)}
          </p>
        </CardHeader>

        <CardContent className="pb-2">
          <div className="flex items-center gap-2">
            <StarRating
              rating={business.averageRating}
              size="sm"
              showCount
              count={business.totalReviews}
            />
          </div>
        </CardContent>

        <CardFooter className="flex items-center justify-between text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <MapPin className="h-3.5 w-3.5" />
            <span>
              {business.city}, {business.state}
            </span>
          </div>
          <Badge variant="secondary" className="text-xs">
            {business.category}
          </Badge>
        </CardFooter>
      </Card>
    </Link>
  );
}
