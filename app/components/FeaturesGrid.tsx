const features = [
  { title: "FRESH STORIES", sub: "Daily updates" },
  { title: "AD-FREE", sub: "Pure reading" },
  { title: "CURATED", sub: "Quality content" },
  { title: "SECURE", sub: "Privacy first" },
];

export default function FeaturesGrid() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 flex-1 w-full md:w-auto">
      {features.map((item) => (
        <div
          key={item.title}
          className="group backdrop-blur-xl bg-white/10 border border-white/20 rounded-xl px-4 sm:px-5 py-5 sm:py-6 text-center shadow-lg hover:bg-white/20 hover:border-white/40 hover:shadow-xl hover:-translate-y-1 transition-all duration-400"
        >
          <div className="w-8 sm:w-9 h-8 sm:h-9 mx-auto border border-accent/50 rounded-full flex items-center justify-center group-hover:bg-accent/10 transition-colors duration-300">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#7B8C6E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </div>
          <h4 className="mt-2.5 sm:mt-3 text-[11px] sm:text-xs font-bold tracking-wider text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.3)]">
            {item.title}
          </h4>
          <p className="mt-0.5 text-[10px] sm:text-[11px] text-accent">{item.sub}</p>
        </div>
      ))}
    </div>
  );
}
