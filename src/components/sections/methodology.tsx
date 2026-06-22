import { guarantees, methodologySteps } from "@/lib/content";
import { getIcon } from "@/lib/icons";
import { Reveal } from "@/components/ui/reveal";
import { IconBox } from "@/components/ui/icon-box";

export function Methodology() {
  return (
    <section
      id="methodologie"
      className="scroll-mt-24 border-y border-white/5 bg-matte px-6 py-20 md:py-28"
    >
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <h2 className="text-4xl font-bold leading-[1.1] md:text-5xl lg:text-6xl">
            Notre
            <span className="text-primary"> méthodologie</span>
          </h2>
        </Reveal>

        <Reveal delay={100}>
          <div className="mt-8 max-w-3xl space-y-4 text-muted leading-relaxed">
            <p>
              Chez <strong className="text-foreground">Mabanza Software</strong>
              , nous sommes une agence digitale complète : nous vous
              accompagnons à chaque étape de votre transformation, de
              l&apos;analyse stratégique à l&apos;implémentation technique,
              jusqu&apos;à l&apos;adoption par vos équipes.
            </p>
            <p>
              Grâce à notre double expertise conseil + tech, nous concevons des
              solutions sur-mesure qui répondent tant à vos ambitions
              stratégiques qu&apos;à vos contraintes opérationnelles.
            </p>
            <p>
              Parce que la technologie sans alignement métier, sans adoption,
              sans accompagnement humain n&apos;a que peu de valeur, notre
              valeur ajoutée réside dans cette approche holistique, pensée pour
              vos enjeux, votre contexte et vos ambitions.
            </p>
          </div>
        </Reveal>

        {/* Timeline desktop */}
        <Reveal delay={150}>
          <div className="mt-14 hidden lg:grid lg:grid-cols-5 lg:gap-4">
            {methodologySteps.map((step) => {
              const Icon = getIcon(step.icon);
              return (
                <div key={step.number} className="flex flex-col items-center text-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-primary/60 text-background shadow-lg shadow-primary/20">
                    <Icon className="h-7 w-7" aria-hidden />
                  </div>
                  <p className="mt-4 text-sm font-bold text-primary">
                    {step.number}
                  </p>
                  <p className="mt-2 text-sm font-semibold leading-snug">
                    {step.title}
                  </p>
                </div>
              );
            })}
          </div>
        </Reveal>

        <div className="mt-10 space-y-6 lg:mt-14">
          {methodologySteps.map((step, index) => {
            const Icon = getIcon(step.icon);
            return (
              <Reveal key={step.number} delay={index * 80}>
                <article className="grid gap-4 rounded-2xl border border-white/5 bg-background p-6 transition-colors hover:border-primary/20 md:grid-cols-[auto_1fr] md:gap-8 md:p-8">
                  <div className="flex items-start gap-4 md:flex-col md:items-center md:gap-3">
                    <IconBox
                      icon={Icon}
                      size="sm"
                      variant="gradient"
                      className="lg:hidden"
                    />
                    <p className="text-3xl font-bold text-primary md:text-4xl lg:hidden">
                      {step.number}
                    </p>
                    <p className="hidden text-sm font-bold text-primary lg:block">
                      {step.number}
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold md:text-2xl">
                      {step.title}
                    </h3>
                    <p className="mt-3 leading-relaxed text-muted">
                      {step.description}
                    </p>
                  </div>
                </article>
              </Reveal>
            );
          })}
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
              {guarantees.map((item) => {
                const Icon = getIcon(item.icon);
                return (
                  <li
                    key={item.label}
                    className="flex items-start gap-4 rounded-xl border border-white/5 bg-matte p-4"
                  >
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-primary/60 text-background">
                      <Icon className="h-6 w-6" aria-hidden />
                    </div>
                    <span className="pt-2 text-sm md:text-base">
                      {item.label}
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
