"use client";

import { useState } from "react";

export default function SEOPage() {
  const [metaTitle, setMetaTitle] = useState("Iggy's Blog - Thoughts, Stories & Ideas");
  const [metaDescription, setMetaDescription] = useState("A personal blog exploring travel, style, technology, and minimalist living through thoughtful stories and curated content.");
  const [ogImage, setOgImage] = useState<string | null>(null);
  const [generateSitemap, setGenerateSitemap] = useState(true);
  const [robotsTxt, setRobotsTxt] = useState("User-agent: *\nAllow: /\n\nSitemap: https://iggysblog.com/sitemap.xml");
  const [saved, setSaved] = useState(false);
  const [dragOver, setDragOver] = useState(false);

  function handleSave() {
    setSaved(true);
    setTimeout(() => setSaved(false), 2500);
  }

  return (
    <div className="flex-1 flex flex-col">
      <header className="flex items-center justify-between px-6 sm:px-10 py-3 sm:py-4 bg-white border-b border-gray-200 shadow-sm">
        <div className="flex items-center gap-2 text-sm">
          <span className="text-foreground/60">Dashboard</span>
          <span className="text-foreground/30">/</span>
          <span className="text-accent font-medium">SEO</span>
        </div>
        <div className="flex items-center gap-4">
          <div className="w-9 h-9 rounded-full bg-accent flex items-center justify-center text-white text-xs font-bold cursor-pointer shadow-lg hover:bg-accent/90 transition-all duration-300">IB</div>
        </div>
      </header>

      <main className="flex-1 px-6 sm:px-10 py-6 sm:py-8 overflow-y-auto">
        <h1 className="text-xl sm:text-2xl font-bold text-foreground tracking-tight mb-7">SEO Settings</h1>

        <div className="space-y-5">
          {/* Meta Tags */}
          <div className="bg-white border border-gray-200 rounded-2xl shadow-lg p-6 sm:p-8">
            <h2 className="text-sm font-bold tracking-wider text-foreground/60 uppercase mb-5">Meta Tags</h2>
            <div className="space-y-5">
              <div>
                <label className="block text-[11px] font-bold tracking-wider text-foreground/60 mb-1.5">META TITLE</label>
                <input type="text" value={metaTitle} onChange={(e) => setMetaTitle(e.target.value)} className="w-full border border-gray-200 bg-white rounded-xl px-4 py-3 text-sm text-foreground placeholder-foreground/30 outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all duration-300" />
                <p className="text-[10px] text-foreground/30 mt-1.5">{metaTitle.length} characters &bull; Recommended: 50-60</p>
              </div>
              <div>
                <label className="block text-[11px] font-bold tracking-wider text-foreground/60 mb-1.5">META DESCRIPTION</label>
                <textarea value={metaDescription} onChange={(e) => setMetaDescription(e.target.value)} rows={3} className="w-full border border-gray-200 bg-white rounded-xl px-4 py-3 text-sm text-foreground placeholder-foreground/30 outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all duration-300 resize-none" />
                <p className="text-[10px] text-foreground/30 mt-1.5">{metaDescription.length} characters &bull; Recommended: 150-160</p>
              </div>
            </div>
          </div>

          {/* Open Graph */}
          <div className="bg-white border border-gray-200 rounded-2xl shadow-lg p-6 sm:p-8">
            <h2 className="text-sm font-bold tracking-wider text-foreground/60 uppercase mb-5">Open Graph</h2>
            <label className="block text-[11px] font-bold tracking-wider text-foreground/60 mb-1.5">OG IMAGE</label>
            <div
              onDragOver={(e) => { e.preventDefault(); setDragOver(true); }}
              onDragLeave={() => setDragOver(false)}
              onDrop={(e) => { e.preventDefault(); setDragOver(false); const file = e.dataTransfer.files?.[0]; if (file) setOgImage(URL.createObjectURL(file)); }}
              onClick={() => document.getElementById("og-upload")?.click()}
              className={`border-2 border-dashed rounded-2xl p-6 sm:p-8 text-center cursor-pointer transition-all duration-300 ${
                dragOver ? "border-accent bg-accent/15" : "border-gray-200 hover:border-accent/60 bg-accent-light/50 hover:bg-accent-light"
              }`}
            >
              {ogImage ? (
                <div className="relative w-full h-40">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={ogImage} alt="OG Preview" className="w-full h-full object-cover rounded-xl" />
                  <button onClick={(e) => { e.stopPropagation(); setOgImage(null); }} className="absolute top-2 right-2 w-7 h-7 flex items-center justify-center rounded-full bg-foreground/60 text-white hover:bg-foreground/80 transition-all duration-300">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
                  </button>
                </div>
              ) : (
                <div className="text-foreground/50">
                  <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="mx-auto mb-3 text-accent/60"><rect x="3" y="3" width="18" height="18" rx="2" ry="2" /><circle cx="8.5" cy="8.5" r="1.5" /><polyline points="21 15 16 10 5 21" /></svg>
                  <p className="text-sm text-foreground/60">Drag & drop or <span className="text-accent underline underline-offset-2">browse</span></p>
                  <p className="text-[11px] text-foreground/30 mt-1">Recommended: 1200x630px, PNG or JPG</p>
                </div>
              )}
              <input id="og-upload" type="file" accept="image/*" onChange={(e) => { const file = e.target.files?.[0]; if (file) setOgImage(URL.createObjectURL(file)); }} className="hidden" />
            </div>
          </div>

          {/* Sitemap */}
          <div className="bg-white border border-gray-200 rounded-2xl shadow-lg p-6 sm:p-8">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-sm font-bold tracking-wider text-foreground/60 uppercase">Sitemap</h2>
                <p className="text-[12px] text-foreground/40 mt-1">Automatically generate sitemap.xml for search engines</p>
              </div>
              <button onClick={() => setGenerateSitemap(!generateSitemap)} className={`relative w-11 h-6 rounded-full transition-all duration-300 shrink-0 ${generateSitemap ? "bg-accent shadow-md shadow-accent/30" : "bg-gray-200"}`}>
                <span className={`absolute top-0.5 left-0.5 w-5 h-5 rounded-full bg-white shadow-lg transition-all duration-300 ${generateSitemap ? "translate-x-5" : "translate-x-0"}`} />
              </button>
            </div>
            {generateSitemap && (
              <p className="text-[11px] text-accent/70 mt-3">Sitemap will be rebuilt on next deploy</p>
            )}
          </div>

          {/* Robots.txt */}
          <div className="bg-white border border-gray-200 rounded-2xl shadow-lg p-6 sm:p-8">
            <h2 className="text-sm font-bold tracking-wider text-foreground/60 uppercase mb-5">Robots.txt</h2>
            <textarea
              value={robotsTxt}
              onChange={(e) => setRobotsTxt(e.target.value)}
              rows={6}
              className="w-full border border-gray-200 bg-white rounded-xl px-4 py-3 text-sm text-foreground placeholder-foreground/30 outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all duration-300 resize-none font-mono"
            />
          </div>
        </div>

        <div className="flex justify-end mt-6">
          <button onClick={handleSave} className="px-8 py-2.5 bg-black text-white text-xs font-bold tracking-wider rounded-xl hover:opacity-90 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5">
            {saved ? "SAVED" : "SAVE SEO SETTINGS"}
          </button>
        </div>
      </main>
    </div>
  );
}
