export default function HeroCard() {
  return (
    <div className="inline-block backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl sm:rounded-3xl px-6 sm:px-10 md:px-16 py-10 sm:py-12 md:py-16 shadow-2xl hover:bg-white/15 hover:border-white/30 hover:shadow-3xl transition-all duration-500 w-full max-w-3xl">
      <span className="inline-block text-[10px] sm:text-xs font-bold tracking-[0.25em] text-accent drop-shadow-[0_1px_2px_rgba(0,0,0,0.3)] mb-3 sm:mb-4">
        NEW POST
      </span>
      <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold tracking-tight text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)] leading-tight">
        NEW PERSPECTIVES
      </h2>
      <p className="mt-4 sm:mt-5 text-sm sm:text-base md:text-lg text-white/85 max-w-lg mx-auto leading-relaxed drop-shadow-[0_1px_4px_rgba(0,0,0,0.3)] px-2">
        Dive into the latest stories, ideas, and daily musings.
      </p>
      <a
        href="#"
        className="inline-flex items-center justify-center mt-6 sm:mt-8 px-8 sm:px-10 py-3 sm:py-3.5 bg-black text-white text-xs sm:text-sm font-bold tracking-widest rounded-xl hover:bg-foreground transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
      >
        READ THE JOURNAL
      </a>
    </div>
  );
}
