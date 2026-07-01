"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const allPosts = [
  { title: "Understanding Machine Learning Basics", category: "AI", slug: "ml-basics", date: "Jun 29, 2026", tags: ["AI", "Coding", "Programming"] },
  { title: "10 Productivity Hacks That Actually Work", category: "Lifestyle", slug: "productivity-hacks", date: "Jun 27, 2026", tags: ["Life", "Books"] },
  { title: "A Complete Guide to CSS Grid Layout", category: "Programming", slug: "css-grid-guide", date: "Jun 24, 2026", tags: ["Coding", "Programming", "Design"] },
  { title: "The Rise of Generative AI in Creative Work", category: "AI", slug: "generative-ai-creative", date: "Jun 22, 2026", tags: ["AI", "Coding"] },
  { title: "Capturing Magic: Street Photography Tips", category: "Photography", slug: "street-photography-tips", date: "Jun 19, 2026", tags: ["Travel", "Photography"] },
  { title: "Remote Work: Lessons from Two Years Abroad", category: "Personal", slug: "remote-work-lessons", date: "Jun 16, 2026", tags: ["Life", "Travel"] },
  { title: "The Art of Mindful Living in a Digital Age", category: "Lifestyle", slug: "mindful-living-digital-age", date: "Jun 28, 2026", tags: ["Life", "Books"] },
  { title: "Building Scalable Web Apps with Next.js 16", category: "Programming", slug: "nextjs16-scalable-apps", date: "Jun 25, 2026", tags: ["Coding", "Programming"] },
  { title: "Wanderlust: A Journey Through Coastal Japan", category: "Travel", slug: "coastal-japan-journey", date: "Jun 20, 2026", tags: ["Travel", "Photography"] },
];

const categories = ["All", "AI", "Lifestyle", "Programming", "Photography", "Travel", "Personal"];
const allTags = ["AI", "Coding", "Life", "Travel", "Books", "Coffee", "Programming", "Design"];

export default function SearchPage() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const [tag, setTag] = useState("All");
  const [date, setDate] = useState("");

  const filtered = allPosts.filter((post) => {
    const matchesQuery = post.title.toLowerCase().includes(query.toLowerCase());
    const matchesCategory = category === "All" || post.category === category;
    const matchesTag = tag === "All" || post.tags.includes(tag);
    const matchesDate = !date || post.date === date;
    return matchesQuery && matchesCategory && matchesTag && matchesDate;
  });

  return (
    <div className="min-h-screen bg-background text-foreground">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-xl border-b border-gray-200">
        <div className="max-w-6xl mx-auto flex items-center justify-between px-5 sm:px-8 py-3">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg overflow-hidden shrink-0">
              <Image src="https://ppkfgsakvcijmmhjwbcz.supabase.co/storage/v1/object/public/Photos/blog.jpg" alt="" width={32} height={32} className="object-cover h-full w-full" />
            </div>
            <span className="text-lg font-bold tracking-tight text-foreground">IGGY&rsquo;s Blog</span>
          </Link>
          <Link href="/" className="text-xs text-foreground/50 hover:text-foreground transition-colors">&larr; Back to Home</Link>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-5 sm:px-8 pt-28 pb-20">
        <div className="text-center mb-10">
          <h1 className="text-3xl sm:text-4xl font-bold text-foreground">Search</h1>
          <p className="text-sm text-foreground/60 mt-2">Find what you are looking for.</p>
        </div>

        <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-lg mb-8">
          <div className="flex flex-col sm:flex-row gap-4 mb-4">
            <div className="flex-1 relative">
              <svg className="absolute left-4 top-1/2 -translate-y-1/2 text-foreground/40" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" />
              </svg>
              <input
                type="text"
                placeholder="Search articles..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-xl bg-white border border-gray-200 text-foreground placeholder:text-foreground/40 text-sm focus:outline-none focus:border-accent transition-colors"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="px-4 py-2.5 rounded-xl bg-white border border-gray-200 text-foreground text-sm focus:outline-none focus:border-accent transition-colors appearance-none cursor-pointer"
            >
              {categories.map((c) => (
                <option key={c} value={c} className="bg-white">{c === "All" ? "All Categories" : c}</option>
              ))}
            </select>
            <select
              value={tag}
              onChange={(e) => setTag(e.target.value)}
              className="px-4 py-2.5 rounded-xl bg-white border border-gray-200 text-foreground text-sm focus:outline-none focus:border-accent transition-colors appearance-none cursor-pointer"
            >
              <option value="All" className="bg-white">All Tags</option>
              {allTags.map((t) => (
                <option key={t} value={t} className="bg-white">{t}</option>
              ))}
            </select>
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="px-4 py-2.5 rounded-xl bg-white border border-gray-200 text-foreground text-sm focus:outline-none focus:border-accent transition-colors"
            />
          </div>
        </div>

        {filtered.length === 0 ? (
          <div className="bg-white border border-gray-200 rounded-2xl p-10 text-center shadow-lg">
            <p className="text-foreground/60 text-sm">No results found. Try adjusting your search.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="group bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-lg hover:bg-gray-50 hover:border-gray-300 hover:-translate-y-1.5 transition-all duration-300">
                <div className="h-36 relative overflow-hidden">
                  <Image
                    src="https://ppkfgsakvcijmmhjwbcz.supabase.co/storage/v1/object/public/Photos/blog.jpg"
                    alt=""
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="p-5">
                  <span className="inline-block px-2.5 py-0.5 text-[10px] font-bold tracking-wider bg-accent/20 text-accent rounded-full mb-2.5">{post.category}</span>
                  <h3 className="text-sm font-bold text-foreground mb-1.5 line-clamp-2">{post.title}</h3>
                  <p className="text-xs text-foreground/40">{post.date}</p>
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
