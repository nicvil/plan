"use client";

import Link from "next/link";

const footerLinks = {
  about: {
    title: "Despre noi",
    links: [
      { label: "Despre LocalSpot", href: "/about" },
      { label: "Cum funcționează", href: "/about" },
      { label: "Cariere", href: "/about" },
      { label: "Contact", href: "/contact" },
    ],
  },
  categories: {
    title: "Categorii populare",
    links: [
      { label: "Auto, Moto", href: "/categories/auto-moto" },
      { label: "Imobiliare", href: "/categories/imobiliare" },
      { label: "Electronice", href: "/categories/electronice" },
      { label: "Locuri de muncă", href: "/categories/locuri-de-munca" },
      { label: "Modă", href: "/categories/moda" },
    ],
  },
  support: {
    title: "Ajutor",
    links: [
      { label: "Centru de ajutor", href: "/contact" },
      { label: "Reguli de publicare", href: "/about" },
      { label: "Sfaturi de siguranță", href: "/about" },
      { label: "Raportează un abuz", href: "/contact" },
    ],
  },
  business: {
    title: "Pentru afaceri",
    links: [
      { label: "Promovare anunțuri", href: "/about" },
      { label: "Pachete business", href: "/about" },
      { label: "Publicitate", href: "/contact" },
    ],
  },
};

export function Footer() {
  return (
    <footer className="border-t bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Main footer content */}
        <div className="grid gap-8 py-10 sm:grid-cols-2 lg:grid-cols-4">
          {Object.values(footerLinks).map((section) => (
            <div key={section.title}>
              <h3 className="text-sm font-semibold text-primary-foreground">
                {section.title}
              </h3>
              <ul className="mt-3 space-y-2">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-primary-foreground/60 transition-colors hover:text-primary-foreground"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-primary-foreground/10 py-6">
          <div className="flex flex-col items-center gap-3 text-xs text-primary-foreground/50 sm:flex-row sm:justify-between">
            <div className="flex items-center gap-2">
              <div className="flex h-6 w-6 items-center justify-center rounded bg-secondary text-white font-bold text-[10px]">
                LS
              </div>
              <p>&copy; {new Date().getFullYear()} LocalSpot. Toate drepturile rezervate.</p>
            </div>
            <div className="flex items-center gap-4">
              <Link href="/about" className="transition-colors hover:text-primary-foreground">
                Politica de confidențialitate
              </Link>
              <Link href="/about" className="transition-colors hover:text-primary-foreground">
                Termeni și condiții
              </Link>
              <Link href="/about" className="transition-colors hover:text-primary-foreground">
                Cookie-uri
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
