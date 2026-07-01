# Iggy's Blog

A personal blog and lifestyle brand built with **Next.js 16**, **React 19**, and **Tailwind CSS v4**. Features a liquid-glass / glassmorphism-themed front-end and a full-featured admin dashboard.

## Features

### Frontend (Visitor-Facing)

- **Navigation Bar** — Logo "KK.", Home, Blog, Categories, About, Contact, search icon, dark mode toggle, Subscribe button, mobile hamburger sidebar
- **Massive Full-Screen Hero** — Covers the entire viewport on desktop with background image, motivational quote, CTA buttons, stats (articles, categories, readers)
- **Featured Posts** — 3 large cards with image, category, title, description, reading time, author, date
- **Categories Grid** — 8 categories (Technology, Lifestyle, Programming, AI, Photography, Travel, Business, Personal) with icons and post counts
- **Latest Posts** — 6 modern cards with image, category, title, preview, likes, comments, views, Read More
- **Newsletter** — Glassmorphism subscription box with email input and Subscribe button
- **About KK** — Bio section with avatar, "Hi, I'm KK." and description
- **Photo Gallery** — Horizontally scrolling image carousel with navigation dots and arrows
- **Popular Posts** — Top 5 most viewed posts with ranking
- **Tags Cloud** — AI, Coding, Life, Travel, Books, Coffee, Programming, Design
- **Testimonials** — 3 reader feedback cards with quotes and names
- **Contact Section** — Simple form (Name, Email, Message) with Send button
- **Footer** — Logo "KK.", Quick Links, Social icons, Copyright, Privacy Policy, Terms, Newsletter
- **Single Blog Page** — Large cover image, title, author, date, reading time, share buttons (Twitter, Facebook, Copy Link), table of contents, content sections, related posts, comments section with leave-a-comment form
- **Search Page** — Search bar with filters by category, date, tags
- **Categories Page** — All categories as cards with descriptions and post counts
- **Category Detail Page** — Shows all posts within a specific category
- **About Page** — Professional photo, biography, experience timeline, skills grid, career milestones, social links
- **Contact Page** — Map placeholder, email, phone, contact form

### Admin Dashboard (17 pages)

- **Dashboard (Insights)** — 6 stat cards (views, subscribers, engagement, read time, posts, top category), new subscribers list, most-read posts with trend indicators, recent activity feed
- **Posts Management** — Full CRUD table with search, add/edit modal with rich text toolbar, featured image upload (drag & drop), draft/publish toggle
- **Categories** — Card grid with icons, colors, post counts, add/edit/delete modal
- **Tags** — Tag list with post counts, add input, delete buttons
- **Comments** — Table with approve/delete/reply actions, spam filter toggle, status filter (All/Pending/Approved/Spam)
- **Users** — Table with role badges (Admin/Editor/Author/Subscriber), add/edit modal with permissions checkboxes
- **Newsletter** — Stats cards, subscriber list, export CSV, send newsletter form
- **Media Library** — Image/document grid with colored placeholders, upload, delete, folder filter tabs
- **Analytics** — Overview cards with trend indicators, top posts list, traffic sources bars
- **Contact Messages** — Inbox list + detail pane, expand to read, reply modal, archive/delete
- **SEO** — Meta title/description with char counts, OG image upload, sitemap toggle, robots.txt editor
- **Security** — 2FA toggle, password reset modal, active sessions with revoke, login history table
- **Backup** — Manual backup with progress, auto-backup toggle, backup history with download/restore
- **Notifications** — Notification type toggles, recent notifications list with unread indicators
- **Profile** — Editable form: display name, email, bio, location, website, avatar
- **Settings** — Blog title, tagline, language, posts per page, comment toggle, email notification toggle, danger zone

### Design

- **Color Palette**: Background `#F9F9F8`, text `#1A1A1A`, accent olive green `#7B8C6E`, buttons `#000000`
- **Theme**: Liquid glass / glassmorphism — `backdrop-blur-*`, `bg-white/*` transparencies, `border-white/*` borders, blurred full-screen background image on all pages
- **Typography**: Geist (body) + Playfair Display (headings)
- **Dark Mode**: Toggle on landing page, glassmorphism adapts to dark background
- **Style**: Calm, premium, warm beige tones, rounded corners, soft shadows, generous spacing

## Tech Stack

- **Framework**: Next.js 16.2.9 (Turbopack)
- **Language**: TypeScript
- **UI**: React 19, Tailwind CSS v4
- **Linting**: ESLint (flat config)

## Routes

### Front-end
| Route | Page |
|---|---|
| `/` | Landing page (hero, featured, categories, latest, newsletter, about, gallery, popular, tags, testimonials, contact, footer) |
| `/blog` | Blog listing |
| `/blog/[slug]` | Single blog post |
| `/search` | Search with filters |
| `/categories` | All categories |
| `/categories/[slug]` | Posts in a category |
| `/about` | About KK |
| `/contact` | Contact form |

### Admin
| Route | Page |
|---|---|
| `/admin` | Insights dashboard |
| `/admin/posts` | Post management |
| `/admin/categories` | Category management |
| `/admin/tags` | Tag management |
| `/admin/comments` | Comment moderation |
| `/admin/users` | User management |
| `/admin/newsletter` | Newsletter & subscribers |
| `/admin/media` | Media library |
| `/admin/analytics` | Analytics dashboard |
| `/admin/messages` | Contact messages inbox |
| `/admin/seo` | SEO settings |
| `/admin/security` | Security settings |
| `/admin/backup` | Backup management |
| `/admin/notifications` | Notification preferences |
| `/admin/profile` | Profile editor |
| `/admin/settings` | Blog settings |

## Project Structure

```
app/
├── layout.tsx             # Root layout (fonts)
├── page.tsx               # Landing page (all sections)
├── loading.tsx            # Loading screen
├── globals.css            # Tailwind v4 theme tokens
├── blog/
│   ├── page.tsx           # Blog listing
│   └── [slug]/page.tsx    # Single blog post
├── search/page.tsx        # Search page
├── categories/
│   ├── page.tsx           # All categories
│   └── [slug]/page.tsx    # Category posts
├── about/page.tsx         # About page
├── contact/page.tsx       # Contact page
├── admin/
│   ├── layout.tsx         # Shared admin layout (sidebar + background)
│   ├── loading.tsx        # Admin loading screen
│   ├── page.tsx           # Insights dashboard
│   ├── posts/page.tsx     # Post CRUD
│   ├── categories/page.tsx # Category CRUD
│   ├── tags/page.tsx      # Tag management
│   ├── comments/page.tsx  # Comment moderation
│   ├── users/page.tsx     # User management
│   ├── newsletter/page.tsx # Newsletter
│   ├── media/page.tsx     # Media library
│   ├── analytics/page.tsx # Analytics
│   ├── messages/page.tsx  # Contact messages
│   ├── seo/page.tsx       # SEO settings
│   ├── security/page.tsx  # Security settings
│   ├── backup/page.tsx    # Backup management
│   ├── notifications/page.tsx # Notifications
│   ├── profile/page.tsx   # Profile editor
│   └── settings/page.tsx  # Blog settings
└── next.config.ts         # Image remote patterns
```
