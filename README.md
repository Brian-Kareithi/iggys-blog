# Iggy's Blog

A personal blog and lifestyle brand built with **Next.js 16**, **React 19**, and **Tailwind CSS v4**. Features a liquid-glass / glassmorphism-themed front-end landing page and a full-featured admin dashboard.

## Features

### Frontend (Visitor-Facing)

- **Navigation Bar** — Logo, Home, Blog, Categories, About, Contact, Search icon, dark mode toggle, Subscribe button
- **Hero Section** — Large background image with motivational quote and CTA buttons ("Read Latest Articles" / "Explore Categories")
- **Featured Posts** — Three large cards with image, category, title, description, reading time, author, date
- **Categories Grid** — Technology, Lifestyle, Programming, AI, Photography, Travel, Business, Personal
- **Latest Posts** — Modern card layout with image, category, title, preview, likes, comments, views, Read More
- **Newsletter** — Beige subscription box with email input and Subscribe button
- **About KK** — Small bio section with profile image
- **Popular Posts** — Sidebar or section showing top 5 most viewed posts
- **Tags Cloud** — AI, Coding, Life, Travel, Books, Coffee, Programming, Design
- **Testimonials** — Reader feedback section
- **Contact Section** — Simple form: Name, Email, Message
- **Footer** — Logo, Quick Links, Socials, Copyright, Privacy Policy, Terms, Newsletter
- **Single Blog Page** — Large cover image, title, author, date, reading time, share buttons, table of contents, content, related posts, comments, leave a comment
- **Search Page** — Search bar with filters by category, date, tags
- **Category Page** — Shows all posts within one category
- **About Page** — Professional photo, biography, experience, skills, timeline, social links
- **Contact Page** — Map, email, phone, contact form

### Admin Dashboard

- **Dashboard (Insights)** — Statistics cards (Total Posts, Views, Users, Comments, Subscribers, Categories), recent activity feed, new subscribers list, most-read posts
- **Posts Management** — Add / Edit / Delete posts, draft / publish / schedule, featured image upload, rich text editor, tags, categories, SEO title, meta description, slug
- **Categories** — Create / Edit / Delete categories with icons and colors
- **Tags** — Manage tags
- **Comments** — Approve / Delete / Reply / Spam filter
- **Users** — Admin, Editor, Author, Subscriber roles with permissions
- **Newsletter** — Subscribers list, export CSV, send newsletter
- **Media Library** — Upload, delete, folders, image optimization
- **Analytics** — Views, visitors, countries, top posts, traffic sources, reading time, bounce rate
- **Settings** — Website name, logo, favicon, theme colors, fonts, social links, SEO, email, dark mode, maintenance mode, backup
- **Contact Messages** — Inbox, reply, archive, delete
- **SEO** — Meta titles, descriptions, Open Graph image, sitemap, robots.txt
- **Security** — Login history, two-factor authentication (2FA), password reset, session management
- **Backup** — Manual backup, automatic daily backups, restore, download backups
- **Notifications** — New comments, new subscribers, failed login attempts, contact messages

### Extra Features

- Reading progress bar
- Estimated reading time
- Like / Bookmark articles
- Share to social media
- Related / Trending posts
- Featured author
- Reading history
- Cookie consent
- Lazy-loaded images
- Infinite scrolling or pagination
- Responsive design
- Accessibility support
- Offline support (PWA)
- RSS feed

## Design Language

- **Color Palette**: Background `#F9F9F8`, text `#1A1A1A`, accent olive green `#7B8C6E`, buttons solid black `#000000`
- **Theme**: Liquid glass / glassmorphism — `backdrop-blur-*`, `bg-white/*` transparencies, `border-white/*` borders, all pages share a blurred full-screen background image
- **Typography**: Geist (body) + Playfair Display (headings) — calm, premium, highly readable
- **Spacing**: Generous padding, rounded corners, soft shadows

## Tech Stack

- **Framework**: Next.js 16.2.9 (Turbopack)
- **Language**: TypeScript
- **UI**: React 19, Tailwind CSS v4
- **Linting**: ESLint (flat config)

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Lint
npm run lint
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Routes

| Route                 | Page                  |
| --------------------- | --------------------- |
| `/`                   | Front-end landing     |
| `/admin`              | Admin insights        |
| `/admin/posts`        | Post management       |
| `/admin/categories`   | Category management   |
| `/admin/profile`      | Profile settings      |
| `/admin/settings`     | Blog settings         |

## Project Structure

```
app/
├── components/         # Front-end UI components
│   ├── BackgroundImage.tsx
│   ├── Navbar.tsx
│   ├── LogoBanner.tsx
│   ├── CTAButtons.tsx
│   ├── HeroCard.tsx
│   ├── CategoryCard.tsx
│   ├── CategoriesGrid.tsx
│   ├── FeaturesGrid.tsx
│   └── BestOfIggy.tsx
├── admin/
│   ├── layout.tsx      # Shared admin layout (sidebar + background)
│   ├── page.tsx        # Insights dashboard
│   ├── posts/page.tsx  # Post CRUD
│   ├── categories/page.tsx # Category CRUD
│   ├── profile/page.tsx    # Profile editor
│   └── settings/page.tsx   # Settings form
├── globals.css         # Tailwind v4 theme tokens
├── layout.tsx          # Root layout (fonts)
└── page.tsx            # Landing page
```
