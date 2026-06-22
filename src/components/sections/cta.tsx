import { contactInfo } from "@/lib/content";
import { ExpertButton } from "@/components/ui/expert-button";
import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";

export function Cta() {
  return (
    <Section>
      <Reveal>
        <div className="relative overflow-hidden rounded-3xl border border-primary/20 bg-matte px-8 py-16 text-center md:px-16 md:py-20">
          <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 animate-float rounded-full bg-primary/10" />

          <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight md:text-4xl">
            Prêt à transformer
            <br />
            votre entreprise ?
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-muted leading-relaxed">
            Parlons de vos projets et découvrons ensemble comment nous pouvons
            vous accompagner.
          </p>
          <div className="mt-10 flex justify-center">
            <ExpertButton href={`mailto:${contactInfo.email}`} size="lg" />
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
