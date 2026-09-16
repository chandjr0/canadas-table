import { createFileRoute } from "@tanstack/react-router";
import { CTASection, Eyebrow, PageHero, Section } from "@/components/site/Editorial";
import { Reveal } from "@/components/site/Reveal";
import { SEGMENTS, SOLUTIONS } from "@/data/site";
import { pageHead } from "@/lib/seo";
import hero from "@/assets/warehouse.jpg";
import chef from "@/assets/chef.jpg";
import truck from "@/assets/truck.jpg";
import produce from "@/assets/produce.jpg";
import dining from "@/assets/dining.jpg";

const IMAGES = [produce, chef, truck, dining, hero];

export const Route = createFileRoute("/solutions")({
  head: () =>
    pageHead({
      title: "Solutions — Sysco Canada Foodservice Support",
      description:
        "Products, supply, distribution, culinary support and business support for restaurants, chefs and foodservice operators across Canada.",
      path: "/solutions",
      keywords:
        "foodservice solutions, culinary support, supply chain, temperature-controlled distribution, restaurant consulting, Sysco Canada solutions",
    }),
  component: Solutions,
});

function Solutions() {
  return (
    <>
      <PageHero
        eyebrow="Solutions"
        title={
          <>
            What we actually do for{" "}
            <span className="editorial text-fresh italic">the kitchen.</span>
          </>
        }
        lede="Supply is the baseline. The value is in consolidation, cold chain, culinary knowledge and the people who make a delivery predictable."
        image={hero}
        alt="Inside a Sysco-style refrigerated distribution centre with pallets of food"
      />

      <Section tone="white" className="py-8 md:py-16">
        {SOLUTIONS.map((s, i) => (
          <Reveal
            key={s.label}
            className="border-border grid items-center gap-8 border-t py-14 md:grid-cols-[1fr_0.9fr] md:gap-16 md:py-20"
          >
            <div className={i % 2 === 1 ? "md:order-2" : ""}>
              <Eyebrow>{s.label}</Eyebrow>
              <h2 className="display-md mt-6 max-w-xl">{s.title}</h2>
              <p className="text-muted-foreground mt-6 max-w-xl text-[1.0625rem] leading-relaxed">
                {s.body}
              </p>
            </div>
            <div className="img-frame">
              <img
                src={IMAGES[i]}
                alt={s.title}
                loading="lazy"
                className="aspect-4/3 w-full object-cover"
              />
            </div>
          </Reveal>
        ))}
      </Section>

      <Section tone="ink" className="py-24 md:py-32">
        <Reveal className="max-w-2xl">
          <Eyebrow>Who we support</Eyebrow>
          <h2 className="display-lg mt-6">Built for volume kitchens.</h2>
        </Reveal>
        <ul className="mt-12 flex flex-wrap gap-3">
          {SEGMENTS.map((s) => (
            <li key={s} className="label-mono hover:border-fresh hover:text-fresh border border-white/25 px-5 py-3 transition-colors">
              {s}
            </li>
          ))}
        </ul>
      </Section>

      <CTASection
        title="Tell us what you need on the truck."
        body="Whether it's a single site or a multi-location operation, a Sysco Canada consultant can map products, delivery days and culinary support to how you run."
        secondary={{ to: "/products", label: "View products" }}
      />
    </>
  );
}
