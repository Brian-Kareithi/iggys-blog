"use client";

import { useState } from "react";

interface User {
  id: number;
  name: string;
  email: string;
  role: "Admin" | "Editor" | "Author" | "Subscriber";
  status: "active" | "inactive";
  joined: string;
  permissions: string[];
}

const initialUsers: User[] = [
  { id: 1, name: "Iggy", email: "iggy@iggysblog.com", role: "Admin", status: "active", joined: "Jan 2026", permissions: ["all"] },
  { id: 2, name: "Sarah Mitchell", email: "sarah.m@iggysblog.com", role: "Editor", status: "active", joined: "Feb 2026", permissions: ["posts", "comments", "media"] },
  { id: 3, name: "James Chen", email: "james.c@iggysblog.com", role: "Author", status: "active", joined: "Mar 2026", permissions: ["posts"] },
  { id: 4, name: "Elena Rodriguez", email: "elena.r@iggysblog.com", role: "Author", status: "active", joined: "Apr 2026", permissions: ["posts"] },
  { id: 5, name: "Marcus Webb", email: "marcus.w@example.com", role: "Subscriber", status: "active", joined: "May 2026", permissions: [] },
  { id: 6, name: "Aisha Patel", email: "aisha.p@example.com", role: "Subscriber", status: "inactive", joined: "May 2026", permissions: [] },
  { id: 7, name: "Liam O'Brien", email: "liam.ob@example.com", role: "Editor", status: "active", joined: "Jun 2026", permissions: ["posts", "comments"] },
  { id: 8, name: "Chloe Tanaka", email: "chloe.t@example.com", role: "Subscriber", status: "active", joined: "Jun 2026", permissions: [] },
];

const roleColors: Record<string, string> = {
  Admin: "bg-red-500/20 text-red-400 border-red-500/30",
  Editor: "bg-blue-500/20 text-blue-400 border-blue-500/30",
  Author: "bg-accent/20 text-accent border-accent/30",
  Subscriber: "bg-white/10 text-white/50 border-white/20",
};

const allPermissions = [
  { key: "all", label: "Full Access" },
  { key: "posts", label: "Posts" },
  { key: "comments", label: "Comments" },
  { key: "media", label: "Media" },
  { key: "users", label: "Users" },
  { key: "settings", label: "Settings" },
];

