import { Link, useRouterState } from "@tanstack/react-router";
import { memo, useEffect, useState } from "react";
import { HERO_ROUTES, NAV } from "@/data/site";
import { SyscoLogo } from "./SyscoLogo";

export const Header = memo(function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const isHeroRoute = HERO_ROUTES.includes(pathname as (typeof HERO_ROUTES)[number]);
  const onHero = isHeroRoute && !scrolled && !open;

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,box-shadow,color] duration-500 ${
        scrolled || open
          ? "border-b border-border/80 bg-background/92 text-foreground shadow-[0_8px_32px_oklch(0.245_0.026_226.5_/_0.06)] backdrop-blur-md"
          : onHero
            ? "border-b border-transparent text-warm"
            : "border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex h-[80px] max-w-[1600px] items-center justify-between px-5 md:px-10 xl:px-12">
        <Link to="/" className="group inline-flex items-center rounded-sm" aria-label="Sysco home">
          <SyscoLogo className="transition-transform duration-300 group-hover:scale-[1.03]" />
        </Link>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
          {NAV.map((item) => {
            const active = pathname === item.to;
            return (
              <Link
                key={item.to}
                to={item.to}
                aria-current={active ? "page" : undefined}
                className={`link-rule nav-link ${
                  active
                    ? onHero
                      ? "text-fresh"
                      : "text-primary"
                    : onHero
                      ? "text-warm/90 hover:text-fresh"
                      : "text-foreground/85 hover:text-primary"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            to="/contact"
            className={`label-mono btn-cta-solid hidden sm:inline-flex ${
              onHero ? "bg-warm text-ink hover:bg-fresh" : "bg-ink text-ink-foreground hover:bg-primary"
            }`}
          >
            Get in touch <span aria-hidden>→</span>
          </Link>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            className={`flex h-11 w-11 items-center justify-center rounded-sm border transition-colors duration-300 lg:hidden ${
              onHero ? "border-white/35 hover:border-fresh" : "border-border hover:border-primary"
            }`}
          >
            <span className="relative block h-3 w-5">
              <span
                className={`absolute left-0 h-[1.5px] w-5 transition-all duration-300 ${onHero ? "bg-warm" : "bg-foreground"} ${open ? "top-1.5 rotate-45" : "top-0"}`}
              />
              <span
                className={`absolute left-0 h-[1.5px] w-5 transition-all duration-300 ${onHero ? "bg-warm" : "bg-foreground"} ${open ? "top-1.5 -rotate-45" : "top-3"}`}
              />
            </span>
          </button>
        </div>
      </div>

      <div
        id="mobile-nav"
        className={`overflow-hidden transition-[max-height,opacity] duration-500 ease-out lg:hidden ${
          open ? "max-h-[80vh] bg-background text-foreground opacity-100" : "max-h-0 opacity-0"
        }`}
        aria-hidden={!open}
      >
        <nav className="flex flex-col px-5 pb-8" aria-label="Mobile">
          {NAV.map((item, i) => {
            const active = pathname === item.to;
            return (
              <Link
                key={item.to}
                to={item.to}
                aria-current={active ? "page" : undefined}
                className={`display-md border-border border-b py-4 transition-colors duration-300 ${active ? "text-primary" : "hover:text-primary"}`}
                style={{ transitionDelay: open ? `${i * 40}ms` : "0ms" }}
              >
                {item.label}
              </Link>
            );
          })}
          <Link
            to="/contact"
            className="label-mono btn-cta-solid bg-primary text-primary-foreground hover:bg-fresh mt-6 inline-flex items-center justify-center"
          >
            Get in touch <span aria-hidden>→</span>
          </Link>
        </nav>
      </div>
    </header>
  );
});
