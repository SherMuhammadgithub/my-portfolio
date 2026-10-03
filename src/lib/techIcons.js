import {
  SiAngular,
  SiDeno,
  SiDocker,
  SiExpress,
  SiFastapi,
  SiFfmpeg,
  SiFramer,
  SiJenkins,
  SiJsonwebtokens,
  SiMongodb,
  SiNestjs,
  SiNginx,
  SiNodedotjs,
  SiNextdotjs,
  SiNx,
  SiOpenai,
  SiPostgresql,
  SiPrisma,
  SiPwa,
  SiReact,
  SiSocketdotio,
  SiStripe,
  SiTailwindcss,
  SiTypescript,
  SiWebrtc,
} from "react-icons/si";
import { Layers } from "lucide-react";

const KEYWORD_ICON_MAP = [
  { match: /next/i, icon: SiNextdotjs },
  { match: /angular/i, icon: SiAngular },
  { match: /react/i, icon: SiReact },
  { match: /nest/i, icon: SiNestjs },
  { match: /node/i, icon: SiNodedotjs },
  { match: /express/i, icon: SiExpress },
  { match: /deno/i, icon: SiDeno },
  { match: /postgres/i, icon: SiPostgresql },
  { match: /prisma/i, icon: SiPrisma },
  { match: /socket/i, icon: SiSocketdotio },
  { match: /webrtc/i, icon: SiWebrtc },
  { match: /ffmpeg/i, icon: SiFfmpeg },
  { match: /stripe/i, icon: SiStripe },
  { match: /openai/i, icon: SiOpenai },
  { match: /docker/i, icon: SiDocker },
  { match: /nx/i, icon: SiNx },
  { match: /pwa/i, icon: SiPwa },
  { match: /jwt/i, icon: SiJsonwebtokens },
  { match: /typescript/i, icon: SiTypescript },
  { match: /tailwind/i, icon: SiTailwindcss },
  { match: /framer/i, icon: SiFramer },
  { match: /fastapi/i, icon: SiFastapi },
  { match: /mongo/i, icon: SiMongodb },
  { match: /jenkins/i, icon: SiJenkins },
  { match: /nginx/i, icon: SiNginx },
];

const TECH_COLOR_MAP = [
  { match: /next/i, color: "#ffffff" },
  { match: /angular/i, color: "#dd0031" },
  { match: /react/i, color: "#61dafb" },
  { match: /nest/i, color: "#e0234e" },
  { match: /node/i, color: "#68a063" },
  { match: /express/i, color: "#ffffff" },
  { match: /deno/i, color: "#ffffff" },
  { match: /postgres/i, color: "#4169e1" },
  { match: /prisma/i, color: "#5a67d8" },
  { match: /socket/i, color: "#ffffff" },
  { match: /webrtc/i, color: "#f47c20" },
  { match: /ffmpeg/i, color: "#007808" },
  { match: /stripe/i, color: "#635bff" },
  { match: /openai/i, color: "#ffffff" },
  { match: /docker/i, color: "#2496ed" },
  { match: /nx/i, color: "#143055" },
  { match: /pwa/i, color: "#5a0fc8" },
  { match: /jwt/i, color: "#d63aff" },
  { match: /typescript/i, color: "#3178c6" },
  { match: /tailwind/i, color: "#38bdf8" },
  { match: /framer/i, color: "#ffffff" },
  { match: /fastapi/i, color: "#009688" },
  { match: /mongo/i, color: "#47a248" },
  { match: /jenkins/i, color: "#d24939" },
  { match: /nginx/i, color: "#009639" },
];

export function getTechIcon(name) {
  const found = KEYWORD_ICON_MAP.find((entry) => entry.match.test(name));
  return found ? found.icon : Layers;
}

export function getTechColor(name) {
  const found = TECH_COLOR_MAP.find((entry) => entry.match.test(name));
  return found ? found.color : "#a78bfa";
}
