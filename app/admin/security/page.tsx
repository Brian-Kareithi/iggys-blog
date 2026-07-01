"use client";

import { useState } from "react";

const loginHistory = [
  { id: 1, date: "Today, 8:32 AM", ip: "192.168.1.42", device: "Chrome / Windows", status: "success" as const },
  { id: 2, date: "Yesterday, 11:15 PM", ip: "192.168.1.42", device: "Chrome / Windows", status: "success" as const },
  { id: 3, date: "Yesterday, 3:40 PM", ip: "10.0.0.5", device: "Safari / macOS", status: "failed" as const },
  { id: 4, date: "28 Jun 2026, 9:05 AM", ip: "192.168.1.42", device: "Chrome / Windows", status: "success" as const },
  { id: 5, date: "27 Jun 2026, 6:30 PM", ip: "203.0.113.42", device: "Firefox / Linux", status: "failed" as const },
  { id: 6, date: "27 Jun 2026, 10:12 AM", ip: "192.168.1.42", device: "Chrome / Windows", status: "success" as const },
];

const activeSessions = [
  { id: 1, device: "Chrome / Windows", ip: "192.168.1.42", lastActive: "Now", current: true },
  { id: 2, device: "Safari / macOS", ip: "10.0.0.5", lastActive: "3 hours ago", current: false },
  { id: 3, device: "Chrome / Android", ip: "172.16.0.8", lastActive: "1 day ago", current: false },
];

