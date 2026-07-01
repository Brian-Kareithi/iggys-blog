"use client";

import { useState } from "react";

interface Category {
  id: number;
  name: string;
  slug: string;
  description: string;
  postCount: number;
  color: string;
}

const initialCategories: Category[] = [
  { id: 1, name: "Travel", slug: "travel", description: "Wanderlust & Words — exploring the world one story at a time.", postCount: 12, color: "#7B8C6E" },
  { id: 2, name: "Style", slug: "style", description: "Fashion Forward — minimalist wardrobes, timeless aesthetics.", postCount: 8, color: "#C49A6C" },
  { id: 3, name: "Tech", slug: "tech", description: "Bits & Bytes — the latest in technology and digital culture.", postCount: 4, color: "#6B8FA3" },
];

export default function CategoriesPage() {
  const [categories, setCategories] = useState<Category[]>(initialCategories);
  const [editing, setEditing] = useState<Category | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [formName, setFormName] = useState("");
  const [formDescription, setFormDescription] = useState("");

  function openNew() {
    setEditing(null);
    setFormName("");
    setFormDescription("");
    setShowModal(true);
  }

  function openEdit(cat: Category) {
    setEditing(cat);
    setFormName(cat.name);
    setFormDescription(cat.description);
    setShowModal(true);
  }

  function handleSave() {
    if (!formName.trim()) return;
    if (editing) {
      setCategories((prev) =>
        prev.map((c) =>
          c.id === editing.id ? { ...c, name: formName, description: formDescription } : c
        )
      );
    } else {
      setCategories((prev) => [
        ...prev,
        { id: Date.now(), name: formName, slug: formName.toLowerCase().replace(/\s+/g, "-"), description: formDescription, postCount: 0, color: "#7B8C6E" },
      ]);
    }
    setShowModal(false);
  }

  function handleDelete(id: number) {
    setCategories((prev) => prev.filter((c) => c.id !== id));
  }

  return (
    <div className="flex-1 flex flex-col">
      <header className="flex items-center justify-between px-6 sm:px-10 py-3 sm:py-4 bg-white border-b border-gray-200 shadow-sm">
        <div className="flex items-center gap-2 text-sm">
          <span className="text-foreground/60">Dashboard</span>
          <span className="text-foreground/30">/</span>
          <span className="text-accent font-medium">Categories</span>
        </div>
        <div className="flex items-center gap-4">
          <div className="w-9 h-9 rounded-full bg-accent flex items-center justify-center text-white text-xs font-bold cursor-pointer shadow-lg hover:bg-accent/90 transition-all duration-300">IB</div>
        </div>
      </header>

      <main className="flex-1 px-6 sm:px-10 py-6 sm:py-8 overflow-y-auto">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6 sm:mb-8">
          <div>
            <h1 className="text-xl sm:text-2xl font-bold text-foreground tracking-tight">Categories</h1>
            <p className="text-[12px] text-foreground/40 mt-0.5">{categories.length} categories &bull; 24 total posts</p>
          </div>
          <button onClick={openNew} className="group flex items-center gap-2 bg-white border border-gray-200 text-foreground text-sm font-medium tracking-widest px-6 py-2.5 rounded-xl hover:bg-accent-light hover:border-gray-300 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 shadow-sm w-full sm:w-auto justify-center">
            <span className="text-accent group-hover:scale-110 transition-transform duration-300">+</span>
            ADD CATEGORY
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {categories.map((cat) => (
            <div key={cat.id} className="group bg-white border border-gray-200 rounded-2xl p-6 shadow-lg hover:bg-gray-50 hover:border-gray-300 hover:-translate-y-1 transition-all duration-300">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center text-lg" style={{ background: `${cat.color}20`, color: cat.color }}>
                    {cat.name === "Travel" ? "\u2708\uFE0F" : cat.name === "Style" ? "\uD83D\uDC54" : "\uD83D\uDDA5\uFE0F"}
                  </div>
                  <div>
                    <h3 className="text-foreground font-bold text-sm">{cat.name}</h3>
                    <p className="text-[11px] text-foreground/40">{cat.slug}</p>
                  </div>
                </div>
                <div className="flex items-center gap-1">
                  <button onClick={() => openEdit(cat)} className="p-1.5 rounded-lg text-foreground/40 hover:text-foreground hover:bg-accent-light transition-all duration-300 text-xs">&#x270F;&#xFE0F;</button>
                  <button onClick={() => handleDelete(cat.id)} className="p-1.5 rounded-lg text-foreground/40 hover:text-red-500 hover:bg-red-50 transition-all duration-300 text-xs">&#x1F5D1;</button>
                </div>
              </div>
              <p className="text-[13px] text-foreground/60 leading-relaxed mb-4">{cat.description}</p>
              <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent-light/50 border border-gray-100 text-foreground/50 text-[11px] font-medium">
                  <span className="w-1.5 h-1.5 rounded-full" style={{ background: cat.color }} />
                  {cat.postCount} {cat.postCount === 1 ? "post" : "posts"}
                </span>
                <span className="text-[11px] text-accent/70 font-medium">{cat.postCount * 100}+ views</span>
              </div>
            </div>
          ))}
        </div>
      </main>

      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/60 p-4">
          <div className="relative w-full max-w-[500px] bg-white border border-gray-200 rounded-3xl shadow-xl p-6 sm:p-8">
            <button onClick={() => setShowModal(false)} className="absolute top-5 right-5 w-8 h-8 flex items-center justify-center rounded-full bg-accent-light/50 border border-gray-200 text-foreground/70 hover:text-foreground hover:bg-accent-light transition-all duration-300">&#x2715;</button>
            <h2 className="text-xl font-bold text-foreground tracking-tight mb-7">{editing ? "Edit Category" : "New Category"}</h2>
            <label className="block text-[11px] font-bold tracking-wider text-foreground/60 mb-1.5">NAME</label>
            <input type="text" placeholder="e.g. Lifestyle" value={formName} onChange={(e) => setFormName(e.target.value)} className="w-full border border-gray-200 bg-white rounded-xl px-4 py-3 text-sm text-foreground placeholder-foreground/30 outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all duration-300 mb-5" />
            <label className="block text-[11px] font-bold tracking-wider text-foreground/60 mb-1.5">DESCRIPTION</label>
            <textarea placeholder="Brief description of this category..." value={formDescription} onChange={(e) => setFormDescription(e.target.value)} rows={3} className="w-full border border-gray-200 bg-white rounded-xl px-4 py-3 text-sm text-foreground placeholder-foreground/30 outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all duration-300 mb-6 resize-none" />
            <div className="flex justify-end gap-3">
              <button onClick={() => setShowModal(false)} className="px-5 py-2.5 border border-gray-200 bg-white text-foreground text-xs font-medium tracking-wider rounded-xl hover:bg-accent-light hover:border-gray-300 transition-all duration-300">CANCEL</button>
              <button onClick={handleSave} className="px-5 py-2.5 bg-black text-white text-xs font-bold tracking-wider rounded-xl hover:opacity-90 transition-all duration-300 shadow-lg">SAVE</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
