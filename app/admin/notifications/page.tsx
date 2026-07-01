"use client";

import { useState } from "react";

const notificationTypes = [
  { key: "comments", label: "New Comments", desc: "When someone leaves a comment on your posts" },
  { key: "subscribers", label: "New Subscribers", desc: "When someone subscribes to your newsletter" },
  { key: "logins", label: "Failed Login Attempts", desc: "When someone fails to log into your account" },
  { key: "messages", label: "Contact Messages", desc: "When someone sends you a message via the contact form" },
];

const recentNotifications = [
  { id: 1, type: "comment", message: "Maria K. commented on \"The Art of Slow Travel\"", time: "12 min ago", read: false },
  { id: 2, type: "subscriber", message: "Sarah Mitchell subscribed to the newsletter", time: "1 hr ago", read: false },
  { id: 3, type: "message", message: "James Chen sent you a message: \"Tech Sponsorship\"", time: "3 hr ago", read: false },
  { id: 4, type: "login", message: "Failed login attempt from IP 203.0.113.42", time: "6 hr ago", read: true },
  { id: 5, type: "comment", message: "Elena Rodriguez replied to your comment", time: "8 hr ago", read: true },
  { id: 6, type: "subscriber", message: "Chloe Tanaka subscribed to the newsletter", time: "1 day ago", read: true },
  { id: 7, type: "message", message: "Aisha Patel sent you a message: \"Interview Request\"", time: "2 days ago", read: true },
];

const typeIcons: Record<string, string> = {
  comment: "\uD83D\uDCAC",
  subscriber: "\uD83D\uDCE7",
  message: "\uD83D\uDCE8",
  login: "\uD83D\uDD12",
};

export default function NotificationsPage() {
  const [settings, setSettings] = useState({
    comments: true,
    subscribers: true,
    logins: false,
    messages: true,
  });
  const [notifications, setNotifications] = useState(recentNotifications);

  function toggleSetting(key: string) {
    setSettings((prev) => ({ ...prev, [key]: !(prev as Record<string, boolean>)[key] }));
  }

  function markAllRead() {
    setNotifications((prev) => prev.map((n) => ({ ...n, read: true })));
  }

  return (
    <div className="flex-1 flex flex-col">
      <header className="flex items-center justify-between px-6 sm:px-10 py-3 sm:py-4 backdrop-blur-2xl bg-white/10 border-b border-white/20 shadow-lg">
        <div className="flex items-center gap-2 text-sm">
          <span className="text-white/60">Dashboard</span>
          <span className="text-white/30">/</span>
          <span className="text-accent font-medium drop-shadow-[0_1px_2px_rgba(0,0,0,0.3)]">Notifications</span>
        </div>
        <div className="flex items-center gap-4">
          <div className="w-9 h-9 rounded-full bg-accent/90 backdrop-blur-md flex items-center justify-center text-white text-xs font-bold cursor-pointer shadow-lg border border-white/20 hover:bg-accent transition-all duration-300">IB</div>
        </div>
      </header>

      <main className="flex-1 px-6 sm:px-10 py-6 sm:py-8 overflow-y-auto">
        <h1 className="text-xl sm:text-2xl font-bold text-white tracking-tight drop-shadow-[0_2px_6px_rgba(0,0,0,0.5)] mb-7">Notifications</h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          {/* Settings */}
          <div className="backdrop-blur-2xl bg-white/10 border border-white/20 rounded-2xl shadow-2xl p-6 sm:p-8">
            <h2 className="text-sm font-bold tracking-wider text-white/60 uppercase mb-5">Notification Preferences</h2>
            <div className="space-y-4">
              {notificationTypes.map((nt) => (
                <div key={nt.key} className="flex items-center justify-between py-2.5">
                  <div>
                    <p className="text-sm font-medium text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.3)]">{nt.label}</p>
                    <p className="text-[12px] text-white/40">{nt.desc}</p>
                  </div>
                  <button
                    onClick={() => toggleSetting(nt.key)}
                    className={`relative w-11 h-6 rounded-full transition-all duration-300 shrink-0 ${(settings as Record<string, boolean>)[nt.key] ? "bg-accent shadow-md shadow-accent/30" : "bg-white/20"}`}
                  >
                    <span className={`absolute top-0.5 left-0.5 w-5 h-5 rounded-full bg-white shadow-lg transition-all duration-300 ${(settings as Record<string, boolean>)[nt.key] ? "translate-x-5" : "translate-x-0"}`} />
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Notifications */}
          <div className="backdrop-blur-2xl bg-white/10 border border-white/20 rounded-2xl shadow-2xl overflow-hidden">
            <div className="flex items-center justify-between px-5 sm:px-6 py-3.5 sm:py-4 border-b border-white/10 backdrop-blur-md bg-white/5">
              <div className="flex items-center gap-2.5">
                <span className="text-xs font-bold tracking-widest text-white/60 uppercase">Recent Notifications</span>
                {notifications.filter((n) => !n.read).length > 0 && (
                  <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-accent/30 text-accent text-[10px] font-bold">
                    {notifications.filter((n) => !n.read).length}
                  </span>
                )}
              </div>
              {notifications.some((n) => !n.read) && (
                <button onClick={markAllRead} className="text-[10px] text-accent/70 hover:text-accent font-medium transition-colors">
                  MARK ALL READ
                </button>
              )}
            </div>
            <div className="divide-y divide-white/5">
              {notifications.map((n) => (
                <div key={n.id} className={`flex items-start px-5 sm:px-6 py-3 sm:py-3.5 hover:bg-white/10 transition-all duration-300 ${!n.read ? "bg-white/[0.04]" : ""}`}>
                  <div className={`w-7 h-7 rounded-full flex items-center justify-center text-xs shrink-0 ${
                    n.type === "comment" ? "bg-blue-500/20 text-blue-400" :
                    n.type === "subscriber" ? "bg-accent/20 text-accent" :
                    n.type === "message" ? "bg-yellow-500/20 text-yellow-400" :
                    "bg-red-500/20 text-red-400"
                  }`}>
                    {typeIcons[n.type]}
                  </div>
                  <div className="ml-3 flex-1 min-w-0">
                    <p className={`text-sm ${n.read ? "text-white/60" : "text-white font-medium"} drop-shadow-[0_1px_2px_rgba(0,0,0,0.3)]`}>
                      {n.message}
                    </p>
                  </div>
                  <div className="flex items-center gap-2 shrink-0 ml-3">
                    {!n.read && <span className="w-1.5 h-1.5 rounded-full bg-accent" />}
                    <span className="text-[11px] text-white/40">{n.time}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
