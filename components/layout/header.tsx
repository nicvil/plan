"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Search,
  Menu,
  LogIn,
  LogOut,
  User,
  Settings,
  Heart,
  MessageSquare,
  PlusCircle,
  MapPin,
  ChevronDown,
} from "lucide-react";
import { useSession, signOut } from "next-auth/react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import { MobileNav } from "./mobile-nav";

const navLinks = [
  { href: "/", label: "Acasă" },
  { href: "/categories", label: "Categorii" },
  { href: "/businesses", label: "Anunțuri" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const pathname = usePathname();
  const { data: session } = useSession();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const userInitials = session?.user?.name
    ? session.user.name
        .split(" ")
        .map((n) => n[0])
        .join("")
        .toUpperCase()
        .slice(0, 2)
    : "U";

  return (
    <header
      className={cn(
        "sticky top-0 z-30 w-full bg-primary text-primary-foreground transition-shadow duration-200",
        scrolled && "shadow-md"
      )}
    >
      {/* Main header bar */}
      <div className="mx-auto flex h-16 max-w-7xl items-center gap-4 px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-1.5 shrink-0">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-secondary text-white font-bold text-sm">
            LS
          </div>
          <span className="text-xl font-bold hidden sm:inline">LocalSpot</span>
        </Link>

        {/* Search bar - OLX style */}
        <div className="flex flex-1 items-center gap-2">
          <div className="relative flex-1 max-w-2xl">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Ce cauți?"
              className="h-10 bg-white text-foreground pl-9 pr-4 border-0 rounded-l-lg rounded-r-none focus-visible:ring-0 focus-visible:ring-offset-0"
            />
          </div>
          <div className="hidden md:flex items-center">
            <div className="relative">
              <MapPin className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Toată România"
                className="h-10 w-44 bg-white text-foreground pl-9 pr-8 border-0 border-l rounded-none focus-visible:ring-0 focus-visible:ring-offset-0"
              />
              <ChevronDown className="absolute right-2 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            </div>
          </div>
          <Button className="h-10 rounded-l-none rounded-r-lg bg-secondary hover:bg-secondary/90 text-white px-6 shrink-0">
            <Search className="h-4 w-4 mr-1.5" />
            <span className="hidden sm:inline">Caută</span>
          </Button>
        </div>

        {/* Right actions */}
        <div className="flex items-center gap-1 sm:gap-2 shrink-0">
          {/* Favorites */}
          <Button
            variant="ghost"
            size="icon"
            asChild
            className="text-primary-foreground/80 hover:text-primary-foreground hover:bg-primary-foreground/10"
          >
            <Link href="/dashboard/saved" aria-label="Favorite">
              <Heart className="h-5 w-5" />
            </Link>
          </Button>

          {/* Messages */}
          <Button
            variant="ghost"
            size="icon"
            className="text-primary-foreground/80 hover:text-primary-foreground hover:bg-primary-foreground/10 hidden sm:inline-flex"
            aria-label="Mesaje"
          >
            <MessageSquare className="h-5 w-5" />
          </Button>

          {/* Auth section */}
          {session?.user ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className="relative h-8 w-8 rounded-full hover:bg-primary-foreground/10"
                  aria-label="User menu"
                >
                  <Avatar className="h-8 w-8">
                    <AvatarImage
                      src={session.user.image ?? undefined}
                      alt={session.user.name ?? "User"}
                    />
                    <AvatarFallback className="text-xs bg-secondary text-white">
                      {userInitials}
                    </AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48">
                <div className="px-2 py-1.5">
                  <p className="text-sm font-medium">{session.user.name}</p>
                  <p className="text-xs text-muted-foreground truncate">
                    {session.user.email}
                  </p>
                </div>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link href="/dashboard" className="flex items-center gap-2">
                    <User className="h-4 w-4" />
                    Contul meu
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/dashboard/saved" className="flex items-center gap-2">
                    <Heart className="h-4 w-4" />
                    Favorite
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/dashboard/settings" className="flex items-center gap-2">
                    <Settings className="h-4 w-4" />
                    Setări
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem
                  onClick={() => signOut()}
                  className="flex items-center gap-2 text-destructive"
                >
                  <LogOut className="h-4 w-4" />
                  Deconectare
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <div className="hidden sm:flex sm:items-center sm:gap-1">
              <Button
                variant="ghost"
                size="sm"
                asChild
                className="text-primary-foreground/80 hover:text-primary-foreground hover:bg-primary-foreground/10"
              >
                <Link href="/auth/signin" className="gap-1.5">
                  <LogIn className="h-4 w-4" />
                  Contul meu
                </Link>
              </Button>
            </div>
          )}

          {/* Post Ad button */}
          <Button
            size="sm"
            asChild
            className="bg-secondary hover:bg-secondary/90 text-white gap-1.5 hidden sm:flex"
          >
            <Link href="/auth/signup">
              <PlusCircle className="h-4 w-4" />
              Adaugă anunț
            </Link>
          </Button>

          {/* Mobile menu toggle */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-primary-foreground/80 hover:text-primary-foreground hover:bg-primary-foreground/10"
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Open menu"
          >
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>

      {/* Secondary nav bar */}
      <div className="border-t border-primary-foreground/10 bg-primary/90">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <nav className="hidden md:flex md:items-center md:gap-1 h-10">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "rounded px-3 py-1.5 text-sm font-medium transition-colors",
                  pathname === link.href
                    ? "text-secondary"
                    : "text-primary-foreground/70 hover:text-primary-foreground"
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>

      {/* Mobile navigation */}
      <MobileNav
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        pathname={pathname}
      />
    </header>
  );
}
