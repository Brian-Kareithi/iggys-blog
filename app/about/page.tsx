"use client";

import Link from "next/link";

const skills = [
  "React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS", "Node.js", "Python", "GraphQL", "PostgreSQL", "Docker", "AWS", "Figma",
];

const milestones = [
  { year: "2026", title: "Launched Iggy's Blog", desc: "Started sharing thoughts on technology and creativity." },
  { year: "2025", title: "Senior Engineer at TechCorp", desc: "Led front-end architecture for major product launch." },
  { year: "2023", title: "Full-Stack Developer", desc: "Built scalable web applications for diverse clients." },
  { year: "2021", title: "Started Freelancing", desc: "Transitioned to independent full-stack development." },
  { year: "2019", title: "First Developer Role", desc: "Began professional journey as a junior developer." },
  { year: "2018", title: "Learned to Code", desc: "Completed intensive coding bootcamp program." },
];

const experience = [
  { period: "2025 - Present", role: "Senior Engineer", company: "TechCorp Inc.", desc: "Leading front-end architecture and mentoring junior developers." },
  { period: "2023 - 2025", role: "Full-Stack Developer", company: "StartupXYZ", desc: "Built and shipped multiple products from concept to launch." },
  { period: "2021 - 2023", role: "Freelance Developer", company: "Self-Employed", desc: "Delivered web applications for startups and agencies." },
  { period: "2019 - 2021", role: "Junior Developer", company: "WebAgency", desc: "Developed responsive websites and internal tools." },
];

export default function AboutPage() {
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
          <div className="w-36 h-36 rounded-full bg-gradient-to-br from-accent/40 to-accent-light/20 border-2 border-gray-200 mx-auto mb-6 flex items-center justify-center shadow-lg">
            <span className="text-5xl">\uD83D\uDC64</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-foreground">Hi, I&rsquo;m KK.</h1>
          <p className="text-sm text-foreground/60 mt-2 max-w-xl mx-auto">Writer, developer, and lifelong learner sharing thoughts on technology, creativity, and everyday life.</p>
        </div>

        <section className="mb-12">
          <div className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 shadow-lg">
            <h2 className="text-xl font-bold text-foreground mb-4">Biography</h2>
            <p className="text-sm text-foreground/70 leading-relaxed mb-3">
              I&rsquo;m a software engineer and writer based in Tokyo. With over seven years of experience in web development, I&rsquo;ve worked with startups, agencies, and large tech companies building products that reach millions of users.
            </p>
            <p className="text-sm text-foreground/70 leading-relaxed mb-3">
              I started this blog as a creative outlet to share what I learn about technology, productivity, and personal growth. What began as a simple journal has grown into a community of like-minded readers who share a passion for thoughtful content.
            </p>
            <p className="text-sm text-foreground/70 leading-relaxed">
              When I&rsquo;m not coding or writing, you&rsquo;ll find me exploring new cities with my camera, reading at a quiet coffee shop, or experimenting with new recipes in the kitchen.
            </p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-bold text-foreground mb-6">Experience</h2>
          <div className="space-y-4">
            {experience.map((exp) => (
              <div key={exp.period} className="bg-white border border-gray-200 rounded-xl p-5 hover:bg-gray-50 transition-all duration-300 shadow-lg">
                <div className="flex items-start justify-between mb-1">
                  <div>
                    <h3 className="text-base font-bold text-foreground">{exp.role}</h3>
                    <p className="text-sm text-accent">{exp.company}</p>
                  </div>
                  <span className="text-xs text-foreground/40 shrink-0 ml-4">{exp.period}</span>
                </div>
                <p className="text-sm text-foreground/60 mt-2">{exp.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <div className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 shadow-lg">
            <h2 className="text-xl font-bold text-foreground mb-6">Skills & Technologies</h2>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 bg-accent-light/50 border border-gray-100 rounded-full text-xs text-foreground/70 hover:bg-accent-light hover:text-foreground transition-all cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-bold text-foreground mb-6">Timeline</h2>
          <div className="relative">
            <div className="absolute left-4 top-0 bottom-0 w-px bg-gray-200" />
            <div className="space-y-6">
              {milestones.map((m) => (
                <div key={m.year} className="relative pl-10">
                  <div className="absolute left-2.5 top-1.5 w-3 h-3 rounded-full bg-accent border-2 border-white" />
                  <div className="bg-white border border-gray-200 rounded-xl p-4 hover:bg-gray-50 transition-all duration-300 shadow-lg">
                    <span className="text-xs font-bold text-accent">{m.year}</span>
                    <h3 className="text-sm font-bold text-foreground mt-1">{m.title}</h3>
                    <p className="text-xs text-foreground/60 mt-0.5">{m.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="text-center">
          <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-lg">
            <h2 className="text-xl font-bold text-foreground mb-4">Let&rsquo;s Connect</h2>
            <p className="text-sm text-foreground/60 mb-6">Follow me on social media or drop me a message.</p>
            <div className="flex justify-center gap-4">
              {["Twitter", "GitHub", "LinkedIn", "Instagram"].map((platform) => (
                <Link
                  key={platform}
                  href="#"
                  className="w-12 h-12 rounded-full bg-accent-light/50 border border-gray-100 flex items-center justify-center text-foreground/60 hover:text-foreground hover:bg-accent-light hover:border-gray-300 transition-all shadow-lg text-sm font-bold"
                >
                  {platform[0]}
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-white border-t border-gray-200 py-6">
        <p className="text-center text-xs text-foreground/40">&copy; 2026 Iggy&rsquo;s Blog. All rights reserved.</p>
      </footer>
    </div>
  );
}
