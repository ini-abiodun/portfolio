"use client"

import { use } from "react"
import { SiteLayout } from "@/components/site-layout"
import { CaseStudyReader } from "@/components/case-study-reader"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params)
  
  return (
    <SiteLayout>
      <main className="flex-1 px-5 md:px-16 w-full overflow-y-auto pt-16 md:pt-16 min-h-screen">
        <Link 
          href="/case-studies"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Case Studies
        </Link>
        <CaseStudyReader slug={slug} />
        <Footer />
      </main>
    </SiteLayout>
  )
}

