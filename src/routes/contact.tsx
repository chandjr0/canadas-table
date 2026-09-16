import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section } from "@/components/site/Editorial";
import { Reveal } from "@/components/site/Reveal";
import { ContactForm } from "@/components/site/ContactForm";
import { LINKS } from "@/data/site";
import { pageHead } from "@/lib/seo";
import truck from "@/assets/truck.jpg";

export const Route = createFileRoute("/contact")({
  head: () =>
    pageHead({
      title: "Contact Sysco Canada",
      description:
        "Get in touch with Sysco Canada about products, delivery, culinary support or careers.",
      path: "/contact",
      keywords:
        "contact Sysco Canada, foodservice inquiry, restaurant supplier contact, delivery schedule, culinary support Canada",
    }),
  component: Contact,
});

function Contact() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title={
          <>
            Let's talk about{" "}
            <span className="editorial text-fresh italic">your kitchen.</span>
          </>
        }
        lede="Tell us what you run, where you are and what you need delivered. We'll route you to the right Sysco Canada team."
        image={truck}
        alt="A refrigerated Sysco-style delivery truck on a Canadian highway"
      />

      <Section tone="light" className="py-20 md:py-28">
        <div className="grid gap-14 lg:grid-cols-[1fr_0.85fr] lg:gap-20">
          <Reveal>
            <ContactForm />
          </Reveal>

          <Reveal delay={120}>
            <div className="border-border border-t pt-8">
              <p className="label-mono text-muted-foreground">Head office</p>
              <p className="mt-3 text-lg">Sysco Canada Inc.</p>
              <p className="text-muted-foreground">Toronto, Ontario, Canada</p>
            </div>
            <div className="border-border mt-8 border-t pt-8">
              <p className="label-mono text-muted-foreground">Connect</p>
              <div className="mt-3 flex flex-col gap-2">
                <a href={LINKS.website.href} className="link-rule w-fit text-lg">
                  {LINKS.website.label}
                </a>
                <a href={LINKS.linkedin.href} className="link-rule w-fit text-lg">
                  {LINKS.linkedin.label}
                </a>
                <a href={LINKS.email.href} className="link-rule w-fit text-lg">
                  {LINKS.email.label}
                </a>
                <a href={LINKS.careers.href} className="link-rule w-fit text-lg">
                  {LINKS.careers.label}
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </Section>
    </>
  );
}