export default function UsersPage() {
  const [users, setUsers] = useState(initialUsers);
  const [modalOpen, setModalOpen] = useState(false);
  const [editing, setEditing] = useState<User | null>(null);
  const [formName, setFormName] = useState("");
  const [formEmail, setFormEmail] = useState("");
  const [formRole, setFormRole] = useState<User["role"]>("Author");
  const [formPermissions, setFormPermissions] = useState<string[]>([]);

  function openNew() {
    setEditing(null);
    setFormName("");
    setFormEmail("");
    setFormRole("Author");
    setFormPermissions([]);
    setModalOpen(true);
  }

  function openEdit(user: User) {
    setEditing(user);
    setFormName(user.name);
    setFormEmail(user.email);
    setFormRole(user.role);
    setFormPermissions(user.permissions);
    setModalOpen(true);
  }

  function togglePermission(key: string) {
    setFormPermissions((prev) =>
      prev.includes(key) ? prev.filter((p) => p !== key) : [...prev, key]
    );
  }

  function handleSave() {
    if (!formName.trim() || !formEmail.trim()) return;
    if (editing) {
      setUsers((prev) =>
        prev.map((u) =>
          u.id === editing.id ? { ...u, name: formName, email: formEmail, role: formRole, permissions: formPermissions } : u
        )
      );
    } else {
      setUsers((prev) => [
        ...prev,
        { id: Date.now(), name: formName, email: formEmail, role: formRole, status: "active" as const, joined: new Date().toLocaleDateString("en-GB", { month: "short", year: "numeric" }), permissions: formPermissions },
      ]);
    }
    setModalOpen(false);
  }

  function handleDelete(id: number) {
    setUsers((prev) => prev.filter((u) => u.id !== id));
  }

  function toggleStatus(id: number) {
    setUsers((prev) =>
      prev.map((u) => (u.id === id ? { ...u, status: u.status === "active" ? ("inactive" as const) : ("active" as const) } : u))
    );
  }

  return (
    <div className="flex-1 flex flex-col">
      <header className="flex items-center justify-between px-6 sm:px-10 py-3 sm:py-4 backdrop-blur-2xl bg-white/10 border-b border-white/20 shadow-lg">
        <div className="flex items-center gap-2 text-sm">
          <span className="text-white/60">Dashboard</span>
          <span className="text-white/30">/</span>
          <span className="text-accent font-medium drop-shadow-[0_1px_2px_rgba(0,0,0,0.3)]">Users</span>
        </div>
        <div className="flex items-center gap-4">
          <div className="w-9 h-9 rounded-full bg-accent/90 backdrop-blur-md flex items-center justify-center text-white text-xs font-bold cursor-pointer shadow-lg border border-white/20 hover:bg-accent transition-all duration-300">IB</div>
        </div>
      </header>

      <main className="flex-1 px-6 sm:px-10 py-6 sm:py-8 overflow-y-auto">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6 sm:mb-8">
          <div>
            <h1 className="text-xl sm:text-2xl font-bold text-white tracking-tight drop-shadow-[0_2px_6px_rgba(0,0,0,0.5)]">Users</h1>
            <p className="text-[12px] text-white/40 mt-0.5">{users.length} users &bull; {users.filter((u) => u.status === "active").length} active</p>
          </div>
          <button onClick={openNew} className="group flex items-center gap-2 bg-white/10 backdrop-blur-2xl border border-white/20 text-white text-sm font-medium tracking-widest px-6 py-2.5 rounded-xl hover:bg-white/20 hover:border-white/40 hover:shadow-2xl hover:-translate-y-0.5 transition-all duration-300 shadow-lg w-full sm:w-auto justify-center">
            <span className="text-accent group-hover:scale-110 transition-transform duration-300">+</span>
            ADD USER
          </button>
        </div>

        <div className="backdrop-blur-2xl bg-white/10 border border-white/20 rounded-2xl shadow-2xl overflow-hidden">
          <div className="flex items-center px-4 sm:px-6 py-3 sm:py-4 text-[10px] sm:text-xs font-bold tracking-widest text-white/50 uppercase border-b border-white/10 backdrop-blur-md bg-white/5">
            <div className="w-[22%] sm:w-[20%]">Name</div>
            <div className="hidden sm:block w-[22%]">Email</div>
            <div className="w-[15%] sm:w-[12%]">Role</div>
            <div className="hidden sm:block w-[12%]">Status</div>
            <div className="hidden md:block w-[14%]">Joined</div>
            <div className="w-[63%] sm:w-[34%] text-right">Actions</div>
          </div>
          {users.map((user, idx) => (
            <div key={user.id} className={`flex items-center px-4 sm:px-6 py-3 sm:py-4 text-sm transition-all duration-300 ${idx % 2 === 0 ? "bg-white/[0.06]" : "bg-white/[0.02]"} hover:bg-white/15 border-b border-white/5 last:border-b-0`}>
              <div className="w-[22%] sm:w-[20%] flex items-center gap-2.5 min-w-0">
                <div className="w-7 h-7 rounded-full bg-accent/20 border border-accent/30 flex items-center justify-center text-accent text-[10px] font-bold shrink-0">
                  {user.name.split(" ").map((n) => n[0]).join("").slice(0, 2)}
                </div>
                <span className="text-white text-xs truncate drop-shadow-[0_1px_2px_rgba(0,0,0,0.3)]">{user.name}</span>
              </div>
              <div className="hidden sm:block w-[22%] text-white/40 text-xs truncate">{user.email}</div>
              <div className="w-[15%] sm:w-[12%]">
                <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-medium border ${roleColors[user.role]}`}>
                  {user.role}
                </span>
              </div>
              <div className="hidden sm:block w-[12%]">
                <button onClick={() => toggleStatus(user.id)} className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-medium border ${user.status === "active" ? "bg-accent/90 text-white border-accent/50" : "bg-white/5 text-white/40 border-white/10"}`}>
                  <span className={`w-1 h-1 rounded-full ${user.status === "active" ? "bg-white" : "bg-white/30"}`} />
                  {user.status === "active" ? "Active" : "Inactive"}
                </button>
              </div>
              <div className="hidden md:block w-[14%] text-white/40 text-xs">{user.joined}</div>
              <div className="w-[63%] sm:w-[34%] text-right flex items-center justify-end gap-1 sm:gap-2">
                <button onClick={() => openEdit(user)} className="px-2 sm:px-3 py-1.5 rounded-lg backdrop-blur-md bg-white/10 border border-white/10 text-white/70 hover:text-white hover:bg-white/20 hover:border-white/30 transition-all duration-300 text-[11px]">&#x270F;&#xFE0F;</button>
                <button onClick={() => handleDelete(user.id)} className="px-2 sm:px-3 py-1.5 rounded-lg backdrop-blur-md bg-white/5 border border-white/5 text-white/50 hover:text-red-300 hover:bg-red-500/20 hover:border-red-500/30 transition-all duration-300 text-[11px]">&#x1F5D1;</button>
              </div>
            </div>
          ))}
        </div>
      </main>

      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-md p-4">
          <div className="relative w-full max-w-[500px] backdrop-blur-3xl bg-white/10 border border-white/20 rounded-3xl shadow-2xl p-6 sm:p-8 max-h-[90vh] overflow-y-auto">
            <button onClick={() => setModalOpen(false)} className="absolute top-5 right-5 w-8 h-8 flex items-center justify-center rounded-full backdrop-blur-md bg-white/10 border border-white/20 text-white/70 hover:text-white hover:bg-white/20 transition-all duration-300">&#x2715;</button>
            <h2 className="text-xl font-bold text-white tracking-tight mb-7 drop-shadow-[0_2px_6px_rgba(0,0,0,0.5)]">{editing ? "Edit User" : "Add User"}</h2>
            <label className="block text-[11px] font-bold tracking-wider text-white/60 mb-1.5">NAME</label>
            <input type="text" placeholder="Full name" value={formName} onChange={(e) => setFormName(e.target.value)} className="w-full border-2 border-white/20 backdrop-blur-2xl bg-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-white/30 outline-none focus:border-accent focus:bg-white/15 transition-all duration-300 mb-5" />
            <label className="block text-[11px] font-bold tracking-wider text-white/60 mb-1.5">EMAIL</label>
            <input type="email" placeholder="Email address" value={formEmail} onChange={(e) => setFormEmail(e.target.value)} className="w-full border-2 border-white/20 backdrop-blur-2xl bg-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-white/30 outline-none focus:border-accent focus:bg-white/15 transition-all duration-300 mb-5" />
            <label className="block text-[11px] font-bold tracking-wider text-white/60 mb-1.5">ROLE</label>
            <select value={formRole} onChange={(e) => setFormRole(e.target.value as User["role"])} className="w-full border-2 border-white/20 backdrop-blur-2xl bg-white/10 rounded-xl px-4 py-3 text-sm text-white outline-none focus:border-accent focus:bg-white/15 transition-all duration-300 mb-6 appearance-none">
              {["Admin", "Editor", "Author", "Subscriber"].map((r) => (<option key={r} value={r} className="bg-[#1A1A1A]/95 text-white">{r}</option>))}
            </select>
            <label className="block text-[11px] font-bold tracking-wider text-white/60 mb-3">PERMISSIONS</label>
            <div className="space-y-2 mb-6">
              {allPermissions.map((perm) => (
                <label key={perm.key} className="flex items-center gap-3 cursor-pointer py-1.5 px-3 rounded-xl hover:bg-white/5 transition-all duration-300">
                  <button onClick={() => togglePermission(perm.key)} className={`w-5 h-5 rounded-md border-2 flex items-center justify-center transition-all duration-300 shrink-0 ${formPermissions.includes(perm.key) ? "bg-accent border-accent" : "border-white/20 bg-white/5"}`}>
                    {formPermissions.includes(perm.key) && (
                      <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                    )}
                  </button>
                  <span className="text-sm text-white/80">{perm.label}</span>
                </label>
              ))}
            </div>
            <div className="flex justify-end gap-3">
              <button onClick={() => setModalOpen(false)} className="px-5 py-2.5 border-2 border-white/20 backdrop-blur-2xl bg-white/5 text-white text-xs font-medium tracking-wider rounded-xl hover:bg-white/15 hover:border-white/40 transition-all duration-300">CANCEL</button>
              <button onClick={handleSave} className="px-5 py-2.5 bg-black text-white text-xs font-bold tracking-wider rounded-xl hover:opacity-90 transition-all duration-300 shadow-lg">SAVE</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
