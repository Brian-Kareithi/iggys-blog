"use client";

import { useState } from "react";

interface Comment {
  id: number;
  author: string;
  avatar: string;
  content: string;
  post: string;
  date: string;
  status: "pending" | "approved" | "spam";
}

const initialComments: Comment[] = [
  { id: 1, author: "Maria K.", avatar: "MK", content: "Absolutely loved this piece! The way you describe the coastal mornings makes me want to pack my bags right now.", post: "Coastal Morning Rituals", date: "2 hours ago", status: "pending" },
  { id: 2, author: "James Chen", avatar: "JC", content: "Great insights on tech trends for 2026. Would love to see a follow-up on AI predictions.", post: "Tech Trends 2026", date: "5 hours ago", status: "approved" },
  { id: 3, author: "Sarah Mitchell", avatar: "SM", content: "I've been following your travel series and this one is by far the best. Keep it up!", post: "The Art of Slow Travel", date: "8 hours ago", status: "approved" },
  { id: 4, author: "Liam O'Brien", avatar: "LO", content: "Check out my blog for more minimalist fashion tips! link.me/minimalist", post: "Minimalist Wardrobe Guide", date: "1 day ago", status: "spam" },
  { id: 5, author: "Elena Rodriguez", avatar: "ER", content: "This is so inspiring. I've been trying to adopt a more mindful travel approach.", post: "The Art of Slow Travel", date: "1 day ago", status: "approved" },
  { id: 6, author: "Chloe Tanaka", avatar: "CT", content: "Could you share the camera equipment you use for your photography?", post: "Urban Jungle Photography", date: "2 days ago", status: "pending" },
  { id: 7, author: "Aisha Patel", avatar: "AP", content: "Great read! Added to my bookmarks. Looking forward to more content like this.", post: "Tech Trends 2026", date: "2 days ago", status: "approved" },
  { id: 8, author: "BuyCheapNow", avatar: "BC", content: "Amazing article! Click here for cheap products!!!", post: "Coastal Morning Rituals", date: "3 days ago", status: "spam" },
];

