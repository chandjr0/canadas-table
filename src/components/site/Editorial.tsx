import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

export function Section({
  children,
  className = "",
  id,
  tone = "light",
}: {
  children: ReactNode;
  className?: string;
  id?: string;
  tone?: "light" | "white" | "ink" | "deep" | "blue";
}) {
  const tones = {
    light: "bg-background text-foreground",
    white: "bg-card text-foreground",
    ink: "bg-ink text-ink-foreground",
    deep: "bg-deep text-deep-foreground",
    blue: "bg-primary text-primary-foreground",
  } as const;
  return (
    <section id={id} className={`${tones[tone]} ${className}`}>
      <div className="mx-auto max-w-[1600px] px-5 md:px-10 xl:px-12">{children}</div>
    </section>
  );
}

export function Eyebrow({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <p className={`label-mono flex items-center gap-3 ${className}`}>
      <span className="bg-fresh inline-block h-2 w-2 shrink-0" aria-hidden />
      {children}
    </p>
  );
}

export function PageHero({
  eyebrow,
  title,
  lede,
  image,
  alt,
}: {
  eyebrow: string;
  title: ReactNode;
  lede: string;
  image: string;
  alt: string;
}) {
  return (
    <section className="relative min-h-svh overflow-clip">
      <img
        src={image}
        alt={alt}
        loading="eager"
        decoding="async"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="from-ink/88 via-ink/55 absolute inset-0 bg-gradient-to-r to-ink/25" />
      <div className="relative mx-auto flex min-h-svh max-w-[1600px] flex-col justify-end px-5 pt-[80px] pb-16 md:px-10 md:pb-24 xl:px-12">
        <Reveal className="max-w-4xl">
          <p className="hero-eyebrow flex items-center gap-3 text-fresh">
            <span className="bg-fresh inline-block h-2 w-2 shrink-0" aria-hidden />
            {eyebrow}
          </p>
          <h1 className="hero-page-title mt-7 text-warm md:mt-8">{title}</h1>
          <p className="hero-page-lede mt-8 max-w-3xl text-white/85 md:mt-10">{lede}</p>
        </Reveal>
      </div>
    </section>
  );
}

export function EditorialSplit({
  eyebrow,
  title,
  body,
  image,
  alt,
  reverse = false,
  aside,
}: {
  eyebrow: string;
  title: string;
  body: string[];
  image: string;
  alt: string;
  reverse?: boolean;
  aside?: ReactNode;
}) {
  return (
    <div className="grid items-center gap-10 py-20 md:gap-16 md:py-28 lg:grid-cols-2">
      <Reveal className={`img-frame ${reverse ? "lg:order-2" : ""}`}>
        <img src={image} alt={alt} loading="lazy" className="aspect-4/5 w-full object-cover" />
      </Reveal>
      <Reveal className="max-w-xl">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h2 className="display-md mt-6">{title}</h2>
        {body.map((p) => (
          <p key={p} className="text-muted-foreground mt-5 text-[1.0625rem] leading-relaxed">
            {p}
          </p>
        ))}
        {aside}
      </Reveal>
    </div>
  );
}

export function CTASection({
  title,
  body,
  primary = { to: "/contact", label: "Get in touch" },
  secondary,
}: {
  title: string;
  body: string;
  primary?: { to: string; label: string };
  secondary?: { to: string; label: string };
}) {
  return (
    <Section tone="deep" className="py-24 md:py-36">
      <Reveal className="max-w-4xl">
        <h2 className="display-lg">{title}</h2>
        <p className="editorial mt-8 max-w-2xl text-2xl leading-snug text-white/70">{body}</p>
        <div className="mt-12 flex flex-wrap gap-4">
          <Link to={primary.to} className="btn-cta-solid">
            {primary.label} <span aria-hidden>→</span>
          </Link>
          {secondary && (
            <Link to={secondary.to} className="btn-cta-outline">
              {secondary.label} <span aria-hidden>→</span>
            </Link>
          )}
        </div>
      </Reveal>
    </Section>
  );
}
