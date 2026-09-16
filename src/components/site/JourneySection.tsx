import { useEffect, useRef, useState } from "react";
import { JOURNEY } from "@/data/site";
import farm from "@/assets/hero-farm.jpg";
import chef from "@/assets/chef.jpg";
import warehouse from "@/assets/warehouse.jpg";
import truck from "@/assets/truck.jpg";
import dining from "@/assets/dining.jpg";

const IMAGES: Record<string, string> = {
  source: farm,
  prepare: chef,
  distribute: warehouse,
  deliver: truck,
  serve: dining,
};

/**
 * Signature interaction: FROM FARM. TO TRUCK. TO TABLE.
 * A pinned scroll sequence where the stage image cross-fades, the connecting
 * line draws forward and the stage labels activate as the journey progresses.
 */
export function JourneySection() {
  const wrapRef = useRef<HTMLDivElement | null>(null);
  const [active, setActive] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;
    let frame = 0;
    const onScroll = () => {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        frame = 0;
        const rect = el.getBoundingClientRect();
        const total = rect.height - window.innerHeight;
        if (total <= 0) return;
        const p = Math.min(1, Math.max(0, -rect.top / total));
        setProgress(p);
        setActive(Math.min(JOURNEY.length - 1, Math.floor(p * JOURNEY.length * 0.999)));
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  const stage = JOURNEY[active] ?? JOURNEY[0];

  return (
    <section aria-label="From farm to truck to table" className="bg-ink text-ink-foreground">
      <div ref={wrapRef} className="relative h-[420vh] md:h-[500vh]">
        <div className="sticky top-0 flex h-screen flex-col justify-between overflow-hidden pt-[80px] pb-6">
          <div className="mx-auto w-full max-w-[1600px] px-5 md:px-10 xl:px-12">
            <p className="label-mono text-fresh">From farm. To truck. To table.</p>
          </div>

          <div className="mx-auto grid w-full max-w-[1600px] flex-1 items-center gap-8 px-5 md:grid-cols-[1.05fr_1fr] md:px-10">
            <div className="relative aspect-4/3 w-full overflow-clip md:aspect-16/11">
              {JOURNEY.map((s, i) => (
                <img
                  key={s.key}
                  src={IMAGES[s.key]}
                  alt={s.title}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition-all duration-[900ms] ease-out"
                  style={{
                    opacity: i === active ? 1 : 0,
                    transform: `scale(${i === active ? 1 : 1.08})`,
                  }}
                />
              ))}
              <div className="from-ink/70 pointer-events-none absolute inset-0 bg-gradient-to-t via-transparent to-transparent" />
            </div>

            <div className="md:pl-6">
              <p className="label-mono text-white/50">{stage.label}</p>
              <h2 className="display-lg mt-4">{stage.title}</h2>
              <p className="mt-6 max-w-md text-[1.0625rem] leading-relaxed text-white/70">
                {stage.body}
              </p>
            </div>
          </div>

          {/* Journey rail */}
          <div className="mx-auto w-full max-w-[1600px] px-5 md:px-10 xl:px-12">
            <div className="relative pt-6">
              <div className="absolute top-0 left-0 h-px w-full bg-white/15" />
              <div
                className="bg-fresh absolute top-0 left-0 h-px transition-[width] duration-300 ease-out"
                style={{ width: `${progress * 100}%` }}
              />
              <ol className="flex justify-between gap-2">
                {JOURNEY.map((s, i) => (
                  <li
                    key={s.key}
                    className={`label-mono transition-colors duration-500 ${
                      i <= active ? "text-warm" : "text-white/35"
                    }`}
                  >
                    <span className="hidden md:inline">{s.label}</span>
                    <span className="md:hidden">{s.label.slice(0, 4)}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
