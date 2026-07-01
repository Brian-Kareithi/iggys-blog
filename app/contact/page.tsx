"use client";

import Link from "next/link";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-xl border-b border-gray-200">
        <div className="max-w-6xl mx-auto flex items-center justify-between px-5 sm:px-8 py-3">
          <Link href="/" className="text-2xl font-bold tracking-tight text-foreground">
            KK.
          </Link>
          <div className="hidden md:flex items-center gap-6 text-sm font-medium text-foreground/80">
            {["Home", "Blog", "Categories", "About", "Contact"].map((l) => (
              <Link key={l} href={l === "Home" ? "/" : `/${l.toLowerCase()}`} className="hover:text-foreground transition-colors tracking-wide">
                {l}
              </Link>
            ))}
          </div>
          <Link href="/" className="text-xs text-foreground/50 hover:text-foreground transition-colors">&larr; Back to Home</Link>
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-5 sm:px-8 pt-28 pb-20">
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-foreground">Get in Touch</h1>
          <p className="text-sm text-foreground/60 mt-2">Have a question, suggestion, or just want to say hello? I&rsquo;d love to hear from you.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <div>
            <div className="bg-white border border-gray-200 rounded-2xl h-64 flex items-center justify-center shadow-lg mb-6">
              <div className="text-center">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#7B8C6E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="mx-auto mb-3 opacity-60">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <p className="text-xs text-foreground/40">Map Placeholder</p>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-lg">
              <h3 className="text-base font-bold text-foreground mb-4">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-accent/20 flex items-center justify-center shrink-0">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#7B8C6E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">Email</p>
                    <p className="text-xs text-foreground/50">hello@iggysblog.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-accent/20 flex items-center justify-center shrink-0">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#7B8C6E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">Phone</p>
                    <p className="text-xs text-foreground/50">+1 (555) 123-4567</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 shadow-lg">
            <h3 className="text-base font-bold text-foreground mb-6">Send a Message</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-medium text-foreground/50 mb-1.5">Your Name</label>
                <input type="text" placeholder="John Doe" className="w-full px-4 py-3 rounded-xl bg-white border border-gray-200 text-foreground placeholder:text-foreground/40 text-sm focus:outline-none focus:border-accent transition-colors" />
              </div>
              <div>
                <label className="block text-xs font-medium text-foreground/50 mb-1.5">Your Email</label>
                <input type="email" placeholder="john@example.com" className="w-full px-4 py-3 rounded-xl bg-white border border-gray-200 text-foreground placeholder:text-foreground/40 text-sm focus:outline-none focus:border-accent transition-colors" />
              </div>
              <div>
                <label className="block text-xs font-medium text-foreground/50 mb-1.5">Message</label>
                <textarea rows={5} placeholder="Write your message here..." className="w-full px-4 py-3 rounded-xl bg-white border border-gray-200 text-foreground placeholder:text-foreground/40 text-sm focus:outline-none focus:border-accent transition-colors resize-none" />
              </div>
              <button className="w-full px-8 py-3 bg-black text-white text-sm font-bold tracking-wider rounded-xl hover:bg-gray-900 transition-all shadow-lg">
                Send Message
              </button>
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-white border-t border-gray-200 py-6">
        <p className="text-center text-xs text-foreground/40">&copy; 2026 Iggy&rsquo;s Blog. All rights reserved.</p>
      </footer>
    </div>
  );
}
