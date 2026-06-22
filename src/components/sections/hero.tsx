import { Sparkles } from "lucide-react";
import { clientLogos } from "@/lib/content";
import { ClientBadge } from "@/components/ui/client-badge";
import { OutlineButton, PrimaryButton } from "@/components/ui/button";

export function Hero() {
  const marqueeLogos = [...clientLogos, ...clientLogos];

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
          <PrimaryButton href="#contact" icon={Sparkles}>
            Commencer un projet
          </PrimaryButton>
          <OutlineButton href="#services" showArrow>
            Découvrir nos services
          </OutlineButton>
        </div>

        <div className="animate-fade-in-up hero-delay-6 mt-20">
          <div className="grid grid-cols-3 gap-3 sm:grid-cols-4 md:hidden">
            {clientLogos.map((client) => (
              <ClientBadge
                key={client.name}
                name={client.name}
                icon={client.icon}
                compact
              />
            ))}
          </div>

          <div className="marquee-mask hidden overflow-hidden md:block">
            <div className="animate-infinite-scroll flex w-max items-center gap-10">
              {marqueeLogos.map((client, i) => (
                <ClientBadge
                  key={`${client.name}-${i}`}
                  name={client.name}
                  icon={client.icon}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
