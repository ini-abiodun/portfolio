import { caseStudies } from "@/content/case-studies"

interface CaseStudyReaderProps {
  slug: string
}

export function CaseStudyReader({ slug }: CaseStudyReaderProps) {
  const caseStudy = caseStudies.find((c) => c.slug === slug)

  if (!caseStudy) return null

  return (
    <article className="prose prose-sm prose-neutral dark:prose-invert max-w-none text-muted-foreground">
      <p className="font-mono text-xs text-muted-foreground uppercase tracking-widest mb-2">{caseStudy.date}</p>
      <h1 className="text-4xl font-serif mb-8 text-foreground">{caseStudy.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: caseStudy.content }} />
    </article>
  )
}

