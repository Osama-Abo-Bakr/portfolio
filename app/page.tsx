import { EditorialNav } from "@/components/editorial-nav"
import { EditorialHero } from "@/components/editorial-hero"
import { EditorialProfile } from "@/components/editorial-profile"
import { EditorialPractice } from "@/components/editorial-practice"
import { EditorialWork } from "@/components/editorial-work"
import { EditorialMeasures } from "@/components/editorial-measures"
import { EditorialToolkit } from "@/components/editorial-toolkit"
import { EditorialColophon } from "@/components/editorial-colophon"

export default function Home() {
  return (
    <>
      <EditorialNav />
      <main className="mx-auto max-w-page">
        <EditorialHero />
        <EditorialProfile />
        <EditorialPractice />
        <EditorialWork />
        <EditorialMeasures />
        <EditorialToolkit />
        <EditorialColophon />
      </main>
    </>
  )
}
