"use client";

import Link from "next/link";

const posts = [
  {
    title: "Understanding Machine Learning Basics",
    category: "AI",
    preview: "A beginner-friendly guide to the fundamental concepts of machine learning and how they shape our digital world.",
    date: "Jun 29, 2026",
    likes: 142,
    comments: 23,
    views: 2100,
    slug: "ml-basics",
  },
  {
    title: "10 Productivity Hacks That Actually Work",
    category: "Lifestyle",
    preview: "After years of experimentation, here are the productivity techniques that have stood the test of time.",
    date: "Jun 27, 2026",
    likes: 98,
    comments: 15,
    views: 1800,
    slug: "productivity-hacks",
  },
  {
    title: "A Complete Guide to CSS Grid Layout",
    category: "Programming",
    preview: "Master CSS Grid with practical examples and real-world layouts that will transform your front-end workflow.",
    date: "Jun 24, 2026",
    likes: 215,
    comments: 31,
    views: 3200,
    slug: "css-grid-guide",
  },
  {
    title: "The Rise of Generative AI in Creative Work",
    category: "AI",
    preview: "How AI tools are reshaping creative industries and what it means for artists, writers, and designers.",
    date: "Jun 22, 2026",
    likes: 167,
    comments: 28,
    views: 2900,
    slug: "generative-ai-creative",
  },
  {
    title: "Capturing Magic: Street Photography Tips",
    category: "Photography",
    preview: "Learn how to capture compelling street photographs with just your smartphone and a keen eye.",
    date: "Jun 19, 2026",
    likes: 89,
    comments: 12,
    views: 1500,
    slug: "street-photography-tips",
  },
  {
    title: "Remote Work: Lessons from Two Years Abroad",
    category: "Personal",
    preview: "What I learned about work, life, and everything in between while working remotely from six different countries.",
    date: "Jun 16, 2026",
    likes: 134,
    comments: 19,
    views: 2400,
    slug: "remote-work-lessons",
  },
  {
    title: "The Art of Mindful Living in a Digital Age",
    category: "Lifestyle",
    preview: "Finding balance between technology and tranquility in our hyper-connected world.",
    date: "Jun 28, 2026",
    likes: 178,
    comments: 25,
    views: 2100,
    slug: "mindful-living-digital-age",
  },
  {
    title: "Building Scalable Web Apps with Next.js 16",
    category: "Programming",
    preview: "Exploring the latest features and best practices for modern web development.",
    date: "Jun 25, 2026",
    likes: 203,
    comments: 37,
    views: 2800,
    slug: "nextjs16-scalable-apps",
  },
  {
    title: "Wanderlust: A Journey Through Coastal Japan",
    category: "Travel",
    preview: "From Tokyo's neon streets to Kyoto's serene temples, a traveler's tale.",
    date: "Jun 20, 2026",
    likes: 156,
    comments: 21,
    views: 1900,
    slug: "coastal-japan-journey",
  },
];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-xl border-b border-gray-200">
        <div className="max-w-6xl mx-auto flex items-center justify-between px-5 sm:px-8 py-3">
          <Link href="/" className="text-2xl font-bold tracking-tight text-foreground">
            KK.
          </Link>
          <div className="hidden md:flex items-center gap-6 text-sm font-medium text-foreground/80">
            {["Home", "Blog", "Categories", "About", "Contact"].map((l) => (
              <Link key={l} href={l === "Home" ? "/" : `/${l.toLowerCase()}`} className="hover:text-foreground transition-colors tracking-wide">
                {l}
              </Link>
            ))}
          </div>
          <Link href="/" className="text-xs text-foreground/50 hover:text-foreground transition-colors">&larr; Back to Home</Link>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-5 sm:px-8 pt-28 pb-20">
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-foreground">All Posts</h1>
          <p className="text-sm text-foreground/60 mt-2">Explore all articles, stories, and guides.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="group bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-lg hover:bg-gray-50 hover:border-gray-300 hover:-translate-y-1.5 transition-all duration-300">
              <div className="h-36 bg-gradient-to-br from-accent/20 to-accent-light/10 flex items-center justify-center">
                <span className="text-3xl opacity-30 group-hover:opacity-50 transition-opacity">\uD83D\uDCF0</span>
              </div>
              <div className="p-5">
                <span className="inline-block px-2.5 py-0.5 text-[10px] font-bold tracking-wider bg-accent/20 text-accent rounded-full mb-2.5">{post.category}</span>
                <h3 className="text-sm font-bold text-foreground mb-1.5 line-clamp-2">{post.title}</h3>
                <p className="text-xs text-foreground/65 mb-3 line-clamp-2 leading-relaxed">{post.preview}</p>
                <div className="flex items-center justify-between text-[10px] text-foreground/40">
                  <div className="flex items-center gap-3">
                    <span className="flex items-center gap-1"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3H14z"/></svg>{post.likes}</span>
                    <span className="flex items-center gap-1"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>{post.comments}</span>
                    <span className="flex items-center gap-1"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>{post.views}</span>
                  </div>
                  <span className="text-accent group-hover:text-foreground transition-colors text-[10px] font-medium">Read More &rarr;</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>

      <footer className="bg-white border-t border-gray-200 py-6">
        <p className="text-center text-xs text-foreground/40">&copy; 2026 Iggy&rsquo;s Blog. All rights reserved.</p>
      </footer>
    </div>
  );
}
