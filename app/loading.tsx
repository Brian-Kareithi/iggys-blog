"use client";

import Image from "next/image";

export default function Loading() {
  return (
    <div className="relative min-h-screen bg-background text-foreground">
      <div className="fixed inset-0">
        <Image
          src="https://ppkfgsakvcijmmhjwbcz.supabase.co/storage/v1/object/public/Photos/blog.jpg"
          alt=""
          fill
          className="object-cover scale-110 blur-[2px]"
          priority
        />
        <div className="absolute inset-0 bg-black/20" />
      </div>
      <div className="relative z-20 flex items-center justify-center min-h-screen">
        <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl px-10 py-8 flex flex-col items-center gap-4 shadow-2xl">
          <div className="w-10 h-10 border-3 border-accent border-t-transparent rounded-full animate-spin" />
          <p className="text-white/80 text-sm tracking-wider font-medium">Loading...</p>
        </div>
      </div>
    </div>
  );
}
