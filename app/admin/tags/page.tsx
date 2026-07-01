"use client";

import { useState } from "react";

const initialTags = [
  { id: 1, name: "AI", postCount: 12 },
  { id: 2, name: "Coding", postCount: 8 },
  { id: 3, name: "Life", postCount: 15 },
  { id: 4, name: "Travel", postCount: 20 },
  { id: 5, name: "Books", postCount: 6 },
  { id: 6, name: "Coffee", postCount: 4 },
  { id: 7, name: "Programming", postCount: 9 },
  { id: 8, name: "Design", postCount: 7 },
];

const tagColors = ["#7B8C6E", "#C49A6C", "#6B8FA3", "#C96B6B", "#8B6BA3", "#6BA38B", "#A38B6B", "#C48BA3"];

export default function TagsPage() {
  const [tags, setTags] = useState(initialTags);
  const [newTagName, setNewTagName] = useState("");

  function handleAdd() {
    const name = newTagName.trim();
    if (!name) return;
    if (tags.some((t) => t.name.toLowerCase() === name.toLowerCase())) return;
    setTags((prev) => [...prev, { id: Date.now(), name, postCount: 0 }]);
    setNewTagName("");
  }

  function handleDelete(id: number) {
    setTags((prev) => prev.filter((t) => t.id !== id));
  }

  return (
    <div className="flex-1 flex flex-col">
      <header className="flex items-center justify-between px-6 sm:px-10 py-3 sm:py-4 bg-white border-b border-gray-200 shadow-sm">
        <div className="flex items-center gap-2 text-sm">
          <span className="text-foreground/60">Dashboard</span>
          <span className="text-foreground/30">/</span>
          <span className="text-accent font-medium">Tags</span>
        </div>
        <div className="flex items-center gap-4">
          <div className="w-9 h-9 rounded-full bg-accent flex items-center justify-center text-white text-xs font-bold cursor-pointer shadow-lg hover:bg-accent/90 transition-all duration-300">IB</div>
        </div>
      </header>

      <main className="flex-1 px-6 sm:px-10 py-6 sm:py-8 overflow-y-auto">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6 sm:mb-8">
          <div>
            <h1 className="text-xl sm:text-2xl font-bold text-foreground tracking-tight">Tags</h1>
            <p className="text-[12px] text-foreground/40 mt-0.5">{tags.length} tags</p>
          </div>
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <input
              type="text"
              placeholder="New tag name..."
              value={newTagName}
              onChange={(e) => setNewTagName(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleAdd()}
              className="flex-1 sm:w-48 border border-gray-200 bg-white rounded-xl px-4 py-2.5 text-sm text-foreground placeholder-foreground/30 outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all duration-300"
            />
            <button onClick={handleAdd} className="group flex items-center gap-2 bg-black text-white text-xs font-bold tracking-wider px-5 py-2.5 rounded-xl hover:opacity-90 transition-all duration-300 shadow-lg whitespace-nowrap">
              ADD TAG
            </button>
          </div>
        </div>

        <div className="flex flex-wrap gap-3">
          {tags.map((tag, i) => (
            <div
              key={tag.id}
              className="group bg-white border border-gray-200 rounded-2xl px-5 py-3.5 shadow-lg hover:bg-gray-50 hover:border-gray-300 transition-all duration-300 flex items-center gap-4"
            >
              <div className="w-2 h-2 rounded-full shrink-0" style={{ backgroundColor: tagColors[i % tagColors.length] }} />
              <div>
                <p className="text-sm font-medium text-foreground">{tag.name}</p>
                <p className="text-[11px] text-foreground/40">{tag.postCount} {tag.postCount === 1 ? "post" : "posts"}</p>
              </div>
              <button onClick={() => handleDelete(tag.id)} className="ml-2 p-1.5 rounded-lg text-foreground/40 hover:text-red-500 hover:bg-red-50 transition-all duration-300 text-xs opacity-0 group-hover:opacity-100">
                Delete
              </button>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
