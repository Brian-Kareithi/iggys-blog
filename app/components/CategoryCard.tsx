import type { ReactNode } from "react";

interface CategoryCardProps {
  title: string;
  sub: string;
  svg: ReactNode;
  index: number;
}

export default function CategoryCard({ title, sub, svg, index }: CategoryCardProps) {
  return (
    <div
      className={`group backdrop-blur-xl bg-white/10 border border-white/20 rounded-xl sm:rounded-2xl px-6 sm:px-8 py-8 sm:py-10 text-center shadow-xl hover:bg-white/20 hover:border-white/40 hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-400 cursor-pointer ${index === 1 ? "md:-mt-2 md:mb-2" : ""}`}
    >
      <div className="text-white/70 group-hover:text-white transition-colors duration-300 inline-flex">
        {svg}
      </div>
      <h3 className="mt-4 text-sm font-bold tracking-[0.15em] text-white drop-shadow-[0_1px_3px_rgba(0,0,0,0.3)]">
        {title}
      </h3>
      <p className="mt-1.5 text-sm italic text-accent drop-shadow-[0_1px_2px_rgba(0,0,0,0.2)]">{sub}</p>
      <div className="mt-4 text-xs font-medium tracking-wide text-white/60 group-hover:text-accent transition-colors duration-300">
        READ MORE &rarr;
      </div>
    </div>
  );
}
