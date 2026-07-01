"use client";

import Link from "next/link";
import { useParams } from "next/navigation";

const categoryPosts: Record<string, { title: string; slug: string; date: string; preview: string; likes: number; comments: number; views: number }[]> = {
  technology: [
    { title: "Building Scalable Web Apps with Next.js 16", slug: "nextjs16-scalable-apps", date: "Jun 25, 2026", preview: "Exploring the latest features and best practices for modern web development.", likes: 203, comments: 37, views: 2800 },
    { title: "The Rise of Generative AI in Creative Work", slug: "generative-ai-creative", date: "Jun 22, 2026", preview: "How AI tools are reshaping creative industries.", likes: 167, comments: 28, views: 2900 },
  ],
  lifestyle: [
    { title: "The Art of Mindful Living in a Digital Age", slug: "mindful-living-digital-age", date: "Jun 28, 2026", preview: "Finding balance between technology and tranquility.", likes: 178, comments: 25, views: 2100 },
    { title: "10 Productivity Hacks That Actually Work", slug: "productivity-hacks", date: "Jun 27, 2026", preview: "Productivity techniques that have stood the test of time.", likes: 98, comments: 15, views: 1800 },
  ],
  programming: [
    { title: "A Complete Guide to CSS Grid Layout", slug: "css-grid-guide", date: "Jun 24, 2026", preview: "Master CSS Grid with practical examples.", likes: 215, comments: 31, views: 3200 },
    { title: "Building Scalable Web Apps with Next.js 16", slug: "nextjs16-scalable-apps", date: "Jun 25, 2026", preview: "Exploring the latest features and best practices.", likes: 203, comments: 37, views: 2800 },
  ],
  ai: [
    { title: "Understanding Machine Learning Basics", slug: "ml-basics", date: "Jun 29, 2026", preview: "A beginner-friendly guide to machine learning concepts.", likes: 142, comments: 23, views: 2100 },
    { title: "The Rise of Generative AI in Creative Work", slug: "generative-ai-creative", date: "Jun 22, 2026", preview: "How AI tools are reshaping creative industries.", likes: 167, comments: 28, views: 2900 },
  ],
  photography: [
    { title: "Capturing Magic: Street Photography Tips", slug: "street-photography-tips", date: "Jun 19, 2026", preview: "Capture compelling street photographs with just your smartphone.", likes: 89, comments: 12, views: 1500 },
  ],
  travel: [
    { title: "Wanderlust: A Journey Through Coastal Japan", slug: "coastal-japan-journey", date: "Jun 20, 2026", preview: "From Tokyo to Kyoto, a traveler's tale.", likes: 156, comments: 21, views: 1900 },
    { title: "Remote Work: Lessons from Two Years Abroad", slug: "remote-work-lessons", date: "Jun 16, 2026", preview: "Working remotely from six different countries.", likes: 134, comments: 19, views: 2400 },
  ],
  business: [
    { title: "Remote Work: Lessons from Two Years Abroad", slug: "remote-work-lessons", date: "Jun 16, 2026", preview: "Lessons about work and life from remote work.", likes: 134, comments: 19, views: 2400 },
  ],
  personal: [
    { title: "Remote Work: Lessons from Two Years Abroad", slug: "remote-work-lessons", date: "Jun 16, 2026", preview: "What I learned about work, life, and everything in between.", likes: 134, comments: 19, views: 2400 },
    { title: "The Art of Mindful Living in a Digital Age", slug: "mindful-living-digital-age", date: "Jun 28, 2026", preview: "Finding balance between technology and tranquility.", likes: 178, comments: 25, views: 2100 },
  ],
};

export default function CategoryPage() {
  const params = useParams();
  const slug = String(params.slug);
  const categoryName = slug.charAt(0).toUpperCase() + slug.slice(1);
  const posts = categoryPosts[slug] || [];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-xl border-b border-gray-200">
        <div className="max-w-6xl mx-auto flex items-center justify-between px-5 sm:px-8 py-3">
          <Link href="/" className="text-2xl font-bold tracking-tight text-foreground">
            KK.
          </Link>
          <Link href="/categories" className="text-xs text-foreground/50 hover:text-foreground transition-colors">&larr; All Categories</Link>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-5 sm:px-8 pt-28 pb-20">
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-foreground">{categoryName}</h1>
          <p className="text-sm text-foreground/60 mt-2">{posts.length} posts in this category</p>
        </div>

        {posts.length === 0 ? (
          <div className="bg-white border border-gray-200 rounded-2xl p-10 text-center shadow-lg">
            <p className="text-foreground/60 text-sm">No posts in this category yet.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="group bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-lg hover:bg-gray-50 hover:border-gray-300 hover:-translate-y-1.5 transition-all duration-300">
                <div className="h-36 bg-gradient-to-br from-accent/20 to-accent-light/10 flex items-center justify-center">
                  <span className="text-3xl opacity-30 group-hover:opacity-50 transition-opacity">\uD83D\uDCDD</span>
                </div>
                <div className="p-5">
                  <span className="inline-block px-2.5 py-0.5 text-[10px] font-bold tracking-wider bg-accent/20 text-accent rounded-full mb-2.5">{categoryName}</span>
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
        )}
      </main>

      <footer className="bg-white border-t border-gray-200 py-6">
        <p className="text-center text-xs text-foreground/40">&copy; 2026 Iggy&rsquo;s Blog. All rights reserved.</p>
      </footer>
    </div>
  );
}
