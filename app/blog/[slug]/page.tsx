"use client";

import { useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";

const contentSections = [
  { id: "introduction", title: "Introduction" },
  { id: "background", title: "Background & Context" },
  { id: "key-insights", title: "Key Insights" },
  { id: "practical-tips", title: "Practical Tips" },
  { id: "conclusion", title: "Conclusion" },
];

const relatedPosts = [
  { title: "10 Productivity Hacks That Actually Work", slug: "productivity-hacks", category: "Lifestyle" },
  { title: "The Art of Mindful Living in a Digital Age", slug: "mindful-living-digital-age", category: "Lifestyle" },
  { title: "Building Scalable Web Apps with Next.js 16", slug: "nextjs16-scalable-apps", category: "Programming" },
];

const comments = [
  { name: "Sarah Mitchell", date: "Jun 29, 2026", text: "This is exactly what I needed to read today. Thank you for sharing such valuable insights!", avatar: "SM" },
  { name: "James Chen", date: "Jun 28, 2026", text: "Great article! I would love to see a follow-up on this topic with more practical examples.", avatar: "JC" },
  { name: "Elena Rodriguez", date: "Jun 27, 2026", text: "I've been following your blog for months now and this is one of your best pieces yet. Keep it up!", avatar: "ER" },
];

export default function BlogPostPage() {
  const params = useParams();
  const [activeSection, setActiveSection] = useState("introduction");

  const title = String(params.slug).replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());

  return (
    <div className="min-h-screen bg-background text-foreground">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-xl border-b border-gray-200">
        <div className="max-w-4xl mx-auto flex items-center justify-between px-5 sm:px-8 py-3">
          <Link href="/" className="text-xl font-bold tracking-tight text-foreground">
            KK.
          </Link>
          <Link href="/blog" className="text-xs text-foreground/50 hover:text-foreground transition-colors">&larr; All Posts</Link>
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-5 sm:px-8 pt-24 pb-20">
        <div className="rounded-3xl overflow-hidden mb-8 shadow-lg">
          <div className="h-64 sm:h-80 bg-gradient-to-br from-accent/30 to-accent-light/20 flex items-center justify-center">
            <span className="text-6xl opacity-30">\uD83D\uDCDD</span>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 shadow-lg mb-8">
          <div className="flex flex-wrap items-center gap-3 text-xs text-foreground/50 mb-4">
            <span className="inline-block px-3 py-1 bg-accent/20 text-accent rounded-full font-bold tracking-wider">Technology</span>
            <span>June 29, 2026</span>
            <span>&middot;</span>
            <span>8 min read</span>
            <span>&middot;</span>
            <span>By KK.</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-6">{title}</h1>

          <div className="flex items-center gap-3 mb-8">
            <button className="flex items-center gap-2 px-4 py-2 bg-[#1DA1F2]/20 text-[#1DA1F2] text-xs font-medium rounded-lg hover:bg-[#1DA1F2]/30 transition-colors">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/></svg>
              Tweet
            </button>
            <button className="flex items-center gap-2 px-4 py-2 bg-[#1877F2]/20 text-[#1877F2] text-xs font-medium rounded-lg hover:bg-[#1877F2]/30 transition-colors">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              Share
            </button>
            <button className="flex items-center gap-2 px-4 py-2 bg-accent-light/50 text-foreground/70 text-xs font-medium rounded-lg hover:bg-accent-light transition-colors">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>
              Copy Link
            </button>
          </div>

          <div className="lg:grid lg:grid-cols-[200px_1fr] lg:gap-8">
            <div className="hidden lg:block">
              <div className="sticky top-24">
                <h4 className="text-xs font-bold tracking-wider text-foreground/50 uppercase mb-3">On this page</h4>
                <nav className="flex flex-col gap-1.5">
                  {contentSections.map((section) => (
                    <button
                      key={section.id}
                      onClick={() => setActiveSection(section.id)}
                      className={`text-left text-xs py-1 px-2 rounded-lg transition-colors ${
                        activeSection === section.id
                          ? "text-accent bg-accent/10 font-medium"
                          : "text-foreground/50 hover:text-foreground/80"
                      }`}
                    >
                      {section.title}
                    </button>
                  ))}
                </nav>
              </div>
            </div>

            <div>
              {contentSections.map((section) => (
                <div key={section.id} id={section.id} className="mb-8">
                  <h2 className="text-xl font-bold text-foreground mb-3">{section.title}</h2>
                  <p className="text-sm text-foreground/70 leading-relaxed mb-3">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                  <p className="text-sm text-foreground/70 leading-relaxed mb-3">
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                  </p>
                  <p className="text-sm text-foreground/70 leading-relaxed">
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mb-8">
          <h2 className="text-xl font-bold text-foreground mb-6">Related Posts</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {relatedPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="bg-white border border-gray-200 rounded-xl p-4 hover:bg-gray-50 hover:border-gray-300 hover:-translate-y-1 transition-all duration-300 shadow-lg"
              >
                <span className="inline-block px-2 py-0.5 text-[10px] font-bold bg-accent/20 text-accent rounded-full mb-2">{post.category}</span>
                <h3 className="text-sm font-bold text-foreground line-clamp-2">{post.title}</h3>
              </Link>
            ))}
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 shadow-lg">
          <h2 className="text-xl font-bold text-foreground mb-6">Comments</h2>

          <div className="space-y-5 mb-8">
            {comments.map((comment) => (
              <div key={comment.name} className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-accent/30 flex items-center justify-center text-accent text-xs font-bold shrink-0">
                  {comment.avatar}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-sm font-medium text-foreground">{comment.name}</span>
                    <span className="text-xs text-foreground/40">{comment.date}</span>
                  </div>
                  <p className="text-sm text-foreground/70 leading-relaxed">{comment.text}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="border-t border-gray-100 pt-6">
            <h3 className="text-base font-bold text-foreground mb-4">Leave a Comment</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <input type="text" placeholder="Your Name" className="px-4 py-3 rounded-xl bg-white border border-gray-200 text-foreground placeholder:text-foreground/40 text-sm focus:outline-none focus:border-accent transition-colors" />
              <input type="email" placeholder="Your Email" className="px-4 py-3 rounded-xl bg-white border border-gray-200 text-foreground placeholder:text-foreground/40 text-sm focus:outline-none focus:border-accent transition-colors" />
            </div>
            <textarea rows={3} placeholder="Your Comment" className="w-full px-4 py-3 rounded-xl bg-white border border-gray-200 text-foreground placeholder:text-foreground/40 text-sm focus:outline-none focus:border-accent transition-colors mb-4 resize-none" />
            <button className="px-8 py-3 bg-black text-white text-sm font-bold tracking-wider rounded-xl hover:bg-gray-900 transition-all shadow-lg">
              Post Comment
            </button>
          </div>
        </div>
      </main>

      <footer className="bg-white border-t border-gray-200 py-6">
        <p className="text-center text-xs text-foreground/40">&copy; 2026 Iggy&rsquo;s Blog. All rights reserved.</p>
      </footer>
    </div>
  );
}
