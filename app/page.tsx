import Image from "next/image";

const categories = [
  {
    title: "TRAVEL",
    sub: "Wanderlust &amp; Words",
    svg: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
      </svg>
    ),
  },
  {
    title: "STYLE",
    sub: "Fashion Forward",
    svg: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
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
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3" />
        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
      </svg>
    ),
  },
];

const features = [
  { title: "FRESH STORIES", sub: "Daily updates" },
  { title: "AD-FREE", sub: "Pure reading" },
  { title: "CURATED", sub: "Quality content" },
  { title: "SECURE", sub: "Privacy first" },
];

export default function Home() {
  return (
    <div className="relative min-h-screen bg-background text-foreground">

      {/* Full-page blurred background */}
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

      {/* Navbar */}
      <nav className="relative z-30 backdrop-blur-xl bg-white/10 border-b border-white/20">
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

      {/* All content on top of the hero background */}
      <div className="relative z-20 max-w-6xl mx-auto px-8 pt-16 pb-24">

        {/* Top row: Logo panel + CTAs */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-20">
          <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl px-10 py-6 shadow-xl hover:bg-white/15 hover:border-white/30 transition-all duration-500">
            <h1 className="text-3xl md:text-4xl font-bold tracking-[0.15em] text-white drop-shadow-[0_2px_6px_rgba(0,0,0,0.5)]">
              IGGY&rsquo;S BLOG
            </h1>
            <p className="mt-1 text-base italic font-serif text-white/80">
              Thoughts, Stories &amp; Ideas
            </p>
          </div>
          <div className="flex gap-4">
            <a
              href="#"
              className="backdrop-blur-xl bg-white/10 border border-white/30 px-7 py-3 rounded-xl text-white text-sm font-medium tracking-widest shadow-lg hover:bg-white/25 hover:border-white/50 hover:-translate-y-0.5 transition-all duration-300"
            >
              READ LATEST
            </a>
            <a
              href="#"
              className="px-7 py-3 rounded-xl bg-black text-white text-sm font-bold tracking-widest shadow-lg hover:bg-foreground hover:-translate-y-0.5 transition-all duration-300"
            >
              SUBSCRIBE
            </a>
          </div>
        </div>

        {/* Main hero focus */}
        <div className="text-center mb-24">
          <div className="inline-block backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl px-10 md:px-16 py-12 md:py-16 shadow-2xl hover:bg-white/15 hover:border-white/30 hover:shadow-3xl transition-all duration-500 w-full max-w-3xl">
            <span className="inline-block text-xs font-bold tracking-[0.25em] text-accent drop-shadow-[0_1px_2px_rgba(0,0,0,0.3)] mb-4">
              NEW POST
            </span>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)]">
              NEW PERSPECTIVES
            </h2>
            <p className="mt-5 text-base md:text-lg text-white/85 max-w-lg mx-auto leading-relaxed drop-shadow-[0_1px_4px_rgba(0,0,0,0.3)]">
              Dive into the latest stories, ideas, and daily musings.
            </p>
            <a
              href="#"
              className="inline-flex items-center justify-center mt-8 px-10 py-3.5 bg-black text-white text-sm font-bold tracking-widest rounded-xl hover:bg-foreground transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              READ THE JOURNAL
            </a>
          </div>
        </div>

        {/* Category cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-20">
          {categories.map((cat, i) => (
            <div
              key={cat.title}
              className="group backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl px-8 py-10 text-center shadow-xl hover:bg-white/20 hover:border-white/40 hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-400 cursor-pointer"
              style={i === 1 ? { marginTop: "-8px", marginBottom: "8px" } : {}}
            >
              <div className="text-white/70 group-hover:text-white transition-colors duration-300 inline-flex">{cat.svg}</div>
              <h3 className="mt-4 text-sm font-bold tracking-[0.15em] text-white drop-shadow-[0_1px_3px_rgba(0,0,0,0.3)]">
                {cat.title}
              </h3>
              <p className="mt-1.5 text-sm italic text-accent drop-shadow-[0_1px_2px_rgba(0,0,0,0.2)]">{cat.sub}</p>
              <div className="mt-4 text-xs font-medium tracking-wide text-white/60 group-hover:text-accent transition-colors duration-300">
                READ MORE &rarr;
              </div>
            </div>
          ))}
        </div>

        {/* Features + Best of Iggy */}
        <div className="flex flex-col md:flex-row items-end justify-between gap-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 flex-1">
            {features.map((item) => (
              <div
                key={item.title}
                className="group backdrop-blur-xl bg-white/10 border border-white/20 rounded-xl px-5 py-6 text-center shadow-lg hover:bg-white/20 hover:border-white/40 hover:shadow-xl hover:-translate-y-1 transition-all duration-400"
              >
                <div className="w-9 h-9 mx-auto border border-accent/50 rounded-full flex items-center justify-center group-hover:bg-accent/10 transition-colors duration-300">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#7B8C6E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <h4 className="mt-3 text-xs font-bold tracking-wider text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.3)]">
                  {item.title}
                </h4>
                <p className="mt-0.5 text-[11px] text-accent">{item.sub}</p>
              </div>
            ))}
          </div>
          <div className="shrink-0 flex items-center gap-3 backdrop-blur-xl bg-white/10 border border-white/20 rounded-xl px-6 py-4 shadow-lg hover:bg-white/15 transition-all duration-300">
            <span className="text-xs font-bold tracking-wider text-white">BEST OF IGGY</span>
            <span className="w-px h-3 bg-accent/60" />
            <a href="#" className="text-[11px] font-medium text-accent hover:text-white transition-colors tracking-wide">VIEW ALL</a>
          </div>
        </div>

      </div>
    </div>
  );
}
