import {
  Globe,
  Server,
  Database,
  Radio,
  Video,
  CreditCard,
  Sparkles,
  Box,
  FileCode,
  Layers,
} from "lucide-react";

const KEYWORD_ICON_MAP = [
  { match: /next|angular|react/i, icon: Globe },
  { match: /nest|node|express|deno/i, icon: Server },
  { match: /postgres|prisma|mysql|typeorm/i, icon: Database },
  { match: /socket|webrtc/i, icon: Radio },
  { match: /ffmpeg/i, icon: Video },
  { match: /stripe/i, icon: CreditCard },
  { match: /qdrant|openai/i, icon: Sparkles },
  { match: /docker|nx|pwa|jwt/i, icon: Box },
  { match: /typescript/i, icon: FileCode },
];

export function getTechIcon(name) {
  const found = KEYWORD_ICON_MAP.find((entry) => entry.match.test(name));
  return found ? found.icon : Layers;
}
