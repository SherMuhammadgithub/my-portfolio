import {
  Server,
  ShoppingCart,
  Mic,
  Library,
  KanbanSquare,
  Receipt,
  Network,
  Bell,
  ShieldCheck,
  Sparkles,
  CreditCard,
  Boxes,
  Zap,
  KeyRound,
  MessageSquare,
  FileText,
  MessageCircle,
  Lock,
  HeartPulse,
  Radio,
  FileSearch,
  Layout,
  Workflow,
  History,
  Palette,
  Wrench,
  CalendarCheck,
  GitBranch,
  RefreshCw,
  ShieldAlert,
} from "lucide-react";

export const PROJECT_CATEGORIES = [
  "All",
  "Full-Stack",
  "AI",
  "Real-Time",
  "Backend",
  "Frontend",
  "DevOps",
];

// media: [] until real screenshots/clips exist for a project — falls back to a
// gradient placeholder instead of a misleading stock image.
//
// link / codeLink: null until there's a public URL / repo to share — the UI
// falls back to a "Confidential" badge instead of a dead link.
//
// duration: intentionally left out until real per-project dates are given —
// don't want to guess and have it not hold up if a client asks.
export const PROJECTS = [
  {
    id: "service-pro",
    size: "featured",
    title: "Services Pro — Home Services Booking Platform",
    shortTitle: "Services Pro",
    tagline: "Book home services in a 4-step wizard, with an AI assistant",
    role: "Full-Stack Developer",
    type: "Company Project",
    icon: Wrench,
    description:
      "Services Pro is a full-stack home services booking platform where customers book electrical, plumbing, HVAC, carpentry, and locksmith services through a 4-step wizard: select service, pick date and time, enter details, and pay. Contributed to the admin dashboard with month/week/day calendar views, service filters, an upcoming bookings panel, and edit/delete controls. An AI chatbot walks users through the booking process. Multi-language support (US/EN) and a dark mode are included.",
    categories: ["Full-Stack", "AI"],
    stack: ["Node.js", "Next.js", "REST API"],
    highlights: [
      {
        icon: CalendarCheck,
        title: "4-Step Booking Wizard",
        description: "Service → date/time → details → payment",
      },
      {
        icon: Sparkles,
        title: "AI Booking Assistant",
        description: "Chatbot walks users through the entire flow",
      },
      {
        icon: KanbanSquare,
        title: "Admin Calendar Dashboard",
        description: "Month/week/day views with live service filters",
      },
      {
        icon: Palette,
        title: "Multi-Language & Dark Mode",
        description: "US/EN support with full theme switching",
      },
    ],
    media: [
      {
        type: "video",
        src: "/projects/service-pro/service-pro-web.mp4",
        poster: "/projects/service-pro/thumbail.png",
      },
    ],
    link: null,
    codeLink: null,
  },
  {
    id: "calldraft",
    size: "tall",
    title: "CallDraft — AI Voice Agent",
    shortTitle: "CallDraft",
    tagline: "Sub-800ms browser-based AI voice conversations",
    role: "Sole Developer",
    type: "Personal Project",
    icon: Mic,
    description:
      "CallDraft is an AI voice agent that enables live speech-to-speech conversations in the browser with sub-800ms latency. Integrated OpenAI's Realtime API with ephemeral token authentication over WebRTC for secure, low-latency audio streaming. The interface includes a live transcript, call timer, and response latency indicator.",
    categories: ["AI", "Real-Time"],
    stack: ["Next.js", "TypeScript", "OpenAI Realtime API", "WebRTC"],
    highlights: [
      {
        icon: Zap,
        title: "Sub-800ms Latency",
        description: "Fast enough round trip for natural conversation flow",
      },
      {
        icon: Radio,
        title: "WebRTC Audio Streaming",
        description: "Mic streams straight to OpenAI's Realtime API",
      },
      {
        icon: KeyRound,
        title: "Ephemeral Auth",
        description: "Secure token flow, no API keys exposed to the browser",
      },
      {
        icon: MessageSquare,
        title: "Live Transcript",
        description: "Real-time text of both sides of the conversation",
      },
    ],
    media: [
      {
        type: "video",
        src: "/projects/call-draft/call-draft-web.mp4",
        poster: "/projects/call-draft/thumbnail.png",
      },
    ],
    link: null,
    codeLink: null,
  },
  {
    id: "volvox",
    size: "normal",
    title: "Volvox — AI Research Assistant",
    shortTitle: "Volvox",
    tagline: "RAG-powered research assistant for documents & video",
    role: "Full-Stack Developer — Sole Developer",
    type: "Personal Project",
    icon: FileSearch,
    description:
      "Volvox is a research assistant app for managing documents and pulling insights from them faster. Users upload documents, chat with an AI that answers based on that content (RAG), get summaries of documents or YouTube videos, and revisit past chats. Built the full stack: FastAPI and MongoDB backend with a LangChain, FAISS, and Gemini RAG pipeline, plus a Next.js/TypeScript frontend with HeroUI and Tailwind. Handled auth, document CRUD, chat history, and Dockerized the backend.",
    categories: ["AI", "Full-Stack"],
    stack: ["Next.js", "FastAPI", "MongoDB", "LangChain", "Gemini", "Docker"],
    highlights: [
      {
        icon: Sparkles,
        title: "RAG Chat Pipeline",
        description: "LangChain + FAISS + Gemini answer from your own docs",
      },
      {
        icon: FileText,
        title: "Doc & Video Summaries",
        description: "Condenses documents or YouTube videos on demand",
      },
      {
        icon: History,
        title: "Persistent Chat History",
        description: "Revisit and continue past research sessions",
      },
      {
        icon: Boxes,
        title: "Dockerized Backend",
        description: "FastAPI + MongoDB containerized for deployment",
      },
    ],
    media: [
      {
        type: "video",
        src: "/projects/volvox/volvox-web.mp4",
        poster: "/projects/volvox/volvox_thumbnail.png",
      },
    ],
    link: null,
    codeLink: null,
  },
  {
    id: "pm-suite",
    size: "normal",
    title: "PM Suite — Project Management Platform",
    shortTitle: "PM Suite",
    tagline: "Jira + Notion + Slack, combined into one tool",
    role: "Full-Stack Developer — Angular focus",
    type: "Company Project",
    icon: KanbanSquare,
    description:
      "Full-stack project management platform combining Kanban boards, a Notion-style block document editor, integrated real-time team chat, KPI dashboards, and per-task time tracking — with full offline support as a PWA that syncs when connection restores.",
    categories: ["Full-Stack"],
    stack: ["Angular", "Deno", "PostgreSQL", "JWT/RBAC", "PWA"],
    highlights: [
      {
        icon: KanbanSquare,
        title: "Kanban Boards",
        description: "Drag-and-drop task management with custom columns",
      },
      {
        icon: FileText,
        title: "Block Document Editor",
        description: "20+ Notion-style content blocks, tables, embeds",
      },
      {
        icon: MessageCircle,
        title: "Built-In Team Chat",
        description: "Real-time messaging with no external tool needed",
      },
      {
        icon: Workflow,
        title: "Automated CI/CD",
        description: "Jenkins pipeline auto-builds, health-checks, and rolls back on failure",
      },
    ],
    media: [
      { type: "image", src: "/projects/project-management/thumbnail.png" },
      { type: "image", src: "/projects/project-management/kanban.png" },
      { type: "image", src: "/projects/project-management/note-editor.png" },
      { type: "image", src: "/projects/project-management/chat.png" },
      { type: "image", src: "/projects/project-management/timeline.png" },
      { type: "image", src: "/projects/project-management/task-details.png" },
      { type: "image", src: "/projects/project-management/time-tracker.png" },
    ],
    link: null,
    codeLink: null,
  },
  {
    id: "portfolio-site",
    size: "normal",
    title: "Client Portfolio Website",
    shortTitle: "Portfolio Site",
    tagline: "Dark space-themed portfolio with scroll-triggered animation",
    role: "Frontend Developer",
    type: "Freelance Project",
    icon: Layout,
    description:
      "Built a personal portfolio website with a dark space-themed design and smooth animations throughout. Used Framer Motion for scroll-triggered reveals, hero entrance animations, and hover interactions across all sections. The site covers Services, Portfolio, Resume, Skills, and Testimonials, with a hero section featuring a CV download button and animated particle background. Built with Next.js for fast routing and optimized load performance. Frontend only, no backend.",
    categories: ["Frontend"],
    stack: ["Next.js", "Framer Motion", "Tailwind CSS"],
    highlights: [
      {
        icon: Palette,
        title: "Framer Motion Animations",
        description: "Scroll-triggered reveals and hover interactions sitewide",
      },
      {
        icon: Sparkles,
        title: "Dark Space Theme",
        description: "Animated particle background in the hero section",
      },
      {
        icon: Layout,
        title: "Full Site Structure",
        description: "Services, Portfolio, Resume, Skills, Testimonials",
      },
      {
        icon: Zap,
        title: "Optimized Routing",
        description: "Built with Next.js for fast, smooth page performance",
      },
    ],
    media: [
      {
        type: "video",
        src: "/projects/portfolio/portfolio-web.mp4",
        poster: "/projects/portfolio/thumbnail.png",
      },
    ],
    link: null,
    codeLink: null,
  },
  {
    id: "vxs",
    size: "normal",
    title: "VXS — Vehicle Surveillance & Access Control",
    shortTitle: "VXS",
    tagline: "Enterprise vehicle monitoring & access control platform",
    role: "Full-Stack Developer — media streaming module owner",
    type: "Company Project",
    icon: Server,
    description:
      "Enterprise-grade vehicle monitoring and access control platform managing the full lifecycle of vehicle entry and exit through monitored facilities — camera-based license plate recognition, multi-step validation, physical barrier gate control, and real-time alarm distribution. Built the live FFmpeg → MediaMTX → WebRTC streaming pipeline from scratch, with automatic reconnection, stuck-stream detection, and viewer-based cleanup. Contributed to the ANPR event pipeline running five parallel validation checks.",
    categories: ["Full-Stack", "Real-Time"],
    stack: ["NestJS", "PostgreSQL", "Socket.IO", "FFmpeg", "WebRTC", "Docker"],
    highlights: [
      {
        icon: Radio,
        title: "Live Streaming Pipeline",
        description: "FFmpeg → MediaMTX → WebRTC, with auto-reconnect on failure",
      },
      {
        icon: ShieldCheck,
        title: "ANPR Event Processing",
        description: "5 parallel validation checks before gate control fires",
      },
      {
        icon: Network,
        title: "Distributed Architecture",
        description: "VXS + DPU multi-server topology with DB replication",
      },
      {
        icon: Bell,
        title: "Real-Time Alarms",
        description: "Role-scoped Socket.IO alerts by camera cluster",
      },
    ],
    media: [],
    link: null,
    codeLink: null,
  },
  {
    id: "buy4me",
    size: "normal",
    title: "Buy4Me — Cross-Border E-Commerce Platform",
    shortTitle: "Buy4Me",
    tagline: "Cross-border shopping platform, live in production",
    role: "Full-Stack Developer",
    type: "Company Project",
    icon: ShoppingCart,
    description:
      "Production e-commerce platform serving the Azerbaijan market, enabling cross-border shopping with logistics, payments, and delivery handled end-to-end. Built across a 4-app Nx monorepo (customer app, admin panel, vendor portal, operations dashboard). Integrated Qdrant vector search for AI-powered semantic product discovery and a multi-currency Stripe wallet system, deployed on a VPS with PM2 cluster mode for zero-downtime restarts.",
    categories: ["Full-Stack", "AI"],
    stack: ["Angular", "NestJS", "Prisma", "Qdrant", "Stripe", "Nx Monorepo"],
    highlights: [
      {
        icon: Sparkles,
        title: "AI Semantic Search",
        description: "Qdrant vector embeddings power meaning-based product search",
      },
      {
        icon: CreditCard,
        title: "Multi-Currency Payments",
        description: "Stripe-backed wallet for cross-border orders",
      },
      {
        icon: Boxes,
        title: "Nx Monorepo",
        description: "4 apps sharing code: customer, admin, vendor, ops",
      },
      {
        icon: Zap,
        title: "Zero-Downtime Deploys",
        description: "PM2 cluster mode on VPS with CI/CD automation",
      },
    ],
    media: [
      {
        type: "image",
        src: "/projects/buy4me/order-details.png",
      },
    ],
    link: null,
    codeLink: null,
  },
  {
    id: "billing-engine",
    size: "normal",
    title: "Real-Time Billing Engine",
    shortTitle: "Billing Engine",
    tagline: "Server-authoritative billing for live medical consultations",
    role: "Backend Developer",
    type: "Company Project",
    icon: Receipt,
    description:
      "Server-authoritative real-time billing system for medical consultations — pessimistic database locking prevents double-booking the same doctor, heartbeat-based session monitoring detects dropped connections, and Socket.IO broadcasts live session state (started, paused, ended) to every party involved.",
    categories: ["Backend", "Real-Time"],
    stack: ["Node.js", "Express", "TypeORM", "PostgreSQL", "Socket.IO"],
    highlights: [
      {
        icon: Lock,
        title: "Pessimistic Locking",
        description: "DB-level locks stop double-booking under load",
      },
      {
        icon: HeartPulse,
        title: "Heartbeat Monitoring",
        description: "Detects dropped connections and cleans up sessions",
      },
      {
        icon: ShieldCheck,
        title: "Server-Authoritative Billing",
        description: "Clients can't manipulate duration or amount",
      },
      {
        icon: Radio,
        title: "Live Session Broadcast",
        description: "Socket.IO syncs session state to every party",
      },
    ],
    media: [],
    link: null,
    codeLink: null,
  },
  {
    id: "ci-cd-jenkins",
    size: "normal",
    title: "CI/CD Pipeline — Automated Deployment",
    shortTitle: "CI/CD Pipeline",
    tagline: "Zero-touch deploys with health checks and auto-rollback",
    role: "DevOps / Backend Developer",
    type: "Company Project",
    icon: GitBranch,
    description:
      "Designed and built a full CI/CD pipeline for a production project management system, automating build, health-check, and deploy for both a Dockerized backend and a static frontend. Jenkins jobs watch each repo's main branch via GitHub webhooks, run the build, verify a health check, and go live — with automatic rollback to the last known-good version on any failure. Hardened the server with a non-root deploy user, key-based SSH, a firewall, and brute-force protection.",
    categories: ["DevOps", "Backend"],
    stack: ["Jenkins", "Docker", "Nginx", "GitHub Webhooks"],
    highlights: [
      {
        icon: GitBranch,
        title: "Auto Deploy on Push",
        description: "GitHub webhook triggers a build the moment code lands",
      },
      {
        icon: ShieldCheck,
        title: "Health-Checked Rollouts",
        description: "Deploy only goes live after passing a health check",
      },
      {
        icon: RefreshCw,
        title: "Automatic Rollback",
        description: "Reverts to the last working version on any failure",
      },
      {
        icon: ShieldAlert,
        title: "Hardened Server Security",
        description: "Key-based SSH, firewall, and brute-force protection",
      },
    ],
    media: [{ type: "image", src: "/projects/ci-cd-jenkins/image.png" }],
    link: null,
    codeLink: null,
  },
  {
    id: "kitkiat-studio",
    size: "normal",
    title: "KitKiat Studio — Music & Books Platform",
    shortTitle: "KitKiat Studio",
    tagline: "A custom publishing, music, and direct-to-consumer commerce platform",
    role: "Full-Stack Developer",
    type: "Client Project",
    icon: Library,
    description:
      "KitKiat Studio is a ground-up rebuild for an independent music label and book publisher, migrated from Wix to a custom three-application stack. The Astro SSR public site includes music catalogues, an audio player, book editions with live pricing and stock, a blog engine, and Stripe checkout. A React and Vite admin CMS manages albums, books, blog content, media, comments, enquiries, settings, and publishing workflows, while a NestJS, Prisma, and PostgreSQL API powers authentication, validation, media uploads to Tencent COS, payments, and commerce integrations.",
    categories: ["Full-Stack", "Frontend", "Backend"],
    stack: [
      "Astro",
      "React",
      "Vite",
      "NestJS",
      "Prisma",
      "PostgreSQL",
      "Stripe",
      "Tencent COS",
      "Tailwind CSS",
    ],
    highlights: [
      {
        icon: Layout,
        title: "Three-Application Stack",
        description: "Astro public site, React CMS, and NestJS API sharing one database",
      },
      {
        icon: Workflow,
        title: "Flexible Section Builder",
        description: "JSON-content sections with per-type validation and publishing workflows",
      },
      {
        icon: CreditCard,
        title: "Direct E-Commerce",
        description: "Stripe checkout with live book pricing, stock, and webhook confirmation",
      },
      {
        icon: ShieldCheck,
        title: "Production Hardening",
        description: "HTTPS, rate limiting, anti-spam, UAT, production environments, and migrations",
      },
    ],
    media: [
      { type: "image", src: "/projects/kitkiat/kitkiat-01-homepage.png" },
      { type: "image", src: "/projects/kitkiat/kitkiat-02-album-page.png" },
      { type: "image", src: "/projects/kitkiat/kitkiat-03-blog-listing.png" },
      { type: "image", src: "/projects/kitkiat/kitkiat-04-admin-dashboard.png" },
    ],
    link: null,
    codeLink: null,
  },
];
