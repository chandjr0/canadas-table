import { Link } from "@tanstack/react-router";
import { memo } from "react";
import { LINKS, NAV } from "@/data/site";
import { SyscoLogo } from "./SyscoLogo";

export const Footer = memo(function Footer() {
  return (
    <footer className="bg-ink text-ink-foreground" role="contentinfo">
      <div className="mx-auto max-w-[1600px] px-5 py-16 md:px-10 md:py-24 xl:px-12">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <SyscoLogo variant="footer" className="h-11 brightness-0 invert md:h-12" />
            <p className="editorial mt-6 max-w-md text-2xl leading-tight text-white/70">
              Food, products, expertise and distribution for the kitchens that feed Canadian
              communities.
            </p>
          </div>

          <nav aria-label="Footer navigation" className="flex flex-col gap-3">
            <p className="label-mono mb-2 text-white/40">Navigate</p>
            {NAV.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="link-rule footer-link w-fit text-sm text-white/80"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex flex-col gap-3">
            <p className="label-mono mb-2 text-white/40">Connect</p>
            <a href={LINKS.website.href} className="link-rule footer-link w-fit text-sm text-white/80">
              {LINKS.website.label}
            </a>
            <a href={LINKS.linkedin.href} className="link-rule footer-link w-fit text-sm text-white/80">
              {LINKS.linkedin.label}
            </a>
            <a href={LINKS.email.href} className="link-rule footer-link w-fit text-sm text-white/80">
              {LINKS.email.label}
            </a>
            <a href={LINKS.careers.href} className="link-rule footer-link w-fit text-sm text-white/80">
              {LINKS.careers.label}
            </a>
            <p className="mt-4 text-sm text-white/50">Head office: Toronto, Ontario, Canada</p>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-white/15 pt-8 md:flex-row md:items-center md:justify-between">
          <p className="label-mono text-white/40">
            © {new Date().getFullYear()} Sysco Canada Inc.
          </p>
          <div className="label-mono flex flex-wrap items-center gap-6 text-white/40">
            <span className="text-white/40">{LINKS.website.label}</span>
            <span className="text-white/40">{LINKS.email.label}</span>
          </div>
        </div>
      </div>
    </footer>
  );
});