export default function SecurityPage() {
  const [twoFactor, setTwoFactor] = useState(false);
  const [showPasswordReset, setShowPasswordReset] = useState(false);
  const [sessions, setSessions] = useState(activeSessions);

  function handleRevoke(id: number) {
    setSessions((prev) => prev.filter((s) => s.id !== id));
  }

  return (
    <div className="flex-1 flex flex-col">
      <header className="flex items-center justify-between px-6 sm:px-10 py-3 sm:py-4 bg-white border-b border-gray-200 shadow-sm">
        <div className="flex items-center gap-2 text-sm">
          <span className="text-foreground/60">Dashboard</span>
          <span className="text-foreground/30">/</span>
          <span className="text-accent font-medium">Security</span>
        </div>
        <div className="flex items-center gap-4">
          <div className="w-9 h-9 rounded-full bg-accent flex items-center justify-center text-white text-xs font-bold cursor-pointer shadow-lg hover:bg-accent/90 transition-all duration-300">IB</div>
        </div>
      </header>

      <main className="flex-1 px-6 sm:px-10 py-6 sm:py-8 overflow-y-auto">
        <h1 className="text-xl sm:text-2xl font-bold text-foreground tracking-tight mb-7">Security</h1>

        <div className="space-y-5">
          {/* Two-Factor Auth */}
          <div className="bg-white border border-gray-200 rounded-2xl shadow-lg p-6 sm:p-8">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-sm font-bold tracking-wider text-foreground/60 uppercase">Two-Factor Authentication</h2>
                <p className="text-[12px] text-foreground/40 mt-1">Add an extra layer of security to your account</p>
              </div>
              <div className="flex items-center gap-3">
                <span className={`text-xs font-medium ${twoFactor ? "text-accent" : "text-foreground/40"}`}>{twoFactor ? "Enabled" : "Disabled"}</span>
                <button onClick={() => setTwoFactor(!twoFactor)} className={`relative w-11 h-6 rounded-full transition-all duration-300 shrink-0 ${twoFactor ? "bg-accent shadow-md shadow-accent/30" : "bg-gray-200"}`}>
                  <span className={`absolute top-0.5 left-0.5 w-5 h-5 rounded-full bg-white shadow-lg transition-all duration-300 ${twoFactor ? "translate-x-5" : "translate-x-0"}`} />
                </button>
              </div>
            </div>
          </div>

          {/* Password */}
          <div className="bg-white border border-gray-200 rounded-2xl shadow-lg p-6 sm:p-8">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-sm font-bold tracking-wider text-foreground/60 uppercase">Password</h2>
                <p className="text-[12px] text-foreground/40 mt-1">Last changed 3 months ago</p>
              </div>
              <button onClick={() => setShowPasswordReset(true)} className="px-5 py-2.5 border border-gray-200 bg-white text-foreground text-xs font-medium tracking-wider rounded-xl hover:bg-accent-light hover:border-gray-300 transition-all duration-300">
                RESET PASSWORD
              </button>
            </div>
          </div>

          {/* Active Sessions */}
          <div className="bg-white border border-gray-200 rounded-2xl shadow-lg overflow-hidden">
            <div className="flex items-center justify-between px-5 sm:px-6 py-3.5 sm:py-4 border-b border-gray-100 bg-accent-light/50">
              <span className="text-xs font-bold tracking-widest text-foreground/60 uppercase">Active Sessions</span>
              <span className="text-[10px] text-foreground/30">{sessions.length} active</span>
            </div>
            <div className="divide-y divide-gray-100">
              {sessions.map((session) => (
                <div key={session.id} className="flex items-center px-5 sm:px-6 py-3 sm:py-3.5 hover:bg-gray-50 transition-all duration-300">
                  <div className={`w-7 h-7 rounded-lg flex items-center justify-center text-xs shrink-0 ${session.current ? "bg-accent/20 text-accent" : "bg-accent-light/50 text-foreground/50"}`}>
                    {session.current ? "\uD83D\uDC64" : "\uD83D\uDCBB"}
                  </div>
                  <div className="ml-3 flex-1 min-w-0">
                    <p className="text-sm text-foreground">
                      {session.device} {session.current && <span className="text-accent text-[10px] font-medium ml-2">(Current)</span>}
                    </p>
                    <p className="text-[11px] text-foreground/40">{session.ip} &bull; {session.lastActive}</p>
                  </div>
                  <button onClick={() => handleRevoke(session.id)} className="px-3 py-1.5 rounded-lg bg-transparent border border-transparent text-foreground/50 hover:text-red-500 hover:bg-red-50 hover:border-red-200 transition-all duration-300 text-[11px] shrink-0 ml-3">
                    REVOKE
                  </button>
                </div>
              ))}
              {sessions.length === 0 && (
                <div className="px-6 py-12 text-center text-foreground/40 text-sm">No active sessions.</div>
              )}
            </div>
          </div>

          {/* Login History */}
          <div className="bg-white border border-gray-200 rounded-2xl shadow-lg overflow-hidden">
            <div className="flex items-center justify-between px-5 sm:px-6 py-3.5 sm:py-4 border-b border-gray-100 bg-accent-light/50">
              <span className="text-xs font-bold tracking-widest text-foreground/60 uppercase">Login History</span>
              <span className="text-[10px] text-foreground/30">Last 7 days</span>
            </div>
            <div className="divide-y divide-gray-100">
              <div className="flex items-center px-4 sm:px-6 py-2.5 text-[10px] font-bold tracking-widest text-foreground/50 uppercase">
                <div className="w-[26%]">Date & Time</div>
                <div className="w-[22%]">IP Address</div>
                <div className="w-[30%]">Device</div>
                <div className="w-[22%] text-right">Status</div>
              </div>
              {loginHistory.map((entry) => (
                <div key={entry.id} className="flex items-center px-4 sm:px-6 py-3 text-sm hover:bg-gray-50 transition-all duration-300">
                  <div className="w-[26%] text-foreground/60 text-xs">{entry.date}</div>
                  <div className="w-[22%] text-foreground/40 text-xs font-mono">{entry.ip}</div>
                  <div className="w-[30%] text-foreground/50 text-xs truncate pr-2">{entry.device}</div>
                  <div className="w-[22%] text-right">
                    {entry.status === "success" ? (
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-accent text-white text-[10px] font-medium border border-accent/50">
                        Success
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-red-500/20 text-red-400 text-[10px] font-medium border border-red-500/30">
                        Failed
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      {showPasswordReset && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/60 p-4">
          <div className="relative w-full max-w-[450px] bg-white border border-gray-200 rounded-3xl shadow-xl p-6 sm:p-8 text-center">
            <button onClick={() => setShowPasswordReset(false)} className="absolute top-5 right-5 w-8 h-8 flex items-center justify-center rounded-full bg-accent-light/50 border border-gray-200 text-foreground/70 hover:text-foreground hover:bg-accent-light transition-all duration-300">&#x2715;</button>
            <span className="text-4xl block mb-4">&#x1F512;</span>
            <h2 className="text-xl font-bold text-foreground tracking-tight mb-2">Reset Password</h2>
            <p className="text-sm text-foreground/60 mb-6">A password reset link will be sent to your email address.</p>
            <div className="flex justify-center gap-3">
              <button onClick={() => setShowPasswordReset(false)} className="px-5 py-2.5 border border-gray-200 bg-white text-foreground text-xs font-medium tracking-wider rounded-xl hover:bg-accent-light hover:border-gray-300 transition-all duration-300">CANCEL</button>
              <button onClick={() => { setShowPasswordReset(false); }} className="px-5 py-2.5 bg-black text-white text-xs font-bold tracking-wider rounded-xl hover:opacity-90 transition-all duration-300 shadow-lg">SEND RESET LINK</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
