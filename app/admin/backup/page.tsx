"use client";

import { useState } from "react";

interface Backup {
  id: number;
  date: string;
  size: string;
  type: "manual" | "automatic";
}

const initialBackups: Backup[] = [
  { id: 1, date: "30 Jun 2026, 3:00 AM", size: "24.5 MB", type: "automatic" },
  { id: 2, date: "29 Jun 2026, 3:00 AM", size: "24.3 MB", type: "automatic" },
  { id: 3, date: "28 Jun 2026, 11:30 PM", size: "24.1 MB", type: "manual" },
  { id: 4, date: "28 Jun 2026, 3:00 AM", size: "23.9 MB", type: "automatic" },
  { id: 5, date: "27 Jun 2026, 3:00 AM", size: "23.7 MB", type: "automatic" },
];

export default function BackupPage() {
  const [backups, setBackups] = useState(initialBackups);
  const [autoBackup, setAutoBackup] = useState(true);
  const [backingUp, setBackingUp] = useState(false);

  function handleManualBackup() {
    setBackingUp(true);
    setTimeout(() => {
      setBackups((prev) => [
        { id: Date.now(), date: new Date().toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric" }) + ", " + new Date().toLocaleTimeString("en-GB", { hour: "2-digit", minute: "2-digit" }), size: "24.7 MB", type: "manual" as const },
        ...prev,
      ]);
      setBackingUp(false);
    }, 2000);
  }

  const lastBackup = backups[0];

  return (
    <div className="flex-1 flex flex-col">
      <header className="flex items-center justify-between px-6 sm:px-10 py-3 sm:py-4 bg-white border-b border-gray-200 shadow-sm">
        <div className="flex items-center gap-2 text-sm">
          <span className="text-foreground/60">Dashboard</span>
          <span className="text-foreground/30">/</span>
          <span className="text-accent font-medium">Backup</span>
        </div>
        <div className="flex items-center gap-4">
          <div className="w-9 h-9 rounded-full bg-accent flex items-center justify-center text-white text-xs font-bold cursor-pointer shadow-lg hover:bg-accent/90 transition-all duration-300">IB</div>
        </div>
      </header>

      <main className="flex-1 px-6 sm:px-10 py-6 sm:py-8 overflow-y-auto">
        <h1 className="text-xl sm:text-2xl font-bold text-foreground tracking-tight mb-7">Backup</h1>

        {/* Status & Controls */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mb-8">
          {/* Status */}
          <div className="bg-white border border-gray-200 rounded-2xl shadow-lg p-6 sm:p-8">
            <h2 className="text-sm font-bold tracking-wider text-foreground/60 uppercase mb-5">Backup Status</h2>
            {lastBackup ? (
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <span className="w-2.5 h-2.5 rounded-full bg-accent" />
                  <span className="text-sm text-foreground font-medium">Last Backup</span>
                </div>
                <p className="text-foreground/70 text-sm ml-5">{lastBackup.date}</p>
                <div className="flex items-center gap-4 ml-5 mt-2">
                  <div className="flex items-center gap-1.5">
                    <span className="text-[11px] text-foreground/40">Size:</span>
                    <span className="text-xs text-foreground/70 font-medium">{lastBackup.size}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-[11px] text-foreground/40">Type:</span>
                    <span className="text-xs text-accent font-medium capitalize">{lastBackup.type}</span>
                  </div>
                </div>
              </div>
            ) : (
              <p className="text-foreground/40 text-sm">No backups yet</p>
            )}
            <div className="mt-6 pt-5 border-t border-gray-100">
              <button
                onClick={handleManualBackup}
                disabled={backingUp}
                className="w-full px-6 py-3 bg-black text-white text-xs font-bold tracking-wider rounded-xl hover:opacity-90 transition-all duration-300 shadow-lg disabled:opacity-40 disabled:cursor-not-allowed"
              >
                {backingUp ? "BACKING UP..." : "RUN MANUAL BACKUP"}
              </button>
            </div>
          </div>

          {/* Auto Backup Toggle */}
          <div className="bg-white border border-gray-200 rounded-2xl shadow-lg p-6 sm:p-8">
            <h2 className="text-sm font-bold tracking-wider text-foreground/60 uppercase mb-5">Schedule</h2>
            <div className="flex items-center justify-between py-3">
              <div>
                <p className="text-sm font-medium text-foreground">Automatic Daily Backups</p>
                <p className="text-[12px] text-foreground/40 mt-0.5">Daily backup at 3:00 AM server time</p>
              </div>
              <button onClick={() => setAutoBackup(!autoBackup)} className={`relative w-11 h-6 rounded-full transition-all duration-300 shrink-0 ${autoBackup ? "bg-accent shadow-md shadow-accent/30" : "bg-gray-200"}`}>
                <span className={`absolute top-0.5 left-0.5 w-5 h-5 rounded-full bg-white shadow-lg transition-all duration-300 ${autoBackup ? "translate-x-5" : "translate-x-0"}`} />
              </button>
            </div>
            <div className="mt-4 pt-4 border-t border-gray-100">
              <div className="flex items-center justify-between text-sm">
                <span className="text-foreground/50">Total backups stored</span>
                <span className="text-foreground font-medium">{backups.length}</span>
              </div>
              <div className="flex items-center justify-between text-sm mt-2">
                <span className="text-foreground/50">Total size</span>
                <span className="text-foreground font-medium">
                  {backups.reduce((acc, b) => acc + parseFloat(b.size), 0).toFixed(1)} MB
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Backup List */}
        <div className="bg-white border border-gray-200 rounded-2xl shadow-lg overflow-hidden">
          <div className="flex items-center justify-between px-5 sm:px-6 py-3.5 sm:py-4 border-b border-gray-100 bg-accent-light/50">
            <span className="text-xs font-bold tracking-widest text-foreground/60 uppercase">Backup History</span>
          </div>
          <div className="divide-y divide-gray-100">
            {backups.map((backup) => (
              <div key={backup.id} className="flex items-center px-4 sm:px-6 py-3 sm:py-3.5 hover:bg-gray-50 transition-all duration-300">
                <div className={`w-7 h-7 rounded-lg flex items-center justify-center text-xs shrink-0 ${backup.type === "automatic" ? "bg-accent/20 text-accent" : "bg-blue-500/20 text-blue-400"}`}>
                  {backup.type === "automatic" ? "Au" : "Ma"}
                </div>
                <div className="ml-3 flex-1 min-w-0">
                  <p className="text-sm text-foreground">{backup.date}</p>
                  <p className="text-[11px] text-foreground/40 capitalize">{backup.type} backup &bull; {backup.size}</p>
                </div>
                <div className="flex items-center gap-2 shrink-0 ml-3">
                  <button className="px-3 py-1.5 rounded-lg bg-accent-light/50 border border-gray-100 text-foreground/70 hover:text-foreground hover:bg-accent-light hover:border-gray-200 transition-all duration-300 text-[11px]">DOWNLOAD</button>
                  <button className="px-3 py-1.5 rounded-lg bg-transparent border border-transparent text-foreground/50 hover:text-accent hover:bg-accent/20 hover:border-accent/30 transition-all duration-300 text-[11px]">RESTORE</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
