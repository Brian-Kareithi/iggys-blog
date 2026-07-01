"use client";

import Link from "next/link";

const categories = [
  { name: "Technology", icon: "\uD83D\uDCBB", count: 24, desc: "Latest in tech, gadgets, and digital innovation." },
  { name: "Lifestyle", icon: "\uD83C\uDF3F", count: 18, desc: "Wellness, habits, and everyday living." },
  { name: "Programming", icon: "\uD83D\uDCD1", count: 31, desc: "Code, frameworks, and software development." },
  { name: "AI", icon: "\uD83E\uDD16", count: 15, desc: "Artificial intelligence and machine learning." },
  { name: "Photography", icon: "\uD83D\uDCF7", count: 12, desc: "Visual stories, tips, and gear reviews." },
  { name: "Travel", icon: "\u2708\uFE0F", count: 22, desc: "Destinations, cultures, and travel guides." },
  { name: "Business", icon: "\uD83D\uDCCA", count: 9, desc: "Startups, strategy, and entrepreneurship." },
  { name: "Personal", icon: "\uD83D\uDC64", count: 17, desc: "Reflections, stories, and personal growth." },
];

export default function CategoriesPage() {
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
          <h1 className="text-3xl sm:text-4xl font-bold text-foreground">Categories</h1>
          <p className="text-sm text-foreground/60 mt-2">Browse articles by topic.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat) => (
            <Link
              key={cat.name}
              href={`/categories/${cat.name.toLowerCase()}`}
              className="bg-white border border-gray-200 rounded-2xl p-6 text-center hover:bg-gray-50 hover:border-gray-300 hover:-translate-y-1.5 transition-all duration-300 shadow-lg group"
            >
              <span className="text-4xl inline-block mb-3">{cat.icon}</span>
              <h3 className="text-lg font-bold text-foreground">{cat.name}</h3>
              <p className="text-xs text-foreground/50 mt-1">{cat.count} posts</p>
              <p className="text-sm text-foreground/70 mt-2 line-clamp-2">{cat.desc}</p>
              <div className="mt-4 text-xs font-medium tracking-wide text-accent group-hover:text-foreground transition-colors">
                Explore &rarr;
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
