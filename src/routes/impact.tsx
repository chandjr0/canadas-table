import { createFileRoute } from "@tanstack/react-router";
import { CTASection, EditorialSplit, Eyebrow, PageHero, Section } from "@/components/site/Editorial";
import { Reveal } from "@/components/site/Reveal";
import { pageHead } from "@/lib/seo";
import hero from "@/assets/hero-farm.jpg";
import truck from "@/assets/truck.jpg";
import people from "@/assets/people.jpg";

export const Route = createFileRoute("/impact")({
  head: () =>
    pageHead({
      title: "Our Impact — Sysco Canada Community & Sustainability",
      description:
        "How Sysco Canada approaches hunger relief, responsible sourcing, reducing the footprint of distribution and supporting Canadian communities.",
      path: "/impact",
      keywords:
        "Sysco Canada impact, sustainability, hunger relief, responsible sourcing, community food programs, food distribution Canada",
    }),
  component: Impact,
});

const PILLARS = [
  {
    label: "Community",
    title: "Hunger relief and local partnership",
    body: "A food distribution network is well placed to help move food to people who need it. Sysco supports hunger-relief organisations and community food programs, and colleagues take part locally.",
  },
  {
    label: "Sourcing",
    title: "Responsible sourcing standards",
    body: "Supplier expectations cover food safety, quality and responsible practice — applied to the products that carry Sysco's own brands as well as the wider range.",
  },
  {
    label: "Planet",
    title: "Lowering the footprint of moving food",
    body: "Route planning, fleet efficiency, refrigeration practice and packaging choices are where a distributor's environmental footprint actually sits.",
  },
  {
    label: "People",
    title: "Safe, inclusive workplaces",
    body: "Safety in warehouses and on the road, plus training and development for colleagues across the network.",
  },
];

function Impact() {
  return (
    <>
      <PageHero
        eyebrow="Our impact"
        title={
          <>
            A food network is{" "}
            <span className="editorial text-fresh italic">a community network.</span>
          </>
        }
        lede="Where we source, how we drive and who we support are decisions that touch Canadian communities every single day."
        image={hero}
        alt="Canadian farmland at sunrise with rows of fresh produce"
      />

      <Section tone="white" className="py-20 md:py-28">
        <div className="grid gap-x-16">
          {PILLARS.map((p) => (
            <Reveal
              key={p.label}
              className="border-border grid gap-4 border-t py-12 md:grid-cols-[220px_1fr] md:gap-12"
            >
              <p className="label-mono text-primary">{p.label}</p>
              <div>
                <h2 className="display-md max-w-2xl">{p.title}</h2>
                <p className="text-muted-foreground mt-5 max-w-2xl text-[1.0625rem] leading-relaxed">
                  {p.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section tone="ink">
        <EditorialSplit
          eyebrow="On the road"
          title="Efficiency is an environmental decision."
          body={[
            "Every consolidated order is a truck that doesn't run. Route density, load planning and refrigeration discipline are the practical levers a distributor has.",
            "Cold chain integrity also cuts waste: product that arrives in condition is product that gets served rather than discarded.",
          ]}
          image={truck}
          alt="A refrigerated delivery truck on a Canadian highway at dawn"
        />
      </Section>

      <Section tone="light" className="py-24 md:py-32">
        <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:gap-20">
          <Reveal className="img-frame">
            <img
              src={people}
              alt="Colleagues talking at a distribution centre loading dock"
              loading="lazy"
              className="aspect-4/5 w-full object-cover"
            />
          </Reveal>
          <Reveal delay={100} className="lg:pt-10">
            <Eyebrow>Our people</Eyebrow>
            <h2 className="display-lg mt-6">Impact starts with the crew.</h2>
            <p className="text-muted-foreground mt-8 max-w-lg text-[1.0625rem] leading-relaxed">
              Safety training, development pathways and inclusive hiring across warehouse,
              transport, culinary and corporate teams — because the people in the network are the
              ones who deliver on any commitment we make.
            </p>
          </Reveal>
        </div>
      </Section>

      <CTASection
        title="Work with a partner that thinks past the pallet."
        body="Talk to Sysco Canada about sourcing, delivery and the products that fit your operation."
        secondary={{ to: "/careers", label: "Explore careers" }}
      />
    </>
  );
}
