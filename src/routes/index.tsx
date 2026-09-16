import { createFileRoute, Link } from "@tanstack/react-router";
import { CTASection, Eyebrow, Section } from "@/components/site/Editorial";
import { Reveal } from "@/components/site/Reveal";
import { JourneySection } from "@/components/site/JourneySection";
import { PRODUCTS, SEGMENTS, SOLUTIONS } from "@/data/site";
import { pageHead } from "@/lib/seo";
import hero from "@/assets/hero-farm.jpg";
import produce from "@/assets/produce.jpg";
import warehouse from "@/assets/warehouse.jpg";
import people from "@/assets/people.jpg";
import dining from "@/assets/dining.jpg";

export const Route = createFileRoute("/")({
  head: () =>
    pageHead({
      title: "Sysco Canada — Rooted in Canada. Built to Nourish Communities.",
      description:
        "Sysco Canada is a foodservice distributor supplying food, products, culinary expertise and temperature-controlled delivery to Canadian kitchens.",
      path: "/",
      keywords:
        "Sysco Canada, foodservice distributor, restaurant supply Canada, broadline food distribution, temperature-controlled delivery, Canadian kitchens",
    }),
  component: Home,
});

function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-svh overflow-clip">
        <img
          src={hero}
          alt="A grower harvesting fresh greens on Canadian farmland at sunrise"
          width={1920}
          height={1088}
          fetchPriority="high"
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="from-ink/88 via-ink/50 absolute inset-0 bg-gradient-to-r to-ink/20" />
        <div className="relative mx-auto flex min-h-svh max-w-[1600px] flex-col justify-end px-5 pt-[80px] pb-16 md:px-10 md:pb-24 xl:px-12">
          <Reveal className="max-w-3xl">
            <p className="label-mono text-fresh">Sysco Canada Inc. — Foodservice distribution</p>
            <h1 className="hero-headline mt-6 text-warm">
              <span className="hero-headline-primary block">Rooted in Canada.</span>
              <span className="hero-headline-accent editorial mt-3 block font-normal italic">
                Built to nourish communities.
              </span>
            </h1>
            <p className="mt-8 max-w-xl text-base leading-relaxed text-white/80 md:text-lg">
              Food, products, culinary expertise and temperature-controlled distribution for
              restaurants, hotels, healthcare, education and community operators across Canada.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link to="/about" className="btn-cta-solid">
                Explore Sysco Canada <span aria-hidden>→</span>
              </Link>
              <Link to="/contact" className="btn-cta-outline">
                Get in touch <span aria-hidden>→</span>
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ROOTED IN CANADA */}
      <Section tone="white" className="py-24 md:py-36">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1fr] lg:gap-20">
          <Reveal>
            <Eyebrow>Rooted in Canada</Eyebrow>
            <h2 className="display-lg mt-6">
              Canadian kitchens run on
              <span className="text-primary"> what arrives on time.</span>
            </h2>
          </Reveal>
          <Reveal delay={120} className="max-w-xl lg:pt-10">
            <p className="editorial text-2xl leading-snug md:text-3xl">
              Sysco Canada is part of Sysco, one of the world's largest foodservice distributors —
              operating here as a Canadian business, with Canadian distribution centres, Canadian
              drivers and Canadian customers.
            </p>
            <p className="text-muted-foreground mt-8 text-[1.0625rem] leading-relaxed">
              From dense city cores to small towns and remote communities, our work is the same:
              get the right products to the right kitchen, in the right condition, on a schedule
              operators can build a menu around.
            </p>
            <ul className="mt-10 grid grid-cols-2 gap-x-6 gap-y-3">
              {SEGMENTS.map((s) => (
                <li key={s} className="label-mono border-border card-lift border-t pt-3">
                  {s}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </Section>

      {/* SIGNATURE JOURNEY */}
      <JourneySection />

      {/* FOOD + PRODUCTS */}
      <Section tone="light" className="py-24 md:py-36">
        <div className="grid items-end gap-10 lg:grid-cols-2">
          <Reveal>
            <Eyebrow>Food + products</Eyebrow>
            <h2 className="display-lg mt-6">
              Broadline range,
              <br />
              one delivery.
            </h2>
            <p className="text-muted-foreground mt-8 max-w-md text-[1.0625rem] leading-relaxed">
              Fresh, frozen and ambient goods alongside the disposables and cleaning supplies a
              kitchen needs to open the doors each day.
            </p>
            <Link
              to="/products"
              className="label-mono link-rule text-primary mt-8 inline-flex items-center gap-2"
            >
              View the catalogue <span aria-hidden>→</span>
            </Link>
          </Reveal>
          <Reveal className="img-frame" delay={100}>
            <img
              src={produce}
              alt="Fresh produce, seafood, meat and bakery laid out on dark slate"
              loading="lazy"
              className="aspect-square w-full object-cover"
            />
          </Reveal>
        </div>

        <ul className="mt-16 grid gap-x-10 md:grid-cols-2">
          {PRODUCTS.slice(0, 6).map((p) => (
            <li key={p.label} className="group border-border border-t">
              <Link
                to="/products"
                className="flex items-baseline justify-between gap-6 py-6 transition-[padding] duration-500 group-hover:pl-3"
              >
                <span className="display-md">{p.label}</span>
                <span className="text-muted-foreground group-hover:text-fresh hidden max-w-xs text-right text-sm transition-colors md:block">
                  {p.body}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </Section>

      {/* SOLUTIONS */}
      <Section tone="ink" className="py-24 md:py-36">
        <Reveal className="max-w-3xl">
          <Eyebrow>Solutions for food businesses</Eyebrow>
          <h2 className="display-lg mt-6">More than a supplier list.</h2>
        </Reveal>
        <div className="mt-16">
          {SOLUTIONS.slice(0, 4).map((s) => (
            <Reveal key={s.label} className="grid gap-4 border-t border-white/15 py-10 md:grid-cols-[220px_1fr] md:gap-10">
              <p className="label-mono text-fresh">{s.label}</p>
              <div>
                <h3 className="display-md max-w-2xl">{s.title}</h3>
                <p className="mt-4 max-w-2xl text-[1.0625rem] leading-relaxed text-white/65">
                  {s.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal>
          <Link
            to="/solutions"
            className="label-mono link-rule text-fresh mt-10 inline-flex items-center gap-2"
          >
            Explore solutions <span aria-hidden>→</span>
          </Link>
        </Reveal>
      </Section>

      {/* NETWORK */}
      <Section tone="white" className="py-24 md:py-36">
        <div className="grid gap-12 lg:grid-cols-[1fr_0.8fr] lg:gap-20">
          <Reveal className="img-frame">
            <img
              src={warehouse}
              alt="A team member scanning inventory inside a temperature-controlled distribution centre"
              loading="lazy"
              className="aspect-16/11 w-full object-cover"
            />
          </Reveal>
          <Reveal delay={100} className="max-w-lg">
            <Eyebrow>The network</Eyebrow>
            <h2 className="display-md mt-6">
              Distribution centres, refrigerated fleet, planned routes.
            </h2>
            <p className="text-muted-foreground mt-6 text-[1.0625rem] leading-relaxed">
              Sysco Canada operates distribution centres across the country, holding fresh, frozen
              and dry inventory close to the operators who need it. Cold chain is maintained from
              intake through to the kitchen door.
            </p>
            <p className="text-muted-foreground mt-4 text-[1.0625rem] leading-relaxed">
              Scale is the point: consolidating orders means fewer trucks, fewer invoices and fewer
              gaps on the shelf.
            </p>
          </Reveal>
        </div>
      </Section>

      {/* COMMUNITY + SUSTAINABILITY */}
      <Section tone="blue" className="py-24 md:py-36">
        <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:gap-20">
          <Reveal>
            <Eyebrow className="text-primary-foreground">Community + sustainability</Eyebrow>
            <h2 className="display-lg mt-6">Food is a community business.</h2>
          </Reveal>
          <Reveal delay={100} className="max-w-xl">
            <p className="editorial text-3xl leading-tight">
              Working on hunger relief, responsible sourcing and reducing the footprint of moving
              food — because a distribution network touches communities every day.
            </p>
            <Link
              to="/impact"
              className="label-mono link-rule mt-10 inline-flex items-center gap-2"
            >
              See our impact <span aria-hidden>→</span>
            </Link>
          </Reveal>
        </div>
        <Reveal className="img-frame mt-16">
          <img
            src={dining}
            alt="A server bringing plates to guests in a full neighbourhood restaurant"
            loading="lazy"
            className="aspect-21/9 w-full object-cover"
          />
        </Reveal>
      </Section>

      {/* CAREERS */}
      <Section tone="light" className="py-24 md:py-36">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1fr] lg:gap-20">
          <Reveal className="img-frame">
            <img
              src={people}
              alt="Warehouse and delivery colleagues talking at a loading dock"
              loading="lazy"
              className="aspect-4/5 w-full object-cover"
            />
          </Reveal>
          <Reveal delay={100} className="max-w-xl lg:pt-8">
            <Eyebrow>Careers</Eyebrow>
            <h2 className="display-lg mt-6">Build what feeds Canada.</h2>
            <p className="text-muted-foreground mt-8 text-[1.0625rem] leading-relaxed">
              Drivers, warehouse selectors, sales consultants, chefs, supply chain and corporate
              roles — the work spans the whole journey from intake to delivery.
            </p>
            <Link to="/careers" className="label-mono btn-cta-solid bg-ink text-ink-foreground hover:bg-primary mt-10">
              Explore careers <span aria-hidden>→</span>
            </Link>
          </Reveal>
        </div>
      </Section>

      <CTASection
        title="Let's talk about your kitchen."
        body="Tell us what you run and what you need on the truck. We'll point you to the right team at Sysco Canada."
        secondary={{ to: "/solutions", label: "Explore solutions" }}
      />
    </>
  );
}
