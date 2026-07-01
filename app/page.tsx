"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Blog", href: "/blog" },
  { label: "Categories", href: "/categories" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const categories = [
  { name: "Technology", icon: "\uD83D\uDCBB", count: 24 },
  { name: "Lifestyle", icon: "\uD83C\uDF3F", count: 18 },
  { name: "Programming", icon: "\uD83D\uDCD1", count: 31 },
  { name: "AI", icon: "\uD83E\uDD16", count: 15 },
  { name: "Photography", icon: "\uD83D\uDCF7", count: 12 },
  { name: "Travel", icon: "\u2708\uFE0F", count: 22 },
  { name: "Business", icon: "\uD83D\uDCCA", count: 9 },
  { name: "Personal", icon: "\uD83D\uDC64", count: 17 },
];

const featuredPosts = [
  {
    title: "The Art of Mindful Living in a Digital Age",
    category: "Lifestyle",
    description: "Finding balance between technology and tranquility in our hyper-connected world.",
    readingTime: "8 min read",
    date: "June 28, 2026",
    author: "KK.",
  },
  {
    title: "Building Scalable Web Apps with Next.js 16",
    category: "Programming",
    description: "Exploring the latest features and best practices for modern web development.",
    readingTime: "12 min read",
    date: "June 25, 2026",
    author: "KK.",
  },
  {
    title: "Wanderlust: A Journey Through Coastal Japan",
    category: "Travel",
    description: "From Tokyo's neon streets to Kyoto's serene temples, a traveler's tale.",
    readingTime: "10 min read",
    date: "June 20, 2026",
    author: "KK.",
  },
];

const latestPosts = [
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
];

const popularPosts = [
  { title: "Understanding Machine Learning Basics", views: 3200 },
  { title: "A Complete Guide to CSS Grid Layout", views: 2800 },
  { title: "The Rise of Generative AI in Creative Work", views: 2400 },
  { title: "The Art of Mindful Living in a Digital Age", views: 2100 },
  { title: "Building Scalable Web Apps with Next.js 16", views: 1900 },
];

const tags = ["AI", "Coding", "Life", "Travel", "Books", "Coffee", "Programming", "Design"];

const testimonials = [
  { quote: "KK's writing has a rare quality that makes complex topics feel accessible and enjoyable. I look forward to every new post.", name: "Sarah Mitchell", title: "Software Engineer, Google" },
  { quote: "This blog changed how I think about technology. The perspective is always fresh and deeply insightful.", name: "James Chen", title: "Product Designer, Apple" },
  { quote: "I've been reading KK's blog for over a year. The consistency and quality of content is truly remarkable.", name: "Elena Rodriguez", title: "Content Strategist, Netflix" },
];

const footerLinks = { quick: ["Home", "Blog", "Categories", "About", "Contact"], social: ["Twitter", "GitHub", "LinkedIn", "Instagram"] };

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [carouselIndex, setCarouselIndex] = useState(0);

  const carouselImages = [
    { src: "https://images.unsplash.com/photo-1506744038136-46273834b3fb", alt: "Mountain landscape" },
    { src: "https://images.unsplash.com/photo-1501785888041-af3ef285b470", alt: "Lake at sunset" },
    { src: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05", alt: "Forest path" },
    { src: "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d", alt: "Misty forest" },
    { src: "https://images.unsplash.com/photo-1469474968028-56623f02e42e", alt: "Mountain sunrise" },
  ];

  return (
    <div className={`relative min-h-screen ${darkMode ? "bg-[#1A1A1A]" : "bg-background"} text-foreground overflow-x-hidden`}>
      <nav className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-xl transition-all duration-300 ${darkMode ? "bg-[#1A1A1A]/80 border-b border-white/5" : "bg-white/10 border-b border-white/20"}`}>
        <div className="max-w-6xl mx-auto flex items-center justify-between px-5 sm:px-8 py-4">
          <Link href="/" className="text-2xl font-bold tracking-tight text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">
            KK.
          </Link>

          <div className="hidden md:flex items-center gap-7 text-sm font-medium text-white/80">
            {navLinks.map((link) => (
              <Link key={link.label} href={link.href} className="hover:text-white transition-colors tracking-wide relative group">
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <Link href="/search" className="w-9 h-9 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white/70 hover:text-white hover:bg-white/20 transition-all">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" />
              </svg>
            </Link>
            <button onClick={() => setDarkMode(!darkMode)} className="w-9 h-9 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white/70 hover:text-white hover:bg-white/20 transition-all">
              {darkMode ? (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="5" /><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
                </svg>
              ) : (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                </svg>
              )}
            </button>
            <Link href="/blog" className="hidden sm:inline-flex px-5 py-2.5 bg-black text-white text-xs font-bold tracking-wider rounded-xl hover:bg-gray-900 transition-all shadow-lg border border-white/10">
              Subscribe
            </Link>

            {/* Mobile hamburger */}
            <button onClick={() => setMobileOpen(!mobileOpen)} className="md:hidden w-9 h-9 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white/70 hover:text-white transition-all">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                {mobileOpen ? <><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></> : <><line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="18" x2="21" y2="18" /></>}
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile sidebar */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 md:hidden" onClick={() => setMobileOpen(false)}>
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
          <aside className="absolute right-0 top-0 h-full w-64 backdrop-blur-2xl bg-white/10 border-l border-white/20 p-6 pt-20" onClick={(e) => e.stopPropagation()}>
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link key={link.label} href={link.href} onClick={() => setMobileOpen(false)} className="px-4 py-3 rounded-xl text-white/80 hover:bg-white/10 hover:text-white transition-all text-sm font-medium">
                  {link.label}
                </Link>
              ))}
            </div>
          </aside>
        </div>
      )}

      {/* Massive full-screen hero */}
      <section className="relative z-20 w-full h-screen flex items-center justify-center">
        <Image
          src="https://ppkfgsakvcijmmhjwbcz.supabase.co/storage/v1/object/public/Photos/blog.jpg"
          alt="Hero"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />
        <div className="relative z-10 text-center px-5 max-w-4xl mx-auto -mt-16">
          <div className="inline-block px-4 py-1.5 backdrop-blur-xl bg-white/10 border border-white/20 rounded-full text-xs text-white/80 font-medium tracking-wider mb-6">
            Welcome to Iggy&rsquo;s Blog
          </div>
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-4 drop-shadow-2xl tracking-tight leading-none">
            Thoughts Worth Sharing.
          </h1>
          <p className="text-lg sm:text-2xl text-white/85 max-w-2xl mx-auto font-serif italic drop-shadow-lg">
            Stories Worth Remembering.
          </p>
          <p className="text-sm sm:text-base text-white/60 max-w-xl mx-auto mt-4 leading-relaxed">
            A place where ideas, experiences, technology, travel, and life come together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-8 justify-center">
            <Link href="/blog" className="px-8 py-3.5 bg-white text-black text-sm font-bold tracking-wider rounded-xl hover:bg-gray-100 transition-all shadow-2xl hover:-translate-y-0.5">
              Read Latest Articles
            </Link>
            <Link href="/categories" className="px-8 py-3.5 backdrop-blur-xl bg-white/15 border border-white/30 text-white text-sm font-bold tracking-wider rounded-xl hover:bg-white/25 transition-all shadow-2xl hover:-translate-y-0.5">
              Explore Categories
            </Link>
          </div>
          <div className="flex items-center justify-center gap-8 mt-10 text-white/40 text-xs font-medium">
            <span className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-accent" /> 48+ Articles</span>
            <span className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-accent" /> 12 Categories</span>
            <span className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-accent" /> 800+ Readers</span>
          </div>
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="opacity-40"><polyline points="6 9 12 15 18 9" /></svg>
          </div>
        </div>
      </section>

      <main className="relative z-20 max-w-6xl mx-auto px-5 sm:px-8 pb-20 pt-20">

        <section className="mb-20">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-xl sm:text-2xl font-bold text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.4)]">Featured Posts</h2>
            <Link href="/blog" className="text-sm text-accent hover:text-white transition-colors font-medium">View All &rarr;</Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredPosts.map((post) => (
              <div key={post.title} className="group backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl overflow-hidden shadow-xl hover:bg-white/15 hover:border-white/30 hover:-translate-y-1 transition-all duration-300">
                <div className="h-44 bg-gradient-to-br from-accent/30 to-accent-light/20 flex items-center justify-center">
                  <span className="text-4xl opacity-40 group-hover:opacity-60 transition-opacity">\uD83D\uDCDD</span>
                </div>
                <div className="p-5">
                  <span className="inline-block px-3 py-1 text-[10px] font-bold tracking-wider bg-accent/20 text-accent rounded-full mb-3">{post.category}</span>
                  <h3 className="text-base font-bold text-white mb-2 line-clamp-2 drop-shadow-[0_1px_2px_rgba(0,0,0,0.3)]">{post.title}</h3>
                  <p className="text-sm text-white/70 mb-4 line-clamp-2">{post.description}</p>
                  <div className="flex items-center justify-between text-xs text-white/50">
                    <span>{post.readingTime}</span>
                    <span>{post.date}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-20">
          <h2 className="text-xl sm:text-2xl font-bold text-white mb-8 drop-shadow-[0_2px_4px_rgba(0,0,0,0.4)]">Categories</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {categories.map((cat) => (
              <Link
                key={cat.name}
                href={`/categories/${cat.name.toLowerCase()}`}
                className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-xl p-5 text-center hover:bg-white/20 hover:border-white/40 hover:-translate-y-1 transition-all duration-300 shadow-lg"
              >
                <span className="text-2xl">{cat.icon}</span>
                <h3 className="text-sm font-bold text-white mt-2 drop-shadow-[0_1px_2px_rgba(0,0,0,0.3)]">{cat.name}</h3>
                <p className="text-xs text-accent mt-1">{cat.count} posts</p>
              </Link>
            ))}
          </div>
        </section>

        <section className="mb-20">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-xl sm:text-2xl font-bold text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.4)]">Latest Posts</h2>
            <Link href="/blog" className="text-sm text-accent hover:text-white transition-colors font-medium">View All &rarr;</Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {latestPosts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="group backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl overflow-hidden shadow-xl hover:bg-white/15 hover:border-white/30 hover:-translate-y-1.5 transition-all duration-300">
                <div className="h-36 bg-gradient-to-br from-accent/20 to-accent-light/10 flex items-center justify-center">
                  <span className="text-3xl opacity-30 group-hover:opacity-50 transition-opacity">\uD83D\uDCF0</span>
                </div>
                <div className="p-5">
                  <span className="inline-block px-2.5 py-0.5 text-[10px] font-bold tracking-wider bg-accent/20 text-accent rounded-full mb-2.5">{post.category}</span>
                  <h3 className="text-sm font-bold text-white mb-1.5 line-clamp-2 drop-shadow-[0_1px_2px_rgba(0,0,0,0.3)]">{post.title}</h3>
                  <p className="text-xs text-white/65 mb-3 line-clamp-2 leading-relaxed">{post.preview}</p>
                  <div className="flex items-center justify-between text-[10px] text-white/40">
                    <div className="flex items-center gap-3">
                      <span className="flex items-center gap-1"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3H14z"/></svg>{post.likes}</span>
                      <span className="flex items-center gap-1"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>{post.comments}</span>
                      <span className="flex items-center gap-1"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>{post.views}</span>
                    </div>
                    <span className="text-accent group-hover:text-white transition-colors text-[10px] font-medium">Read More &rarr;</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section className="mb-20">
          <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-8 sm:p-12 text-center shadow-2xl max-w-2xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2 drop-shadow-[0_2px_4px_rgba(0,0,0,0.4)]">Stay Inspired</h2>
            <p className="text-sm text-white/70 mb-6 max-w-md mx-auto">Subscribe to get the latest posts delivered straight to your inbox.</p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
              <input type="email" placeholder="Enter your email" className="flex-1 px-5 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-white/40 text-sm focus:outline-none focus:border-accent transition-colors" />
              <button className="px-7 py-3 bg-black text-white text-sm font-bold tracking-wider rounded-xl hover:bg-gray-900 transition-all shadow-lg">
                Subscribe
              </button>
            </div>
          </div>
        </section>

        <section className="mb-20">
          <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-8 sm:p-12 flex flex-col sm:flex-row items-center gap-8 shadow-2xl">
            <div className="w-28 h-28 rounded-full bg-gradient-to-br from-accent/40 to-accent-light/20 border-2 border-white/30 flex items-center justify-center shrink-0">
              <span className="text-4xl">\uD83D\uDC64</span>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.4)]">Hi, I&rsquo;m KK.</h2>
              <p className="text-sm text-white/70 mt-2 max-w-lg leading-relaxed">I write about technology, creativity, productivity and everyday experiences. Welcome to my little corner of the internet.</p>
              <Link href="/about" className="inline-block mt-4 text-sm text-accent hover:text-white transition-colors font-medium">Learn More &rarr;</Link>
            </div>
          </div>
        </section>

        {/* Image gallery carousel */}
        <section className="mb-20">
          <h2 className="text-xl sm:text-2xl font-bold text-white mb-8 drop-shadow-[0_2px_4px_rgba(0,0,0,0.4)]">Photo Gallery</h2>
          <div className="overflow-hidden">
            <div
              className="flex gap-4 transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${carouselIndex * 320}px)` }}
            >
              {carouselImages.map((img, i) => (
                <div key={i} className="relative w-72 h-56 shrink-0 rounded-2xl overflow-hidden shadow-xl group cursor-pointer">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    sizes="288px"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-end p-4">
                    <p className="text-white text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0">{img.alt}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex items-center justify-center gap-3 mt-6">
            <button onClick={() => setCarouselIndex(Math.max(0, carouselIndex - 1))} disabled={carouselIndex === 0} className="w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white/70 hover:bg-white/20 disabled:opacity-30 disabled:cursor-not-allowed transition-all">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6" /></svg>
            </button>
            <div className="flex gap-2">
              {carouselImages.map((_, i) => (
                <button key={i} onClick={() => setCarouselIndex(i)} className={`w-2 h-2 rounded-full transition-all duration-300 ${i === carouselIndex ? "bg-accent w-6" : "bg-white/30 hover:bg-white/50"}`} />
              ))}
            </div>
            <button onClick={() => setCarouselIndex(Math.min(carouselImages.length - 3, carouselIndex + 1))} disabled={carouselIndex >= carouselImages.length - 3} className="w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white/70 hover:bg-white/20 disabled:opacity-30 disabled:cursor-not-allowed transition-all">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6" /></svg>
            </button>
          </div>
        </section>

        <section className="mb-20">
          <h2 className="text-xl sm:text-2xl font-bold text-white mb-8 drop-shadow-[0_2px_4px_rgba(0,0,0,0.4)]">Popular Posts</h2>
          <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl divide-y divide-white/10 overflow-hidden shadow-xl">
            {popularPosts.map((post, i) => (
              <Link key={post.title} href={`/blog/${post.title.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '')}`} className="flex items-center px-6 py-4 hover:bg-white/10 transition-colors">
                <span className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white/40 text-sm font-bold shrink-0">{i + 1}</span>
                <div className="ml-4 flex-1 min-w-0">
                  <p className="text-sm font-medium text-white truncate drop-shadow-[0_1px_2px_rgba(0,0,0,0.3)]">{post.title}</p>
                </div>
                <span className="text-xs text-white/40 shrink-0 ml-3">{post.views.toLocaleString()} views</span>
              </Link>
            ))}
          </div>
        </section>

        <section className="mb-20">
          <h2 className="text-xl sm:text-2xl font-bold text-white mb-6 drop-shadow-[0_2px_4px_rgba(0,0,0,0.4)]">Tags</h2>
          <div className="flex flex-wrap gap-3">
            {tags.map((tag) => (
              <Link
                key={tag}
                href={`/search?tag=${tag.toLowerCase()}`}
                className="px-4 py-2 backdrop-blur-xl bg-white/10 border border-white/20 rounded-full text-sm text-white/70 hover:bg-white/20 hover:text-white hover:border-white/40 transition-all"
              >
                #{tag}
              </Link>
            ))}
          </div>
        </section>

        <section className="mb-20">
          <h2 className="text-xl sm:text-2xl font-bold text-white mb-8 drop-shadow-[0_2px_4px_rgba(0,0,0,0.4)]">What Readers Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div key={t.name} className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-6 shadow-xl hover:bg-white/15 hover:border-white/30 transition-all duration-300">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="#7B8C6E" className="mb-4 opacity-50"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" /></svg>
                <p className="text-sm text-white/80 mb-4 leading-relaxed italic">{t.quote}</p>
                <div>
                  <p className="text-sm font-bold text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.3)]">{t.name}</p>
                  <p className="text-xs text-accent">{t.title}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-20" id="contact">
          <h2 className="text-xl sm:text-2xl font-bold text-white mb-8 drop-shadow-[0_2px_4px_rgba(0,0,0,0.4)]">Get in Touch</h2>
          <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-6 sm:p-8 shadow-xl max-w-2xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <input type="text" placeholder="Your Name" className="px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-white/40 text-sm focus:outline-none focus:border-accent transition-colors" />
              <input type="email" placeholder="Your Email" className="px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-white/40 text-sm focus:outline-none focus:border-accent transition-colors" />
            </div>
            <textarea rows={4} placeholder="Your Message" className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-white/40 text-sm focus:outline-none focus:border-accent transition-colors mb-4 resize-none" />
            <button className="px-8 py-3 bg-black text-white text-sm font-bold tracking-wider rounded-xl hover:bg-gray-900 transition-all shadow-lg">
              Send Message
            </button>
          </div>
        </section>
      </main>

      <footer className="relative z-20 backdrop-blur-xl bg-white/10 border-t border-white/20">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 py-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
            <div>
              <Link href="/" className="text-2xl font-bold text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">KK.</Link>
              <p className="text-xs text-white/50 mt-2 max-w-xs">Thoughts, stories, and ideas worth sharing. A personal blog about technology, creativity, and everyday life.</p>
            </div>
            <div>
              <h4 className="text-xs font-bold tracking-wider text-white/60 uppercase mb-4">Quick Links</h4>
              <div className="flex flex-col gap-2">
                {footerLinks.quick.map((link) => (
                  <Link key={link} href={link === "Home" ? "/" : `/${link.toLowerCase()}`} className="text-sm text-white/60 hover:text-white transition-colors">{link}</Link>
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-xs font-bold tracking-wider text-white/60 uppercase mb-4">Social</h4>
              <div className="flex gap-3">
                {footerLinks.social.map((s) => (
                  <Link key={s} href="#" className="w-9 h-9 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white/60 hover:bg-white/20 hover:text-white hover:border-white/40 transition-all text-xs font-medium">{s[0]}</Link>
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-xs font-bold tracking-wider text-white/60 uppercase mb-4">Newsletter</h4>
              <p className="text-xs text-white/50 mb-3">Get the latest posts delivered to your inbox.</p>
              <div className="flex gap-2">
                <input type="email" placeholder="your@email.com" className="flex-1 px-3 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-white/30 text-xs focus:outline-none focus:border-accent transition-colors" />
                <button className="px-4 py-2 bg-black text-white text-xs font-bold rounded-lg hover:bg-gray-900 transition-all">Go</button>
              </div>
            </div>
          </div>
          <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-white/40">&copy; 2026 Iggy&rsquo;s Blog. All rights reserved.</p>
            <div className="flex gap-4 text-xs text-white/40">
              <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
              <Link href="#" className="hover:text-white transition-colors">Terms</Link>
              <Link href="/contact" className="hover:text-white transition-colors">Contact</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
