"use client";

import { useMemo, useRef, useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  CircleCheck,
  ListChecks,
  Sparkles,
  Target,
  TrendingUp,
} from "lucide-react";
import {
  projectSectors,
  projects,
  realisationsDiff,
  contactInfo,
} from "@/lib/content";
import { PrimaryButton } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { SectionTitle } from "@/components/ui/section-title";

export function RealisationsContent() {
  const [activeSector, setActiveSector] = useState("all");
  const [activeIndex, setActiveIndex] = useState(0);
  const tabsRef = useRef<HTMLDivElement>(null);

  const filteredProjects = useMemo(
    () =>
      activeSector === "all"
        ? projects
        : projects.filter((p) => p.sector === activeSector),
    [activeSector],
  );

  const currentProject = filteredProjects[activeIndex] ?? filteredProjects[0];

  const selectSector = (id: string) => {
    setActiveSector(id);
    setActiveIndex(0);
  };

  const scrollTabs = (direction: "left" | "right") => {
    tabsRef.current?.scrollBy({
      left: direction === "left" ? -240 : 240,
      behavior: "smooth",
    });
  };

  const goToPrev = () => {
    setActiveIndex((i) =>
      i === 0 ? filteredProjects.length - 1 : i - 1,
    );
  };

  const goToNext = () => {
    setActiveIndex((i) =>
      i === filteredProjects.length - 1 ? 0 : i + 1,
    );
  };

  return (
    <>
      <section className="relative overflow-hidden px-6 pb-16 pt-16 md:pb-20 md:pt-24">
        <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />

        <div className="relative mx-auto max-w-6xl">
          <Reveal>
            <SectionTitle
              as="h1"
              before="Nos"
              highlight="réalisations"
            />
          </Reveal>

          <Reveal delay={100}>
            <p className="mt-6 max-w-3xl text-xl text-muted">
              Des projets de transformation digitale à fort impact pour les
              organisations
            </p>
          </Reveal>

          <Reveal delay={150}>
            <div className="mt-8 max-w-3xl space-y-4 text-muted leading-relaxed">
              <p>
                Mabanza Software accompagne des institutions publiques, des
                bailleurs de fonds et des grandes entreprises dans la conception
                et la mise en œuvre de solutions digitales stratégiques.
              </p>
              <p>
                Nous intervenons au-delà du développement technique : diagnostic,
                structuration des processus, gouvernance des données,
                accompagnement au changement et déploiement de solutions à
                l&apos;échelle.
              </p>
              <p className="font-medium text-primary">
                +200 projets réalisés | +80 clients | RDC & international
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-y border-white/5 bg-matte px-6 py-16 md:py-20">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <h2 className="text-2xl font-bold md:text-3xl">
              Nos références par secteur
            </h2>
          </Reveal>

          <Reveal delay={100}>
            <div className="mt-8 flex items-center gap-3">
              <button
                type="button"
                aria-label="Scroll left"
                onClick={() => scrollTabs("left")}
                className="hidden h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10 transition-colors hover:border-primary hover:text-primary sm:flex"
              >
                <ChevronLeft className="h-5 w-5" aria-hidden />
              </button>

              <div
                ref={tabsRef}
                className="flex flex-1 gap-3 overflow-x-auto pb-2 scrollbar-hide"
              >
                {projectSectors.map((sector) => (
                  <button
                    key={sector.id}
                    type="button"
                    onClick={() => selectSector(sector.id)}
                    className={`shrink-0 rounded-full px-5 py-2.5 text-sm font-medium transition-all ${
                      activeSector === sector.id
                        ? "bg-primary text-background"
                        : "border border-white/10 text-muted hover:border-primary/40 hover:text-foreground"
                    }`}
                  >
                    {sector.label}
                  </button>
                ))}
              </div>

              <button
                type="button"
                aria-label="Scroll right"
                onClick={() => scrollTabs("right")}
                className="hidden h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10 transition-colors hover:border-primary hover:text-primary sm:flex"
              >
                <ChevronRight className="h-5 w-5" aria-hidden />
              </button>
            </div>
          </Reveal>

          {currentProject && (
            <Reveal delay={150}>
              <article className="mt-10 rounded-3xl border border-white/5 bg-background p-8 md:p-10">
                <h3 className="text-xl font-bold md:text-2xl">
                  {currentProject.title}
                </h3>

                <div className="mt-8 grid gap-8 md:grid-cols-3">
                  <div>
                    <h4 className="mb-3 flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-primary">
                      <Target className="h-4 w-4" aria-hidden />
                      Enjeu
                    </h4>
                    <p className="text-sm leading-relaxed text-muted">
                      {currentProject.enjeu}
                    </p>
                  </div>

                  <div>
                    <h4 className="mb-3 flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-primary">
                      <ListChecks className="h-4 w-4" aria-hidden />
                      Approche
                    </h4>
                    <ul className="space-y-2">
                      {currentProject.approche.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-2 text-sm text-muted"
                        >
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="mb-3 flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-primary">
                      <TrendingUp className="h-4 w-4" aria-hidden />
                      Impact
                    </h4>
                    <ul className="space-y-2">
                      {currentProject.impact.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-2 text-sm text-muted"
                        >
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-8 flex items-center justify-between border-t border-white/5 pt-6">
                  <button
                    type="button"
                    aria-label="Previous slide"
                    onClick={goToPrev}
                    disabled={filteredProjects.length <= 1}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 transition-colors hover:border-primary hover:text-primary disabled:opacity-30"
                  >
                    <ChevronLeft className="h-5 w-5" aria-hidden />
                  </button>
                  <span className="text-sm text-muted">
                    {activeIndex + 1} / {filteredProjects.length}
                  </span>
                  <button
                    type="button"
                    aria-label="Next slide"
                    onClick={goToNext}
                    disabled={filteredProjects.length <= 1}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 transition-colors hover:border-primary hover:text-primary disabled:opacity-30"
                  >
                    <ChevronRight className="h-5 w-5" aria-hidden />
                  </button>
                </div>
              </article>
            </Reveal>
          )}
        </div>
      </section>

      <section className="px-6 py-16 md:py-20">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <h2 className="text-2xl font-bold md:text-3xl">Notre différence</h2>
          </Reveal>

          <Reveal delay={100}>
            <ul className="mt-8 grid gap-4 sm:grid-cols-2">
              {realisationsDiff.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 rounded-2xl border border-white/5 bg-matte p-6"
                >
                  <CircleCheck className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden />
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={150}>
            <div className="mt-16 rounded-3xl border border-primary/20 bg-matte p-8 text-center md:p-12">
              <h3 className="text-2xl font-bold md:text-3xl">
                Vous avez un projet de transformation digitale ?
              </h3>
              <p className="mx-auto mt-4 max-w-2xl text-muted leading-relaxed">
                Que vous soyez une institution publique, un bailleur ou une
                grande entreprise, nous vous aidons à structurer, sécuriser et
                déployer des solutions digitales à fort impact.
              </p>
              <PrimaryButton
                href={`mailto:${contactInfo.email}`}
                icon={Sparkles}
                className="mt-8"
              >
                Planifier un échange stratégique
              </PrimaryButton>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