export default function CommentsPage() {
  const [comments, setComments] = useState(initialComments);
  const [filter, setFilter] = useState<"all" | "pending" | "approved" | "spam">("all");
  const [replyModal, setReplyModal] = useState<{ id: number; author: string } | null>(null);
  const [replyText, setReplyText] = useState("");

  const filtered = filter === "all" ? comments : comments.filter((c) => c.status === filter);

  function handleApprove(id: number) {
    setComments((prev) => prev.map((c) => (c.id === id ? { ...c, status: "approved" as const } : c)));
  }

  function handleDelete(id: number) {
    setComments((prev) => prev.filter((c) => c.id !== id));
  }

  function handleSpamToggle(id: number) {
    setComments((prev) =>
      prev.map((c) => (c.id === id ? { ...c, status: c.status === "spam" ? ("pending" as const) : ("spam" as const) } : c))
    );
  }

  function handleReply() {
    if (!replyText.trim()) return;
    setReplyModal(null);
    setReplyText("");
  }

  const statusCounts = {
    all: comments.length,
    pending: comments.filter((c) => c.status === "pending").length,
    approved: comments.filter((c) => c.status === "approved").length,
    spam: comments.filter((c) => c.status === "spam").length,
  };

  return (
    <div className="flex-1 flex flex-col">
      <header className="flex items-center justify-between px-6 sm:px-10 py-3 sm:py-4 bg-white border-b border-gray-200 shadow-sm">
        <div className="flex items-center gap-2 text-sm">
          <span className="text-foreground/60">Dashboard</span>
          <span className="text-foreground/30">/</span>
          <span className="text-accent font-medium">Comments</span>
        </div>
        <div className="flex items-center gap-4">
          <div className="w-9 h-9 rounded-full bg-accent flex items-center justify-center text-white text-xs font-bold cursor-pointer shadow-lg hover:bg-accent/90 transition-all duration-300">IB</div>
        </div>
      </header>

      <main className="flex-1 px-6 sm:px-10 py-6 sm:py-8 overflow-y-auto">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6 sm:mb-8">
          <h1 className="text-xl sm:text-2xl font-bold text-foreground tracking-tight">Comments</h1>
          <div className="flex items-center gap-2 flex-wrap">
            {(["all", "pending", "approved", "spam"] as const).map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-4 py-2 text-[11px] font-bold tracking-wider rounded-xl transition-all duration-300 ${
                  filter === f
                    ? "bg-accent-light text-foreground border border-gray-200 shadow-sm"
                    : "bg-white text-foreground/50 border border-gray-100 hover:bg-accent-light/50 hover:text-foreground"
                }`}
              >
                {f.charAt(0).toUpperCase() + f.slice(1)} ({statusCounts[f]})
              </button>
            ))}
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-2xl shadow-lg overflow-hidden">
          <div className="flex items-center px-4 sm:px-6 py-3 sm:py-4 text-[10px] sm:text-xs font-bold tracking-widest text-foreground/50 uppercase border-b border-gray-100 bg-accent-light/50">
            <div className="w-[22%] sm:w-[18%]">Author</div>
            <div className="w-[30%] sm:w-[34%]">Comment</div>
            <div className="hidden sm:block w-[16%]">Post</div>
            <div className="hidden sm:block w-[12%]">Date</div>
            <div className="w-[12%]">Status</div>
            <div className="w-[36%] sm:w-[20%] text-right">Actions</div>
          </div>
          {filtered.map((c) => (
            <div key={c.id} className="flex items-center px-4 sm:px-6 py-3 sm:py-4 text-sm border-b border-gray-100 last:border-b-0 hover:bg-gray-50 transition-all duration-300">
              <div className="w-[22%] sm:w-[18%] flex items-center gap-2.5 min-w-0">
                <div className="w-7 h-7 rounded-full bg-accent/20 border border-accent/30 flex items-center justify-center text-accent text-[10px] font-bold shrink-0">{c.avatar}</div>
                <span className="text-foreground text-xs truncate">{c.author}</span>
              </div>
              <div className="w-[30%] sm:w-[34%] min-w-0 pr-2">
                <p className="text-foreground/70 text-xs truncate">{c.content}</p>
              </div>
              <div className="hidden sm:block w-[16%] text-foreground/40 text-xs truncate pr-2">{c.post}</div>
              <div className="hidden sm:block w-[12%] text-foreground/40 text-xs">{c.date}</div>
              <div className="w-[12%]">
                {c.status === "approved" ? (
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-accent text-white text-[10px] font-medium shadow-sm border border-accent/50">
                    <span className="w-1 h-1 rounded-full bg-white" />
                    Approved
                  </span>
                ) : c.status === "pending" ? (
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-yellow-500/20 text-yellow-400 text-[10px] font-medium border border-yellow-500/30">
                    <span className="w-1 h-1 rounded-full bg-yellow-400" />
                    Pending
                  </span>
                ) : (
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-red-500/20 text-red-400 text-[10px] font-medium border border-red-500/30">
                    <span className="w-1 h-1 rounded-full bg-red-400" />
                    Spam
                  </span>
                )}
              </div>
              <div className="w-[36%] sm:w-[20%] text-right flex items-center justify-end gap-1 sm:gap-2">
                {c.status !== "approved" && (
                  <button onClick={() => handleApprove(c.id)} className="px-2 sm:px-3 py-1.5 rounded-lg bg-accent-light/50 border border-gray-100 text-foreground/70 hover:text-accent hover:bg-accent/20 hover:border-accent/30 transition-all duration-300 text-[11px]" title="Approve">
                    Approve
                  </button>
                )}
                  <button onClick={() => handleSpamToggle(c.id)} className={`px-2 sm:px-3 py-1.5 rounded-lg border transition-all duration-300 text-[11px] ${c.status === "spam" ? "bg-yellow-500/20 border-yellow-500/30 text-yellow-400" : "bg-accent-light/50 border-gray-100 text-foreground/70 hover:bg-red-50 hover:border-red-200 hover:text-red-500"}`} title={c.status === "spam" ? "Not spam" : "Mark spam"}>
                  Spam
                </button>
                <button onClick={() => setReplyModal({ id: c.id, author: c.author })} className="px-2 sm:px-3 py-1.5 rounded-lg bg-accent-light/50 border border-gray-100 text-foreground/70 hover:text-blue-500 hover:bg-blue-50 hover:border-blue-200 transition-all duration-300 text-[11px]" title="Reply">
                  Reply
                </button>
                <button onClick={() => handleDelete(c.id)} className="px-2 sm:px-3 py-1.5 rounded-lg bg-transparent border border-transparent text-foreground/50 hover:text-red-500 hover:bg-red-50 hover:border-red-200 transition-all duration-300 text-[11px]" title="Delete">
                  Delete
                </button>
              </div>
            </div>
          ))}
          {filtered.length === 0 && (
            <div className="px-6 py-12 text-center text-foreground/40 text-sm">No comments found.</div>
          )}
        </div>
      </main>

      {replyModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/60 p-4">
          <div className="relative w-full max-w-[500px] bg-white border border-gray-200 rounded-3xl shadow-xl p-6 sm:p-8">
            <button onClick={() => setReplyModal(null)} className="absolute top-5 right-5 w-8 h-8 flex items-center justify-center rounded-full bg-accent-light/50 border border-gray-200 text-foreground/70 hover:text-foreground hover:bg-accent-light transition-all duration-300">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
            </button>
            <h2 className="text-xl font-bold text-foreground tracking-tight mb-2">Reply to {replyModal.author}</h2>
            <p className="text-xs text-foreground/40 mb-6">Your reply will be posted as a response to this comment.</p>
            <textarea
              placeholder="Write your reply..."
              value={replyText}
              onChange={(e) => setReplyText(e.target.value)}
              rows={4}
              className="w-full border border-gray-200 bg-white rounded-xl px-4 py-3 text-sm text-foreground placeholder-foreground/30 outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all duration-300 mb-6 resize-none"
            />
            <div className="flex justify-end gap-3">
              <button onClick={() => setReplyModal(null)} className="px-5 py-2.5 border border-gray-200 bg-white text-foreground text-xs font-medium tracking-wider rounded-xl hover:bg-accent-light hover:border-gray-300 transition-all duration-300">CANCEL</button>
              <button onClick={handleReply} className="px-5 py-2.5 bg-black text-white text-xs font-bold tracking-wider rounded-xl hover:opacity-90 transition-all duration-300 shadow-lg">SEND REPLY</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
