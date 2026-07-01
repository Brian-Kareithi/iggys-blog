"use client";

import Link from "next/link";
import Image from "next/image";

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
    <div className="relative min-h-screen bg-background text-foreground">
      <div className="fixed inset-0">
        <Image
          src="https://ppkfgsakvcijmmhjwbcz.supabase.co/storage/v1/object/public/Photos/blog.jpg"
          alt=""
          fill
          className="object-cover scale-110 blur-[2px]"
          priority
        />
        <div className="absolute inset-0 bg-black/20" />
      </div>

      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-white/10 border-b border-white/20">
        <div className="max-w-6xl mx-auto flex items-center justify-between px-5 sm:px-8 py-3">
          <Link href="/" className="text-2xl font-bold tracking-tight text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">
            KK.
          </Link>
          <div className="hidden md:flex items-center gap-6 text-sm font-medium text-white/80">
            {["Home", "Blog", "Categories", "About", "Contact"].map((l) => (
              <Link key={l} href={l === "Home" ? "/" : `/${l.toLowerCase()}`} className="hover:text-white transition-colors tracking-wide">
                {l}
              </Link>
            ))}
          </div>
          <Link href="/" className="text-xs text-white/50 hover:text-white transition-colors">&larr; Back to Home</Link>
        </div>
      </nav>

      <main className="relative z-20 max-w-6xl mx-auto px-5 sm:px-8 pt-28 pb-20">
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-white drop-shadow-[0_2px_6px_rgba(0,0,0,0.5)]">Categories</h1>
          <p className="text-sm text-white/60 mt-2">Browse articles by topic.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat) => (
            <Link
              key={cat.name}
              href={`/categories/${cat.name.toLowerCase()}`}
              className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-6 text-center hover:bg-white/20 hover:border-white/40 hover:-translate-y-1.5 transition-all duration-300 shadow-xl group"
            >
              <span className="text-4xl inline-block mb-3">{cat.icon}</span>
              <h3 className="text-lg font-bold text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.3)]">{cat.name}</h3>
              <p className="text-xs text-white/50 mt-1">{cat.count} posts</p>
              <p className="text-sm text-white/70 mt-2 line-clamp-2">{cat.desc}</p>
              <div className="mt-4 text-xs font-medium tracking-wide text-accent group-hover:text-white transition-colors">
                Explore &rarr;
              </div>
            </Link>
          ))}
        </div>
      </main>

      <footer className="relative z-20 backdrop-blur-xl bg-white/10 border-t border-white/20 py-6">
        <p className="text-center text-xs text-white/40">&copy; 2026 Iggy&rsquo;s Blog. All rights reserved.</p>
      </footer>
    </div>
  );
}
