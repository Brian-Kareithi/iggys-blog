"use client";

import { useState } from "react";

interface Message {
  id: number;
  sender: string;
  email: string;
  subject: string;
  message: string;
  date: string;
  status: "unread" | "read" | "archived";
}

const initialMessages: Message[] = [
  { id: 1, sender: "Sarah Mitchell", email: "sarah.m@example.com", subject: "Collaboration Inquiry", message: "Hi Iggy! I absolutely love your blog and would love to collaborate on a guest post about sustainable travel. I've been following your work for a while and think we could create something amazing together. Let me know if you're interested!", date: "Today, 9:34 AM", status: "unread" },
  { id: 2, sender: "James Chen", email: "j.chen@example.com", subject: "Tech Sponsorship", message: "Hello, I'm reaching out from TechCorp about a potential sponsorship opportunity. We'd love to feature our new product on your blog. Please let me know if you're open to discussing this further. Happy to provide more details.", date: "Yesterday, 4:20 PM", status: "unread" },
  { id: 3, sender: "Elena Rodriguez", email: "elena.r@example.com", subject: "Question about your travel gear", message: "Hey Iggy! I'm planning a trip to Kenya and was wondering what camera gear you use for your travel photography. Your photos are absolutely stunning and I'd love to get some recommendations!", date: "Yesterday, 11:05 AM", status: "read" },
  { id: 4, sender: "Marcus Webb", email: "marcus.w@example.com", subject: "Broken Link Report", message: "Hi, I noticed that the link to your minimalist wardrobe guide on the homepage is broken. It's pointing to a 404 page. Just wanted to give you a heads up! Love the content by the way.", date: "2 days ago", status: "read" },
  { id: 5, sender: "Aisha Patel", email: "aisha.p@example.com", subject: "Interview Request", message: "Dear Iggy, I'm a journalist for Digital Trends Magazine and I'd love to interview you about your journey as a blogger and your take on the future of digital content creation. Would you be available for a 30-minute call next week?", date: "2 days ago", status: "read" },
  { id: 6, sender: "Liam O'Brien", email: "liam.ob@example.com", subject: "Advertising Partnership", message: "Hey! We're looking to advertise on high-quality blogs and I think your audience would be a great fit. Our brand focuses on eco-friendly products. Would you be open to discussing rates?", date: "3 days ago", status: "archived" },
];

