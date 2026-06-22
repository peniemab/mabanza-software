import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { services } from "@/lib/content";
import { getIcon } from "@/lib/icons";
import { Reveal } from "@/components/ui/reveal";
import { IconBox } from "@/components/ui/icon-box";

export function Services() {
  return (
    <section id="services" className="scroll-mt-24 px-6 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <h2 className="text-4xl font-bold leading-[1.1] md:text-5xl lg:text-6xl">
            Ce que
            <span className="text-primary"> nous faisons</span>
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {services.map((service, index) => {
            const Icon = getIcon(service.icon);
            return (
              <Reveal key={service.id} delay={index * 100}>
                <article className="group h-full cursor-pointer overflow-hidden rounded-3xl border border-white/5 bg-matte p-8 transition-all duration-500 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5">
                  <IconBox icon={Icon} className="mb-6" />
                  <p className="text-xs font-medium uppercase tracking-widest text-muted">
                    {service.category}
                  </p>
                  <h3 className="mt-2 text-2xl font-bold">{service.title}</h3>
                  <p className="mt-4 leading-relaxed text-muted">
                    {service.description}
                  </p>
                  <a
                    href={service.href}
                    className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary transition-opacity group-hover:opacity-80"
                  >
                    En savoir plus
                    <ArrowRight
                      className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                      aria-hidden
                    />
                  </a>
                </article>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={200}>
          <div className="mt-12 text-center">
            <Link
              href="/realisations"
              className="group inline-flex items-center gap-2 rounded-full border border-white/15 px-8 py-3 text-sm font-semibold transition-colors hover:border-primary hover:text-primary"
            >
              Découvrir nos réalisations
              <ArrowRight
                className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
                aria-hidden
              />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
