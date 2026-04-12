"use client";

import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

interface StarRatingProps {
  rating: number;
  onRate?: (rating: number) => void;
  size?: "sm" | "md" | "lg";
  interactive?: boolean;
  showCount?: boolean;
  count?: number;
  className?: string;
}

const sizeMap = {
  sm: "h-3.5 w-3.5",
  md: "h-5 w-5",
  lg: "h-6 w-6",
};

export function StarRating({
  rating,
  onRate,
  size = "md",
  interactive = false,
  showCount = false,
  count,
  className,
}: StarRatingProps) {
  const iconSize = sizeMap[size];

  return (
    <div className={cn("flex items-center gap-1", className)}>
      <div className="flex items-center">
        {Array.from({ length: 5 }, (_, i) => {
          const starValue = i + 1;
          const fill =
            rating >= starValue
              ? "full"
              : rating >= starValue - 0.5
                ? "half"
                : "empty";

          return (
            <button
              key={i}
              type="button"
              disabled={!interactive}
              onClick={() => interactive && onRate?.(starValue)}
              className={cn(
                "relative shrink-0",
                interactive
                  ? "cursor-pointer transition-transform hover:scale-110"
                  : "cursor-default",
              )}
              aria-label={
                interactive ? `Rate ${starValue} stars` : undefined
              }
            >
              {/* Empty star (background) */}
              <Star
                className={cn(
                  iconSize,
                  "text-muted-foreground/30",
                )}
              />
              {/* Filled star (overlay) */}
              {fill !== "empty" && (
                <span
                  className="absolute inset-0 overflow-hidden"
                  style={{ width: fill === "half" ? "50%" : "100%" }}
                >
                  <Star
                    className={cn(iconSize, "fill-amber-400 text-amber-400")}
                  />
                </span>
              )}
            </button>
          );
        })}
      </div>
      {showCount && count !== undefined && (
        <span className="text-sm text-muted-foreground">({count})</span>
      )}
    </div>
  );
}
