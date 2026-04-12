import type { Metadata } from "next";
import { ShieldCheck, Users, Globe, TrendingUp, Heart, Zap } from "lucide-react";
import { AnimatedSection, AnimatedDiv } from "@/components/animated-section";

export const metadata: Metadata = {
  title: "Despre noi — LocalSpot",
  description:
    "Află mai multe despre LocalSpot — cea mai mare platformă de anunțuri locale din România. Misiunea noastră, echipa și impactul în comunitate.",
};

const stats = [
  { label: "Anunțuri publicate", value: "4.2M+" },
  { label: "Utilizatori activi", value: "2.5M+" },
  { label: "Orașe acoperite", value: "320+" },
  { label: "Tranzacții lunare", value: "500K+" },
];

const values = [
  {
    icon: ShieldCheck,
    title: "Siguranță",
    description: "Verificăm anunțurile și protejăm utilizatorii pentru tranzacții sigure.",
  },
  {
    icon: Zap,
    title: "Simplitate",
    description: "Publică un anunț în câteva secunde. Interfață intuitivă, fără complicații.",
  },
  {
    icon: Users,
    title: "Comunitate",
    description: "Conectăm milioane de români care vor să cumpere, să vândă și să facă schimb.",
  },
  {
    icon: Globe,
    title: "Accesibilitate",
    description: "Platformă gratuită, disponibilă pe web și mobil, pentru toți.",
  },
  {
    icon: Heart,
    title: "Local",
    description: "Susținem economia locală conectând oamenii din aceeași zonă.",
  },
  {
    icon: TrendingUp,
    title: "Inovație",
    description: "Îmbunătățim constant platforma cu funcții noi bazate pe feedbackul vostru.",
  },
];

const team = [
  { name: "Maria P.", role: "CEO & Fondator", initial: "M" },
  { name: "Andrei C.", role: "CTO", initial: "A" },
  { name: "Elena R.", role: "Head of Design", initial: "E" },
  { name: "Vlad S.", role: "Head of Marketing", initial: "V" },
];

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="bg-primary text-primary-foreground py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Conectăm oamenii, simplificăm tranzacțiile
            </h1>
            <p className="mt-4 text-lg text-primary-foreground/80">
              LocalSpot este cea mai mare platformă de anunțuri gratuite din România.
              Ajutăm milioane de oameni să cumpere, să vândă și să facă schimb în
              siguranță, direct din comunitatea lor.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <AnimatedSection className="bg-white border-b py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
            {stats.map((stat, i) => (
              <AnimatedDiv key={stat.label} delay={i * 0.1}>
                <div className="text-center">
                  <p className="text-3xl font-bold text-secondary">{stat.value}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{stat.label}</p>
                </div>
              </AnimatedDiv>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Values */}
      <AnimatedSection className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold">Valorile noastre</h2>
            <p className="mt-2 text-muted-foreground">Ce ne ghidează în fiecare zi</p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((value, i) => (
              <AnimatedDiv key={value.title} delay={i * 0.08}>
                <div className="rounded-xl border bg-white p-6 hover:shadow-md transition-shadow">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary/10 mb-4">
                    <value.icon className="h-5 w-5 text-secondary" />
                  </div>
                  <h3 className="font-semibold mb-2">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </div>
              </AnimatedDiv>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Team */}
      <AnimatedSection className="bg-white border-t py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold">Echipa noastră</h2>
            <p className="mt-2 text-muted-foreground">Oamenii din spatele LocalSpot</p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((member, i) => (
              <AnimatedDiv key={member.name} delay={i * 0.1}>
                <div className="text-center rounded-xl border p-6">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-secondary/10 text-secondary text-xl font-bold mb-3">
                    {member.initial}
                  </div>
                  <h3 className="font-semibold">{member.name}</h3>
                  <p className="text-sm text-muted-foreground">{member.role}</p>
                </div>
              </AnimatedDiv>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* CTA */}
      <section className="bg-secondary/5 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold mb-3">Alătură-te comunității</h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Înscrie-te gratuit și începe să publici anunțuri sau să descoperi oferte
            incredibile din zona ta.
          </p>
        </div>
      </section>
    </div>
  );
}
