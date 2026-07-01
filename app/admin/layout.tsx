"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

const sidebarItems = [
  { emoji: "\uD83D\uDCCA", label: "DASHBOARD", href: "/admin" },
  { emoji: "\uD83D\uDCDD", label: "ALL POSTS", href: "/admin/posts" },
  { emoji: "\u2795", label: "NEW POST", href: "/admin/posts?new=true" },
  { emoji: "\uD83C\uDFF7", label: "CATEGORIES", href: "/admin/categories" },
  { emoji: "\uD83C\uDFF7", label: "TAGS", href: "/admin/tags" },
  { emoji: "\uD83D\uDCAC", label: "COMMENTS", href: "/admin/comments" },
  { emoji: "\uD83D\uDC65", label: "USERS", href: "/admin/users" },
  { emoji: "\uD83D\uDCE7", label: "NEWSLETTER", href: "/admin/newsletter" },
  { emoji: "\uD83D\uDDBC\uFE0F", label: "MEDIA", href: "/admin/media" },
  { emoji: "\uD83D\uDCC8", label: "ANALYTICS", href: "/admin/analytics" },
  { emoji: "\uD83D\uDCE8", label: "MESSAGES", href: "/admin/messages" },
  { emoji: "\uD83D\uDD0D", label: "SEO", href: "/admin/seo" },
  { emoji: "\uD83D\uDD12", label: "SECURITY", href: "/admin/security" },
  { emoji: "\uD83D\uDCBE", label: "BACKUP", href: "/admin/backup" },
  { emoji: "\uD83D\uDD14", label: "NOTIFICATIONS", href: "/admin/notifications" },
  { emoji: "\uD83D\uDC64", label: "PROFILE", href: "/admin/profile" },
  { emoji: "\u2699", label: "SETTINGS", href: "/admin/settings" },
];

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/admin") return pathname === "/admin";
    return pathname.startsWith(href);
  };

  return (
    <div className="flex min-h-screen bg-background">
      <aside className="fixed left-0 top-0 z-40 w-[220px] h-screen bg-white border-r border-gray-200 flex flex-col justify-between py-8 px-5 shadow-lg">
        <div>
          <Link href="/admin" className="flex items-center gap-2 mb-10 px-1">
            <span className="text-foreground text-lg font-bold tracking-wider">
              IGGY&rsquo;S BLOG
            </span>
            <span className="w-2 h-2 rounded-full bg-accent" />
          </Link>
          <nav className="flex flex-col gap-0.5">
            {sidebarItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className={`flex items-center gap-3 px-3 py-2.5 text-sm tracking-[0.15em] cursor-pointer transition-all duration-300 rounded-xl ${
                  isActive(item.href)
                    ? "text-accent bg-accent-light font-bold"
                    : "text-foreground/60 hover:text-foreground hover:bg-accent-light/50"
                }`}
              >
                <span className="text-base">{item.emoji}</span>
                <span className="text-xs tracking-[0.2em]">{item.label}</span>
              </Link>
            ))}
          </nav>
        </div>
        <Link href="/" className="flex items-center gap-3 px-3 py-2.5 text-foreground/50 cursor-pointer hover:text-foreground hover:bg-accent-light/50 rounded-xl transition-all duration-300 text-xs tracking-wider border border-transparent hover:border-gray-200">
          <span className="text-base">&#x1F6AA;</span>
          <span>LOGOUT</span>
        </Link>
      </aside>

      <div className="ml-[220px] flex-1 flex flex-col min-h-screen bg-background">
        {children}
      </div>
    </div>
  );
}
