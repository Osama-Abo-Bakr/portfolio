import { EditorialNav } from "@/components/editorial-nav"
import { EditorialHero } from "@/components/editorial-hero"
import { EditorialApproach } from "@/components/editorial-approach"
import { EditorialDomains } from "@/components/editorial-domains"
import { EditorialPipeline } from "@/components/editorial-pipeline"
import { EditorialOrbit } from "@/components/editorial-orbit"
import { EditorialPractice } from "@/components/editorial-practice"
import { EditorialWork } from "@/components/editorial-work"
import { EditorialMeasures } from "@/components/editorial-measures"
import { EditorialColophon } from "@/components/editorial-colophon"

export default function Home() {
  return (
    <>
      <EditorialNav />
      {/* Bands alternate deep / dark / white the way the reference does;
          the page is full-bleed, so the max-width lives inside each one. */}
      <main>
        <EditorialHero />
        <EditorialApproach />
        <EditorialDomains />
        <EditorialPipeline />
        <EditorialOrbit />
        <EditorialPractice />
        <EditorialWork />
        <EditorialMeasures />
        <EditorialColophon />
      </main>
    </>
  )
}
