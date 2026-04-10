import { create } from "zustand";

interface BusinessFilters {
  priceRange?: string;
  city?: string;
  state?: string;
  isVerified?: boolean;
  isFeatured?: boolean;
}

interface BusinessStore {
  searchQuery: string;
  category: string;
  rating: number;
  sortBy: string;
  viewMode: "grid" | "list";
  filters: BusinessFilters;

  setSearchQuery: (query: string) => void;
  setCategory: (category: string) => void;
  setRating: (rating: number) => void;
  setSortBy: (sortBy: string) => void;
  setViewMode: (mode: "grid" | "list") => void;
  setFilters: (filters: Partial<BusinessFilters>) => void;
  resetFilters: () => void;
}

const initialState = {
  searchQuery: "",
  category: "",
  rating: 0,
  sortBy: "newest",
  viewMode: "grid" as const,
  filters: {},
};

export const useBusinessStore = create<BusinessStore>((set) => ({
  ...initialState,

  setSearchQuery: (searchQuery) => set({ searchQuery }),
  setCategory: (category) => set({ category }),
  setRating: (rating) => set({ rating }),
  setSortBy: (sortBy) => set({ sortBy }),
  setViewMode: (viewMode) => set({ viewMode }),
  setFilters: (filters) =>
    set((state) => ({ filters: { ...state.filters, ...filters } })),
  resetFilters: () => set(initialState),
}));
