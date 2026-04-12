"use client";

import Link from "next/link";
import {
  MapPin,
  Globe,
  MessageCircle,
  Share2,
  Mail,
  Send,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const footerLinks = {
  about: {
    title: "About",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Our Team", href: "/team" },
      { label: "Careers", href: "/careers" },
      { label: "Press", href: "/press" },
      { label: "Contact", href: "/contact" },
    ],
  },
  explore: {
    title: "Explore",
    links: [
      { label: "Businesses", href: "/businesses" },
      { label: "Categories", href: "/categories" },
      { label: "Events", href: "/events" },
      { label: "Blog", href: "/blog" },
      { label: "Reviews", href: "/reviews" },
    ],
  },
  forBusiness: {
    title: "For Business",
    links: [
      { label: "Claim Your Listing", href: "/claim" },
      { label: "Pricing", href: "/pricing" },
      { label: "Advertise", href: "/advertise" },
      { label: "Business Dashboard", href: "/dashboard" },
      { label: "Success Stories", href: "/success-stories" },
    ],
  },
  connect: {
    title: "Connect",
    links: [
      { label: "Help Center", href: "/help" },
      { label: "Community", href: "/community" },
      { label: "Developers", href: "/developers" },
      { label: "Feedback", href: "/feedback" },
      { label: "Newsletter", href: "#newsletter" },
    ],
  },
};

const socialLinks = [
  { icon: Globe, href: "https://facebook.com", label: "Facebook" },
  { icon: MessageCircle, href: "https://twitter.com", label: "Twitter" },
  { icon: Share2, href: "https://instagram.com", label: "Instagram" },
  { icon: Mail, href: "https://linkedin.com", label: "LinkedIn" },
];

export function Footer() {
  return (
    <footer className="border-t bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Main footer content */}
        <div className="grid gap-8 py-12 sm:grid-cols-2 lg:grid-cols-5">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2">
              <MapPin className="h-6 w-6 text-primary" />
              <span className="text-xl font-bold text-primary">LocalSpot</span>
            </Link>
            <p className="mt-3 text-sm text-muted-foreground">
              Discover and support the best local businesses in your community.
              Your neighborhood, your favorites, all in one place.
            </p>

            {/* Social links */}
            <div className="mt-4 flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="text-muted-foreground transition-colors hover:text-primary"
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.values(footerLinks).map((section) => (
            <div key={section.title}>
              <h3 className="text-sm font-semibold text-foreground">
                {section.title}
              </h3>
              <ul className="mt-3 space-y-2">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter */}
        <div
          id="newsletter"
          className="border-t py-8"
        >
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
            <div>
              <h3 className="text-sm font-semibold text-foreground">
                Subscribe to our newsletter
              </h3>
              <p className="mt-1 text-sm text-muted-foreground">
                Get the latest updates on local businesses and events.
              </p>
            </div>
            <form
              className="flex w-full max-w-sm gap-2"
              onSubmit={(e) => e.preventDefault()}
            >
              <Input
                type="email"
                placeholder="Enter your email"
                required
                className="flex-1"
              />
              <Button type="submit" size="sm" className="gap-1.5 shrink-0">
                <Send className="h-4 w-4" />
                Subscribe
              </Button>
            </form>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t py-6">
          <div className="flex flex-col items-center gap-3 text-xs text-muted-foreground sm:flex-row sm:justify-between">
            <p>&copy; {new Date().getFullYear()} LocalSpot. All rights reserved.</p>
            <div className="flex items-center gap-4">
              <Link href="/privacy" className="transition-colors hover:text-foreground">
                Privacy Policy
              </Link>
              <Link href="/terms" className="transition-colors hover:text-foreground">
                Terms of Service
              </Link>
              <Link href="/cookies" className="transition-colors hover:text-foreground">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
