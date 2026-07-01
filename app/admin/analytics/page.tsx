"use client";

export default function AnalyticsPage() {
  const overviewStats = [
    { label: "Total Views", value: "48,291", change: "+12.4%", up: true },
    { label: "Visitors", value: "14,832", change: "+8.7%", up: true },
    { label: "Countries", value: "67", change: "+5 new", up: true },
    { label: "Avg. Reading Time", value: "4m 32s", change: "+18s", up: true },
    { label: "Bounce Rate", value: "32.1%", change: "-2.4%", up: false },
    { label: "Return Visitors", value: "41.3%", change: "+3.8%", up: true },
  ];

  const topPosts = [
    { title: "The Art of Slow Travel", views: 3421, share: "18.2%" },
    { title: "Tech Trends 2026", views: 2890, share: "15.4%" },
    { title: "Coastal Morning Rituals", views: 2156, share: "11.5%" },
    { title: "Minimalist Wardrobe Guide", views: 1876, share: "10.0%" },
    { title: "Urban Jungle Photography", views: 1432, share: "7.6%" },
  ];

  const trafficSources = [
    { source: "Organic Search", percentage: 38, color: "#7B8C6E" },
    { source: "Direct", percentage: 24, color: "#C49A6C" },
    { source: "Social Media", percentage: 18, color: "#6B8FA3" },
    { source: "Referral", percentage: 12, color: "#C96B6B" },
    { source: "Email", percentage: 8, color: "#8B6BA3" },
  ];

  return (
    <div className="flex-1 flex flex-col">
      <header className="flex items-center justify-between px-6 sm:px-10 py-3 sm:py-4 backdrop-blur-2xl bg-white/10 border-b border-white/20 shadow-lg">
        <div className="flex items-center gap-2 text-sm">
          <span className="text-white/60">Dashboard</span>
          <span className="text-white/30">/</span>
          <span className="text-accent font-medium drop-shadow-[0_1px_2px_rgba(0,0,0,0.3)]">Analytics</span>
        </div>
        <div className="flex items-center gap-4">
          <span className="hidden sm:block text-xs text-white/40">Last 30 days</span>
          <div className="w-9 h-9 rounded-full bg-accent/90 backdrop-blur-md flex items-center justify-center text-white text-xs font-bold cursor-pointer shadow-lg border border-white/20 hover:bg-accent transition-all duration-300">IB</div>
        </div>
      </header>

      <main className="flex-1 px-6 sm:px-10 py-6 sm:py-8 overflow-y-auto">
        <h1 className="text-xl sm:text-2xl font-bold text-white tracking-tight drop-shadow-[0_2px_6px_rgba(0,0,0,0.5)] mb-7">Analytics</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 mb-8">
          {overviewStats.map((stat) => (
            <div key={stat.label} className="backdrop-blur-2xl bg-white/10 border border-white/20 rounded-2xl px-5 sm:px-6 py-5 sm:py-6 shadow-xl hover:bg-white/15 hover:border-white/30 hover:-translate-y-0.5 transition-all duration-300">
              <div className="flex items-center justify-between mb-1">
                <p className="text-[11px] font-bold tracking-wider text-white/50 uppercase">{stat.label}</p>
              </div>
              <p className="text-2xl sm:text-3xl font-bold text-white mt-1 drop-shadow-[0_2px_4px_rgba(0,0,0,0.4)]">{stat.value}</p>
              <div className="flex items-center gap-1.5 mt-1.5">
                {stat.up ? (
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#7B8C6E" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="18 15 12 9 6 15" /></svg>
                ) : (
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#CC5555" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9" /></svg>
                )}
                <span className={`text-[11px] font-medium ${stat.up ? "text-accent" : "text-red-400"}`}>{stat.change}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mb-8">
          {/* Top Posts */}
          <div className="backdrop-blur-2xl bg-white/10 border border-white/20 rounded-2xl shadow-2xl overflow-hidden">
            <div className="flex items-center justify-between px-5 sm:px-6 py-3.5 sm:py-4 border-b border-white/10 backdrop-blur-md bg-white/5">
              <span className="text-xs font-bold tracking-widest text-white/60 uppercase">Top Posts</span>
              <span className="text-[10px] text-white/30">By views</span>
            </div>
            <div className="divide-y divide-white/5">
              {topPosts.map((post, i) => (
                <div key={post.title} className="flex items-center px-5 sm:px-6 py-3 sm:py-3.5 hover:bg-white/10 transition-all duration-300">
                  <div className="flex items-center justify-center w-7 h-7 rounded-lg bg-white/5 border border-white/10 text-white/40 text-xs font-bold shrink-0">{i + 1}</div>
                  <div className="ml-3 flex-1 min-w-0">
                    <p className="text-sm font-medium text-white truncate drop-shadow-[0_1px_2px_rgba(0,0,0,0.3)]">{post.title}</p>
                  </div>
                  <div className="text-right shrink-0 ml-3 flex items-center gap-3">
                    <p className="text-sm font-bold text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.3)]">{post.views.toLocaleString()}</p>
                    <span className="text-[10px] text-accent/70 font-medium">{post.share}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Traffic Sources */}
          <div className="backdrop-blur-2xl bg-white/10 border border-white/20 rounded-2xl shadow-2xl p-5 sm:p-6">
            <div className="flex items-center justify-between mb-5">
              <span className="text-xs font-bold tracking-widest text-white/60 uppercase">Traffic Sources</span>
            </div>
            <div className="space-y-4">
              {trafficSources.map((source) => (
                <div key={source.source}>
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-sm text-white/80">{source.source}</span>
                    <span className="text-xs text-white/50 font-medium">{source.percentage}%</span>
                  </div>
                  <div className="w-full h-2 rounded-full bg-white/5 overflow-hidden">
                    <div className="h-full rounded-full transition-all duration-500" style={{ width: `${source.percentage}%`, backgroundColor: source.color }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5">
          {[
            { label: "Page Views / Day", value: "1,876", change: "+5.2%" },
            { label: "Avg. Session", value: "3m 14s", change: "+12s" },
            { label: "Conversion Rate", value: "2.8%", change: "+0.4%" },
          ].map((stat) => (
            <div key={stat.label} className="backdrop-blur-2xl bg-white/10 border border-white/20 rounded-2xl px-5 sm:px-6 py-5 sm:py-6 shadow-xl">
              <p className="text-[11px] font-bold tracking-wider text-white/50 uppercase">{stat.label}</p>
              <p className="text-xl sm:text-2xl font-bold text-white mt-1 drop-shadow-[0_2px_4px_rgba(0,0,0,0.4)]">{stat.value}</p>
              <p className="text-[11px] text-accent mt-1.5 font-medium">{stat.change}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
