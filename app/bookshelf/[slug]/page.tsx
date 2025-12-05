"use client"

import { use } from "react"
import { SiteLayout } from "@/components/site-layout"
import { BookReader } from "@/components/book-reader"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function BookDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params)
  
  return (
    <SiteLayout>
      <main className="flex-1 px-5 md:px-16 w-full overflow-y-auto pt-16 md:pt-16 min-h-screen">
        <Link 
          href="/bookshelf"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Bookshelf
        </Link>
        <BookReader slug={slug} />
        <Footer />
      </main>
    </SiteLayout>
  )
}

