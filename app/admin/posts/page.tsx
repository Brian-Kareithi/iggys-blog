"use client";

import { useState } from "react";

type PostStatus = "published" | "draft";
type Category = "Travel" | "Style" | "Tech";

interface Post {
  id: number;
  title: string;
  status: PostStatus;
  date: string;
  category: Category;
  views?: number;
}

const initialPosts: Post[] = [
  { id: 1, title: "The Art of Slow Travel", status: "published", date: "30 Jun 2026", category: "Travel", views: 3421 },
  { id: 2, title: "Minimalist Wardrobe Guide", status: "draft", date: "28 Jun 2026", category: "Style", views: 1876 },
  { id: 3, title: "Tech Trends 2026", status: "published", date: "25 Jun 2026", category: "Tech", views: 2890 },
  { id: 4, title: "Coastal Morning Rituals", status: "published", date: "22 Jun 2026", category: "Travel", views: 2156 },
  { id: 5, title: "Urban Jungle Photography", status: "draft", date: "20 Jun 2026", category: "Style", views: 1432 },
];

export default function PostsPage() {
  const [posts, setPosts] = useState<Post[]>(initialPosts);
  const [modalOpen, setModalOpen] = useState(false);
  const [editingPost, setEditingPost] = useState<Post | null>(null);
  const [formTitle, setFormTitle] = useState("");
  const [formCategory, setFormCategory] = useState<Category>("Travel");
  const [formContent, setFormContent] = useState("");
  const [formStatus, setFormStatus] = useState<PostStatus>("draft");
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [dragOver, setDragOver] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPosts = posts.filter((p) =>
    p.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  function openNewPost() {
    setEditingPost(null);
    setFormTitle("");
    setFormCategory("Travel");
    setFormContent("");
    setFormStatus("draft");
    setImagePreview(null);
    setModalOpen(true);
  }

  function openEdit(post: Post) {
    setEditingPost(post);
    setFormTitle(post.title);
    setFormCategory(post.category);
    setFormContent("");
    setFormStatus(post.status);
    setImagePreview(null);
    setModalOpen(true);
  }

  function handleSave() {
    if (!formTitle.trim()) return;
    if (editingPost) {
      setPosts((prev) =>
        prev.map((p) =>
          p.id === editingPost.id
            ? { ...p, title: formTitle, category: formCategory, status: formStatus }
            : p
        )
      );
    } else {
      setPosts((prev) => [
        {
          id: Date.now(),
          title: formTitle,
          status: formStatus,
          date: new Date().toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric" }),
          category: formCategory,
          views: 0,
        },
        ...prev,
      ]);
    }
    setModalOpen(false);
  }

  function handleDelete(id: number) {
    setPosts((prev) => prev.filter((p) => p.id !== id));
  }

  return (
    <div className="flex-1 flex flex-col">
      <header className="flex items-center justify-between px-6 sm:px-10 py-3 sm:py-4 backdrop-blur-2xl bg-white/10 border-b border-white/20 shadow-lg">
        <div className="flex items-center gap-2 text-sm">
          <span className="text-white/60">Dashboard</span>
          <span className="text-white/30">/</span>
          <span className="text-accent font-medium drop-shadow-[0_1px_2px_rgba(0,0,0,0.3)]">All Posts</span>
        </div>
        <div className="flex items-center gap-4 sm:gap-6">
          <div className="hidden sm:block relative">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="absolute left-3.5 top-1/2 -translate-y-1/2 text-white/40 pointer-events-none">
              <circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" />
            </svg>
            <input
              type="text"
              placeholder="Search posts..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-56 lg:w-64 rounded-xl border border-white/20 backdrop-blur-2xl bg-white/10 pl-9 pr-4 py-2 text-sm text-white placeholder-white/40 outline-none focus:border-accent focus:bg-white/15 transition-all duration-300"
            />
          </div>
          <div className="w-9 h-9 rounded-full bg-accent/90 backdrop-blur-md flex items-center justify-center text-white text-xs font-bold cursor-pointer shadow-lg border border-white/20 hover:bg-accent transition-all duration-300">
            IB
          </div>
        </div>
      </header>

      <main className="flex-1 px-6 sm:px-10 py-6 sm:py-8 overflow-y-auto">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6 sm:mb-8">
          <div>
            <h1 className="text-xl sm:text-2xl font-bold text-white tracking-tight drop-shadow-[0_2px_6px_rgba(0,0,0,0.5)]">
              All Posts
            </h1>
            <p className="text-[12px] text-white/40 mt-0.5">{filteredPosts.length} posts total</p>
          </div>
          <button
            onClick={openNewPost}
            className="group flex items-center gap-2 bg-white/10 backdrop-blur-2xl border border-white/20 text-white text-sm font-medium tracking-widest px-6 py-2.5 rounded-xl hover:bg-white/20 hover:border-white/40 hover:shadow-2xl hover:-translate-y-0.5 transition-all duration-300 shadow-lg w-full sm:w-auto justify-center"
          >
            <span className="text-accent group-hover:scale-110 transition-transform duration-300">+</span>
            NEW POST
          </button>
        </div>

        <div className="backdrop-blur-2xl bg-white/10 border border-white/20 rounded-2xl shadow-2xl overflow-hidden">
          <div className="flex items-center px-4 sm:px-6 py-3 sm:py-4 text-[10px] sm:text-xs font-bold tracking-widest text-white/50 uppercase border-b border-white/10 backdrop-blur-md bg-white/5">
            <div className="w-[35%] sm:w-[38%]">Title</div>
            <div className="w-[18%] sm:w-[15%]">Status</div>
            <div className="hidden sm:block w-[15%]">Category</div>
            <div className="hidden md:block w-[12%]">Views</div>
            <div className="hidden sm:block w-[15%]">Date</div>
            <div className="w-[47%] sm:w-[17%] text-right">Actions</div>
          </div>
          {filteredPosts.length === 0 ? (
            <div className="px-6 py-12 text-center text-white/40 text-sm">
              No posts found matching &quot;{searchQuery}&quot;
            </div>
          ) : (
            filteredPosts.map((post, idx) => (
              <div
                key={post.id}
                className={`flex items-center px-4 sm:px-6 py-3 sm:py-4 text-sm transition-all duration-300 ${
                  idx % 2 === 0 ? "bg-white/[0.06] backdrop-blur-sm" : "bg-white/[0.02]"
                } hover:bg-white/15 hover:backdrop-blur-md border-b border-white/5 last:border-b-0`}
              >
                <div className="w-[35%] sm:w-[38%] font-medium text-white truncate pr-2 text-xs sm:text-sm drop-shadow-[0_1px_2px_rgba(0,0,0,0.4)] flex items-center gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent/60 shrink-0" />
                  {post.title}
                </div>
                <div className="w-[18%] sm:w-[15%]">
                  {post.status === "published" ? (
                    <span className="inline-flex items-center gap-1 px-2 sm:px-2.5 py-0.5 rounded-full bg-accent/90 text-white text-[10px] font-medium shadow-md border border-accent/50">
                      <span className="w-1 h-1 rounded-full bg-white" />
                      Pub.
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1 px-2 sm:px-2.5 py-0.5 rounded-full bg-white/5 border border-white/20 text-white/60 text-[10px] font-medium">
                      <span className="w-1 h-1 rounded-full bg-white/30" />
                      Draft
                    </span>
                  )}
                </div>
                <div className="hidden sm:block w-[15%] text-white/50 text-xs">{post.category}</div>
                <div className="hidden md:block w-[12%] text-white/50 text-xs font-medium">{post.views?.toLocaleString()}</div>
                <div className="hidden sm:block w-[15%] text-white/40 text-xs">{post.date}</div>
                <div className="w-[47%] sm:w-[17%] text-right flex items-center justify-end gap-1 sm:gap-2">
                  <button onClick={() => openEdit(post)} className="inline-flex items-center gap-1 px-2 sm:px-3 py-1.5 rounded-lg backdrop-blur-md bg-white/10 border border-white/10 text-white/70 hover:text-white hover:bg-white/20 hover:border-white/30 transition-all duration-300 text-[11px]">
                    &#x270F;&#xFE0F;
                  </button>
                  <button onClick={() => handleDelete(post.id)} className="inline-flex items-center gap-1 px-2 sm:px-3 py-1.5 rounded-lg backdrop-blur-md bg-white/5 border border-white/5 text-white/50 hover:text-red-300 hover:bg-red-500/20 hover:border-red-500/30 transition-all duration-300 text-[11px]">
                    &#x1F5D1;
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </main>

      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-md p-4">
          <div className="relative w-full max-w-[600px] backdrop-blur-3xl bg-white/10 border border-white/20 rounded-3xl shadow-2xl p-6 sm:p-8 max-h-[90vh] overflow-y-auto">
            <button onClick={() => setModalOpen(false)} className="absolute top-5 right-5 w-8 h-8 flex items-center justify-center rounded-full backdrop-blur-md bg-white/10 border border-white/20 text-white/70 hover:text-white hover:bg-white/20 transition-all duration-300">&#x2715;</button>
            <h2 className="text-xl font-bold text-white tracking-tight mb-7 drop-shadow-[0_2px_6px_rgba(0,0,0,0.5)]">
              {editingPost ? "Edit Post" : "New Post"}
            </h2>
            <label className="block text-[11px] font-bold tracking-wider text-white/60 mb-1.5">TITLE</label>
            <input type="text" placeholder="Post title..." value={formTitle} onChange={(e) => setFormTitle(e.target.value)} className="w-full border-2 border-white/20 backdrop-blur-2xl bg-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-white/30 outline-none focus:border-accent focus:bg-white/15 transition-all duration-300 mb-5" />
            <label className="block text-[11px] font-bold tracking-wider text-white/60 mb-1.5">CATEGORY</label>
            <select value={formCategory} onChange={(e) => setFormCategory(e.target.value as Category)} className="w-full border-2 border-white/20 backdrop-blur-2xl bg-white/10 rounded-xl px-4 py-3 text-sm text-white outline-none focus:border-accent focus:bg-white/15 transition-all duration-300 mb-5 appearance-none">
              {["Travel", "Style", "Tech"].map((c) => (<option key={c} value={c} className="bg-[#1A1A1A]/95 text-white">{c}</option>))}
            </select>
            <label className="block text-[11px] font-bold tracking-wider text-white/60 mb-1.5">CONTENT</label>
            <div className="border border-white/20 backdrop-blur-2xl bg-white/5 rounded-xl mb-5 overflow-hidden">
              <div className="flex items-center gap-1.5 px-3 py-2 border-b border-white/10 bg-white/5">
                {[{ title: "Bold", d: "M15.6 10.79c.97-.67 1.65-1.77 1.65-2.79 0-2.26-1.75-4-4-4H7v14h7.04c2.09 0 3.71-1.7 3.71-3.79 0-1.52-.86-2.82-2.15-3.42zM10 6.5h3c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5h-3v-3zm3.5 9H10v-3h3.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5z" }, { title: "Italic", d: "M10 4v3h2.21l-3.42 8H6v3h8v-3h-2.21l3.42-8H18V4z" }].map((icon) => (
                  <button key={icon.title} className="p-1.5 rounded-lg text-accent hover:bg-white/10 transition-colors" title={icon.title}><svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d={icon.d} /></svg></button>
                ))}
                <span className="w-px h-4 bg-white/10 mx-0.5" />
                {[{ title: "Link", d: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71", d2: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" }, { title: "Quote", d: "M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z" }].map((icon) => (
                  <button key={icon.title} className="p-1.5 rounded-lg text-accent hover:bg-white/10 transition-colors" title={icon.title}><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">{icon.d2 ? <><path d={icon.d} /><path d={icon.d2} /></> : <path d={icon.d} />}</svg></button>
                ))}
              </div>
              <textarea placeholder="Write your post content here..." value={formContent} onChange={(e) => setFormContent(e.target.value)} rows={6} className="w-full px-4 py-3 text-sm text-white placeholder-white/30 outline-none resize-none bg-transparent" />
            </div>
            <label className="block text-[11px] font-bold tracking-wider text-white/60 mb-1.5">FEATURED IMAGE</label>
            <div onDragOver={(e) => { e.preventDefault(); setDragOver(true); }} onDragLeave={() => setDragOver(false)} onDrop={(e) => { e.preventDefault(); setDragOver(false); const file = e.dataTransfer.files?.[0]; if (file) setImagePreview(URL.createObjectURL(file)); }}
              className={`border-2 border-dashed rounded-2xl p-6 sm:p-8 text-center cursor-pointer transition-all duration-300 mb-6 backdrop-blur-2xl ${dragOver ? "border-accent bg-accent/15" : "border-white/20 hover:border-accent/60 bg-white/5 hover:bg-white/10"}`}
              onClick={() => document.getElementById("image-upload")?.click()}
            >
              {imagePreview ? (
                <div className="relative w-full h-40 sm:h-48">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={imagePreview} alt="Preview" className="w-full h-full object-cover rounded-xl" />
                  <button onClick={(e) => { e.stopPropagation(); setImagePreview(null); }} className="absolute top-2 right-2 w-7 h-7 flex items-center justify-center rounded-full bg-black/60 text-white backdrop-blur-md hover:bg-black/80 transition-all duration-300">&#x2715;</button>
                </div>
              ) : (
                <div className="text-white/50">
                  <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="mx-auto mb-3 text-accent/60"><rect x="3" y="3" width="18" height="18" rx="2" ry="2" /><circle cx="8.5" cy="8.5" r="1.5" /><polyline points="21 15 16 10 5 21" /></svg>
                  <p className="text-sm text-white/60">Drag & drop or <span className="text-accent underline underline-offset-2">browse</span></p>
                  <p className="text-[11px] text-white/30 mt-1">PNG, JPG, WebP up to 5MB</p>
                </div>
              )}
              <input id="image-upload" type="file" accept="image/*" onChange={(e) => { const file = e.target.files?.[0]; if (file) setImagePreview(URL.createObjectURL(file)); }} className="hidden" />
            </div>
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-0 pt-2">
              <div className="flex items-center gap-3">
                <span className="text-[11px] font-bold tracking-wider text-white/60">STATUS</span>
                <button onClick={() => setFormStatus(formStatus === "draft" ? "published" : "draft")}
                  className={`relative w-12 h-6 rounded-full transition-all duration-300 ${formStatus === "published" ? "bg-accent shadow-md shadow-accent/30" : "bg-white/20"}`}>
                  <span className={`absolute top-0.5 left-0.5 w-5 h-5 rounded-full bg-white shadow-lg transition-all duration-300 ${formStatus === "published" ? "translate-x-6" : "translate-x-0"}`} />
                </button>
                <span className="text-xs text-white/60 font-medium">{formStatus === "published" ? "Published" : "Draft"}</span>
              </div>
              <div className="flex items-center gap-3 w-full sm:w-auto">
                <button onClick={() => { setFormStatus("draft"); handleSave(); }} className="flex-1 sm:flex-initial px-5 py-2.5 border-2 border-white/20 backdrop-blur-2xl bg-white/5 text-white text-xs font-medium tracking-wider rounded-xl hover:bg-white/15 hover:border-white/40 transition-all duration-300">SAVE DRAFT</button>
                <button onClick={() => { setFormStatus("published"); handleSave(); }} className="flex-1 sm:flex-initial px-5 py-2.5 bg-black text-white text-xs font-bold tracking-wider rounded-xl hover:opacity-90 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5">PUBLISH NOW</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
