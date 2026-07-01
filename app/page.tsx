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
  { name: "Technology", count: 24 },
  { name: "Lifestyle", count: 18 },
  { name: "Programming", count: 31 },
  { name: "AI", count: 15 },
  { name: "Photography", count: 12 },
  { name: "Travel", count: 22 },
  { name: "Business", count: 9 },
  { name: "Personal", count: 17 },
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
      <nav className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-xl transition-all duration-300 ${darkMode ? "bg-[#1A1A1A]/90 border-b border-white/10" : "bg-white/90 border-b border-gray-200"}`}>
        <div className="max-w-6xl mx-auto flex items-center justify-between px-5 sm:px-8 py-4">
          <Link href="/" className="flex items-center gap-2">
            <div className={`w-8 h-8 rounded-lg overflow-hidden shrink-0 ${darkMode ? "ring-1 ring-white/20" : ""}`}>
              <Image src="https://ppkfgsakvcijmmhjwbcz.supabase.co/storage/v1/object/public/Photos/blog.jpg" alt="" width={32} height={32} className="object-cover h-full w-full" />
            </div>
            <span className={`text-lg font-bold tracking-tight ${darkMode ? "text-white" : "text-foreground"}`}>IGGY&rsquo;s Blog</span>
          </Link>

          <div className={`hidden md:flex items-center gap-7 text-sm font-medium ${darkMode ? "text-white/80" : "text-foreground/80"}`}>
            {navLinks.map((link) => (
              <Link key={link.label} href={link.href} className={`hover:${darkMode ? "text-white" : "text-foreground"} transition-colors tracking-wide relative group`}>
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <Link href="/search" className={`w-9 h-9 rounded-full border flex items-center justify-center transition-all ${darkMode ? "bg-white/10 border-white/20 text-white/70 hover:text-white hover:bg-white/20" : "bg-accent-light/50 border-gray-200 text-foreground/60 hover:text-foreground hover:bg-accent-light"}`}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" />
              </svg>
            </Link>
            <button onClick={() => setDarkMode(!darkMode)} className={`w-9 h-9 rounded-full border flex items-center justify-center transition-all ${darkMode ? "bg-white/10 border-white/20 text-white/70 hover:text-white hover:bg-white/20" : "bg-accent-light/50 border-gray-200 text-foreground/60 hover:text-foreground hover:bg-accent-light"}`}>
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
            <Link href="/blog" className="hidden sm:inline-flex px-5 py-2.5 bg-black text-white text-xs font-bold tracking-wider rounded-xl hover:bg-gray-900 transition-all shadow-lg">
              Subscribe
            </Link>

            {/* Mobile hamburger */}
            <button onClick={() => setMobileOpen(!mobileOpen)} className={`md:hidden w-9 h-9 rounded-full border flex items-center justify-center transition-all ${darkMode ? "bg-white/10 border-white/20 text-white/70 hover:text-white" : "bg-accent-light/50 border-gray-200 text-foreground/60 hover:text-foreground"}`}>
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
          <div className="absolute inset-0 bg-black/50" />
          <aside className={`absolute right-0 top-0 h-full w-64 p-6 pt-20 ${darkMode ? "bg-[#1A1A1A]/95 border-l border-white/10" : "bg-white border-l border-gray-200"}`} onClick={(e) => e.stopPropagation()}>
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link key={link.label} href={link.href} onClick={() => setMobileOpen(false)} className={`px-4 py-3 rounded-xl transition-all text-sm font-medium ${darkMode ? "text-white/80 hover:bg-white/10 hover:text-white" : "text-foreground/80 hover:bg-accent-light hover:text-foreground"}`}>
                  {link.label}
                </Link>
              ))}
            </div>
          </aside>
        </div>
      )}

      {/* Hero section: solid bg with image on the side */}
      <section className={`relative z-20 w-full min-h-screen flex items-center ${darkMode ? "bg-[#1A1A1A]" : "bg-background"}`}>
        <div className="max-w-6xl mx-auto px-5 sm:px-8 w-full py-28 sm:py-32">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            {/* Left: Text content */}
            <div className="flex-1 text-center lg:text-left">
              <div className={`inline-block px-4 py-1.5 rounded-full text-xs font-medium tracking-wider mb-6 ${darkMode ? "bg-white/10 text-white/80" : "bg-accent-light text-foreground/70"}`}>
                Welcome to Iggy&rsquo;s Blog
              </div>
              <h1 className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 tracking-tight leading-none ${darkMode ? "text-white" : "text-foreground"}`}>
                Thoughts Worth <span className="text-accent">Sharing.</span>
              </h1>
              <p className={`text-lg sm:text-xl max-w-xl font-serif italic mb-4 ${darkMode ? "text-white/80" : "text-foreground/70"}`}>
                Stories Worth Remembering.
              </p>
              <p className={`text-sm sm:text-base max-w-lg leading-relaxed mb-8 ${darkMode ? "text-white/50" : "text-foreground/50"}`}>
                A place where ideas, experiences, technology, travel, and life come together.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/blog" className="px-8 py-3.5 bg-black text-white text-sm font-bold tracking-wider rounded-xl hover:bg-gray-900 transition-all shadow-lg hover:-translate-y-0.5 text-center">
                  Read Latest Articles
                </Link>
                <Link href="/categories" className={`px-8 py-3.5 text-sm font-bold tracking-wider rounded-xl border transition-all hover:-translate-y-0.5 text-center ${darkMode ? "border-white/30 text-white hover:bg-white/10" : "border-gray-300 text-foreground hover:bg-accent-light"}`}>
                  Explore Categories
                </Link>
              </div>
              <div className={`flex items-center gap-8 mt-10 text-xs font-medium ${darkMode ? "text-white/40" : "text-foreground/40"}`}>
                <span className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-accent" /> 48+ Articles</span>
                <span className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-accent" /> 12 Categories</span>
                <span className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-accent" /> 800+ Readers</span>
              </div>
            </div>

            {/* Right: Image aesthetically positioned */}
            <div className="flex-1 relative w-full max-w-lg lg:max-w-none">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="https://ppkfgsakvcijmmhjwbcz.supabase.co/storage/v1/object/public/Photos/blog.jpg"
                  alt="Hero"
                  width={600}
                  height={750}
                  className="w-full h-auto object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-accent/20 to-transparent" />
              </div>
              <div className={`absolute -bottom-4 -right-4 w-24 h-24 rounded-2xl flex items-center justify-center shadow-xl ${darkMode ? "bg-[#1A1A1A] border border-white/10" : "bg-white border border-gray-200"}`}>
                <div className="text-center">
                  <p className="text-2xl font-bold text-accent">5</p>
                  <p className="text-[9px] text-foreground/50 tracking-wider uppercase">Years</p>
                </div>
              </div>
              <div className={`absolute -top-4 -left-4 w-16 h-16 rounded-full flex items-center justify-center shadow-lg ${darkMode ? "bg-[#1A1A1A] border border-white/10" : "bg-white border border-gray-200"}`}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 2L11 13"/><path d="M22 2l-7 20-4-9-9-4 20-7z"/></svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      <main className="relative z-20 max-w-6xl mx-auto px-5 sm:px-8 pb-20 pt-20">

        <section className="mb-20">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-xl sm:text-2xl font-bold text-foreground">Featured Posts</h2>
            <Link href="/blog" className="text-sm text-accent hover:text-foreground transition-colors font-medium">View All &rarr;</Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredPosts.map((post) => (
              <div key={post.title} className="group bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300">
                <div className="h-44 relative overflow-hidden">
                  <Image
                    src="https://ppkfgsakvcijmmhjwbcz.supabase.co/storage/v1/object/public/Photos/blog.jpg"
                    alt=""
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="p-5">
                  <span className="inline-block px-3 py-1 text-[10px] font-bold tracking-wider bg-accent/10 text-accent rounded-full mb-3">{post.category}</span>
                  <h3 className="text-base font-bold text-foreground mb-2 line-clamp-2">{post.title}</h3>
                  <p className="text-sm text-foreground/60 mb-4 line-clamp-2">{post.description}</p>
                  <div className="flex items-center justify-between text-xs text-foreground/40">
                    <span>{post.readingTime}</span>
                    <span>{post.date}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-20">
          <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-8">Categories</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {categories.map((cat) => (
              <Link
                key={cat.name}
                href={`/categories/${cat.name.toLowerCase()}`}
                className="bg-white border border-gray-200 rounded-xl p-5 text-center hover:shadow-md hover:-translate-y-1 transition-all duration-300 shadow-sm"
              >
                <h3 className="text-sm font-bold text-foreground mt-2">{cat.name}</h3>
                <p className="text-xs text-accent mt-1">{cat.count} posts</p>
              </Link>
            ))}
          </div>
        </section>

        <section className="mb-20">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-xl sm:text-2xl font-bold text-foreground">Latest Posts</h2>
            <Link href="/blog" className="text-sm text-accent hover:text-foreground transition-colors font-medium">View All &rarr;</Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {latestPosts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="group bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md hover:-translate-y-1.5 transition-all duration-300">
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
                  <span className="inline-block px-2.5 py-0.5 text-[10px] font-bold tracking-wider bg-accent/10 text-accent rounded-full mb-2.5">{post.category}</span>
                  <h3 className="text-sm font-bold text-foreground mb-1.5 line-clamp-2">{post.title}</h3>
                  <p className="text-xs text-foreground/50 mb-3 line-clamp-2 leading-relaxed">{post.preview}</p>
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
        </section>

        <section className="mb-20">
          <div className="bg-white border border-gray-200 rounded-3xl p-8 sm:p-12 text-center shadow-sm max-w-2xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">Stay Inspired</h2>
            <p className="text-sm text-foreground/60 mb-6 max-w-md mx-auto">Subscribe to get the latest posts delivered straight to your inbox.</p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
              <input type="email" placeholder="Enter your email" className="flex-1 px-5 py-3 rounded-xl bg-accent-light/50 border border-gray-200 text-foreground placeholder:text-foreground/30 text-sm focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors" />
              <button className="px-7 py-3 bg-black text-white text-sm font-bold tracking-wider rounded-xl hover:bg-gray-900 transition-all shadow-lg">
                Subscribe
              </button>
            </div>
          </div>
        </section>

        <section className="mb-20">
          <div className="bg-white border border-gray-200 rounded-3xl p-8 sm:p-12 flex flex-col sm:flex-row items-center gap-8 shadow-sm">
            <div className="w-28 h-28 rounded-full bg-gradient-to-br from-accent/20 to-accent-light/50 border-2 border-accent/20 flex items-center justify-center shrink-0">
              <span className="text-xl font-bold text-foreground/80">KK</span>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-foreground">Hi, I&rsquo;m KK.</h2>
              <p className="text-sm text-foreground/60 mt-2 max-w-lg leading-relaxed">I write about technology, creativity, productivity and everyday experiences. Welcome to my little corner of the internet.</p>
              <Link href="/about" className="inline-block mt-4 text-sm text-accent hover:text-foreground transition-colors font-medium">Learn More &rarr;</Link>
            </div>
          </div>
        </section>

        {/* Image gallery carousel */}
        <section className="mb-20">
          <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-8">Photo Gallery</h2>
          <div className="overflow-hidden">
            <div
              className="flex gap-4 transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${carouselIndex * 320}px)` }}
            >
              {carouselImages.map((img, i) => (
                <div key={i} className="relative w-72 h-56 shrink-0 rounded-2xl overflow-hidden shadow-md group cursor-pointer">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    sizes="288px"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-end p-4">
                    <p className="text-white text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">{img.alt}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex items-center justify-center gap-3 mt-6">
            <button onClick={() => setCarouselIndex(Math.max(0, carouselIndex - 1))} disabled={carouselIndex === 0} className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-foreground/60 hover:bg-accent-light disabled:opacity-30 disabled:cursor-not-allowed transition-all shadow-sm">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6" /></svg>
            </button>
            <div className="flex gap-2">
              {carouselImages.map((_, i) => (
                <button key={i} onClick={() => setCarouselIndex(i)} className={`w-2 h-2 rounded-full transition-all duration-300 ${i === carouselIndex ? "bg-accent w-6" : "bg-gray-300 hover:bg-gray-400"}`} />
              ))}
            </div>
            <button onClick={() => setCarouselIndex(Math.min(carouselImages.length - 3, carouselIndex + 1))} disabled={carouselIndex >= carouselImages.length - 3} className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-foreground/60 hover:bg-accent-light disabled:opacity-30 disabled:cursor-not-allowed transition-all shadow-sm">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6" /></svg>
            </button>
          </div>
        </section>

        <section className="mb-20">
          <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-8">Popular Posts</h2>
          <div className="bg-white border border-gray-200 rounded-2xl divide-y divide-gray-100 overflow-hidden shadow-sm">
            {popularPosts.map((post, i) => (
              <Link key={post.title} href={`/blog/${post.title.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '')}`} className="flex items-center px-6 py-4 hover:bg-accent-light/50 transition-colors">
                <span className="w-8 h-8 rounded-lg bg-accent-light/50 border border-gray-100 flex items-center justify-center text-foreground/40 text-sm font-bold shrink-0">{i + 1}</span>
                <div className="ml-4 flex-1 min-w-0">
                  <p className="text-sm font-medium text-foreground truncate">{post.title}</p>
                </div>
                <span className="text-xs text-foreground/40 shrink-0 ml-3">{post.views.toLocaleString()} views</span>
              </Link>
            ))}
          </div>
        </section>

        <section className="mb-20">
          <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-6">Tags</h2>
          <div className="flex flex-wrap gap-3">
            {tags.map((tag) => (
              <Link
                key={tag}
                href={`/search?tag=${tag.toLowerCase()}`}
                className="px-4 py-2 bg-white border border-gray-200 rounded-full text-sm text-foreground/60 hover:bg-accent-light hover:text-foreground hover:border-accent/30 transition-all shadow-sm"
              >
                #{tag}
              </Link>
            ))}
          </div>
        </section>

        <section className="mb-20">
          <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-8">What Readers Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="#7B8C6E" className="mb-4 opacity-40"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" /></svg>
                <p className="text-sm text-foreground/70 mb-4 leading-relaxed italic">{t.quote}</p>
                <div>
                  <p className="text-sm font-bold text-foreground">{t.name}</p>
                  <p className="text-xs text-accent">{t.title}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-20" id="contact">
          <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-8">Get in Touch</h2>
          <div className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 shadow-sm max-w-2xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <input type="text" placeholder="Your Name" className="px-4 py-3 rounded-xl bg-accent-light/30 border border-gray-200 text-foreground placeholder:text-foreground/30 text-sm focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors" />
              <input type="email" placeholder="Your Email" className="px-4 py-3 rounded-xl bg-accent-light/30 border border-gray-200 text-foreground placeholder:text-foreground/30 text-sm focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors" />
            </div>
            <textarea rows={4} placeholder="Your Message" className="w-full px-4 py-3 rounded-xl bg-accent-light/30 border border-gray-200 text-foreground placeholder:text-foreground/30 text-sm focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors mb-4 resize-none" />
            <button className="px-8 py-3 bg-black text-white text-sm font-bold tracking-wider rounded-xl hover:bg-gray-900 transition-all shadow-lg">
              Send Message
            </button>
          </div>
        </section>
      </main>

      <footer className="relative z-20 bg-white border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 py-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
            <div>
              <Link href="/" className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg overflow-hidden shrink-0">
                  <Image src="https://ppkfgsakvcijmmhjwbcz.supabase.co/storage/v1/object/public/Photos/blog.jpg" alt="" width={32} height={32} className="object-cover h-full w-full" />
                </div>
                <span className="text-lg font-bold tracking-tight text-foreground">IGGY&rsquo;s Blog</span>
              </Link>
              <p className="text-xs text-foreground/50 mt-2 max-w-xs">Thoughts, stories, and ideas worth sharing. A personal blog about technology, creativity, and everyday life.</p>
            </div>
            <div>
              <h4 className="text-xs font-bold tracking-wider text-foreground/60 uppercase mb-4">Quick Links</h4>
              <div className="flex flex-col gap-2">
                {footerLinks.quick.map((link) => (
                  <Link key={link} href={link === "Home" ? "/" : `/${link.toLowerCase()}`} className="text-sm text-foreground/50 hover:text-foreground transition-colors">{link}</Link>
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-xs font-bold tracking-wider text-foreground/60 uppercase mb-4">Social</h4>
              <div className="flex gap-3">
                {footerLinks.social.map((s) => (
                  <Link key={s} href="#" className="w-9 h-9 rounded-full bg-accent-light/50 border border-gray-200 flex items-center justify-center text-foreground/50 hover:bg-accent-light hover:text-foreground hover:border-accent/30 transition-all text-xs font-medium">{s[0]}</Link>
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-xs font-bold tracking-wider text-foreground/60 uppercase mb-4">Newsletter</h4>
              <p className="text-xs text-foreground/50 mb-3">Get the latest posts delivered to your inbox.</p>
              <div className="flex gap-2">
                <input type="email" placeholder="your@email.com" className="flex-1 px-3 py-2 rounded-lg bg-accent-light/30 border border-gray-200 text-foreground placeholder:text-foreground/30 text-xs focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors" />
                <button className="px-4 py-2 bg-black text-white text-xs font-bold rounded-lg hover:bg-gray-900 transition-all">Go</button>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-100 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-foreground/40">&copy; 2026 Iggy&rsquo;s Blog. All rights reserved.</p>
            <div className="flex gap-4 text-xs text-foreground/40">
              <Link href="#" className="hover:text-foreground transition-colors">Privacy Policy</Link>
              <Link href="#" className="hover:text-foreground transition-colors">Terms</Link>
              <Link href="/contact" className="hover:text-foreground transition-colors">Contact</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
