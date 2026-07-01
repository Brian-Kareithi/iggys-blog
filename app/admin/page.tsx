"use client";

const metrics = [
  { label: "Total Views", value: "48.2k", change: "+12% this month" },
  { label: "Subscribers", value: "892", change: "+42 new this month" },
  { label: "Engagement Rate", value: "6.8%", change: "+1.2% vs last month" },
  { label: "Avg. Read Time", value: "4m 32s", change: "+18s improvement" },
  { label: "Published Posts", value: "18", change: "3 published this month" },
  { label: "Top Category", value: "Travel", change: "62% of total views" },
];

const recentSubscribers = [
  { name: "Sarah Mitchell", email: "sarah.m@example.com", date: "Today, 2:34 PM", source: "Homepage" },
  { name: "James Chen", email: "j.chen@example.com", date: "Today, 11:20 AM", source: "Tech article" },
  { name: "Elena Rodriguez", email: "elena.r@example.com", date: "Yesterday, 8:15 PM", source: "Travel post" },
  { name: "Marcus Webb", email: "marcus.w@example.com", date: "Yesterday, 4:02 PM", source: "Homepage" },
  { name: "Aisha Patel", email: "aisha.p@example.com", date: "29 Jun 2026", source: "Style guide" },
  { name: "Liam O&rsquo;Brien", email: "liam.ob@example.com", date: "29 Jun 2026", source: "Newsletter" },
  { name: "Chloe Tanaka", email: "chloe.t@example.com", date: "28 Jun 2026", source: "Tech article" },
];

const mostRead = [
  { title: "The Art of Slow Travel", views: 3421, category: "Travel", trend: "up" as const },
  { title: "Tech Trends 2026", views: 2890, category: "Tech", trend: "up" as const },
  { title: "Coastal Morning Rituals", views: 2156, category: "Travel", trend: "up" as const },
  { title: "Minimalist Wardrobe Guide", views: 1876, category: "Style", trend: "down" as const },
  { title: "Urban Jungle Photography", views: 1432, category: "Style", trend: "down" as const },
];

const recentActivity = [
  { action: "New comment", detail: "on \"The Art of Slow Travel\"", user: "Maria K.", time: "12 min ago" },
  { action: "Subscriber gained", detail: "Sarah Mitchell joined", user: "", time: "1 hr ago" },
  { action: "Post published", detail: "\"Coastal Morning Rituals\" went live", user: "", time: "3 hr ago" },
  { action: "New subscriber", detail: "James Chen subscribed", user: "", time: "5 hr ago" },
  { action: "Comment replied", detail: "You replied to David on \"Tech Trends\"", user: "", time: "8 hr ago" },
  { action: "Post updated", detail: "\"Minimalist Wardrobe\" edited", user: "", time: "Yesterday" },
];

