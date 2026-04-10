import Stripe from "stripe";
import { absoluteUrl } from "@/lib/utils";

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY ?? "", {
  apiVersion: "2026-03-25.dahlia",
  typescript: true,
});

export const PLANS = {
  FREE: {
    name: "Free",
    price: 0,
    priceId: null,
    features: [
      "Basic business listing",
      "Up to 5 photos",
      "Customer reviews",
    ],
  },
  BASIC: {
    name: "Basic",
    price: 19,
    priceId: process.env.STRIPE_BASIC_PRICE_ID ?? null,
    features: [
      "Enhanced listing",
      "Up to 20 photos",
      "Priority support",
      "Analytics dashboard",
    ],
  },
  PREMIUM: {
    name: "Premium",
    price: 49,
    priceId: process.env.STRIPE_PREMIUM_PRICE_ID ?? null,
    features: [
      "Premium listing",
      "Unlimited photos",
      "Featured in search",
      "Advanced analytics",
      "Event promotion",
    ],
  },
  FEATURED: {
    name: "Featured",
    price: 99,
    priceId: process.env.STRIPE_FEATURED_PRICE_ID ?? null,
    features: [
      "Top placement",
      "Unlimited photos",
      "Homepage spotlight",
      "Dedicated support",
      "Full analytics suite",
      "Social media promotion",
    ],
  },
} as const;

export async function getStripeSession(sessionId: string) {
  return stripe.checkout.sessions.retrieve(sessionId);
}

export async function createCheckoutSession(
  priceId: string,
  businessId: string
) {
  const session = await stripe.checkout.sessions.create({
    mode: "subscription",
    payment_method_types: ["card"],
    line_items: [
      {
        price: priceId,
        quantity: 1,
      },
    ],
    metadata: {
      businessId,
    },
    success_url: absoluteUrl(
      `/dashboard/business/${businessId}/billing?session_id={CHECKOUT_SESSION_ID}`
    ),
    cancel_url: absoluteUrl(`/dashboard/business/${businessId}/billing`),
  });

  return session;
}
