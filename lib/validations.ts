import { z } from "zod";

export const businessSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(100, "Name must be at most 100 characters"),
  description: z
    .string()
    .min(10, "Description must be at least 10 characters")
    .max(5000, "Description must be at most 5000 characters"),
  shortDescription: z
    .string()
    .max(160, "Short description must be at most 160 characters")
    .optional(),
  address: z.string().min(1, "Address is required").optional(),
  city: z.string().min(1, "City is required").optional(),
  state: z.string().min(1, "State is required").optional(),
  country: z.string().min(1, "Country is required").optional(),
  zipCode: z.string().min(1, "Zip code is required").optional(),
  phone: z
    .string()
    .regex(/^[+]?[\d\s()-]+$/, "Invalid phone number")
    .optional()
    .or(z.literal("")),
  email: z.string().email("Invalid email address").optional().or(z.literal("")),
  website: z.string().url("Invalid URL").optional().or(z.literal("")),
  categoryId: z.string().min(1, "Category is required"),
});

export const reviewSchema = z.object({
  rating: z
    .number()
    .int()
    .min(1, "Rating must be at least 1")
    .max(5, "Rating must be at most 5"),
  title: z
    .string()
    .min(3, "Title must be at least 3 characters")
    .max(100, "Title must be at most 100 characters"),
  body: z
    .string()
    .min(10, "Review must be at least 10 characters")
    .max(2000, "Review must be at most 2000 characters"),
});

export const contactSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(100, "Name must be at most 100 characters"),
  email: z.string().email("Invalid email address"),
  message: z
    .string()
    .min(10, "Message must be at least 10 characters")
    .max(2000, "Message must be at most 2000 characters"),
});

export const signUpSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(50, "Name must be at most 50 characters"),
  email: z.string().email("Invalid email address"),
  password: z.string().min(8, "Password must be at least 8 characters"),
});

export const signInSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(1, "Password is required"),
});

export const newsletterSchema = z.object({
  email: z.string().email("Invalid email address"),
});

export type BusinessFormValues = z.infer<typeof businessSchema>;
export type ReviewFormValues = z.infer<typeof reviewSchema>;
export type ContactFormValues = z.infer<typeof contactSchema>;
export type SignUpFormValues = z.infer<typeof signUpSchema>;
export type SignInFormValues = z.infer<typeof signInSchema>;
export type NewsletterFormValues = z.infer<typeof newsletterSchema>;
