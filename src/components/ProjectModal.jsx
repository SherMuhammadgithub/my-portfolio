"use client";
import { useEffect, useRef, useState } from "react";
import {
  X,
  Star,
  Lock,
  ExternalLink,
  Github,
  ChevronLeft,
  ChevronRight,
  Play,
  Maximize,
  Briefcase,
  User,
} from "lucide-react";
import { getTechIcon } from "@/lib/techIcons";

export default function ProjectModal({ project, onClose }) {
  const [activeMedia, setActiveMedia] = useState(0);
  const mediaBoxRef = useRef(null);

  useEffect(() => {
    setActiveMedia(0);
  }, [project]);

  useEffect(() => {
    if (!project) return;
    document.body.style.overflow = "hidden";
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  const Icon = project.icon;
  const media = project.media || [];
  const current = media[activeMedia];
  const isFeatured = project.size === "featured";

  const goPrevMedia = () =>
    setActiveMedia((i) => (i === 0 ? media.length - 1 : i - 1));
  const goNextMedia = () =>
    setActiveMedia((i) => (i === media.length - 1 ? 0 : i + 1));

  const toggleFullscreen = () => {
    if (!mediaBoxRef.current) return;
    if (document.fullscreenElement) {
      document.exitFullscreen();
    } else {
      mediaBoxRef.current.requestFullscreen?.();
    }
  };

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8"
      role="dialog"
      aria-modal="true"
      aria-label={project.title}
    >
      <div
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      ></div>

      <div className="relative w-full max-w-6xl max-h-[90vh] overflow-y-auto rounded-2xl border border-white/10 bg-[#0b0710] text-white shadow-2xl">
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/60 border border-white/10 flex items-center justify-center hover:bg-black/80 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-[380px_1fr]">
          {/* Left: details */}
          <div className="p-6 md:p-8 space-y-6 md:border-r border-white/10">
            {isFeatured && (
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold text-[#c4b5fd] bg-[#693dc3]/20 border border-[#8c56fb]/40">
                <Star className="w-3.5 h-3.5 fill-current" />
                Featured Project
              </div>
            )}

            <div className="flex items-center gap-2">
              {Icon && (
                <div className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center">
                  <Icon className="w-5 h-5 text-[#a78bfa]" />
                </div>
              )}
              <span className="text-lg font-semibold">
                {project.shortTitle}
              </span>
            </div>

            <div className="space-y-3">
              <h2 className="text-2xl font-bold leading-snug">
                {project.title}
              </h2>
              <p className="text-sm text-white/70">{project.tagline}</p>
              <div className="flex flex-wrap gap-2">
                {project.categories.map((cat) => (
                  <span
                    key={cat}
                    className="px-3 py-1 rounded-full text-xs font-medium bg-white/5 border border-white/10 text-white/70"
                  >
                    {cat}
                  </span>
                ))}
              </div>
            </div>

            <div className="h-px bg-white/10"></div>

            <div className="space-y-2">
              <h3 className="flex items-center gap-2 text-sm font-semibold text-white">
                <span className="w-1 h-4 rounded-full bg-[#8c56fb]"></span>
                About The Project
              </h3>
              <p className="text-sm text-white/70 leading-relaxed">
                {project.description}
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="flex items-center gap-2 text-sm font-semibold text-white">
                <span className="w-1 h-4 rounded-full bg-[#8c56fb]"></span>
                Technologies Used
              </h3>
              <div className="grid grid-cols-2 gap-2">
                {project.stack.map((tech) => {
                  const TechIcon = getTechIcon(tech);
                  return (
                    <div
                      key={tech}
                      className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/5 border border-white/10"
                    >
                      <TechIcon className="w-4 h-4 text-[#a78bfa] shrink-0" />
                      <span className="text-xs text-white/80 truncate">
                        {tech}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="flex flex-wrap gap-3 pt-1">
              {project.link ? (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white transition-transform hover:scale-105"
                  style={{
                    background:
                      "linear-gradient(135deg, #8c56fb 0%, #693dc3 100%)",
                  }}
                >
                  Visit Live Site
                  <ExternalLink className="w-4 h-4" />
                </a>
              ) : (
                <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium bg-white/5 border border-white/10 text-white/60">
                  <Lock className="w-4 h-4" />
                  Confidential — case study on request
                </div>
              )}
              {project.codeLink && (
                <a
                  href={project.codeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold border border-white/15 hover:bg-white/5 transition-colors"
                >
                  <Github className="w-4 h-4" />
                  View Code
                </a>
              )}
            </div>

            <div className="flex flex-wrap gap-x-8 gap-y-3 pt-4 border-t border-white/10 text-sm">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4 text-white/40" />
                <div>
                  <div className="text-white/40 text-xs">Role</div>
                  <div className="text-white/90">{project.role}</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Briefcase className="w-4 h-4 text-white/40" />
                <div>
                  <div className="text-white/40 text-xs">Client</div>
                  <div className="text-white/90">{project.type}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: media + highlights */}
          <div className="p-6 md:p-8 space-y-6">
            <div
              ref={mediaBoxRef}
              className="relative w-full aspect-video rounded-xl overflow-hidden bg-[#140c1c] border border-white/10 flex items-center justify-center"
            >
              {current?.type === "video" ? (
                <video
                  key={current.src}
                  controls
                  poster={current.poster}
                  className="w-full h-full object-cover"
                >
                  <source src={current.src} />
                </video>
              ) : current?.type === "image" ? (
                <img
                  src={current.src}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div
                  className="w-full h-full flex flex-col items-center justify-center gap-3"
                  style={{
                    background:
                      "linear-gradient(135deg, #2a1554 0%, #0b0710 100%)",
                  }}
                >
                  {Icon && <Icon className="w-16 h-16 text-[#a78bfa]/50" />}
                  <span className="text-sm text-white/40">
                    Screenshots / demo coming soon
                  </span>
                </div>
              )}

              {current?.type === "video" && (
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="w-16 h-16 rounded-full bg-[#8c56fb]/90 flex items-center justify-center">
                    <Play className="w-6 h-6 text-white fill-white ml-0.5" />
                  </div>
                </div>
              )}

              {media.length > 1 && (
                <>
                  <button
                    onClick={goPrevMedia}
                    aria-label="Previous media"
                    className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/60 border border-white/10 flex items-center justify-center hover:bg-black/80"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={goNextMedia}
                    aria-label="Next media"
                    className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/60 border border-white/10 flex items-center justify-center hover:bg-black/80"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </>
              )}

              {media.length > 0 && (
                <div className="absolute bottom-3 right-3 flex items-center gap-2">
                  <span className="px-2.5 py-1 rounded-md text-xs font-medium bg-black/60 border border-white/10">
                    {activeMedia + 1} / {media.length}
                  </span>
                  <button
                    onClick={toggleFullscreen}
                    aria-label="Fullscreen"
                    className="w-8 h-8 rounded-md bg-black/60 border border-white/10 flex items-center justify-center hover:bg-black/80"
                  >
                    <Maximize className="w-3.5 h-3.5" />
                  </button>
                </div>
              )}
            </div>

            {media.length > 1 && (
              <div className="flex gap-2 overflow-x-auto">
                {media.map((item, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveMedia(index)}
                    className={`shrink-0 w-20 h-14 rounded-lg overflow-hidden border-2 transition-colors ${
                      index === activeMedia
                        ? "border-[#8c56fb]"
                        : "border-transparent opacity-60 hover:opacity-100"
                    }`}
                  >
                    <img
                      src={item.poster || item.src}
                      alt=""
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}

            {project.highlights?.length > 0 && (
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-2">
                {project.highlights.map((item, index) => {
                  const HIcon = item.icon;
                  return (
                    <div key={index} className="space-y-1.5">
                      <div className="w-9 h-9 rounded-lg bg-[#693dc3]/15 border border-[#693dc3]/30 flex items-center justify-center">
                        <HIcon className="w-4 h-4 text-[#a78bfa]" />
                      </div>
                      <div className="text-sm font-semibold text-white">
                        {item.title}
                      </div>
                      <div className="text-xs text-white/60 leading-snug">
                        {item.description}
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
