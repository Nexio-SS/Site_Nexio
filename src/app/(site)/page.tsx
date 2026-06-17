import { Hero } from "@/components/sections/Hero";
import { Stats } from "@/components/sections/Stats";
import { Services } from "@/components/sections/Services";
import { Stack } from "@/components/sections/Stack";
import { Infra } from "@/components/sections/Infra";
import { Portfolio } from "@/components/sections/Portfolio";
import { About } from "@/components/sections/About";
import { CTA } from "@/components/sections/CTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Stats />
      <Services />
      <Stack />
      <Infra />
      <Portfolio />
      <About />
      <CTA />
    </>
  );
}
