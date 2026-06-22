import { whyUs } from "@/lib/content";
import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";
import { SectionTitle } from "@/components/ui/section-title";
import { FeatureCard } from "@/components/ui/feature-card";

export function WhyUs() {
  return (
    <Section id="why-mabanza">
      <Reveal>
        <SectionTitle before="Pourquoi" highlight="Mabanza ?" />
      </Reveal>

      <div className="mt-14 grid gap-6 sm:grid-cols-2">
        {whyUs.map((item, index) => (
          <Reveal key={item.title} delay={index * 100}>
            <FeatureCard {...item} />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
