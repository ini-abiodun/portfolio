import { books } from "@/content/books"

interface BookReaderProps {
  slug: string
}

export function BookReader({ slug }: BookReaderProps) {
  const book = books.find((b) => b.slug === slug)
  if (!book) return null

  return (
    <article className="prose prose-neutral dark:prose-invert max-w-none">
      <div className="mb-8">
        <h1 className="text-4xl font-serif mb-2">{book.title}</h1>
        <p className="text-muted-foreground mb-6">{book.author}</p>
      </div>
      
      <div dangerouslySetInnerHTML={{ __html: book.content }} />
      
      {book.lastUpdated && (
        <p className="font-mono text-xs text-muted-foreground uppercase tracking-widest mt-8">
          {book.lastUpdated}
        </p>
      )}
    </article>
  )
}
