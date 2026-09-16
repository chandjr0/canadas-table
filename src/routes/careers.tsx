import { createFileRoute } from "@tanstack/react-router";
import { Eyebrow, PageHero, Section } from "@/components/site/Editorial";
import { Reveal } from "@/components/site/Reveal";
import { LINKS } from "@/data/site";
import { pageHead } from "@/lib/seo";
import hero from "@/assets/people.jpg";
import warehouse from "@/assets/warehouse.jpg";

export const Route = createFileRoute("/careers")({
  head: () =>
    pageHead({
      title: "Careers — Build What Feeds Canada | Sysco Canada",
      description:
        "Explore careers at Sysco Canada across delivery, warehouse, sales, culinary, supply chain and corporate teams.",
      path: "/careers",
      keywords:
        "Sysco Canada careers, warehouse jobs, delivery driver jobs, foodservice careers, supply chain jobs Canada, culinary careers",
    }),
  component: Careers,
});

const AREAS = [
  { label: "Delivery & transport", body: "Drivers and transport teams running planned routes across Canadian regions." },
  { label: "Warehouse & operations", body: "Selectors, receivers and operations leaders keeping cold chain and accuracy intact." },
  { label: "Sales & consulting", body: "Consultants who work alongside operators on products, costs and menus." },
  { label: "Culinary", body: "Chefs supporting menu development and product selection." },
  { label: "Supply chain & merchandising", body: "Buying, planning and category teams behind the range." },
  { label: "Corporate & support", body: "Finance, technology, HR and the functions that hold the network together." },
];

function Careers() {
  return (
    <>
      <PageHero
        eyebrow="Careers"
        title={
          <>
            Build what <span className="editorial text-fresh italic">feeds Canada.</span>
          </>
        }
        lede="Sysco Canada hires across delivery, warehouse, sales, culinary, supply chain and corporate teams — work that reaches kitchens in every kind of Canadian community."
        image={hero}
        alt="Sysco Canada colleagues in work gear at a loading dock"
      />

      <Section tone="white" className="py-20 md:py-28">
        <Reveal className="max-w-2xl">
          <Eyebrow>Where you could fit</Eyebrow>
          <h2 className="display-lg mt-6">Six ways into the network.</h2>
        </Reveal>
        <div className="mt-14 grid gap-x-14 md:grid-cols-2">
          {AREAS.map((a) => (
            <Reveal key={a.label} className="border-border group border-t py-8">
              <p className="display-md group-hover:text-primary transition-colors">{a.label}</p>
              <p className="text-muted-foreground mt-3 max-w-md text-[1.0625rem] leading-relaxed">
                {a.body}
              </p>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section tone="ink" className="py-0">
        <div className="grid items-center gap-10 py-20 md:grid-cols-2 md:gap-16 md:py-28">
          <Reveal className="img-frame">
            <img
              src={warehouse}
              alt="A warehouse team member scanning stock in a distribution centre"
              loading="lazy"
              className="aspect-4/3 w-full object-cover"
            />
          </Reveal>
          <Reveal className="max-w-xl">
            <Eyebrow>Apply</Eyebrow>
            <h2 className="display-md mt-6">Open roles are posted on the Sysco careers site.</h2>
            <p className="mt-6 text-[1.0625rem] leading-relaxed text-white/70">
              Search current Canadian openings, filter by location and apply directly.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a href={LINKS.careers.href} className="btn-cta-solid">
                {LINKS.careers.label} <span aria-hidden>→</span>
              </a>
              <a href={LINKS.linkedin.href} className="btn-cta-outline">
                {LINKS.linkedin.label} <span aria-hidden>→</span>
              </a>
            </div>
          </Reveal>
        </div>
      </Section>
    </>
  );
}
