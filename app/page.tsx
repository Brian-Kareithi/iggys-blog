import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center bg-background text-foreground min-h-screen">
      <div className="w-full max-w-6xl px-8 py-16">
        <header className="text-center mb-12">
          <h1 className="text-5xl font-bold tracking-[0.2em] text-black">
            IGGY&rsquo;S BLOG
          </h1>
          <p className="mt-3 text-lg italic font-serif text-foreground">
            Thoughts, Stories &amp; Ideas
          </p>
        </header>

        <div className="flex justify-center gap-5 mb-20">
          <a
            href="#"
            className="inline-flex items-center justify-center px-9 py-3 border-2 border-black text-black text-sm font-medium tracking-widest bg-transparent hover:bg-black hover:text-white transition-colors"
          >
            READ LATEST
          </a>
          <a
            href="#"
            className="inline-flex items-center justify-center px-9 py-3 bg-black text-white text-sm font-medium tracking-widest hover:bg-foreground transition-colors"
          >
            SUBSCRIBE
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-28">
          <div className="group border border-zinc-200 px-8 py-10 text-center hover:border-accent transition-colors cursor-pointer">
            <svg
              width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
              className="mx-auto text-foreground"
            >
              <circle cx="12" cy="12" r="10" />
              <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
            </svg>
            <h3 className="mt-5 text-sm font-bold tracking-[0.15em] text-black">TRAVEL</h3>
            <p className="mt-2 text-sm italic text-accent">Wanderlust &amp; Words</p>
            <div className="mt-4 text-xs font-medium tracking-wide text-foreground group-hover:text-accent transition-colors">READ MORE &rarr;</div>
          </div>
          <div className="group border border-zinc-200 px-8 py-10 text-center hover:border-accent transition-colors cursor-pointer">
            <svg
              width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
              className="mx-auto text-foreground"
            >
              <path d="M6 6L4 4" /><path d="M18 6L20 4" /><path d="M6 12L4 14" /><path d="M18 12L20 14" />
              <path d="M12 4v4" /><path d="M12 16v4" /><path d="M8 8h8" /><path d="M8 12h8" /><path d="M8 16h8" />
              <rect x="3" y="8" width="18" height="12" rx="2" />
            </svg>
            <h3 className="mt-5 text-sm font-bold tracking-[0.15em] text-black">STYLE</h3>
            <p className="mt-2 text-sm italic text-accent">Fashion Forward</p>
            <div className="mt-4 text-xs font-medium tracking-wide text-foreground group-hover:text-accent transition-colors">READ MORE &rarr;</div>
          </div>
          <div className="group border border-zinc-200 px-8 py-10 text-center hover:border-accent transition-colors cursor-pointer">
            <svg
              width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
              className="mx-auto text-foreground"
            >
              <circle cx="12" cy="12" r="3" />
              <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
            </svg>
            <h3 className="mt-5 text-sm font-bold tracking-[0.15em] text-black">TECH</h3>
            <p className="mt-2 text-sm italic text-accent">Bits &amp; Bytes</p>
            <div className="mt-4 text-xs font-medium tracking-wide text-foreground group-hover:text-accent transition-colors">READ MORE &rarr;</div>
          </div>
        </div>

        <section className="mb-28">
          <div className="relative w-full aspect-[16/9] max-h-[550px] overflow-hidden">
            <Image
              src="https://ppkfgsakvcijmmhjwbcz.supabase.co/storage/v1/object/public/Photos/blog.jpg"
              alt="Hero"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="text-center mt-14">
            <span className="text-xs font-bold tracking-[0.2em] text-accent">NEW POST</span>
            <h2 className="mt-3 text-4xl font-bold tracking-tight text-black">NEW PERSPECTIVES</h2>
            <p className="mt-4 text-base text-foreground max-w-md mx-auto leading-relaxed">
              Dive into the latest stories, ideas, and daily musings.
            </p>
            <a
              href="#"
              className="inline-flex items-center justify-center mt-8 px-10 py-3 bg-black text-white text-sm font-medium tracking-widest hover:bg-foreground transition-colors"
            >
              READ THE JOURNAL
            </a>
          </div>
        </section>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {[
            { title: "FRESH STORIES", sub: "Daily updates" },
            { title: "AD-FREE", sub: "Pure reading" },
            { title: "CURATED", sub: "Quality content" },
            { title: "SECURE", sub: "Privacy first" },
          ].map((item) => (
            <div key={item.title} className="text-center">
              <div className="w-10 h-10 mx-auto border border-accent/40 rounded-full flex items-center justify-center">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#7B8C6E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <h4 className="mt-4 text-xs font-bold tracking-wider text-black">{item.title}</h4>
              <p className="mt-1 text-[11px] text-accent">{item.sub}</p>
            </div>
          ))}
        </div>

        <div className="flex justify-end items-center gap-3">
          <span className="text-xs font-bold tracking-wider text-black">BEST OF IGGY</span>
          <span className="w-px h-3 bg-accent/60"></span>
          <a href="#" className="text-[11px] font-medium text-accent hover:underline tracking-wide">VIEW ALL</a>
        </div>
      </div>
    </div>
  );
}
