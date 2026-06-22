import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero";
import { Services } from "@/components/sections/services";
import { Methodology } from "@/components/sections/methodology";
import { WhyUs } from "@/components/sections/why-us";
import { Cta } from "@/components/sections/cta";

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <Methodology />
      <WhyUs />
      <Cta />
    </main>
  );
}
