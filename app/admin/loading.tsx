"use client";

export default function AdminLoading() {
  return (
    <div className="flex-1 flex items-center justify-center">
      <div className="bg-white border border-gray-200 rounded-2xl px-10 py-8 flex flex-col items-center gap-4 shadow-lg">
        <div className="w-10 h-10 border-3 border-accent border-t-transparent rounded-full animate-spin" />
        <p className="text-foreground/80 text-sm tracking-wider font-medium">Loading...</p>
      </div>
    </div>
  );
}
