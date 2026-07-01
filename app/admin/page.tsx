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
}

const initialPosts: Post[] = [
  { id: 1, title: "The Art of Slow Travel", status: "published", date: "30 Jun 2026", category: "Travel" },
  { id: 2, title: "Minimalist Wardrobe Guide", status: "draft", date: "28 Jun 2026", category: "Style" },
  { id: 3, title: "Tech Trends 2026", status: "published", date: "25 Jun 2026", category: "Tech" },
];

const sidebarItems = [
  { emoji: "\uD83D\uDCCA", label: "DASHBOARD", active: true },
  { emoji: "\uD83D\uDCDD", label: "ALL POSTS", active: false },
  { emoji: "\u2795", label: "NEW POST", active: false },
  { emoji: "\uD83C\uDFF7", label: "CATEGORIES", active: false },
  { emoji: "\uD83D\uDC64", label: "PROFILE", active: false },
  { emoji: "\u2699", label: "SETTINGS", active: false },
];

export default function AdminDashboard() {
  const [posts, setPosts] = useState<Post[]>(initialPosts);
  const [modalOpen, setModalOpen] = useState(false);
  const [editingPost, setEditingPost] = useState<Post | null>(null);
  const [formTitle, setFormTitle] = useState("");
  const [formCategory, setFormCategory] = useState<Category>("Travel");
  const [formContent, setFormContent] = useState("");
  const [formStatus, setFormStatus] = useState<PostStatus>("draft");
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [dragOver, setDragOver] = useState(false);

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
      const newPost: Post = {
        id: Date.now(),
        title: formTitle,
        status: formStatus,
        date: new Date().toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric" }).replace(/ /g, " "),
        category: formCategory,
      };
      setPosts((prev) => [newPost, ...prev]);
    }
    setModalOpen(false);
  }

  function handleDelete(id: number) {
    setPosts((prev) => prev.filter((p) => p.id !== id));
  }

  function handleImageUpload(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (file) {
      setImagePreview(URL.createObjectURL(file));
    }
  }

  function handleDrop(e: React.DragEvent) {
    e.preventDefault();
    setDragOver(false);
    const file = e.dataTransfer.files?.[0];
    if (file) {
      setImagePreview(URL.createObjectURL(file));
    }
  }

  return (
    <div className="flex min-h-screen bg-background">
      {/* Sidebar */}
      <aside className="w-[220px] shrink-0 bg-[#1A1A1A] flex flex-col justify-between py-8 px-6">
        <div>
          <div className="flex items-center gap-1.5 mb-10">
            <span className="text-white text-xl font-bold tracking-wider">IGGY&rsquo;S BLOG</span>
            <span className="w-2 h-2 rounded-full bg-accent" />
          </div>
          <nav className="flex flex-col gap-1">
            {sidebarItems.map((item) => (
              <div
                key={item.label}
                className={`flex items-center gap-3 px-3 py-2.5 text-sm tracking-[0.15em] cursor-pointer transition-colors ${
                  item.active
                    ? "text-white border-l-[3px] border-accent pl-[9px] bg-white/5"
                    : "text-zinc-400 hover:text-white border-l-[3px] border-transparent pl-[9px]"
                }`}
              >
                <span className="text-base">{item.emoji}</span>
                <span className="text-xs tracking-[0.2em]">{item.label}</span>
              </div>
            ))}
          </nav>
        </div>
        <div className="flex items-center gap-3 px-3 py-2.5 text-[#AAAAAA] cursor-pointer hover:text-white transition-colors text-xs tracking-wider">
          <span className="text-base">&#x1F6AA;</span>
          <span>LOGOUT</span>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-h-screen">
        {/* Top Nav */}
        <header className="flex items-center justify-between px-10 py-4 border-b border-accent/20 bg-background">
          <div className="flex items-center gap-2 text-sm">
            <span className="text-zinc-500">Dashboard</span>
            <span className="text-zinc-300">/</span>
            <span className="text-accent font-medium">All Posts</span>
          </div>
          <div className="flex items-center gap-6">
            <div className="relative">
              <input
                type="text"
                placeholder="Search posts..."
                className="w-60 rounded-md border border-black/20 bg-white px-4 py-2 text-sm text-foreground placeholder-zinc-400 outline-none focus:border-accent transition-colors"
              />
            </div>
            <div className="relative cursor-pointer">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1A1A1A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
                <path d="M13.73 21a2 2 0 0 1-3.46 0" />
              </svg>
              <span className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full bg-accent" />
            </div>
            <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center text-white text-xs font-bold cursor-pointer">
              IB
            </div>
          </div>
        </header>

        {/* Content: Posts Table */}
        <main className="flex-1 px-10 py-8 overflow-y-auto">
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-2xl font-bold text-foreground tracking-tight">All Posts</h1>
            <button
              onClick={openNewPost}
              className="bg-black text-white text-sm font-medium tracking-widest px-6 py-2.5 hover:opacity-90 transition-opacity"
            >
              + NEW POST
            </button>
          </div>

          <div className="rounded-sm overflow-hidden">
            <div className="flex items-center px-6 py-3 text-xs font-bold tracking-widest text-zinc-500 uppercase">
              <div className="w-[45%]">Title</div>
              <div className="w-[20%]">Status</div>
              <div className="w-[20%]">Date</div>
              <div className="w-[15%] text-right">Actions</div>
            </div>
            {posts.map((post, idx) => (
              <div
                key={post.id}
                className={`flex items-center px-6 py-4 text-sm ${
                  idx % 2 === 0 ? "bg-white" : "bg-[#F0EFED]"
                }`}
              >
                <div className="w-[45%] font-medium text-foreground truncate pr-4">
                  {post.title}
                </div>
                <div className="w-[20%]">
                  {post.status === "published" ? (
                    <span className="inline-block px-3 py-1 rounded-full bg-accent text-white text-[11px] font-medium tracking-wide">
                      Published
                    </span>
                  ) : (
                    <span className="inline-block px-3 py-1 rounded-full border border-zinc-400 text-zinc-500 text-[11px] font-medium tracking-wide">
                      Draft
                    </span>
                  )}
                </div>
                <div className="w-[20%] text-zinc-500 text-sm">{post.date}</div>
                <div className="w-[15%] text-right text-sm text-foreground">
                  <button onClick={() => openEdit(post)} className="hover:underline mr-3">
                    &#x270F;&#xFE0F; Edit
                  </button>
                  <button onClick={() => handleDelete(post.id)} className="hover:underline">
                    &#x1F5D1; Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>

      {/* Edit / Create Modal */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
          <div className="relative w-full max-w-[600px] bg-white rounded-lg shadow-xl p-8 mx-4 max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setModalOpen(false)}
              className="absolute top-5 right-5 text-foreground text-xl leading-none hover:opacity-60 transition-opacity"
            >
              &#x2715;
            </button>

            <h2 className="text-lg font-bold text-foreground tracking-tight mb-6">
              {editingPost ? "Edit Post" : "New Post"}
            </h2>

            <label className="block text-xs font-bold tracking-wider text-foreground mb-1.5">
              TITLE
            </label>
            <input
              type="text"
              placeholder="Post title..."
              value={formTitle}
              onChange={(e) => setFormTitle(e.target.value)}
              className="w-full border-2 border-accent rounded px-4 py-2.5 text-sm text-foreground placeholder-zinc-400 outline-none focus:border-accent mb-5"
            />

            <label className="block text-xs font-bold tracking-wider text-foreground mb-1.5">
              CATEGORY
            </label>
            <select
              value={formCategory}
              onChange={(e) => setFormCategory(e.target.value as Category)}
              className="w-full border-2 border-accent rounded px-4 py-2.5 text-sm text-foreground bg-white outline-none focus:border-accent mb-5 appearance-none"
            >
              <option>Travel</option>
              <option>Style</option>
              <option>Tech</option>
            </select>

            <label className="block text-xs font-bold tracking-wider text-foreground mb-1.5">
              CONTENT
            </label>
            <div className="border border-accent/30 rounded mb-5 overflow-hidden">
              <div className="flex items-center gap-2 px-3 py-2 border-b border-accent/20 bg-zinc-50">
                <button className="p-1 rounded text-accent hover:bg-accent/10 transition-colors" title="Bold">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M15.6 10.79c.97-.67 1.65-1.77 1.65-2.79 0-2.26-1.75-4-4-4H7v14h7.04c2.09 0 3.71-1.7 3.71-3.79 0-1.52-.86-2.82-2.15-3.42zM10 6.5h3c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5h-3v-3zm3.5 9H10v-3h3.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5z"/></svg>
                </button>
                <button className="p-1 rounded text-accent hover:bg-accent/10 transition-colors" title="Italic">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M10 4v3h2.21l-3.42 8H6v3h8v-3h-2.21l3.42-8H18V4z"/></svg>
                </button>
                <button className="p-1 rounded text-accent hover:bg-accent/10 transition-colors" title="Link">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>
                </button>
                <button className="p-1 rounded text-accent hover:bg-accent/10 transition-colors" title="Quote">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z"/></svg>
                </button>
              </div>
              <textarea
                placeholder="Write your post content here..."
                value={formContent}
                onChange={(e) => setFormContent(e.target.value)}
                rows={6}
                className="w-full px-4 py-3 text-sm text-foreground placeholder-zinc-400 outline-none resize-none"
              />
            </div>

            <label className="block text-xs font-bold tracking-wider text-foreground mb-1.5">
              FEATURED IMAGE
            </label>
            <div
              onDragOver={(e) => { e.preventDefault(); setDragOver(true); }}
              onDragLeave={() => setDragOver(false)}
              onDrop={handleDrop}
              className={`border-2 border-dashed rounded p-6 text-center cursor-pointer transition-colors mb-6 ${
                dragOver ? "border-accent bg-accent/5" : "border-accent/50 hover:border-accent"
              }`}
              onClick={() => document.getElementById("image-upload")?.click()}
            >
              {imagePreview ? (
                <div className="relative w-full h-40">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={imagePreview} alt="Preview" className="w-full h-full object-cover rounded" />
                  <button
                    onClick={(e) => { e.stopPropagation(); setImagePreview(null); }}
                    className="absolute top-2 right-2 bg-black/60 text-white w-6 h-6 rounded-full text-sm flex items-center justify-center hover:bg-black/80"
                  >
                    &#x2715;
                  </button>
                </div>
              ) : (
                <div className="text-accent">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="mx-auto mb-2">
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                    <circle cx="8.5" cy="8.5" r="1.5" />
                    <polyline points="21 15 16 10 5 21" />
                  </svg>
                  <p className="text-sm">Drag & drop or click to upload</p>
                </div>
              )}
              <input id="image-upload" type="file" accept="image/*" onChange={handleImageUpload} className="hidden" />
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="text-xs font-bold tracking-wider text-foreground">STATUS</span>
                <button
                  onClick={() => setFormStatus(formStatus === "draft" ? "published" : "draft")}
                  className={`relative w-12 h-6 rounded-full transition-colors ${
                    formStatus === "published" ? "bg-accent" : "bg-zinc-300"
                  }`}
                >
                  <span
                    className={`absolute top-0.5 left-0.5 w-5 h-5 rounded-full bg-white shadow transition-transform ${
                      formStatus === "published" ? "translate-x-6" : "translate-x-0"
                    }`}
                  />
                </button>
                <span className="text-xs text-zinc-500 font-medium">
                  {formStatus === "published" ? "Published" : "Draft"}
                </span>
              </div>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => { setFormStatus("draft"); handleSave(); }}
                  className="px-5 py-2 border-2 border-black text-black text-xs font-medium tracking-wider hover:bg-black hover:text-white transition-colors"
                >
                  SAVE DRAFT
                </button>
                <button
                  onClick={() => { setFormStatus("published"); handleSave(); }}
                  className="px-5 py-2 bg-black text-white text-xs font-medium tracking-wider hover:opacity-90 transition-opacity"
                >
                  PUBLISH NOW
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
