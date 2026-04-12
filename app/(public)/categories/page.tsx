import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "Categorii — LocalSpot",
  description:
    "Răsfoiește toate categoriile de anunțuri pe LocalSpot. Auto, imobiliare, electronice, locuri de muncă și multe altele.",
};

const categories = [
  {
    name: "Auto, Moto și Ambarcațiuni",
    slug: "auto-moto",
    emoji: "🚗",
    count: 45820,
    subcategories: ["Autoturisme", "Autoutilitare", "Motociclete", "Piese auto", "Ambarcațiuni"],
  },
  {
    name: "Imobiliare",
    slug: "imobiliare",
    emoji: "🏠",
    count: 32100,
    subcategories: ["Apartamente de vânzare", "Apartamente de închiriat", "Case", "Terenuri", "Spații comerciale"],
  },
  {
    name: "Electronice și Electrocasnice",
    slug: "electronice",
    emoji: "📱",
    count: 28450,
    subcategories: ["Telefoane", "Laptopuri & PC", "TV & Audio", "Electrocasnice", "Camere foto"],
  },
  {
    name: "Locuri de muncă",
    slug: "locuri-de-munca",
    emoji: "💼",
    count: 15200,
    subcategories: ["IT & Software", "Vânzări", "Construcții", "Transport", "HoReCa"],
  },
  {
    name: "Modă și Frumusețe",
    slug: "moda",
    emoji: "👗",
    count: 21300,
    subcategories: ["Îmbrăcăminte femei", "Îmbrăcăminte bărbați", "Încălțăminte", "Accesorii", "Cosmetice"],
  },
  {
    name: "Casă și Grădină",
    slug: "casa-gradina",
    emoji: "🏡",
    count: 18700,
    subcategories: ["Mobilier", "Decorațiuni", "Unelte", "Materiale construcții", "Grădinărit"],
  },
  {
    name: "Sport, Timp liber, Artă",
    slug: "sport-timp-liber",
    emoji: "⚽",
    count: 9850,
    subcategories: ["Echipament sportiv", "Biciclete", "Cărți & Reviste", "Instrumente muzicale", "Colecții"],
  },
  {
    name: "Animale de companie",
    slug: "animale",
    emoji: "🐾",
    count: 6200,
    subcategories: ["Câini", "Pisici", "Accesorii animale", "Hrană animale", "Alte animale"],
  },
  {
    name: "Servicii, Afaceri, Echipamente",
    slug: "servicii",
    emoji: "🔧",
    count: 12400,
    subcategories: ["Reparații", "Transporturi", "Servicii IT", "Servicii auto", "Cursuri"],
  },
  {
    name: "Agro și Industrie",
    slug: "agro-industrie",
    emoji: "🌾",
    count: 4300,
    subcategories: ["Utilaje agricole", "Animale de fermă", "Produse agricole", "Echipamente industriale"],
  },
  {
    name: "Mama și Copilul",
    slug: "mama-copilul",
    emoji: "👶",
    count: 7600,
    subcategories: ["Îmbrăcăminte copii", "Jucării", "Cărucioare", "Articole bebeluși", "Mobilier copii"],
  },
  {
    name: "Turism și Cazare",
    slug: "turism",
    emoji: "✈️",
    count: 3100,
    subcategories: ["Cazare", "Vacanțe", "Bilete avion", "Închirieri auto", "Turism rural"],
  },
];

export default function CategoriesPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold tracking-tight">
          Toate categoriile
        </h1>
        <p className="mt-1 text-muted-foreground">
          Alege o categorie pentru a vedea anunțurile disponibile
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {categories.map((category) => (
          <div
            key={category.slug}
            className="rounded-xl border bg-white p-5 transition-shadow hover:shadow-md"
          >
            {/* Category header */}
            <Link
              href={`/categories/${category.slug}`}
              className="flex items-center gap-3 group mb-3"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-muted text-2xl">
                {category.emoji}
              </span>
              <div className="flex-1 min-w-0">
                <h2 className="font-semibold text-foreground group-hover:text-secondary transition-colors">
                  {category.name}
                </h2>
                <p className="text-xs text-muted-foreground">
                  {category.count.toLocaleString("ro-RO")} anunțuri
                </p>
              </div>
              <ChevronRight className="h-5 w-5 text-muted-foreground group-hover:text-secondary transition-colors shrink-0" />
            </Link>

            {/* Subcategories */}
            <div className="flex flex-wrap gap-1.5">
              {category.subcategories.map((sub) => (
                <Link
                  key={sub}
                  href={`/categories/${category.slug}`}
                  className="inline-block"
                >
                  <Badge
                    variant="outline"
                    className="text-xs font-normal hover:bg-secondary/10 hover:text-secondary hover:border-secondary/30 transition-colors cursor-pointer"
                  >
                    {sub}
                  </Badge>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

