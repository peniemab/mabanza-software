import { Sparkles } from "lucide-react";
import { contactInfo } from "@/lib/content";
import { Reveal } from "@/components/ui/reveal";

export function Cta() {
  return (
    <section className="px-6 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-primary/20 bg-matte px-8 py-16 text-center md:px-16 md:py-20">
            <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 animate-float rounded-full bg-primary/10" />

            <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight md:text-4xl">
              Prêt à transformer
              <br />
              votre entreprise ?
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-muted leading-relaxed">
              Parlons de vos projets et découvrons ensemble comment nous
              pouvons vous accompagner.
            </p>
            <a
              href={`mailto:${contactInfo.email}`}
              className="mt-10 inline-flex items-center gap-2 rounded-full bg-primary px-10 py-4 text-sm font-semibold text-background transition-opacity hover:opacity-90"
            >
              <Sparkles className="h-4 w-4" aria-hidden />
              Parler à un expert
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
