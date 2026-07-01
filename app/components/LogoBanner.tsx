export default function LogoBanner() {
  return (
    <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-xl sm:rounded-2xl px-6 sm:px-10 py-5 sm:py-6 shadow-xl w-full sm:w-auto text-center sm:text-left hover:bg-white/15 hover:border-white/30 transition-all duration-500">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-[0.15em] text-white drop-shadow-[0_2px_6px_rgba(0,0,0,0.5)]">
        IGGY&rsquo;S BLOG
      </h1>
      <p className="mt-1 text-sm sm:text-base italic font-serif text-white/80">
        Thoughts, Stories &amp; Ideas
      </p>
    </div>
  );
}
