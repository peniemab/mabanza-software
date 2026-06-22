import { guarantees, methodologySteps } from "@/lib/content";
import { getIcon } from "@/lib/icons";
import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";
import { SectionTitle } from "@/components/ui/section-title";
import {
  GuaranteeItem,
  MethodologyStepCard,
  TimelineStep,
} from "@/components/ui/methodology-card";

export function Methodology() {
  return (
    <Section
      id="methodologie"
      className="border-y border-white/5 bg-matte"
    >
      <Reveal>
        <SectionTitle before="Notre" highlight="méthodologie" />
      </Reveal>

      <Reveal delay={100}>
        <div className="mt-8 max-w-3xl space-y-4 text-muted leading-relaxed">
          <p>
            Chez <strong className="text-foreground">Mabanza Software</strong>
            , nous sommes une agence digitale complète : nous vous accompagnons
            à chaque étape de votre transformation, de l&apos;analyse
            stratégique à l&apos;implémentation technique, jusqu&apos;à
            l&apos;adoption par vos équipes.
          </p>
          <p>
            Grâce à notre double expertise conseil + tech, nous concevons des
            solutions sur-mesure qui répondent tant à vos ambitions
            stratégiques qu&apos;à vos contraintes opérationnelles.
          </p>
          <p>
            Parce que la technologie sans alignement métier, sans adoption, sans
            accompagnement humain n&apos;a que peu de valeur, notre valeur
            ajoutée réside dans cette approche holistique, pensée pour vos
            enjeux, votre contexte et vos ambitions.
          </p>
        </div>
      </Reveal>

      <Reveal delay={150}>
        <div className="mt-14 hidden lg:grid lg:grid-cols-5 lg:gap-4">
          {methodologySteps.map((step) => (
            <TimelineStep
              key={step.number}
              number={step.number}
              title={step.title}
              icon={getIcon(step.icon)}
            />
          ))}
        </div>
      </Reveal>

      <div className="mt-10 space-y-6 lg:mt-14">
        {methodologySteps.map((step, index) => (
          <Reveal key={step.number} delay={index * 80}>
            <MethodologyStepCard
              number={step.number}
              title={step.title}
              description={step.description}
              icon={getIcon(step.icon)}
            />
          </Reveal>
        ))}
      </div>

      <Reveal delay={100}>
        <div className="mt-16 rounded-2xl border border-primary/20 bg-background p-8 md:p-10">
          <h3 className="text-xl font-bold md:text-2xl">
            Engagements & garanties
          </h3>
          <p className="mt-3 text-muted">
            Nous nous engageons à délivrer des projets fiables, sécurisés et
            orientés valeur. Voici nos garanties principales :
          </p>
          <ul className="mt-8 grid gap-6 sm:grid-cols-2">
            {guarantees.map((item) => (
              <GuaranteeItem
                key={item.label}
                label={item.label}
                icon={getIcon(item.icon)}
              />
            ))}
          </ul>
        </div>
      </Reveal>
    </Section>
  );
}
