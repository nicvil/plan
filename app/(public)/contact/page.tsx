import type { Metadata } from "next";
import { Mail, Phone, MapPin, Clock, MessageSquare, Shield, FileText } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ContactForm } from "@/components/contact-form";
import { AnimatedSection, AnimatedDiv } from "@/components/animated-section";

export const metadata: Metadata = {
  title: "Contact — LocalSpot",
  description:
    "Contactează echipa LocalSpot. Suntem aici să te ajutăm cu orice întrebare despre anunțuri, cont sau platforma noastră.",
};

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "ajutor@localspot.ro",
    href: "mailto:ajutor@localspot.ro",
  },
  {
    icon: Phone,
    label: "Telefon",
    value: "0800 800 800 (gratuit)",
    href: "tel:+40800800800",
  },
  {
    icon: MapPin,
    label: "Adresă",
    value: "Str. Victoriei 42, București",
  },
  {
    icon: Clock,
    label: "Program",
    value: "Luni–Vineri: 9:00 – 18:00",
  },
];

const faqs = [
  {
    question: "Cum public un anunț pe LocalSpot?",
    answer:
      'Creează un cont gratuit, apasă pe "Adaugă anunț", completează detaliile produsului și publică-l. Anunțul va fi vizibil în câteva minute după verificarea automată.',
  },
  {
    question: "Cât costă să postez un anunț?",
    answer:
      "Publicarea anunțurilor este gratuită. Poți opta pentru promovare plătită dacă vrei ca anunțul tău să fie mai vizibil și să ajungă la mai mulți utilizatori.",
  },
  {
    question: "Cum îmi promovez anunțul?",
    answer:
      "Din pagina anunțului tău, poți selecta opțiunea de promovare. Oferim pachete de promovare care îți plasează anunțul în topul rezultatelor pentru mai multă vizibilitate.",
  },
  {
    question: "Cum raportez un anunț suspicios?",
    answer:
      'Pe fiecare anunț găsești butonul "Raportează". Completează motivul raportării și echipa noastră va verifica anunțul în cel mai scurt timp.',
  },
  {
    question: "Cum îmi șterg contul?",
    answer:
      "Poți șterge contul din Setări > Cont > Șterge cont. Toate anunțurile și datele tale vor fi șterse permanent.",
  },
  {
    question: "Cum pot contacta un vânzător?",
    answer:
      'Din pagina anunțului, folosește butonul "Trimite mesaj" pentru a discuta prin chat-ul intern sau "Arată telefonul" dacă vânzătorul a activat această opțiune.',
  },
];

const helpTopics = [
  { icon: MessageSquare, label: "Chat live", description: "Vorbește cu un operator" },
  { icon: Shield, label: "Siguranță", description: "Sfaturi pentru tranzacții sigure" },
  { icon: FileText, label: "Ghiduri", description: "Cum să folosești platforma" },
];

export default function ContactPage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="bg-primary text-primary-foreground py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Cum te putem ajuta?
            </h1>
            <p className="mt-3 text-primary-foreground/80">
              Echipa noastră îți răspunde de obicei în mai puțin de 24 de ore.
            </p>
          </div>
        </div>
      </section>

      {/* Quick help topics */}
      <section className="bg-white border-b py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-4 sm:grid-cols-3">
            {helpTopics.map((topic) => (
              <div
                key={topic.label}
                className="flex items-center gap-4 rounded-xl border p-4 hover:shadow-md transition-shadow cursor-pointer"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-secondary/10">
                  <topic.icon className="h-5 w-5 text-secondary" />
                </div>
                <div>
                  <p className="font-medium">{topic.label}</p>
                  <p className="text-sm text-muted-foreground">{topic.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form + Info */}
      <AnimatedSection className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-3">
          {/* Form */}
          <div className="lg:col-span-2">
            <h2 className="text-xl font-bold mb-1">Trimite-ne un mesaj</h2>
            <p className="text-sm text-muted-foreground mb-5">
              Completează formularul și te vom contacta cât de curând.
            </p>
            <ContactForm />
          </div>

          {/* Sidebar */}
          <div className="space-y-4">
            <h2 className="text-xl font-bold mb-1">Informații de contact</h2>
            {contactInfo.map((item, index) => (
              <AnimatedDiv key={item.label} delay={index * 0.1}>
                <div className="flex items-start gap-3 rounded-xl border bg-white p-4">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-secondary/10">
                    <item.icon className="h-4 w-4 text-secondary" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">{item.label}</p>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-sm font-medium text-foreground transition-colors hover:text-secondary"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-sm font-medium">{item.value}</p>
                    )}
                  </div>
                </div>
              </AnimatedDiv>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* FAQ Section */}
      <section className="bg-white border-t py-14">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold">Întrebări frecvente</h2>
            <p className="mt-1 text-muted-foreground">
              Răspunsuri rapide la cele mai comune întrebări
            </p>
          </div>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`faq-${index}`}>
                <AccordionTrigger className="text-left text-sm">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-sm">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </div>
  );
}
