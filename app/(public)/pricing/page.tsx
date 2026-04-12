import type { Metadata } from "next";
import Link from "next/link";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";
import { AnimatedSection, AnimatedDiv } from "@/components/animated-section";

export const metadata: Metadata = {
  title: "Pricing | LocalSpot",
  description:
    "Choose the perfect plan for your business. From free basic listings to featured placements, LocalSpot has pricing to fit every budget.",
};

const plans = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    description: "Get your business on the map with a basic listing.",
    features: [
      "Basic business listing",
      "1 photo upload",
      "Listed in search results",
      "Business profile page",
      "Customer reviews",
    ],
    cta: "Get Started",
    variant: "outline" as const,
    highlighted: false,
  },
  {
    name: "Basic",
    price: "$19",
    period: "/mo",
    description: "Stand out with more photos and insights into your customers.",
    features: [
      "Everything in Free",
      "Up to 10 photo uploads",
      "Basic analytics dashboard",
      "Priority email support",
      "Business hours display",
      "Social media links",
    ],
    cta: "Start Basic",
    variant: "outline" as const,
    highlighted: false,
  },
  {
    name: "Premium",
    price: "$49",
    period: "/mo",
    description: "Maximize visibility with featured placement and events.",
    features: [
      "Everything in Basic",
      "Unlimited photo uploads",
      "Featured in category pages",
      "Create & promote events",
      "Newsletter mention",
      "Advanced analytics",
      "Respond to reviews",
      "Verified badge",
    ],
    cta: "Go Premium",
    variant: "default" as const,
    highlighted: true,
  },
  {
    name: "Featured",
    price: "$99",
    period: "/mo",
    description: "Maximum exposure with homepage placement and top-tier support.",
    features: [
      "Everything in Premium",
      "Homepage featured listing",
      "Top search placement",
      "Sponsored badge",
      "Dedicated account manager",
      "Custom branding options",
      "Monthly performance report",
      "Priority review moderation",
    ],
    cta: "Go Featured",
    variant: "outline" as const,
    highlighted: false,
  },
];

const faqs = [
  {
    question: "Can I switch plans at any time?",
    answer:
      "Yes! You can upgrade or downgrade your plan at any time. When upgrading, you'll get immediate access to new features. When downgrading, the change takes effect at the end of your current billing cycle.",
  },
  {
    question: "Is there a free trial for paid plans?",
    answer:
      "We offer a 14-day free trial for our Basic and Premium plans so you can explore all the features before committing. No credit card required to start.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept all major credit cards (Visa, Mastercard, American Express), debit cards, and PayPal. Annual plans can also be paid via bank transfer.",
  },
  {
    question: "Can I cancel my subscription anytime?",
    answer:
      "Absolutely. There are no long-term contracts or cancellation fees. You can cancel anytime from your dashboard, and you'll retain access until the end of your billing period.",
  },
  {
    question: "Do you offer discounts for annual billing?",
    answer:
      "Yes! Save 20% when you choose annual billing. That means the Basic plan drops to $15/mo, Premium to $39/mo, and Featured to $79/mo when billed annually.",
  },
];

export default function PricingPage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <AnimatedSection className="bg-gradient-to-b from-primary/5 to-background py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Simple, Transparent{" "}
              <span className="text-primary">Pricing</span>
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Choose the plan that fits your business. Start free and scale as
              you grow. No hidden fees, no surprises.
            </p>
          </div>
        </div>
      </AnimatedSection>

      {/* Pricing Cards */}
      <AnimatedSection className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {plans.map((plan, index) => (
            <AnimatedDiv key={plan.name} delay={index * 0.1}>
              <Card
                className={cn(
                  "relative flex h-full flex-col",
                  plan.highlighted &&
                    "border-primary shadow-lg ring-2 ring-primary"
                )}
              >
                {plan.highlighted && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <Badge className="bg-primary text-primary-foreground">
                      Most Popular
                    </Badge>
                  </div>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-xl">{plan.name}</CardTitle>
                  <div className="mt-2">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    <span className="text-muted-foreground">
                      {plan.period}
                    </span>
                  </div>
                  <CardDescription className="mt-2">
                    {plan.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <ul className="space-y-3">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button
                    variant={plan.variant}
                    className={cn(
                      "w-full",
                      plan.highlighted && "bg-primary text-primary-foreground hover:bg-primary/90"
                    )}
                    asChild
                  >
                    <Link href="/contact">{plan.cta}</Link>
                  </Button>
                </CardFooter>
              </Card>
            </AnimatedDiv>
          ))}
        </div>
      </AnimatedSection>

      {/* FAQ Section */}
      <AnimatedSection className="bg-muted/50 py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight">
              Pricing FAQ
            </h2>
            <p className="mt-2 text-muted-foreground">
              Everything you need to know about our plans
            </p>
          </div>
          <div className="mt-10">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`faq-${index}`}>
                  <AccordionTrigger className="text-left">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </AnimatedSection>

      {/* CTA */}
      <AnimatedSection className="bg-primary py-20">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-primary-foreground">
            Ready to Grow Your Business?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-primary-foreground/80">
            Join thousands of local businesses already thriving on LocalSpot.
            Start with our free plan — no credit card required.
          </p>
          <div className="mt-8">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/contact">Get Started Today</Link>
            </Button>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
}