export default function MessagesPage() {
  const [messages, setMessages] = useState(initialMessages);
  const [selected, setSelected] = useState<Message | null>(null);
  const [replyModal, setReplyModal] = useState(false);
  const [replyText, setReplyText] = useState("");

  function handleSelect(msg: Message) {
    setSelected(msg);
    if (msg.status === "unread") {
      setMessages((prev) => prev.map((m) => (m.id === msg.id ? { ...m, status: "read" as const } : m)));
    }
  }

  function handleArchive(id: number) {
    setMessages((prev) => prev.map((m) => (m.id === id ? { ...m, status: "archived" as const } : m)));
    if (selected?.id === id) setSelected(null);
  }

  function handleDelete(id: number) {
    setMessages((prev) => prev.filter((m) => m.id !== id));
    if (selected?.id === id) setSelected(null);
  }

  function handleSendReply() {
    if (!replyText.trim()) return;
    setReplyModal(false);
    setReplyText("");
  }

  return (
    <div className="flex-1 flex flex-col">
      <header className="flex items-center justify-between px-6 sm:px-10 py-3 sm:py-4 bg-white border-b border-gray-200 shadow-sm">
        <div className="flex items-center gap-2 text-sm">
          <span className="text-foreground/60">Dashboard</span>
          <span className="text-foreground/30">/</span>
          <span className="text-accent font-medium">Messages</span>
        </div>
        <div className="flex items-center gap-4">
          <div className="w-9 h-9 rounded-full bg-accent flex items-center justify-center text-white text-xs font-bold cursor-pointer shadow-lg hover:bg-accent/90 transition-all duration-300">IB</div>
        </div>
      </header>

      <main className="flex-1 px-6 sm:px-10 py-6 sm:py-8 overflow-y-auto">
        <h1 className="text-xl sm:text-2xl font-bold text-foreground tracking-tight mb-7">Messages</h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          {/* Inbox */}
          <div className="bg-white border border-gray-200 rounded-2xl shadow-lg overflow-hidden">
            <div className="flex items-center justify-between px-5 sm:px-6 py-3.5 sm:py-4 border-b border-gray-100 bg-accent-light/50">
              <span className="text-xs font-bold tracking-widest text-foreground/60 uppercase">Inbox</span>
              <span className="text-[10px] text-foreground/30">{messages.filter((m) => m.status !== "archived").length} messages</span>
            </div>
            <div className="divide-y divide-gray-100">
              {messages.filter((m) => m.status !== "archived").length === 0 ? (
                <div className="px-6 py-12 text-center text-foreground/40 text-sm">No messages.</div>
              ) : (
                messages.filter((m) => m.status !== "archived").map((msg) => (
                  <div
                    key={msg.id}
                    onClick={() => handleSelect(msg)}
                    className={`flex items-start px-5 sm:px-6 py-3.5 cursor-pointer transition-all duration-300 ${
                      selected?.id === msg.id ? "bg-gray-50" : "hover:bg-gray-50"
                    } ${msg.status === "unread" ? "border-l-2 border-accent" : ""}`}
                  >
                    <div className={`w-7 h-7 rounded-full flex items-center justify-center text-[10px] font-bold shrink-0 ${
                      msg.status === "unread" ? "bg-accent/30 text-accent border border-accent/40" : "bg-accent-light/50 text-foreground/50 border border-gray-100"
                    }`}>
                      {msg.sender.split(" ").map((n) => n[0]).join("")}
                    </div>
                    <div className="ml-3 flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-2">
                        <p className={`text-sm truncate ${msg.status === "unread" ? "text-foreground font-semibold" : "text-foreground/70"}`}>{msg.sender}</p>
                        <span className="text-[10px] text-foreground/40 shrink-0">{msg.date}</span>
                      </div>
                      <p className="text-xs text-foreground/50 truncate mt-0.5">{msg.subject}</p>
                      <p className="text-[11px] text-foreground/40 truncate mt-0.5">{msg.message.slice(0, 80)}...</p>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>

          {/* Message Detail */}
          <div className="bg-white border border-gray-200 rounded-2xl shadow-lg p-5 sm:p-6 min-h-[300px]">
            {selected ? (
              <div>
                <div className="flex items-start justify-between mb-5">
                  <div>
                    <h2 className="text-base font-bold text-foreground">{selected.subject}</h2>
                    <div className="flex items-center gap-2 mt-1.5">
                      <span className="text-sm text-foreground/70">{selected.sender}</span>
                      <span className="text-[11px] text-foreground/40">&lt;{selected.email}&gt;</span>
                    </div>
                    <p className="text-[11px] text-foreground/40 mt-1">{selected.date}</p>
                  </div>
                </div>
                <div className="bg-accent-light/50 rounded-xl p-4 mb-5 border border-gray-100">
                  <p className="text-sm text-foreground/80 leading-relaxed whitespace-pre-wrap">{selected.message}</p>
                </div>
                <div className="flex items-center gap-3">
                  <button onClick={() => setReplyModal(true)} className="px-4 py-2 bg-black text-white text-xs font-bold tracking-wider rounded-xl hover:opacity-90 transition-all duration-300 shadow-lg">REPLY</button>
                  <button onClick={() => handleArchive(selected.id)} className="px-4 py-2 border border-gray-200 bg-white text-foreground text-xs font-medium tracking-wider rounded-xl hover:bg-accent-light hover:border-gray-300 transition-all duration-300">ARCHIVE</button>
                  <button onClick={() => handleDelete(selected.id)} className="px-4 py-2 border-2 border-red-500/30 text-red-400 text-xs font-medium tracking-wider rounded-xl hover:bg-red-500/10 hover:border-red-500/50 transition-all duration-300">DELETE</button>
                </div>
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center h-full text-center py-12">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="mb-4 text-foreground/30"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                <p className="text-foreground/50 text-sm">Select a message to read</p>
                <p className="text-foreground/30 text-xs mt-1">Click on any message from the inbox</p>
              </div>
            )}
          </div>
        </div>
      </main>

      {replyModal && selected && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/60 p-4">
          <div className="relative w-full max-w-[500px] bg-white border border-gray-200 rounded-3xl shadow-xl p-6 sm:p-8">
            <button onClick={() => setReplyModal(false)} className="absolute top-5 right-5 w-8 h-8 flex items-center justify-center rounded-full bg-accent-light/50 border border-gray-200 text-foreground/70 hover:text-foreground hover:bg-accent-light transition-all duration-300">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
            </button>
            <h2 className="text-xl font-bold text-foreground tracking-tight mb-2">Reply to {selected.sender}</h2>
            <p className="text-xs text-foreground/40 mb-6">Re: {selected.subject}</p>
            <textarea
              placeholder="Write your reply..."
              value={replyText}
              onChange={(e) => setReplyText(e.target.value)}
              rows={6}
              className="w-full border border-gray-200 bg-white rounded-xl px-4 py-3 text-sm text-foreground placeholder-foreground/30 outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all duration-300 mb-6 resize-none"
            />
            <div className="flex justify-end gap-3">
              <button onClick={() => setReplyModal(false)} className="px-5 py-2.5 border border-gray-200 bg-white text-foreground text-xs font-medium tracking-wider rounded-xl hover:bg-accent-light hover:border-gray-300 transition-all duration-300">CANCEL</button>
              <button onClick={handleSendReply} className="px-5 py-2.5 bg-black text-white text-xs font-bold tracking-wider rounded-xl hover:opacity-90 transition-all duration-300 shadow-lg">SEND REPLY</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
