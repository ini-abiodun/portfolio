export interface Note {
  slug: string
  title: string
  date: string
  excerpt: string
  content: string
}

export const notes: Note[] = [
  {
    "slug": "favourite-links",
    "title": "Example: Resource Collection",
    "date": "January 2025",
    "excerpt": "",
    "content": "<p>This note demonstrates how you can organize and share collections of links, resources, or bookmarks.</p>\n<h2>Design Resources</h2>\n<ul><li><a href=\"https://example.com\" target=\"_blank\" rel=\"noopener noreferrer\">Example Link 1</a> - A great design resource</li><li><a href=\"https://example.com\" target=\"_blank\" rel=\"noopener noreferrer\">Example Link 2</a> - Another helpful tool</li></ul>\n<h2>Reading List</h2>\n<ul><li><a href=\"https://example.com\" target=\"_blank\" rel=\"noopener noreferrer\">Example Article</a> - An interesting article</li><li><a href=\"https://example.com\" target=\"_blank\" rel=\"noopener noreferrer\">Example Essay</a> - A thought-provoking piece</li></ul>\n<h2>Tools</h2>\n<ul><li><a href=\"https://example.com\" target=\"_blank\" rel=\"noopener noreferrer\">Example Tool</a> - A useful utility</li></ul>"
  },
  {
    "slug": "hello-world",
    "title": "Welcome to Your New Site",
    "date": "January 2025",
    "excerpt": "",
    "content": "<p>This is an example note to demonstrate how the content system works.</p>\n<p>You can write your thoughts, essays, or any content you'd like to share here. The MDX format gives you full control over your writing with support for:</p>\n<ul><li><strong class=\"font-semibold\">Markdown formatting</strong> for rich text</li><li>Frontmatter for metadata (title, date, excerpt)</li><li>Custom React components (if you want to extend it)</li></ul>\n<h2>Getting Started</h2>\n<p>Simply edit this file in `content/notes/` or create new `.mdx` files to add your own content.</p>\n<p>The build system will automatically process your content and make it available on your site.</p>"
  },
  {
    "slug": "long-game",
    "title": "Example: Long-Form Writing",
    "date": "January 2025",
    "excerpt": "",
    "content": "<p>This is an example of a longer-form note or essay. You can use this space to share your thoughts, reflections, or stories.</p>\n<p>The template supports all standard Markdown features, so you can structure your content however you like.</p>\n<h2>Formatting Examples</h2>\n<p>You can use headers to organize your content into sections.</p>\n<h3>Subsections work too</h3>\n<p>And you can nest them as deeply as needed.</p>\n<h2>Quotes and Emphasis</h2>\n<blockquote>This is a blockquote. Great for highlighting important ideas or quotes.</blockquote>\n<p>You can also use <strong class=\"font-semibold\">bold text</strong> and <em>italic text</em> for emphasis.</p>\n<h2>Lists and More</h2>\n<p>The sky's the limit with what you can write here. This is your space to share your ideas with the world.</p>"
  },
  {
    "slug": "you-are-not-a-tree",
    "title": "You Are Not A Tree. Move.",
    "date": "12-04-2025",
    "excerpt": "I said this to a friend earlier this week. They were describing how they felt in a situation that was not of their making.",
    "content": "<p>I said this to a friend earlier this week. They were describing how they felt in a situation that was not of their making.</p>\n<p>But as they talked, I could hear something else beneath: a familiar kind of paralysis, a waiting for the right moment or the right permission or the right conditions.</p>\n<p>The question isn't whether you're stuck. Lots of us get stuck, through circumstances we didn't choose and couldn't prevent. The question is: what separates people who find a way to move from people who stay stuck?</p>\n<p>I've been thinking about this a lot lately, partly because of that conversation, partly because I just celebrated with another friend who recently quit a job that was draining them and partly because I realised somewhere along the way, I'd unintentionally unlearned something I once knew very well.</p>\n<p>That you can just do stuff.</p>"
  }
]
