import type { Metadata } from "next";
import Link from "next/link";
import { Heart, Target, Sparkles, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { AnimatedSection, AnimatedDiv } from "@/components/animated-section";

export const metadata: Metadata = {
  title: "About Us | LocalSpot",
  description:
    "Learn about LocalSpot's mission to connect communities with the best local businesses. Discover our story, team, and impact.",
};

const stats = [
  { label: "Businesses Listed", value: "2,500+" },
  { label: "Reviews Written", value: "15,000+" },
  { label: "Cities Covered", value: "150+" },
  { label: "Happy Users", value: "50,000+" },
];

const values = [
  {
    icon: Heart,
    title: "Community First",
    description:
      "We believe thriving local businesses are the backbone of strong communities. Every listing, review, and connection strengthens the fabric of neighborhoods.",
  },
  {
    icon: Target,
    title: "Transparency",
    description:
      "Honest reviews, accurate information, and fair practices. We empower consumers to make informed decisions and businesses to earn trust authentically.",
  },
  {
    icon: Sparkles,
    title: "Empowerment",
    description:
      "We give small businesses the digital tools they need to compete, grow, and thrive in an increasingly connected world — leveling the playing field.",
  },
];

const team = [
  {
    name: "Sarah Chen",
    role: "CEO & Founder",
    initials: "SC",
    bio: "Former small business owner passionate about building tools that help local entrepreneurs succeed.",
  },
  {
    name: "Marcus Rodriguez",
    role: "CTO",
    initials: "MR",
    bio: "Full-stack engineer with 10+ years of experience building scalable platforms for community-driven products.",
  },
  {
    name: "Emily Thompson",
    role: "Head of Community",
    initials: "ET",
    bio: "Community builder and marketing strategist dedicated to connecting people with the businesses they love.",
  },
];

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <AnimatedSection className="bg-gradient-to-b from-primary/5 to-background py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Bringing Communities{" "}
              <span className="text-primary">Closer Together</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              LocalSpot was born from a simple idea: the best way to strengthen a
              community is to support the businesses that make it unique. We
              connect people with the local shops, restaurants, and services that
              define their neighborhoods.
            </p>
          </div>
        </div>
      </AnimatedSection>

      {/* Mission Section */}
      <AnimatedSection className="mx-auto w-full max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">Our Mission</h2>
            <Separator className="my-4 w-16 bg-secondary" />
            <div className="space-y-4 text-muted-foreground">
              <p>
                We&apos;re on a mission to make it effortless for people to
                discover, connect with, and support the local businesses that
                make their communities special.
              </p>
              <p>
                In a world dominated by big-box retailers and online
                marketplaces, local businesses often struggle to be seen.
                LocalSpot bridges that gap by providing a dedicated platform
                where neighborhood businesses can showcase what makes them
                unique.
              </p>
              <p>
                From the cozy coffee shop on the corner to the family-owned
                hardware store down the block, every local business has a story
                worth sharing — and customers waiting to hear it.
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center rounded-2xl bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 p-12">
            <div className="text-center">
              <span className="text-7xl">🏘️</span>
              <p className="mt-4 text-lg font-semibold text-primary">
                Strengthening neighborhoods,
              </p>
              <p className="text-lg font-semibold text-primary">
                one business at a time
              </p>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Values */}
      <AnimatedSection className="bg-muted/50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight">Our Values</h2>
            <p className="mt-2 text-muted-foreground">
              The principles that guide everything we do
            </p>
          </div>
          <div className="mt-12 grid gap-8 sm:grid-cols-3">
            {values.map((value, index) => (
              <AnimatedDiv key={value.title} delay={index * 0.15}>
                <Card className="h-full text-center">
                  <CardContent className="pt-8 pb-8">
                    <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                      <value.icon className="h-7 w-7 text-primary" />
                    </div>
                    <h3 className="mt-4 text-lg font-semibold">{value.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              </AnimatedDiv>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Impact Stats */}
      <AnimatedSection className="mx-auto w-full max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight">Our Impact</h2>
          <p className="mt-2 text-muted-foreground">
            The numbers speak for themselves
          </p>
        </div>
        <div className="mt-12 grid grid-cols-2 gap-6 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <AnimatedDiv key={stat.label} delay={index * 0.1}>
              <Card className="text-center">
                <CardContent className="pt-8 pb-8">
                  <p className="text-3xl font-bold text-primary sm:text-4xl">
                    {stat.value}
                  </p>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {stat.label}
                  </p>
                </CardContent>
              </Card>
            </AnimatedDiv>
          ))}
        </div>
      </AnimatedSection>

      {/* Team Section */}
      <AnimatedSection className="bg-muted/50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight">Meet the Team</h2>
            <p className="mt-2 text-muted-foreground">
              The people behind LocalSpot
            </p>
          </div>
          <div className="mt-12 grid gap-8 sm:grid-cols-3">
            {team.map((member, index) => (
              <AnimatedDiv key={member.name} delay={index * 0.15}>
                <Card className="h-full text-center">
                  <CardHeader className="items-center pb-2">
                    <Avatar className="h-24 w-24">
                      <AvatarFallback className="bg-primary text-xl text-primary-foreground">
                        {member.initials}
                      </AvatarFallback>
                    </Avatar>
                    <CardTitle className="mt-4">{member.name}</CardTitle>
                    <p className="text-sm font-medium text-secondary">
                      {member.role}
                    </p>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{member.bio}</p>
                  </CardContent>
                </Card>
              </AnimatedDiv>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* CTA Section */}
      <AnimatedSection className="bg-primary py-20">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-primary-foreground">
            Ready to Join Us?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-primary-foreground/80">
            Whether you&apos;re a business owner looking to grow your presence or
            a community member eager to discover local gems, LocalSpot is your
            platform.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/businesses">
                Explore Businesses <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10"
            >
              <Link href="/contact">Get in Touch</Link>
            </Button>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
}
