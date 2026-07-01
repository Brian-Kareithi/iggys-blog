"use client";

import { useState } from "react";

interface MediaItem {
  id: number;
  name: string;
  type: "image" | "document";
  color: string;
  size: string;
  dimensions: string;
  date: string;
}

const initialMedia: MediaItem[] = [
  { id: 1, name: "coastal-morning.jpg", type: "image", color: "#6B8FA3", size: "2.4 MB", dimensions: "1920x1280", date: "30 Jun 2026" },
  { id: 2, name: "travel-map.png", type: "image", color: "#C49A6C", size: "1.8 MB", dimensions: "1200x800", date: "28 Jun 2026" },
  { id: 3, name: "profile-avatar.jpg", type: "image", color: "#7B8C6E", size: "0.6 MB", dimensions: "500x500", date: "25 Jun 2026" },
  { id: 4, name: "tech-trends-cover.png", type: "image", color: "#C96B6B", size: "3.2 MB", dimensions: "2400x1600", date: "22 Jun 2026" },
  { id: 5, name: "style-guide.pdf", type: "document", color: "#8B6BA3", size: "4.7 MB", dimensions: "-", date: "20 Jun 2026" },
  { id: 6, name: "blog-banner.jpg", type: "image", color: "#6BA38B", size: "5.1 MB", dimensions: "3840x1080", date: "18 Jun 2026" },
  { id: 7, name: "interview-notes.pdf", type: "document", color: "#A38B6B", size: "1.2 MB", dimensions: "-", date: "15 Jun 2026" },
  { id: 8, name: "city-skyline.jpg", type: "image", color: "#C48BA3", size: "3.8 MB", dimensions: "2048x1365", date: "12 Jun 2026" },
];

export default function MediaPage() {
  const [media, setMedia] = useState(initialMedia);
  const [folderFilter, setFolderFilter] = useState<"all" | "images" | "documents">("all");

  const filtered = folderFilter === "all" ? media : folderFilter === "images" ? media.filter((m) => m.type === "image") : media.filter((m) => m.type === "document");
  const imagesCount = media.filter((m) => m.type === "image").length;
  const documentsCount = media.filter((m) => m.type === "document").length;

  function handleUpload() {
    document.getElementById("media-upload")?.click();
  }

  function handleDelete(id: number) {
    setMedia((prev) => prev.filter((m) => m.id !== id));
  }

  return (
    <div className="flex-1 flex flex-col">
      <header className="flex items-center justify-between px-6 sm:px-10 py-3 sm:py-4 backdrop-blur-2xl bg-white/10 border-b border-white/20 shadow-lg">
        <div className="flex items-center gap-2 text-sm">
          <span className="text-white/60">Dashboard</span>
          <span className="text-white/30">/</span>
          <span className="text-accent font-medium drop-shadow-[0_1px_2px_rgba(0,0,0,0.3)]">Media</span>
        </div>
        <div className="flex items-center gap-4">
          <div className="w-9 h-9 rounded-full bg-accent/90 backdrop-blur-md flex items-center justify-center text-white text-xs font-bold cursor-pointer shadow-lg border border-white/20 hover:bg-accent transition-all duration-300">IB</div>
        </div>
      </header>

      <main className="flex-1 px-6 sm:px-10 py-6 sm:py-8 overflow-y-auto">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6 sm:mb-8">
          <div>
            <h1 className="text-xl sm:text-2xl font-bold text-white tracking-tight drop-shadow-[0_2px_6px_rgba(0,0,0,0.5)]">Media Library</h1>
            <p className="text-[12px] text-white/40 mt-0.5">{media.length} items &bull; {Math.round(media.reduce((a, m) => a + parseFloat(m.size), 0) * 10) / 10} MB total</p>
          </div>
          <button onClick={handleUpload} className="group flex items-center gap-2 bg-black text-white text-xs font-bold tracking-wider px-6 py-2.5 rounded-xl hover:opacity-90 transition-all duration-300 shadow-lg w-full sm:w-auto justify-center">
            <span className="group-hover:scale-110 transition-transform duration-300">+</span>
            UPLOAD
          </button>
          <input id="media-upload" type="file" accept="image/*,.pdf" className="hidden" onChange={() => {}} />
        </div>

        <div className="flex items-center gap-2 mb-5 flex-wrap">
          {(["all", "images", "documents"] as const).map((f) => (
            <button
              key={f}
              onClick={() => setFolderFilter(f)}
              className={`px-4 py-2 text-[11px] font-bold tracking-wider rounded-xl transition-all duration-300 ${
                folderFilter === f
                  ? "bg-white/20 text-white border border-white/20 shadow-md"
                  : "bg-white/5 text-white/50 border border-transparent hover:bg-white/10 hover:text-white"
              }`}
            >
              {f === "all" ? "All" : f.charAt(0).toUpperCase() + f.slice(1)} ({f === "all" ? media.length : f === "images" ? imagesCount : documentsCount})
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5">
          {filtered.map((item) => (
            <div key={item.id} className="group backdrop-blur-2xl bg-white/10 border border-white/20 rounded-2xl overflow-hidden shadow-xl hover:bg-white/15 hover:border-white/30 hover:-translate-y-1 transition-all duration-300">
              <div className="relative h-32 sm:h-40 flex items-center justify-center" style={{ background: `${item.color}25` }}>
                {item.type === "image" ? (
                  <div className="w-12 h-12 rounded-xl backdrop-blur-2xl bg-white/10 border border-white/20 flex items-center justify-center text-2xl">
                    &#x1F5BC;&#xFE0F;
                  </div>
                ) : (
                  <div className="w-12 h-12 rounded-xl backdrop-blur-2xl bg-white/10 border border-white/20 flex items-center justify-center text-2xl">
                    &#x1F4C4;
                  </div>
                )}
                <button onClick={() => handleDelete(item.id)} className="absolute top-2 right-2 w-7 h-7 flex items-center justify-center rounded-full bg-black/50 backdrop-blur-md text-white/70 hover:text-red-300 hover:bg-red-500/30 transition-all duration-300 opacity-0 group-hover:opacity-100 text-xs">
                  &#x1F5D1;
                </button>
              </div>
              <div className="p-3 sm:p-4">
                <p className="text-xs font-medium text-white truncate drop-shadow-[0_1px_2px_rgba(0,0,0,0.3)]">{item.name}</p>
                <div className="flex items-center justify-between mt-1.5">
                  <span className="text-[10px] text-white/40">{item.size}</span>
                  {item.type === "image" && <span className="text-[10px] text-white/40">{item.dimensions}</span>}
                </div>
                <p className="text-[10px] text-white/30 mt-0.5">{item.date}</p>
              </div>
            </div>
          ))}
        </div>

        <p className="text-[11px] text-white/30 text-center mt-6">
          Images are automatically optimized &bull; WebP format &bull; Responsive breakpoints generated
        </p>
      </main>
    </div>
  );
}
