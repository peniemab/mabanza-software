import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { clientLogos } from "@/lib/content";
import { getIcon } from "@/lib/icons";

export function Hero() {
  const logos = [...clientLogos, ...clientLogos];

  return (
    <section className="relative min-h-[85vh] overflow-hidden px-6 pb-20 pt-16 md:pb-28 md:pt-24">
      <div className="pointer-events-none absolute -right-32 -top-32 h-64 w-64 animate-float rounded-full bg-primary/10 opacity-50" />
      <div
        className="pointer-events-none absolute left-1/4 top-1/3 h-96 w-96 animate-float rounded-full bg-primary/5 opacity-40"
        style={{ animationDelay: "1s" }}
      />
      <div
        className="pointer-events-none absolute -bottom-10 right-1/4 h-48 w-48 animate-float rounded-full bg-primary/10 opacity-30"
        style={{ animationDelay: "2s" }}
      />

      <div className="relative mx-auto flex min-h-[70vh] max-w-6xl flex-col justify-center">
        <h1 className="max-w-4xl text-4xl font-bold leading-[1.1] tracking-tight md:text-6xl lg:text-7xl">
          <span className="animate-fade-in-up hero-delay-1 block">
            Mabanza Software,
          </span>
          <span className="animate-fade-in-up hero-delay-2 block text-primary">
            Accélérez votre transformation digitale
          </span>
          <span className="animate-fade-in-up hero-delay-3 block">
            et concrétisez vos ambitions.
          </span>
        </h1>

        <p className="animate-fade-in-up hero-delay-4 mt-8 max-w-2xl text-lg leading-relaxed text-muted md:text-xl">
          Nous accompagnons vos projets de la stratégie à l&apos;adoption pour
          transformer vos défis en résultats concrets et durables.
        </p>

        <div className="animate-fade-in-up hero-delay-5 mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-8 py-3.5 text-sm font-semibold text-background transition-opacity hover:opacity-90"
          >
            <Sparkles className="h-4 w-4" aria-hidden />
            Commencer un projet
          </a>
          <a
            href="#services"
            className="group inline-flex items-center justify-center gap-2 rounded-full border border-white/15 px-8 py-3.5 text-sm font-semibold transition-colors hover:border-primary hover:text-primary"
          >
            Découvrir nos services
            <ArrowRight
              className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
              aria-hidden
            />
          </a>
        </div>

        <div className="animate-fade-in-up hero-delay-6 mt-20">
          <div className="marquee-mask overflow-hidden">
            <div className="animate-infinite-scroll flex w-max items-center gap-10">
              {logos.map((client, i) => {
                const Icon = getIcon(client.icon);
                return (
                  <div
                    key={`${client.name}-${i}`}
                    className="flex shrink-0 items-center gap-3 rounded-xl border border-white/5 bg-matte/80 px-5 py-3"
                  >
                    <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-background text-muted">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <span className="text-sm font-medium text-muted">
                      {client.name}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
