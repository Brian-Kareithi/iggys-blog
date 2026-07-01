import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-background text-foreground min-h-screen">

      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-white/10 border-b border-white/20">
        <div className="max-w-6xl mx-auto flex items-center justify-between px-8 py-2.5">
          <div className="flex items-center gap-2">
            <span className="text-lg font-bold tracking-[0.15em] text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">
              IGGY&rsquo;S BLOG
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-accent shadow-[0_0_6px_rgba(123,140,110,0.6)]" />
          </div>
          <div className="flex items-center gap-8 text-sm font-medium tracking-wider text-white/90 drop-shadow-[0_1px_3px_rgba(0,0,0,0.4)]">
            <a href="#" className="hover:text-white transition-colors">HOME</a>
            <a href="#" className="hover:text-white transition-colors">TRAVEL</a>
            <a href="#" className="hover:text-white transition-colors">STYLE</a>
            <a href="#" className="hover:text-white transition-colors">TECH</a>
            <a href="/admin" className="hover:text-white transition-colors">ADMIN</a>
          </div>
        </div>
      </nav>

      {/* Hero Section with blurred background */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Blurred background image */}
        <div className="absolute inset-0">
          <Image
            src="https://ppkfgsakvcijmmhjwbcz.supabase.co/storage/v1/object/public/Photos/blog.jpg"
            alt=""
            fill
            className="object-cover scale-110 blur-[2px]"
            priority
          />
          <div className="absolute inset-0 bg-black/20" />
        </div>

        {/* Hero content with glass */}
        <div className="relative z-10 text-center px-6 py-20 max-w-3xl mx-auto">
          <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl px-12 py-16 shadow-2xl hover:bg-white/15 hover:border-white/30 hover:shadow-3xl transition-all duration-500">
            <span className="inline-block text-xs font-bold tracking-[0.25em] text-accent drop-shadow-[0_1px_2px_rgba(0,0,0,0.3)] mb-4">
              NEW POST
            </span>
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)]">
              NEW PERSPECTIVES
            </h1>
            <p className="mt-5 text-lg text-white/85 max-w-lg mx-auto leading-relaxed drop-shadow-[0_1px_4px_rgba(0,0,0,0.3)]">
              Dive into the latest stories, ideas, and daily musings.
            </p>
            <a
              href="#"
              className="inline-flex items-center justify-center mt-8 px-10 py-3.5 bg-black text-white text-sm font-bold tracking-widest rounded-lg hover:bg-foreground transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              READ THE JOURNAL
            </a>
          </div>
        </div>
      </section>

      {/* Header + CTA + Categories inside glass */}
      <div className="max-w-6xl mx-auto px-8 py-20 space-y-20">

        {/* Header & CTAs */}
        <div>
          <header className="text-center mb-10">
            <h2 className="text-4xl font-bold tracking-[0.15em] text-[#1A1A1A]">
              IGGY&rsquo;S BLOG
            </h2>
            <p className="mt-2 text-base italic font-serif text-[#1A1A1A]/70">
              Thoughts, Stories &amp; Ideas
            </p>
          </header>
          <div className="flex justify-center gap-5">
            <a
              href="#"
              className="inline-flex items-center justify-center px-9 py-3 border-2 border-[#1A1A1A] text-[#1A1A1A] text-sm font-medium tracking-widest bg-transparent rounded-lg hover:bg-[#1A1A1A] hover:text-white transition-all duration-300"
            >
              READ LATEST
            </a>
            <a
              href="#"
              className="inline-flex items-center justify-center px-9 py-3 bg-[#1A1A1A] text-white text-sm font-medium tracking-widest rounded-lg hover:opacity-80 transition-all duration-300"
            >
              SUBSCRIBE
            </a>
          </div>
        </div>

        {/* Category Cards - Glass */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {[
            {
              title: "TRAVEL",
              sub: "Wanderlust &amp; Words",
              svg: (
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
                </svg>
              ),
            },
            {
              title: "STYLE",
              sub: "Fashion Forward",
              svg: (
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M6 6L4 4" /><path d="M18 6L20 4" /><path d="M6 12L4 14" /><path d="M18 12L20 14" />
                  <path d="M12 4v4" /><path d="M12 16v4" /><path d="M8 8h8" /><path d="M8 12h8" /><path d="M8 16h8" />
                  <rect x="3" y="8" width="18" height="12" rx="2" />
                </svg>
              ),
            },
            {
              title: "TECH",
              sub: "Bits &amp; Bytes",
              svg: (
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="3" />
                  <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
                </svg>
              ),
            },
          ].map((cat) => (
            <div
              key={cat.title}
              className="group backdrop-blur-lg bg-white/30 border border-white/40 rounded-2xl px-8 py-10 text-center shadow-lg hover:bg-white/50 hover:border-white/60 hover:shadow-2xl hover:-translate-y-1 transition-all duration-400 cursor-pointer"
            >
              <div className="text-[#1A1A1A]/70 group-hover:text-[#1A1A1A] transition-colors duration-300">{cat.svg}</div>
              <h3 className="mt-5 text-sm font-bold tracking-[0.15em] text-[#1A1A1A]">{cat.title}</h3>
              <p className="mt-2 text-sm italic text-accent">{cat.sub}</p>
              <div className="mt-4 text-xs font-medium tracking-wide text-[#1A1A1A]/60 group-hover:text-accent transition-colors duration-300">READ MORE &rarr;</div>
            </div>
          ))}
        </div>

        {/* Features - Glass */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { title: "FRESH STORIES", sub: "Daily updates" },
            { title: "AD-FREE", sub: "Pure reading" },
            { title: "CURATED", sub: "Quality content" },
            { title: "SECURE", sub: "Privacy first" },
          ].map((item) => (
            <div
              key={item.title}
              className="group backdrop-blur-lg bg-white/30 border border-white/40 rounded-xl px-6 py-8 text-center shadow-lg hover:bg-white/50 hover:border-white/60 hover:shadow-2xl hover:-translate-y-1 transition-all duration-400"
            >
              <div className="w-10 h-10 mx-auto border border-accent/40 rounded-full flex items-center justify-center group-hover:bg-accent/10 transition-colors duration-300">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#7B8C6E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <h4 className="mt-4 text-xs font-bold tracking-wider text-[#1A1A1A]">{item.title}</h4>
              <p className="mt-1 text-[11px] text-accent">{item.sub}</p>
            </div>
          ))}
        </div>

        {/* Best of Iggy */}
        <div className="flex justify-end items-center gap-3">
          <span className="text-xs font-bold tracking-wider text-[#1A1A1A]">BEST OF IGGY</span>
          <span className="w-px h-3 bg-accent/60"></span>
          <a href="#" className="text-[11px] font-medium text-accent hover:underline tracking-wide">VIEW ALL</a>
        </div>

      </div>
    </div>
  );
}
