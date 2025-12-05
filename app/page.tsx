"use client"

import { SiteLayout } from "@/components/site-layout"
import { AboutSection } from "@/components/about-section"

export default function HomePage() {
  return (
    <SiteLayout>
      <main className="flex-1 px-5 md:px-16 w-full md:max-w-3xl overflow-y-auto pt-16 md:pt-16 flex flex-col justify-between min-h-screen pb-0">
        <AboutSection />
      </main>
    </SiteLayout>
  )
}
