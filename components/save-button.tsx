"use client";

import { Heart } from "lucide-react";

export function SaveButton() {
  return (
    <button
      className="absolute top-2 right-2 flex h-8 w-8 items-center justify-center rounded-full bg-white/80 text-muted-foreground hover:text-red-500 hover:bg-white transition-colors"
      aria-label="Salvează"
      onClick={(e) => e.preventDefault()}
    >
      <Heart className="h-4 w-4" />
    </button>
  );
}

export function SaveButtonSmall() {
  return (
    <button
      className="absolute top-2 right-2 flex h-7 w-7 items-center justify-center rounded-full bg-white/80 text-muted-foreground hover:text-red-500 hover:bg-white transition-colors"
      aria-label="Salvează"
      onClick={(e) => e.preventDefault()}
    >
      <Heart className="h-3.5 w-3.5" />
    </button>
  );
}
