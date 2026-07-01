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
  Subscriber: "bg-accent-light/50 text-foreground/50 border-gray-100",
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
      <header className="flex items-center justify-between px-6 sm:px-10 py-3 sm:py-4 bg-white border-b border-gray-200 shadow-sm">
        <div className="flex items-center gap-2 text-sm">
          <span className="text-foreground/60">Dashboard</span>
          <span className="text-foreground/30">/</span>
          <span className="text-accent font-medium">Users</span>
        </div>
        <div className="flex items-center gap-4">
          <div className="w-9 h-9 rounded-full bg-accent flex items-center justify-center text-white text-xs font-bold cursor-pointer shadow-lg hover:bg-accent/90 transition-all duration-300">IB</div>
        </div>
      </header>

      <main className="flex-1 px-6 sm:px-10 py-6 sm:py-8 overflow-y-auto">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6 sm:mb-8">
          <div>
            <h1 className="text-xl sm:text-2xl font-bold text-foreground tracking-tight">Users</h1>
            <p className="text-[12px] text-foreground/40 mt-0.5">{users.length} users &bull; {users.filter((u) => u.status === "active").length} active</p>
          </div>
          <button onClick={openNew} className="group flex items-center gap-2 bg-white border border-gray-200 text-foreground text-sm font-medium tracking-widest px-6 py-2.5 rounded-xl hover:bg-accent-light hover:border-gray-300 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 shadow-sm w-full sm:w-auto justify-center">
            <span className="text-accent group-hover:scale-110 transition-transform duration-300">+</span>
            ADD USER
          </button>
        </div>

        <div className="bg-white border border-gray-200 rounded-2xl shadow-lg overflow-hidden">
          <div className="flex items-center px-4 sm:px-6 py-3 sm:py-4 text-[10px] sm:text-xs font-bold tracking-widest text-foreground/50 uppercase border-b border-gray-100 bg-accent-light/50">
            <div className="w-[22%] sm:w-[20%]">Name</div>
            <div className="hidden sm:block w-[22%]">Email</div>
            <div className="w-[15%] sm:w-[12%]">Role</div>
            <div className="hidden sm:block w-[12%]">Status</div>
            <div className="hidden md:block w-[14%]">Joined</div>
            <div className="w-[63%] sm:w-[34%] text-right">Actions</div>
          </div>
          {users.map((user, idx) => (
            <div key={user.id} className={`flex items-center px-4 sm:px-6 py-3 sm:py-4 text-sm transition-all duration-300 ${idx % 2 === 0 ? "bg-gray-50/50" : ""} hover:bg-gray-50 border-b border-gray-100 last:border-b-0`}>
              <div className="w-[22%] sm:w-[20%] flex items-center gap-2.5 min-w-0">
                <div className="w-7 h-7 rounded-full bg-accent/20 border border-accent/30 flex items-center justify-center text-accent text-[10px] font-bold shrink-0">
                  {user.name.split(" ").map((n) => n[0]).join("").slice(0, 2)}
                </div>
                <span className="text-foreground text-xs truncate">{user.name}</span>
              </div>
              <div className="hidden sm:block w-[22%] text-foreground/40 text-xs truncate">{user.email}</div>
              <div className="w-[15%] sm:w-[12%]">
                <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-medium border ${roleColors[user.role]}`}>
                  {user.role}
                </span>
              </div>
              <div className="hidden sm:block w-[12%]">
                <button onClick={() => toggleStatus(user.id)} className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-medium border ${user.status === "active" ? "bg-accent text-white border-accent/50" : "bg-accent-light/50 text-foreground/40 border-gray-100"}`}>
                  <span className={`w-1 h-1 rounded-full ${user.status === "active" ? "bg-white" : "bg-foreground/30"}`} />
                  {user.status === "active" ? "Active" : "Inactive"}
                </button>
              </div>
              <div className="hidden md:block w-[14%] text-foreground/40 text-xs">{user.joined}</div>
              <div className="w-[63%] sm:w-[34%] text-right flex items-center justify-end gap-1 sm:gap-2">
                <button onClick={() => openEdit(user)} className="px-2 sm:px-3 py-1.5 rounded-lg bg-accent-light/50 border border-gray-100 text-foreground/70 hover:text-foreground hover:bg-accent-light hover:border-gray-200 transition-all duration-300 text-[11px]">Edit</button>
                <button onClick={() => handleDelete(user.id)} className="px-2 sm:px-3 py-1.5 rounded-lg bg-transparent border border-transparent text-foreground/50 hover:text-red-500 hover:bg-red-50 hover:border-red-200 transition-all duration-300 text-[11px]">Delete</button>
              </div>
            </div>
          ))}
        </div>
      </main>

      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/60 p-4">
          <div className="relative w-full max-w-[500px] bg-white border border-gray-200 rounded-3xl shadow-xl p-6 sm:p-8 max-h-[90vh] overflow-y-auto">
            <button onClick={() => setModalOpen(false)} className="absolute top-5 right-5 w-8 h-8 flex items-center justify-center rounded-full bg-accent-light/50 border border-gray-200 text-foreground/70 hover:text-foreground hover:bg-accent-light transition-all duration-300">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
            </button>
            <h2 className="text-xl font-bold text-foreground tracking-tight mb-7">{editing ? "Edit User" : "Add User"}</h2>
            <label className="block text-[11px] font-bold tracking-wider text-foreground/60 mb-1.5">NAME</label>
            <input type="text" placeholder="Full name" value={formName} onChange={(e) => setFormName(e.target.value)} className="w-full border border-gray-200 bg-white rounded-xl px-4 py-3 text-sm text-foreground placeholder-foreground/30 outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all duration-300 mb-5" />
            <label className="block text-[11px] font-bold tracking-wider text-foreground/60 mb-1.5">EMAIL</label>
            <input type="email" placeholder="Email address" value={formEmail} onChange={(e) => setFormEmail(e.target.value)} className="w-full border border-gray-200 bg-white rounded-xl px-4 py-3 text-sm text-foreground placeholder-foreground/30 outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all duration-300 mb-5" />
            <label className="block text-[11px] font-bold tracking-wider text-foreground/60 mb-1.5">ROLE</label>
            <select value={formRole} onChange={(e) => setFormRole(e.target.value as User["role"])} className="w-full border border-gray-200 bg-white rounded-xl px-4 py-3 text-sm text-foreground outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all duration-300 mb-6 appearance-none">
              {["Admin", "Editor", "Author", "Subscriber"].map((r) => (<option key={r} value={r} className="bg-white text-foreground">{r}</option>))}
            </select>
            <label className="block text-[11px] font-bold tracking-wider text-foreground/60 mb-3">PERMISSIONS</label>
            <div className="space-y-2 mb-6">
              {allPermissions.map((perm) => (
                <label key={perm.key} className="flex items-center gap-3 cursor-pointer py-1.5 px-3 rounded-xl hover:bg-accent-light/50 transition-all duration-300">
                  <button onClick={() => togglePermission(perm.key)} className={`w-5 h-5 rounded-md border-2 flex items-center justify-center transition-all duration-300 shrink-0 ${formPermissions.includes(perm.key) ? "bg-accent border-accent" : "border-gray-200 bg-white"}`}>
                    {formPermissions.includes(perm.key) && (
                      <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                    )}
                  </button>
                  <span className="text-sm text-foreground/80">{perm.label}</span>
                </label>
              ))}
            </div>
            <div className="flex justify-end gap-3">
              <button onClick={() => setModalOpen(false)} className="px-5 py-2.5 border border-gray-200 bg-white text-foreground text-xs font-medium tracking-wider rounded-xl hover:bg-accent-light hover:border-gray-300 transition-all duration-300">CANCEL</button>
              <button onClick={handleSave} className="px-5 py-2.5 bg-black text-white text-xs font-bold tracking-wider rounded-xl hover:opacity-90 transition-all duration-300 shadow-lg">SAVE</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
