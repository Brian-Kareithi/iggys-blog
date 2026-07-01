"use client";

import { useState } from "react";

const navLinks = [
  { label: "HOME", href: "#" },
  { label: "TRAVEL", href: "#" },
  { label: "STYLE", href: "#" },
  { label: "TECH", href: "#" },
  { label: "ADMIN", href: "/admin" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-white/10 border-b border-white/20">
        <div className="max-w-6xl mx-auto flex items-center justify-between px-5 sm:px-8 py-2.5">
          <div className="flex items-center gap-2">
            <span className="text-base sm:text-lg font-bold tracking-[0.15em] text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">
              IGGY&rsquo;S BLOG
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-accent shadow-[0_0_6px_rgba(123,140,110,0.6)]" />
          </div>

          <div className="hidden md:flex items-center gap-6 lg:gap-8 text-sm font-medium tracking-wider text-white/90 drop-shadow-[0_1px_3px_rgba(0,0,0,0.4)]">
            {navLinks.map((link) => (
              <a key={link.label} href={link.href} className="hover:text-white transition-colors">
                {link.label}
              </a>
            ))}
          </div>

          <button
            onClick={() => setMenuOpen(true)}
            className="md:hidden flex flex-col gap-1.5 p-1.5 group"
            aria-label="Open menu"
          >
            <span className="block w-5 h-0.5 bg-white/90 rounded-full transition-transform group-hover:bg-white" />
            <span className="block w-5 h-0.5 bg-white/90 rounded-full transition-transform group-hover:bg-white" />
            <span className="block w-5 h-0.5 bg-white/90 rounded-full transition-transform group-hover:bg-white" />
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setMenuOpen(false)}
          />
          <div className="absolute top-0 left-0 bottom-0 w-64 backdrop-blur-2xl bg-[#1A1A1A]/95 border-r border-white/10 shadow-2xl animate-slide-in">
            <div className="flex items-center justify-between px-6 py-4 border-b border-white/10">
              <span className="text-sm font-bold tracking-[0.15em] text-white">IGGY&rsquo;S BLOG</span>
              <button
                onClick={() => setMenuOpen(false)}
                className="text-white/70 hover:text-white text-xl leading-none transition-colors"
                aria-label="Close menu"
              >
                &#x2715;
              </button>
            </div>
            <div className="flex flex-col gap-1 px-4 pt-6">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="px-4 py-3 text-sm font-medium tracking-wider text-white/70 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
            <div className="absolute bottom-8 left-0 right-0 px-8">
              <div className="flex items-center gap-3 border-t border-white/10 pt-6">
                <span className="text-xs font-bold tracking-wider text-white/50">BEST OF IGGY</span>
                <span className="w-px h-3 bg-accent/60" />
                <a href="#" className="text-[11px] font-medium text-accent tracking-wide hover:text-white transition-colors">VIEW ALL</a>
              </div>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes slideIn {
          from { transform: translateX(-100%); }
          to { transform: translateX(0); }
        }
        .animate-slide-in {
          animation: slideIn 0.3s ease-out;
        }
      `}</style>
    </>
  );
}
