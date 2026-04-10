import type { Metadata } from "next";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Separator } from "@/components/ui/separator";
import { ContactForm } from "@/components/contact-form";
import { AnimatedSection, AnimatedDiv } from "@/components/animated-section";

export const metadata: Metadata = {
  title: "Contact Us | LocalSpot",
  description:
    "Get in touch with the LocalSpot team. We're here to help with business listings, support, partnerships, and more.",
};

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "hello@localspot.com",
    href: "mailto:hello@localspot.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "(555) 123-4567",
    href: "tel:+15551234567",
  },
  {
    icon: MapPin,
    label: "Address",
    value: "123 Main Street, Suite 200\nAnytown, USA 12345",
  },
  {
    icon: Clock,
    label: "Business Hours",
    value: "Mon–Fri: 9am – 6pm EST",
  },
];

const faqs = [
  {
    question: "How do I list my business on LocalSpot?",
    answer:
      "Getting started is easy! Simply create a free account, click 'Add Business' from your dashboard, and fill in your business details. Your listing will be reviewed and published within 24 hours.",
  },
  {
    question: "Is there a free option for business owners?",
    answer:
      "Yes! Our Free plan includes a basic business listing with one photo, inclusion in search results, and a dedicated business page. Upgrade anytime for more features.",
  },
  {
    question: "How long does it take for my listing to go live?",
    answer:
      "Most listings are reviewed and approved within 24 hours. Premium and Featured plan listings receive priority review and are typically live within a few hours.",
  },
  {
    question: "Can I update my business listing after it's published?",
    answer:
      "Absolutely! You can update your business information, photos, hours, and more at any time through your dashboard. Changes are reflected immediately.",
  },
  {
    question: "How do I report an incorrect or fraudulent listing?",
    answer:
      "If you find inaccurate information or suspect a fraudulent listing, please use this contact form with the 'General Inquiry' subject, or email us directly. We take accuracy seriously and will investigate promptly.",
  },
];

export default function ContactPage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <AnimatedSection className="bg-gradient-to-b from-primary/5 to-background py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Get in <span className="text-primary">Touch</span>
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Have a question, feedback, or partnership idea? We&apos;d love to
              hear from you. Our team typically responds within 24 hours.
            </p>
          </div>
        </div>
      </AnimatedSection>

      {/* Contact Form + Info */}
      <AnimatedSection className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-3">
          {/* Form */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold">Send Us a Message</h2>
            <Separator className="my-4 w-16 bg-secondary" />
            <ContactForm />
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold">Contact Info</h2>
            <Separator className="w-16 bg-secondary" />
            {contactInfo.map((item, index) => (
              <AnimatedDiv key={item.label} delay={index * 0.1}>
                <Card>
                  <CardContent className="flex items-start gap-4 pt-6">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                      <item.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">
                        {item.label}
                      </p>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="font-medium text-foreground transition-colors hover:text-primary"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="whitespace-pre-line font-medium">
                          {item.value}
                        </p>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </AnimatedDiv>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* FAQ Section */}
      <AnimatedSection className="bg-muted/50 py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight">
              Frequently Asked Questions
            </h2>
            <p className="mt-2 text-muted-foreground">
              Quick answers to the questions we hear most
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
    </div>
  );
}
