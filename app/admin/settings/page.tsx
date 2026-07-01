"use client";

import { useState } from "react";

export default function SettingsPage() {
  const [blogTitle, setBlogTitle] = useState("IGGY'S BLOG");
  const [tagline, setTagline] = useState("Thoughts, Stories & Ideas");
  const [language, setLanguage] = useState("English");
  const [postsPerPage, setPostsPerPage] = useState("6");
  const [enableComments, setEnableComments] = useState(true);
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [saved, setSaved] = useState(false);

  function handleSave() {
    setSaved(true);
    setTimeout(() => setSaved(false), 2500);
  }

  return (
    <div className="flex-1 flex flex-col">
      <header className="flex items-center justify-between px-6 sm:px-10 py-3 sm:py-4 backdrop-blur-2xl bg-white/10 border-b border-white/20 shadow-lg">
        <div className="flex items-center gap-2 text-sm">
          <span className="text-white/60">Dashboard</span>
          <span className="text-white/30">/</span>
          <span className="text-accent font-medium drop-shadow-[0_1px_2px_rgba(0,0,0,0.3)]">Settings</span>
        </div>
        <div className="flex items-center gap-4">
          <div className="w-9 h-9 rounded-full bg-accent/90 backdrop-blur-md flex items-center justify-center text-white text-xs font-bold cursor-pointer shadow-lg border border-white/20 hover:bg-accent transition-all duration-300">IB</div>
        </div>
      </header>

      <main className="flex-1 px-6 sm:px-10 py-6 sm:py-8 overflow-y-auto">
        <h1 className="text-xl sm:text-2xl font-bold text-white tracking-tight drop-shadow-[0_2px_6px_rgba(0,0,0,0.5)] mb-7">Settings</h1>

        <div className="space-y-5">
          {/* General */}
          <div className="backdrop-blur-2xl bg-white/10 border border-white/20 rounded-2xl shadow-2xl p-6 sm:p-8">
            <h2 className="text-sm font-bold tracking-wider text-white/60 uppercase mb-5">General</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="sm:col-span-2">
                <label className="block text-[11px] font-bold tracking-wider text-white/60 mb-1.5">BLOG TITLE</label>
                <input type="text" value={blogTitle} onChange={(e) => setBlogTitle(e.target.value)} className="w-full border-2 border-white/20 backdrop-blur-2xl bg-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-white/30 outline-none focus:border-accent focus:bg-white/15 transition-all duration-300" />
              </div>
              <div className="sm:col-span-2">
                <label className="block text-[11px] font-bold tracking-wider text-white/60 mb-1.5">TAGLINE</label>
                <input type="text" value={tagline} onChange={(e) => setTagline(e.target.value)} className="w-full border-2 border-white/20 backdrop-blur-2xl bg-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-white/30 outline-none focus:border-accent focus:bg-white/15 transition-all duration-300" />
              </div>
              <div>
                <label className="block text-[11px] font-bold tracking-wider text-white/60 mb-1.5">LANGUAGE</label>
                <select value={language} onChange={(e) => setLanguage(e.target.value)} className="w-full border-2 border-white/20 backdrop-blur-2xl bg-white/10 rounded-xl px-4 py-3 text-sm text-white outline-none focus:border-accent focus:bg-white/15 transition-all duration-300 appearance-none">
                  {["English", "Spanish", "French", "Swahili"].map((l) => (<option key={l} value={l} className="bg-[#1A1A1A]/95 text-white">{l}</option>))}
                </select>
              </div>
              <div>
                <label className="block text-[11px] font-bold tracking-wider text-white/60 mb-1.5">POSTS PER PAGE</label>
                <select value={postsPerPage} onChange={(e) => setPostsPerPage(e.target.value)} className="w-full border-2 border-white/20 backdrop-blur-2xl bg-white/10 rounded-xl px-4 py-3 text-sm text-white outline-none focus:border-accent focus:bg-white/15 transition-all duration-300 appearance-none">
                  {["3", "6", "9", "12"].map((n) => (<option key={n} value={n} className="bg-[#1A1A1A]/95 text-white">{n}</option>))}
                </select>
              </div>
            </div>
          </div>

          {/* Preferences */}
          <div className="backdrop-blur-2xl bg-white/10 border border-white/20 rounded-2xl shadow-2xl p-6 sm:p-8">
            <h2 className="text-sm font-bold tracking-wider text-white/60 uppercase mb-5">Preferences</h2>
            <div className="space-y-4">
              {[
                { label: "Enable Comments", desc: "Allow readers to comment on your posts", value: enableComments, set: setEnableComments },
                { label: "Email Notifications", desc: "Get notified when someone subscribes or comments", value: emailNotifications, set: setEmailNotifications },
              ].map((item) => (
                <div key={item.label} className="flex items-center justify-between py-2">
                  <div>
                    <p className="text-sm font-medium text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.3)]">{item.label}</p>
                    <p className="text-[12px] text-white/40">{item.desc}</p>
                  </div>
                  <button onClick={() => item.set(!item.value)} className={`relative w-11 h-6 rounded-full transition-all duration-300 shrink-0 ${item.value ? "bg-accent shadow-md shadow-accent/30" : "bg-white/20"}`}>
                    <span className={`absolute top-0.5 left-0.5 w-5 h-5 rounded-full bg-white shadow-lg transition-all duration-300 ${item.value ? "translate-x-5" : "translate-x-0"}`} />
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Danger Zone */}
          <div className="backdrop-blur-2xl bg-white/5 border border-red-500/20 rounded-2xl shadow-2xl p-6 sm:p-8">
            <h2 className="text-sm font-bold tracking-wider text-red-400/80 uppercase mb-2">Danger Zone</h2>
            <p className="text-[12px] text-white/40 mb-5">Irreversible actions that cannot be undone.</p>
            <div className="flex flex-col sm:flex-row gap-3">
              <button className="px-5 py-2.5 border-2 border-red-500/30 text-red-400 text-xs font-medium tracking-wider rounded-xl hover:bg-red-500/10 hover:border-red-500/50 transition-all duration-300 backdrop-blur-lg">EXPORT ALL DATA</button>
              <button className="px-5 py-2.5 bg-red-500/20 border border-red-500/30 text-red-400 text-xs font-bold tracking-wider rounded-xl hover:bg-red-500/30 transition-all duration-300">DELETE BLOG</button>
            </div>
          </div>
        </div>

        <div className="flex justify-end mt-6">
          <button onClick={handleSave} className="px-8 py-2.5 bg-black text-white text-xs font-bold tracking-wider rounded-xl hover:opacity-90 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5">
            {saved ? "\u2713 SAVED" : "SAVE SETTINGS"}
          </button>
        </div>
      </main>
    </div>
  );
}
