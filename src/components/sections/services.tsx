import { services } from "@/lib/content";
import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";
import { SectionTitle } from "@/components/ui/section-title";
import { ServiceCard } from "@/components/ui/service-card";
import { OutlineButton } from "@/components/ui/button";

export function Services() {
  return (
    <Section id="services">
      <Reveal>
        <SectionTitle before="Ce que" highlight="nous faisons" />
      </Reveal>

      <div className="mt-14 grid gap-6 md:grid-cols-2">
        {services.map((service, index) => (
          <Reveal key={service.id} delay={index * 100}>
            <ServiceCard {...service} />
          </Reveal>
        ))}
      </div>

      <Reveal delay={200}>
        <div className="mt-12 text-center">
          <OutlineButton href="/realisations" showArrow>
            Découvrir nos réalisations
          </OutlineButton>
        </div>
      </Reveal>
    </Section>
  );
}
