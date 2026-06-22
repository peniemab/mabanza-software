import { whyUs } from "@/lib/content";
import { getIcon } from "@/lib/icons";
import { Reveal } from "@/components/ui/reveal";
import { IconBox } from "@/components/ui/icon-box";

export function WhyUs() {
  return (
    <section id="why-mabanza" className="scroll-mt-24 px-6 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <h2 className="text-4xl font-bold leading-[1.1] md:text-5xl lg:text-6xl">
            Pourquoi
            <span className="text-primary"> Mabanza ?</span>
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {whyUs.map((item, index) => {
            const Icon = getIcon(item.icon);
            return (
              <Reveal key={item.title} delay={index * 100}>
                <article className="group h-full rounded-2xl border border-white/5 bg-matte p-8 transition-all duration-300 hover:border-primary/20">
                  <IconBox icon={Icon} className="mb-6" />
                  <h3 className="text-xl font-bold">{item.title}</h3>
                  <p className="mt-4 leading-relaxed text-muted">
                    {item.description}
                  </p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
