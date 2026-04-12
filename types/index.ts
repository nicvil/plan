import type {
  Business,
  Category,
  Tag,
  Review,
  BusinessImage,
  User,
} from "@prisma/client";

// ─── Extended Prisma Types ──────────────────────────────────────────────────

export type BusinessWithRelations = Business & {
  category: Category;
  tags: Tag[];
  reviews: Review[];
  images: BusinessImage[];
  owner: User;
};

export type ReviewWithUser = Review & {
  user: Pick<User, "id" | "name" | "image">;
};

export type CategoryWithCount = Category & {
  _count: {
    businesses: number;
  };
};

// ─── Search & Filter Types ──────────────────────────────────────────────────

export interface SearchParams {
  query?: string;
  category?: string;
  city?: string;
  state?: string;
  rating?: string;
  sortBy?: string;
  page?: string;
  limit?: string;
}

// ─── NextAuth Type Extensions ───────────────────────────────────────────────

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      role: string;
      name?: string | null;
      email?: string | null;
      image?: string | null;
    };
  }

  interface User {
    role?: string;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    id?: string;
    role?: string;
  }
}
