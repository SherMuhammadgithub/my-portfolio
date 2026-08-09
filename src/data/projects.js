import {
  Server,
  ShoppingCart,
  Mic,
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
  WifiOff,
  Lock,
  HeartPulse,
  Radio,
} from "lucide-react";

export const PROJECT_CATEGORIES = ["All", "Full-Stack", "AI", "Real-Time", "Backend"];

// media: [] for now — once you have real screenshots/clips, add entries like:
//   { type: "image", src: "/projects/vxs-1.png" }
//   { type: "video", src: "/projects/vxs-demo.mp4", poster: "/projects/vxs-poster.png" }
// The first entry is used as the card thumbnail. A "video" entry as the first
// item shows a play button on the card and opens the video player in the modal.
//
// link / codeLink: null until you have a public URL / repo to share — the UI
// falls back to a "Confidential" badge instead of a dead link.
//
// duration: intentionally left out until you give real per-project dates —
// don't want to guess and have it not hold up if a client asks.
export const PROJECTS = [
  {
    id: "vxs",
    size: "featured",
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
    size: "tall",
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
    media: [],
    link: null,
    codeLink: null,
  },
  {
    id: "calldraft",
    size: "normal",
    title: "CallDraft — AI Voice Agent",
    shortTitle: "CallDraft",
    tagline: "Sub-800ms browser-based AI voice conversations",
    role: "Sole Developer",
    type: "Personal Project",
    icon: Mic,
    description:
      "Browser-based AI voice agent for live, natural speech-to-speech conversation with sub-800ms response latency — entirely in the browser, no app install required. Streams microphone audio to OpenAI's Realtime API over WebRTC with ephemeral token authentication, a live transcript, and a response-latency indicator.",
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
    media: [],
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
        icon: WifiOff,
        title: "Offline-First PWA",
        description: "Works offline, syncs automatically on reconnect",
      },
    ],
    media: [],
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
];
