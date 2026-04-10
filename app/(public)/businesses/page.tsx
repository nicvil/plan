"use client";

import { useState } from "react";
import {
  Search,
  SlidersHorizontal,
  LayoutGrid,
  List,
  ChevronLeft,
  ChevronRight,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  BusinessCard,
  type BusinessCardData,
} from "@/components/business/business-card";
import { StarRating } from "@/components/business/star-rating";
import { useBusinessStore } from "@/stores/business-store";
import { cn } from "@/lib/utils";

const sampleBusinesses: BusinessCardData[] = [
  {
    name: "The Rustic Table",
    slug: "the-rustic-table",
    shortDescription:
      "Farm-to-table dining with seasonal menus and locally sourced ingredients.",
    averageRating: 4.8,
    totalReviews: 124,
    city: "Portland",
    state: "OR",
    category: "Restaurant",
    isVerified: true,
    isFeatured: true,
  },
  {
    name: "Bloom & Petal Floristry",
    slug: "bloom-petal-floristry",
    shortDescription:
      "Artisan flower arrangements for every occasion, sourced from local growers.",
    averageRating: 4.9,
    totalReviews: 67,
    city: "Austin",
    state: "TX",
    category: "Retail",
    isVerified: true,
    isFeatured: false,
  },
  {
    name: "TechSpark Academy",
    slug: "techspark-academy",
    shortDescription:
      "Coding bootcamps and technology workshops for kids and adults alike.",
    averageRating: 4.7,
    totalReviews: 45,
    city: "Seattle",
    state: "WA",
    category: "Education",
    isVerified: true,
    isFeatured: false,
  },
  {
    name: "ZenFit Studio",
    slug: "zenfit-studio",
    shortDescription:
      "Holistic fitness studio offering yoga, pilates, and meditation classes.",
    averageRating: 4.6,
    totalReviews: 89,
    city: "San Diego",
    state: "CA",
    category: "Health & Wellness",
    isVerified: false,
    isFeatured: true,
  },
  {
    name: "Paws & Claws Pet Spa",
    slug: "paws-claws-pet-spa",
    shortDescription:
      "Premium pet grooming and daycare services with certified handlers.",
    averageRating: 4.5,
    totalReviews: 112,
    city: "Denver",
    state: "CO",
    category: "Pets",
    isVerified: true,
    isFeatured: false,
  },
  {
    name: "Golden Oak Woodworking",
    slug: "golden-oak-woodworking",
    shortDescription:
      "Custom handcrafted furniture and home décor from reclaimed wood.",
    averageRating: 4.9,
    totalReviews: 38,
    city: "Nashville",
    state: "TN",
    category: "Home Services",
    isVerified: false,
    isFeatured: false,
  },
];

const categories = [
  "Restaurant",
  "Retail",
  "Education",
  "Health & Wellness",
  "Pets",
  "Home Services",
  "Arts & Entertainment",
  "Professional Services",
];

