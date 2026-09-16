import { createFileRoute } from "@tanstack/react-router";
import { CTASection, EditorialSplit, Eyebrow, PageHero, Section } from "@/components/site/Editorial";
import { Reveal } from "@/components/site/Reveal";
import { SEGMENTS } from "@/data/site";
import { pageHead } from "@/lib/seo";
import hero from "@/assets/dining.jpg";
import people from "@/assets/people.jpg";
import chef from "@/assets/chef.jpg";

export const Route = createFileRoute("/about")({
  head: () =>
    pageHead({
      title: "About Sysco Canada — A Canadian Foodservice Business",
      description:
        "Sysco Canada is part of Sysco, operating Canadian distribution centres and teams that supply restaurants, healthcare, education and hospitality operators.",
      path: "/about",
      keywords:
        "About Sysco Canada, Canadian foodservice, distribution centres, restaurant supplier, hospitality supply chain, Sysco Canada Inc.",
    }),
  component: About,
});

const VALUES = [
  { label: "Customer first", body: "The operator's service window sets the standard for everything upstream." },
  { label: "Food safety", body: "Cold chain, handling and traceability standards applied end to end." },
  { label: "Integrity", body: "Clear commitments to customers, suppliers and colleagues." },
  { label: "Inclusion", body: "Teams that reflect the communities the network serves." },
];

function About() {
  return (
    <>
      <PageHero
        eyebrow="About Sysco Canada"
        title={
          <>
            A Canadian business inside a{" "}
            <span className="editorial text-fresh italic">global food network.</span>
          </>
        }
        lede="Sysco Canada Inc. supplies food, products and expertise to the kitchens that feed Canadian communities — from independent restaurants to hospitals, schools and hotels."
        image={hero}
        alt="Guests being served in a busy Canadian restaurant dining room"
      />

      <Section tone="white">
        <EditorialSplit
          eyebrow="Our story"
          title="Part of Sysco. Operated in Canada."
          body={[
            "Sysco is one of the world's largest distributors of food and related products to the foodservice industry. In Canada, that global capability runs through Canadian distribution centres, Canadian fleets and Canadian sales and culinary teams.",
            "That combination is the point: the sourcing reach and inventory depth of a global company, delivered by people who understand a Tuesday delivery in a Canadian winter.",
          ]}
          image={chef}
          alt="A chef plating a dish on a stainless steel kitchen counter"
        />
      </Section>

      <Section tone="ink" className="py-24 md:py-32">
        <Reveal className="max-w-3xl">
          <Eyebrow>The ecosystem we serve</Eyebrow>
          <h2 className="display-lg mt-6">Everywhere food gets served.</h2>
        </Reveal>
        <ul className="mt-14 grid gap-x-12 md:grid-cols-2">
          {SEGMENTS.map((s) => (
            <li key={s} className="border-t border-white/15">
              <p className="display-md py-6">{s}</p>
            </li>
          ))}
        </ul>
      </Section>

      <Section tone="light">
        <EditorialSplit
          eyebrow="Our people"
          title="The network is people, not pallets."
          body={[
            "Drivers, warehouse selectors, buyers, sales consultants, chefs and support teams keep the journey moving. Their local knowledge — routes, kitchens, seasons — is what makes a national network feel personal.",
            "Community involvement and hunger-relief work sit alongside the day job, because a food business is part of the places it delivers to.",
          ]}
          image={people}
          alt="A group of Sysco Canada warehouse and delivery colleagues at a loading dock"
          reverse
        />
      </Section>

      <Section tone="white" className="py-24 md:py-32">
        <Reveal className="max-w-2xl">
          <Eyebrow>What we hold to</Eyebrow>
          <h2 className="display-lg mt-6">Values that show up on the truck.</h2>
        </Reveal>
        <div className="mt-14 grid gap-x-12 md:grid-cols-2">
          {VALUES.map((v) => (
            <Reveal key={v.label} className="border-border border-t py-8">
              <p className="label-mono text-primary">{v.label}</p>
              <p className="mt-4 max-w-md text-[1.0625rem] leading-relaxed">{v.body}</p>
            </Reveal>
          ))}
        </div>
      </Section>

      <CTASection
        title="Want to work with us?"
        body="Talk to a Sysco Canada team about products, delivery schedules and culinary support for your operation."
        secondary={{ to: "/solutions", label: "Explore solutions" }}
      />
    </>
  );
}
