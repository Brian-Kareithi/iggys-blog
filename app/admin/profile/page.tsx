"use client";

import { useState } from "react";

export default function ProfilePage() {
  const [name, setName] = useState("Iggy");
  const [email, setEmail] = useState("iggy@iggysblog.com");
  const [bio, setBio] = useState("Storyteller, minimalist, and curator of words. Sharing perspectives on travel, style, and technology.");
  const [location, setLocation] = useState("Nairobi, Kenya");
  const [website, setWebsite] = useState("iggysblog.com");
  const [saved, setSaved] = useState(false);

  function handleSave() {
    setSaved(true);
    setTimeout(() => setSaved(false), 2500);
  }

  return (
    <div className="flex-1 flex flex-col">
      <header className="flex items-center justify-between px-6 sm:px-10 py-3 sm:py-4 bg-white border-b border-gray-200 shadow-sm">
        <div className="flex items-center gap-2 text-sm">
          <span className="text-foreground/60">Dashboard</span>
          <span className="text-foreground/30">/</span>
          <span className="text-accent font-medium">Profile</span>
        </div>
        <div className="flex items-center gap-4">
          <div className="w-9 h-9 rounded-full bg-accent flex items-center justify-center text-white text-xs font-bold cursor-pointer shadow-lg hover:bg-accent/90 transition-all duration-300">IB</div>
        </div>
      </header>

      <main className="flex-1 px-6 sm:px-10 py-6 sm:py-8 overflow-y-auto">
        <h1 className="text-xl sm:text-2xl font-bold text-foreground tracking-tight mb-7">Profile</h1>

        <div className="bg-white border border-gray-200 rounded-2xl shadow-lg p-6 sm:p-8">
          {/* Avatar section */}
          <div className="flex flex-col sm:flex-row items-center gap-6 pb-6 sm:pb-8 border-b border-gray-100 mb-6 sm:mb-8">
            <div className="w-20 h-20 rounded-full bg-accent flex items-center justify-center text-white text-2xl font-bold shadow-xl border-2 border-white">
              IB
            </div>
            <div className="text-center sm:text-left">
              <h2 className="text-lg font-bold text-foreground">{name}</h2>
              <p className="text-sm text-foreground/50">{email}</p>
              <p className="text-xs text-accent mt-1">Member since Jan 2026</p>
            </div>
            <button className="sm:ml-auto px-5 py-2 border border-gray-200 bg-white text-foreground text-xs font-medium tracking-wider rounded-xl hover:bg-accent-light hover:border-gray-300 transition-all duration-300">CHANGE AVATAR</button>
          </div>

          {/* Form */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
            <div>
              <label className="block text-[11px] font-bold tracking-wider text-foreground/60 mb-1.5">DISPLAY NAME</label>
              <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="w-full border border-gray-200 bg-white rounded-xl px-4 py-3 text-sm text-foreground placeholder-foreground/30 outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all duration-300" />
            </div>
            <div>
              <label className="block text-[11px] font-bold tracking-wider text-foreground/60 mb-1.5">EMAIL</label>
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full border border-gray-200 bg-white rounded-xl px-4 py-3 text-sm text-foreground placeholder-foreground/30 outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all duration-300" />
            </div>
            <div className="sm:col-span-2">
              <label className="block text-[11px] font-bold tracking-wider text-foreground/60 mb-1.5">BIO</label>
              <textarea value={bio} onChange={(e) => setBio(e.target.value)} rows={3} className="w-full border border-gray-200 bg-white rounded-xl px-4 py-3 text-sm text-foreground placeholder-foreground/30 outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all duration-300 resize-none" />
            </div>
            <div>
              <label className="block text-[11px] font-bold tracking-wider text-foreground/60 mb-1.5">LOCATION</label>
              <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} className="w-full border border-gray-200 bg-white rounded-xl px-4 py-3 text-sm text-foreground placeholder-foreground/30 outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all duration-300" />
            </div>
            <div>
              <label className="block text-[11px] font-bold tracking-wider text-foreground/60 mb-1.5">WEBSITE</label>
              <input type="text" value={website} onChange={(e) => setWebsite(e.target.value)} className="w-full border border-gray-200 bg-white rounded-xl px-4 py-3 text-sm text-foreground placeholder-foreground/30 outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all duration-300" />
            </div>
          </div>

          <div className="flex items-center justify-between pt-6 sm:pt-8 mt-6 sm:mt-8 border-t border-gray-100">
            <p className="text-xs text-foreground/40">Last updated 2 days ago</p>
            <button onClick={handleSave} className="px-8 py-2.5 bg-black text-white text-xs font-bold tracking-wider rounded-xl hover:opacity-90 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5">
              {saved ? "SAVED" : "SAVE CHANGES"}
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