export default function AdminDashboard() {
  return (
    <div className="flex-1 flex flex-col">
      <header className="flex items-center justify-between px-6 sm:px-10 py-3 sm:py-4 backdrop-blur-2xl bg-white/10 border-b border-white/20 shadow-lg">
        <div className="flex items-center gap-2 text-sm">
          <span className="text-accent font-medium drop-shadow-[0_1px_2px_rgba(0,0,0,0.3)]">Dashboard</span>
        </div>
        <div className="flex items-center gap-3 text-xs text-white/50">
          <span className="hidden sm:block">Last 30 days</span>
          <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
          <span className="text-accent font-medium">Live</span>
          <div className="w-9 h-9 rounded-full bg-accent/90 backdrop-blur-md flex items-center justify-center text-white text-xs font-bold cursor-pointer shadow-lg border border-white/20 hover:bg-accent transition-all duration-300 ml-2">
            IB
          </div>
        </div>
      </header>

      <main className="flex-1 px-6 sm:px-10 py-6 sm:py-8 overflow-y-auto">
        <h1 className="text-xl sm:text-2xl font-bold text-white tracking-tight drop-shadow-[0_2px_6px_rgba(0,0,0,0.5)] mb-7">
          Insights
        </h1>

        {/* Metrics */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 mb-8 sm:mb-10">
          {metrics.map((m) => (
            <div
              key={m.label}
              className="backdrop-blur-2xl bg-white/10 border border-white/20 rounded-2xl px-5 sm:px-6 py-5 sm:py-6 shadow-xl hover:bg-white/15 hover:border-white/30 hover:-translate-y-0.5 transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-1">
                <p className="text-[11px] font-bold tracking-wider text-white/50 uppercase">{m.label}</p>
              </div>
              <p className="text-2xl sm:text-3xl font-bold text-white mt-1 drop-shadow-[0_2px_4px_rgba(0,0,0,0.4)]">
                {m.value}
              </p>
              <p className="text-[11px] text-accent mt-1.5 font-medium">{m.change}</p>
            </div>
          ))}
        </div>

        {/* Two columns: Recent Subscribers + Most Read */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mb-8 sm:mb-10">
          {/* New Subscribers */}
          <div className="backdrop-blur-2xl bg-white/10 border border-white/20 rounded-2xl shadow-2xl overflow-hidden">
            <div className="flex items-center justify-between px-5 sm:px-6 py-3.5 sm:py-4 border-b border-white/10 backdrop-blur-md bg-white/5">
              <div className="flex items-center gap-2.5">
                <span className="text-xs font-bold tracking-widest text-white/60 uppercase">New Subscribers</span>
                <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-accent/30 text-accent text-[10px] font-bold">+42</span>
              </div>
              <span className="text-[10px] text-white/30">This month</span>
            </div>
            <div className="divide-y divide-white/5">
              {recentSubscribers.map((sub) => (
                <div key={sub.email} className="flex items-center px-5 sm:px-6 py-3 sm:py-3.5 hover:bg-white/10 transition-all duration-300">
                  <div className="w-7 h-7 rounded-full bg-accent/20 border border-accent/30 flex items-center justify-center text-accent text-[10px] font-bold shrink-0">
                    {sub.name.split(" ").map((n) => n[0]).join("")}
                  </div>
                  <div className="ml-3 flex-1 min-w-0">
                    <p className="text-sm font-medium text-white truncate drop-shadow-[0_1px_2px_rgba(0,0,0,0.3)]">{sub.name}</p>
                    <p className="text-[11px] text-white/40 truncate">{sub.email}</p>
                  </div>
                  <div className="text-right shrink-0 ml-3">
                    <p className="text-[11px] text-white/50">{sub.date}</p>
                    <p className="text-[10px] text-accent/70">{sub.source}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Most Read */}
          <div className="backdrop-blur-2xl bg-white/10 border border-white/20 rounded-2xl shadow-2xl overflow-hidden">
            <div className="flex items-center justify-between px-5 sm:px-6 py-3.5 sm:py-4 border-b border-white/10 backdrop-blur-md bg-white/5">
              <span className="text-xs font-bold tracking-widest text-white/60 uppercase">Most Read</span>
              <span className="text-[10px] text-white/30">All time</span>
            </div>
            <div className="divide-y divide-white/5">
              {mostRead.map((post, i) => (
                <div key={post.title} className="flex items-center px-5 sm:px-6 py-3 sm:py-3.5 hover:bg-white/10 transition-all duration-300">
                  <div className="flex items-center justify-center w-7 h-7 rounded-lg bg-white/5 border border-white/10 text-white/40 text-xs font-bold shrink-0">
                    {i + 1}
                  </div>
                  <div className="ml-3 flex-1 min-w-0">
                    <p className="text-sm font-medium text-white truncate drop-shadow-[0_1px_2px_rgba(0,0,0,0.3)]">{post.title}</p>
                    <p className="text-[11px] text-white/40">{post.category}</p>
                  </div>
                  <div className="text-right shrink-0 ml-3">
                    <p className="text-sm font-bold text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.3)]">{post.views.toLocaleString()}</p>
                    <p className="text-[10px] text-white/40">views</p>
                  </div>
                  <div className="ml-2 sm:ml-3">
                    {post.trend === "up" ? (
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#7B8C6E" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="18 15 12 9 6 15" /></svg>
                    ) : (
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#CC5555" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9" /></svg>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="backdrop-blur-2xl bg-white/10 border border-white/20 rounded-2xl shadow-2xl overflow-hidden">
          <div className="flex items-center justify-between px-5 sm:px-6 py-3.5 sm:py-4 border-b border-white/10 backdrop-blur-md bg-white/5">
            <span className="text-xs font-bold tracking-widest text-white/60 uppercase">Recent Activity</span>
            <span className="text-[10px] text-white/30">Live feed</span>
          </div>
          <div className="divide-y divide-white/5">
            {recentActivity.map((act, i) => (
              <div key={i} className="flex items-center px-5 sm:px-6 py-3 sm:py-3.5 hover:bg-white/10 transition-all duration-300">
                <div className={`w-7 h-7 rounded-full flex items-center justify-center text-xs shrink-0 ${
                  act.action.includes("comment") ? "bg-blue-500/20 text-blue-400" :
                  act.action.includes("Subscriber") ? "bg-accent/20 text-accent" :
                  act.action.includes("published") ? "bg-green-500/20 text-green-400" :
                  "bg-white/10 text-white/60"
                }`}>
                  {act.action.includes("comment") ? "\uD83D\uDCAC" :
                   act.action.includes("Subscriber") ? "\u2709\uFE0F" :
                   act.action.includes("published") ? "\uD83D\uDCE2" :
                   act.action.includes("updated") ? "\u270F\uFE0F" : "\uD83D\uDD04"}
                </div>
                <div className="ml-3 flex-1 min-w-0">
                  <p className="text-sm text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.3)]">
                    <span className="font-medium">{act.action}</span> {act.detail}
                  </p>
                </div>
                <span className="text-[11px] text-white/40 shrink-0 ml-3">{act.time}</span>
              </div>
            ))}
          </div>
        </div>

        <p className="text-[11px] text-white/30 text-center mt-6">Data updates in real-time &bull; Last refreshed just now</p>
      </main>
    </div>
  );
}
