export default function CTAButtons() {
  return (
    <div className="flex gap-3 sm:gap-4 w-full sm:w-auto justify-center sm:justify-end">
      <a
        href="#"
        className="flex-1 sm:flex-initial text-center backdrop-blur-xl bg-white/10 border border-white/30 px-5 sm:px-7 py-2.5 sm:py-3 rounded-xl text-white text-xs sm:text-sm font-medium tracking-widest shadow-lg hover:bg-white/25 hover:border-white/50 hover:-translate-y-0.5 transition-all duration-300"
      >
        READ LATEST
      </a>
      <a
        href="#"
        className="flex-1 sm:flex-initial text-center px-5 sm:px-7 py-2.5 sm:py-3 rounded-xl bg-black text-white text-xs sm:text-sm font-bold tracking-widest shadow-lg hover:bg-foreground hover:-translate-y-0.5 transition-all duration-300"
      >
        SUBSCRIBE
      </a>
    </div>
  );
}
