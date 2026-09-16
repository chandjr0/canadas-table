import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { CTASection, Eyebrow, PageHero, Section } from "@/components/site/Editorial";
import { Reveal } from "@/components/site/Reveal";
import { PRODUCTS } from "@/data/site";
import { pageHead } from "@/lib/seo";
import produce from "@/assets/produce.jpg";
import chef from "@/assets/chef.jpg";
import warehouse from "@/assets/warehouse.jpg";
import dining from "@/assets/dining.jpg";
import truck from "@/assets/truck.jpg";
import farm from "@/assets/hero-farm.jpg";

const GALLERY = [produce, farm, chef, warehouse, dining, truck];

const GALLERY_ALT = [
  "Overhead composition of fresh produce, seafood, meat and bread",
  "A grower harvesting fresh greens on Canadian farmland at sunrise",
  "A chef plating a dish on a stainless steel kitchen counter",
  "A team member scanning inventory inside a temperature-controlled distribution centre",
  "A server bringing plates to guests in a full neighbourhood restaurant",
  "A refrigerated delivery truck on a Canadian highway at dawn",
] as const;

export const Route = createFileRoute("/products")({
  head: () =>
    pageHead({
      title: "Products — Sysco Canada Broadline Catalogue",
      description:
        "Produce, meat, seafood, dairy, bakery, frozen, dry goods, beverages, disposables and cleaning supplies from Sysco Canada.",
      path: "/products",
      keywords:
        "foodservice products, broadline catalogue, produce, meat and poultry, seafood, dairy, frozen foods, restaurant supplies, Sysco Canada products",
    }),
  component: Products,
});

function Products() {
  const [hover, setHover] = useState(0);

  return (
    <>
      <PageHero
        eyebrow="Products"
        title={
          <>
            The catalogue behind{" "}
            <span className="editorial text-fresh italic">the menu.</span>
          </>
        }
        lede="Fresh, frozen and ambient food alongside the front- and back-of-house supplies a kitchen consumes every service."
        image={produce}
        alt="Overhead composition of fresh produce, seafood, meat and bread"
      />

      {/* Editorial catalogue with hover image reveal */}
      <Section tone="white" className="py-20 md:py-28">
        <div className="grid gap-10 lg:grid-cols-[1fr_0.85fr] lg:gap-16">
          <ul onMouseLeave={() => setHover(0)}>
            {PRODUCTS.map((p, i) => (
              <li key={p.label} className="border-border border-t last:border-b">
                <button
                  type="button"
                  onMouseEnter={() => setHover(i % GALLERY.length)}
                  onFocus={() => setHover(i % GALLERY.length)}
                  className="group flex w-full items-baseline justify-between gap-6 py-6 text-left transition-[padding] duration-500 hover:pl-3"
                >
                  <span className="display-md group-hover:text-primary transition-colors">
                    {p.label}
                  </span>
                  <span className="text-muted-foreground max-w-[14rem] text-right text-sm">
                    {p.body}
                  </span>
                </button>
              </li>
            ))}
          </ul>

          <div className="relative hidden aspect-4/5 overflow-clip lg:block">
            {GALLERY.map((src, i) => (
              <img
                key={src}
                src={src}
                alt={GALLERY_ALT[i]}
                loading="lazy"
                decoding="async"
                aria-hidden={hover !== i}
                className="absolute inset-0 h-full w-full object-cover transition-all duration-700 ease-out"
                style={{ opacity: hover === i ? 1 : 0, transform: `scale(${hover === i ? 1 : 1.06})` }}
              />
            ))}
          </div>
        </div>
      </Section>

      <Section tone="deep" className="py-24 md:py-32">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <Eyebrow className="text-deep-foreground">Ordering</Eyebrow>
            <h2 className="display-lg mt-6">One order. One delivery. One invoice.</h2>
          </Reveal>
          <Reveal delay={100}>
            <p className="editorial max-w-xl text-2xl leading-snug text-white/75">
              Consolidating categories under a single broadline order reduces the number of
              deliveries, receiving windows and supplier relationships a kitchen has to manage —
              and keeps the cold chain in one set of hands.
            </p>
          </Reveal>
        </div>
      </Section>

      <CTASection
        title="Looking for something specific?"
        body="Product availability varies by region. Talk to a Sysco Canada consultant about what's stocked for your area."
        secondary={{ to: "/solutions", label: "Explore solutions" }}
      />
    </>
  );
}