export default function BusinessesPage() {
  const {
    searchQuery,
    setSearchQuery,
    viewMode,
    setViewMode,
    sortBy,
    setSortBy,
    rating,
    setRating,
  } = useBusinessStore();

  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  const toggleCategory = (cat: string) => {
    setSelectedCategories((prev) =>
      prev.includes(cat) ? prev.filter((c) => c !== cat) : [...prev, cat],
    );
  };

  const filtered = sampleBusinesses.filter((b) => {
    if (
      searchQuery &&
      !b.name.toLowerCase().includes(searchQuery.toLowerCase())
    )
      return false;
    if (
      selectedCategories.length > 0 &&
      !selectedCategories.includes(b.category)
    )
      return false;
    if (rating > 0 && b.averageRating < rating) return false;
    return true;
  });

  const sorted = [...filtered].sort((a, b) => {
    switch (sortBy) {
      case "rating":
        return b.averageRating - a.averageRating;
      case "reviews":
        return b.totalReviews - a.totalReviews;
      case "name":
        return a.name.localeCompare(b.name);
      default:
        return 0;
    }
  });

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-8">
        <h1 className="text-4xl font-bold tracking-tight">
          Explore Local Businesses
        </h1>
        <p className="mt-2 text-lg text-muted-foreground">
          Discover and support amazing businesses in your community.
        </p>
      </div>

      {/* Search and controls bar */}
      <div className="mb-6 flex flex-wrap items-center gap-3">
        <div className="relative flex-1 min-w-[200px]">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Search businesses…"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-9"
          />
        </div>
        <Select value={sortBy} onValueChange={setSortBy}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Sort by" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="newest">Newest</SelectItem>
            <SelectItem value="rating">Highest Rated</SelectItem>
            <SelectItem value="reviews">Most Reviewed</SelectItem>
            <SelectItem value="name">A–Z</SelectItem>
          </SelectContent>
        </Select>
        <div className="flex items-center rounded-md border">
          <Button
            variant={viewMode === "grid" ? "default" : "ghost"}
            size="icon"
            onClick={() => setViewMode("grid")}
            aria-label="Grid view"
          >
            <LayoutGrid className="h-4 w-4" />
          </Button>
          <Button
            variant={viewMode === "list" ? "default" : "ghost"}
            size="icon"
            onClick={() => setViewMode("list")}
            aria-label="List view"
          >
            <List className="h-4 w-4" />
          </Button>
        </div>
        <Button
          variant="outline"
          className="lg:hidden"
          onClick={() => setSidebarOpen(!sidebarOpen)}
        >
          <SlidersHorizontal className="mr-2 h-4 w-4" />
          Filters
        </Button>
      </div>

      <div className="flex gap-8">
        {/* Filter sidebar */}
        <aside
          className={cn(
            "w-64 shrink-0 space-y-6",
            sidebarOpen
              ? "fixed inset-0 z-40 overflow-y-auto bg-background p-6 lg:static lg:z-auto lg:p-0"
              : "hidden lg:block",
          )}
        >
          {sidebarOpen && (
            <div className="flex items-center justify-between lg:hidden">
              <h2 className="text-lg font-semibold">Filters</h2>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setSidebarOpen(false)}
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          )}

          {/* Categories */}
          <div>
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
              Category
            </h3>
            <div className="space-y-2">
              {categories.map((cat) => (
                <div key={cat} className="flex items-center gap-2">
                  <Checkbox
                    id={`cat-${cat}`}
                    checked={selectedCategories.includes(cat)}
                    onCheckedChange={() => toggleCategory(cat)}
                  />
                  <Label
                    htmlFor={`cat-${cat}`}
                    className="text-sm font-normal cursor-pointer"
                  >
                    {cat}
                  </Label>
                </div>
              ))}
            </div>
          </div>

          <Separator />

          {/* Rating filter */}
          <div>
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
              Minimum Rating
            </h3>
            <div className="space-y-1">
              {[4, 3, 2, 1].map((r) => (
                <button
                  key={r}
                  onClick={() => setRating(rating === r ? 0 : r)}
                  className={cn(
                    "flex w-full items-center gap-2 rounded-md px-2 py-1.5 text-sm transition-colors hover:bg-muted",
                    rating === r && "bg-muted font-medium",
                  )}
                >
                  <StarRating rating={r} size="sm" />
                  <span>& up</span>
                </button>
              ))}
            </div>
          </div>

          <Separator />

          <Button
            variant="outline"
            size="sm"
            className="w-full"
            onClick={() => {
              setSearchQuery("");
              setSelectedCategories([]);
              setRating(0);
              setSortBy("newest");
            }}
          >
            Clear all filters
          </Button>
        </aside>

        {/* Main content */}
        <div className="flex-1">
          <p className="mb-4 text-sm text-muted-foreground">
            Showing {sorted.length} of {sampleBusinesses.length} businesses
          </p>

          {sorted.length === 0 ? (
            <div className="py-20 text-center">
              <div className="mb-4 text-5xl">🔍</div>
              <h2 className="text-xl font-semibold">No businesses found</h2>
              <p className="mt-2 text-muted-foreground">
                Try adjusting your filters or search terms.
              </p>
            </div>
          ) : (
            <div
              className={cn(
                viewMode === "grid"
                  ? "grid gap-6 sm:grid-cols-2 xl:grid-cols-3"
                  : "space-y-4",
              )}
            >
              {sorted.map((business) => (
                <BusinessCard key={business.slug} business={business} />
              ))}
            </div>
          )}

          {/* Pagination */}
          <div className="mt-8 flex items-center justify-center gap-2">
            <Button variant="outline" size="sm" disabled>
              <ChevronLeft className="mr-1 h-4 w-4" />
              Previous
            </Button>
            <span className="px-3 text-sm text-muted-foreground">
              Page 1 of 1
            </span>
            <Button variant="outline" size="sm" disabled>
              Next
              <ChevronRight className="ml-1 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
