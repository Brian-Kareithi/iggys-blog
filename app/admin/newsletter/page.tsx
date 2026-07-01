"use client";

import { useState } from "react";

interface Subscriber {
  id: number;
  name: string;
  email: string;
  date: string;
  status: "active" | "unsubscribed";
}

const initialSubscribers: Subscriber[] = [
  { id: 1, name: "Sarah Mitchell", email: "sarah.m@example.com", date: "30 Jun 2026", status: "active" },
  { id: 2, name: "James Chen", email: "j.chen@example.com", date: "29 Jun 2026", status: "active" },
  { id: 3, name: "Elena Rodriguez", email: "elena.r@example.com", date: "28 Jun 2026", status: "active" },
  { id: 4, name: "Marcus Webb", email: "marcus.w@example.com", date: "27 Jun 2026", status: "active" },
  { id: 5, name: "Aisha Patel", email: "aisha.p@example.com", date: "26 Jun 2026", status: "active" },
  { id: 6, name: "Liam O'Brien", email: "liam.ob@example.com", date: "25 Jun 2026", status: "unsubscribed" },
  { id: 7, name: "Chloe Tanaka", email: "chloe.t@example.com", date: "24 Jun 2026", status: "active" },
  { id: 8, name: "David Kim", email: "david.k@example.com", date: "23 Jun 2026", status: "unsubscribed" },
];

export default function NewsletterPage() {
  const [subscribers, setSubscribers] = useState(initialSubscribers);
  const [subject, setSubject] = useState("");
  const [content, setContent] = useState("");
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const total = subscribers.length;
  const active = subscribers.filter((s) => s.status === "active").length;
  const unsubscribed = subscribers.filter((s) => s.status === "unsubscribed").length;

  function handleSend() {
    if (!subject.trim() || !content.trim()) return;
    setSending(true);
    setTimeout(() => {
      setSending(false);
      setSent(true);
      setSubject("");
      setContent("");
      setTimeout(() => setSent(false), 3000);
    }, 1500);
  }

  function handleExport() {
    const csv = "Name,Email,Date,Status\n" + subscribers.map((s) => `${s.name},${s.email},${s.date},${s.status}`).join("\n");
    const blob = new Blob([csv], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "subscribers.csv";
    a.click();
    URL.revokeObjectURL(url);
  }

  return (
    <div className="flex-1 flex flex-col">
      <header className="flex items-center justify-between px-6 sm:px-10 py-3 sm:py-4 bg-white border-b border-gray-200 shadow-sm">
        <div className="flex items-center gap-2 text-sm">
          <span className="text-foreground/60">Dashboard</span>
          <span className="text-foreground/30">/</span>
          <span className="text-accent font-medium">Newsletter</span>
        </div>
        <div className="flex items-center gap-4">
          <div className="w-9 h-9 rounded-full bg-accent flex items-center justify-center text-white text-xs font-bold cursor-pointer shadow-lg hover:bg-accent/90 transition-all duration-300">IB</div>
        </div>
      </header>

      <main className="flex-1 px-6 sm:px-10 py-6 sm:py-8 overflow-y-auto">
        <h1 className="text-xl sm:text-2xl font-bold text-foreground tracking-tight mb-7">Newsletter</h1>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5 mb-8">
          {[
            { label: "Total Subscribers", value: total, color: "text-foreground" },
            { label: "Active", value: active, color: "text-accent" },
            { label: "Unsubscribed", value: unsubscribed, color: "text-red-400" },
          ].map((stat) => (
            <div key={stat.label} className="bg-white border border-gray-200 rounded-2xl px-5 sm:px-6 py-5 sm:py-6 shadow-lg">
              <p className="text-[11px] font-bold tracking-wider text-foreground/50 uppercase">{stat.label}</p>
              <p className={`text-2xl sm:text-3xl font-bold mt-1 ${stat.color}`}>{stat.value}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-6 mb-8">
          {/* Subscribers List */}
          <div className="bg-white border border-gray-200 rounded-2xl shadow-lg overflow-hidden">
            <div className="flex items-center justify-between px-5 sm:px-6 py-3.5 sm:py-4 border-b border-gray-100 bg-accent-light/50">
              <span className="text-xs font-bold tracking-widest text-foreground/60 uppercase">Subscribers</span>
              <button onClick={handleExport} className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-accent-light/50 border border-gray-100 text-foreground/70 hover:text-foreground hover:bg-accent-light transition-all duration-300 text-[11px]">
                &#x1F4E4; EXPORT CSV
              </button>
            </div>
            <div className="divide-y divide-gray-100">
              {subscribers.map((sub) => (
                <div key={sub.id} className="flex items-center px-5 sm:px-6 py-3 sm:py-3.5 hover:bg-gray-50 transition-all duration-300">
                  <div className="w-7 h-7 rounded-full bg-accent/20 border border-accent/30 flex items-center justify-center text-accent text-[10px] font-bold shrink-0">
                    {sub.name.split(" ").map((n) => n[0]).join("")}
                  </div>
                  <div className="ml-3 flex-1 min-w-0">
                    <p className="text-sm font-medium text-foreground truncate">{sub.name}</p>
                    <p className="text-[11px] text-foreground/40 truncate">{sub.email}</p>
                  </div>
                  <div className="text-right shrink-0 ml-3">
                    <p className="text-[11px] text-foreground/50">{sub.date}</p>
                    <span className={`text-[10px] font-medium ${sub.status === "active" ? "text-accent" : "text-red-400"}`}>{sub.status}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Send Newsletter */}
          <div className="bg-white border border-gray-200 rounded-2xl shadow-lg p-6 sm:p-8">
            <h2 className="text-sm font-bold tracking-wider text-foreground/60 uppercase mb-5">Send Newsletter</h2>
            <label className="block text-[11px] font-bold tracking-wider text-foreground/60 mb-1.5">SUBJECT</label>
            <input type="text" placeholder="Newsletter subject..." value={subject} onChange={(e) => setSubject(e.target.value)} className="w-full border border-gray-200 bg-white rounded-xl px-4 py-3 text-sm text-foreground placeholder-foreground/30 outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all duration-300 mb-5" />
            <label className="block text-[11px] font-bold tracking-wider text-foreground/60 mb-1.5">CONTENT</label>
            <textarea placeholder="Write your newsletter content..." value={content} onChange={(e) => setContent(e.target.value)} rows={8} className="w-full border border-gray-200 bg-white rounded-xl px-4 py-3 text-sm text-foreground placeholder-foreground/30 outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all duration-300 mb-6 resize-none" />
            <div className="flex items-center justify-between">
              <p className="text-xs text-foreground/40">Sending to {active} active subscribers</p>
              <button
                onClick={handleSend}
                disabled={sending || !subject.trim() || !content.trim()}
                className="px-6 py-2.5 bg-black text-white text-xs font-bold tracking-wider rounded-xl hover:opacity-90 transition-all duration-300 shadow-lg disabled:opacity-40 disabled:cursor-not-allowed"
              >
                {sending ? "SENDING..." : sent ? "\u2713 SENT!" : "SEND NEWSLETTER"}
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
